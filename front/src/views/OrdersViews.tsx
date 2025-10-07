'use client';

import { useEffect, useState } from 'react';
import { IOrder } from '@/types/orders.interface';
import { getAllOrders } from '@/services/orders.services';
import { useAuth } from '@/context/Authcontext';

const OrdersViews = () => {
  const { dataUser } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Efecto para cargar las ordenes al montar el componente
    const fetchOrders = async () => {
      if (!dataUser?.token) {
        setOrders([]);
        return;
      }
      setIsLoading(true);
      setError(null);

      try {
        const ordersResponse = await getAllOrders(dataUser?.token);
        setOrders(Array.isArray(ordersResponse) ? ordersResponse : []); // Verifica si es un array y Actualiza el estado con las ordenes
      } catch (err) {
        console.error('Error al obtener las ordenes', err);
        setError('No se pudieron cargar tus órdenes. Intenta nuevamente.');
        setOrders([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, [dataUser?.token]);

  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Mis Órdenes</h2>

      {/* Estado de error */}
      {error && (
        <div className='bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 shadow-sm'>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className='mt-2 text-sm underline hover:no-underline text-red-600 font-medium'
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Estado de loading */}
      {isLoading ? (
        <div className='flex flex-col items-center justify-center py-12 bg-gray-50 rounded-xl shadow-md'>
          <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600 mb-3'></div>
          <p className='text-gray-600'>Cargando órdenes...</p>
        </div>
      ) : orders && orders.length > 0 ? (
        <div className='bg-white rounded-xl shadow-md overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-4 font-medium text-gray-700 uppercase tracking-wider'>
                    ID
                  </th>
                  <th className='px-6 py-4 font-medium text-gray-700 uppercase tracking-wider'>
                    Productos
                  </th>
                  <th className='px-6 py-4 font-medium text-gray-700 uppercase tracking-wider'>
                    Estado
                  </th>
                  <th className='px-6 py-4 font-medium text-gray-700 uppercase tracking-wider'>
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {orders.map((order) => (
                  <tr // Itera sobre las ordenes y renderiza una fila por cada orden
                    key={order.id}
                    className='hover:bg-blue-50 transition-colors duration-150'
                  >
                    <td className='px-6 py-4 whitespace-nowrap text-gray-900 font-medium'>
                      {order.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>
                      {order.products?.length || 0} producto
                      {order.products?.length !== 1 ? 's' : ''}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                        {order.status || 'Procesada'}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>
                      {formatDate(order.date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className='text-center py-12 bg-gray-50 rounded-xl shadow-md'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mx-auto h-12 w-12 text-gray-400 mb-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
            />
          </svg>
          <p className='text-gray-600 text-lg'>No tienes órdenes todavía</p>
          <p className='text-gray-500 mt-1'>
            Realiza tu primera compra y aparecerá aquí.
          </p>
        </div>
      )}
    </div>
  );
};
export default OrdersViews;
