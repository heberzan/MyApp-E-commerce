'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { PATHROUTES } from '@/helpers/NavItems';
import Image from 'next/image';
import { useAuth } from '@/context/Authcontext';
import { createOrder } from '@/services/orders.services';
import Swal from 'sweetalert2';

const CartView = () => {
  const {
    cartItems,
    // addtoCart,
    // isInCart,
    removeFromCart,
    clearCart,
    // getTotal,
    getItemCount,
    getIdItems,
    loadingCart,
  } = useCart();

  const { dataUser } = useAuth();

  const handleCheckout = async () => {
    // Validaciones
    if (!dataUser?.user?.id) {
      // alert('Debes iniciar sesión para continuar');
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Debes iniciar sesión para continuar',
        confirmButtonText: 'Continuar',
        timer: 6000,
        timerProgressBar: true,
      });

      return;
    }

    if (cartItems.length === 0) {
      // alert('Tu carrito está vacío');
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

    // Lógica para proceder al pago
    try {
      await createOrder(getIdItems(), dataUser?.token);
      console.log('Orden creada', getIdItems());
      console.log('Datos del usuario', dataUser);
      clearCart();
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu compra!',
      text: 'Tu orden ha sido creada exitosamente.',
      confirmButtonText: 'Continuar',
      timer: 6000,
      timerProgressBar: true,
    });
    // alert('Procediendo al pago...');
  };

  // Función para truncar texto largo de la descripción
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Obtener la cantidad de productos en el carrito
  const itemCount =
    typeof getItemCount === 'function' && getItemCount() !== undefined
      ? (getItemCount() as unknown as number)
      : 0;

  // Calcular el precio total del carrito
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0),
    0
  );

  // Mostrar carga si el carrito está en proceso de carga

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      {/* Título y contador */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>Carrito de Compras</h1>
        <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full'>
          {itemCount} artículo{itemCount !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Tabla de productos */}
      <div className='border border-gray-200 rounded-md overflow-hidden'>
        {/* Encabezado de tabla */}
        <div className='bg-gray-50 px-4 py-3 grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600'>
          <div className='col-span-7'>Producto</div>
          <div className='col-span-3 text-right'>Precio</div>
          <div className='col-span-2 text-center'>Acciones</div>
        </div>

        {/* Cuerpo de la tabla */}
        {loadingCart ? (
          <div className='flex justify-center items-center h-64'>
            <p className='text-gray-600'>Cargando productos del carrito...</p>
          </div>
        ) : cartItems.length === 0 ? (
          <div className='p-8 text-center text-gray-500'>
            Tu carrito está vacío.{' '}
            <Link
              href={PATHROUTES.HOME}
              className='text-blue-600 hover:underline'
            >
              Ver productos
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className='px-4 py-3 grid grid-cols-12 gap-4 items-start border-t border-gray-200'
            >
              {/* Columna: Producto */}
              <div className='col-span-7 flex items-start space-x-3'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48} // ← Ancho en píxeles
                  height={48} // ← Alto en píxeles
                  className='w-12 h-12 object-cover rounded'
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      '/images/placeholder.png';
                  }}
                />
                <div>
                  <h3 className='font-medium text-gray-900'>{item.name}</h3>
                  <p className='text-xs text-gray-500 mt-1'>
                    {truncateText(item.description, 120)}
                  </p>
                </div>
              </div>

              {/* Columna: Precio */}
              <div className='col-span-3 text-right font-medium text-gray-900'>
                ${item.price}
              </div>

              {/* Columna: Acciones */}
              <div className='col-span-2 flex justify-center'>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='text-red-600 hover:text-red-800 text-xl'
                  aria-label='Eliminar producto'
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pie de carrito */}
      <div className='mt-6 flex justify-between items-center p-4 bg-gray-50 rounded-md'>
        <div>
          <p className='text-lg font-bold text-gray-800'>Total del Carrito:</p>
          <p className='text-2xl font-bold text-blue-600 drop-shadow-sm'>
            {totalPrice}
          </p>
        </div>
        <div className='flex space-x-3'>
          <button
            onClick={clearCart}
            className='px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-md transition'
          >
            Vaciar Carrito
          </button>
          <button
            // disabled={cartItems.length === 0}
            onClick={handleCheckout}
            className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition'
          >
            {!dataUser ? 'Inicia sesión para pagar' : 'Proceder al pago'}
            {/* Proceder al pago */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
