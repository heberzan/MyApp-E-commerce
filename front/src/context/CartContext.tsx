'use client';

import { IProduct } from '@/types';
import { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './Authcontext';

// Definimos la interfaz para el contexto de carrito de compras
interface CartContextProps {
  cartItems: IProduct[];
  addtoCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  isInCart: (productId: number) => void;
  clearCart: () => void;
  getIdItems: () => number[];
  getTotal: () => void;
  getItemCount: () => void;
  loadingCart?: boolean;
}

interface CartProviderProps {
  children: React.ReactElement;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addtoCart: () => {},
  removeFromCart: () => {},
  isInCart: () => {},
  clearCart: () => {},
  getIdItems: () => [],
  getTotal: () => {},
  getItemCount: () => 0,
  loadingCart: false,
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { dataUser } = useAuth(); // Usamos el contexto de autenticación para obtener los datos del usuario y saber si está logueado
  const [cartItems, setCartItems] = useState<IProduct[]>([]); // Estado para almacenar los productos en el carrito

  // Simula la carga de los productos del carrito (ej: desde localStorage o API)
  const [loadingCart, setLoadingCart] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingCart(false);
    }, 50); // 50ms de "carga"
    return () => clearTimeout(timer);
  }, []);

  // Efecto para manejar cambios en el carrito y sincronizarlo con localStorage
  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    } else if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Guardamos los productos del carrito en el localStorage
    }
  }, [cartItems]); // El efecto se ejecuta cada vez que cartItems cambia

  // Efecto para sincronizar el carrito con localStorage al cargar el componente por primera vez
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cartData = localStorage.getItem('cartItems'); // Obtenemos los datos del carrito del localStorage
      if (cartData) {
        setCartItems(JSON.parse(cartData)); // Actualizamos el estado cartItems con los datos del carrito (parseamos el string a un objeto)
      }
    }
  }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez al montar el componente

  // Definamos los Metodos disponibles en el contexto del carrito de compras

  // Método para agregar un producto al carrito
  const addtoCart = (product: IProduct) => {
    // Verificamos si el usuario esta logueado para permitir agregar productos al carrito
    if (!dataUser) {
      alert('Debes iniciar sesión para agregar productos al carrito');
      return; // Si el usuario no está logueado, no hacemos nada y retornamos
    }

    const productExists = cartItems.some((item) => item.id === product.id); // Verificamos si el producto ya está en el carrito
    if (productExists) {
      alert('El producto ya está en el carrito');
      return; // Si el producto ya está en el carrito, no hacemos nada
    }
    setCartItems((prevItems) => [...prevItems, product]); // Agregamos el producto al carrito (Cargamos CartItems con una copia del estado anterior y el nuevo producto)
    alert('Producto agregado al carrito');
  };

  // Método para eliminar un producto del carrito
  const removeFromCart = (productId: number) => {
    if (cartItems.length === 1) {
      clearCart(); // Si solo queda un producto en el carrito, limpiamos todo el carrito
      console.log('Producto eliminado del carrito', productId);
      return;
    }
    setCartItems(
      (prevItems) => prevItems.filter((item) => item.id !== productId) // Eliminamos el producto del carrito (Cargamos CartItems con una copia del estado anterior sin el producto eliminado)
    );
    console.log('Producto eliminado del carrito', productId);
  };

  // Método para obtener la cantidad de productos en el carrito
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Método para verificar la cantidad de productos en el carrito
  const getItemCount = () => {
    return cartItems.length;
  };

  // Metodo para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('cartItems'); // Eliminamos los datos del carrito del localStorage
    }
  };

  // Retornamos el proveedor del contexto con los valores y métodos definidos para que estén disponibles en los componentes hijos como por ejemplo en el NavBar, que es donde se muestra la cantidad de productos en el carrito
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addtoCart,
        removeFromCart,
        getTotal,
        isInCart: () => {},
        clearCart,
        getIdItems: () => cartItems.map((item) => item.id), // Retornamos un array con los IDs de los productos en el carrito (Otra forma de hacerlo)
        getItemCount,
        loadingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook para usar el contexto del carrito de compras y asi evitar importar useContext y CartContext en cada componente que lo necesite
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  return context;
};
