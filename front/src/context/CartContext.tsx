'use client';

import { IProduct } from '@/types/product.interface';
import { createContext, useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';

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
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [loadingCart, setLoadingCart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingCart(false);
    }, 50); // 50ms de "carga"
    return () => clearTimeout(timer);
  }, []);

  // Cambios en el carrito y sincronizarlo con localStorage
  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    } else if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Guardamos los productos del carrito en el localStorage
    }
  }, [cartItems]);

  // Efecto para sincronizar el carrito con localStorage al cargar el componente por primera vez
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cartData = localStorage.getItem('cartItems'); // Obtenemos los datos del carrito del localStorage
      if (cartData) {
        setCartItems(JSON.parse(cartData));
      }
    }
  }, []);

  const addtoCart = (product: IProduct) => {
    const productExists = cartItems.some((item) => item.id === product.id);
    if (productExists) {
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'El producto ya está en el carrito',
        confirmButtonText: 'Continuar',
        timer: 6000,
        timerProgressBar: true,
      });
      // alert('El producto ya está en el carrito');
      return;
    }
    setCartItems((prevItems) => [...prevItems, product]);
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: 'El producto ha sido agregado al carrito correctamente.',
      confirmButtonText: 'Continuar',
      timer: 6000,
      timerProgressBar: true,
    }).then(() => {
      window.location.href = '/cart';
    });
    // alert('Producto agregado al carrito');
  };

  const removeFromCart = (productId: number) => {
    if (cartItems.length === 1) {
      clearCart();
      Swal.fire({
        icon: 'info',
        title: 'Carrito vacío',
        text: 'Tu carrito está vacío. Agrega productos para continuar.',
        confirmButtonText: 'Continuar',
        timer: 6000,
        timerProgressBar: true,
      });
      return;
    }
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      text: 'El producto ha sido eliminado del carrito correctamente.',
      confirmButtonText: 'Continuar',
      timer: 6000,
      timerProgressBar: true,
    }).then(() => {
      window.location.href = '/cart';
    });
  };

  const isInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = () => {
    return cartItems.length;
  };

  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('cartItems');
    }
    Swal.fire({
      icon: 'info',
      title: 'Carrito vacío',
      text: 'Tu carrito está vacío. Agrega productos para continuar.',
      confirmButtonText: 'Continuar',
      timer: 6000,
      timerProgressBar: true,
    });
  };

  // Proveedor de metodos del contexto
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addtoCart,
        removeFromCart,
        getTotal,
        isInCart,
        clearCart,
        getIdItems: () => cartItems.map((item) => item.id),
        getItemCount,
        loadingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  return context;
};
