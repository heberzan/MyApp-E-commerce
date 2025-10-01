'use client';

import { useEffect, useState } from 'react';
import { IOrder } from '@/types/orders.interface';
import { getAllOrders } from '@/services/orders.services';
import { useAuth } from '@/context/Authcontext';

const OrdersViews = () => {
  // 1. conectarnos al servicio que nos trae las ordenes
  const { dataUser } = useAuth(); // Usamos el custom hook useAuth para obtener dataUser de manera global
  const [orders, setOrders] = useState<IOrder[]>([]); // Estado para almacenar las ordenes
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar los errores

  useEffect(() => {
    // Efecto para cargar las ordenes al montar el componente
    const fetchOrders = async () => {
      // Se crea la función asincrona para traer las ordenes
      if (!dataUser?.token) {
        // Si no hay token
        setOrders([]); // se limpia el estado
        return; // se sale de la función
      }
      setIsLoading(true); // Se cambia el estado de carga
      setError(null); // Se limpia el estado de error

      try {
        // Se crea el try para manejar el error
        const ordersResponse = await getAllOrders(dataUser?.token); // Se llama al servicio que trae las ordenes
        setOrders(Array.isArray(ordersResponse) ? ordersResponse : []); // Se actualiza el estado con las ordenes y se verifica si es un array
      } catch (err) {
        console.error('Error al obtener las ordenes', err);
        setError('No se pudieron cargar tus órdenes. Intenta nuevamente.');
        setOrders([]); // se limpia el estado
      } finally {
        setIsLoading(false); // Se cambia el estado de carga
      }
    };
    fetchOrders(); // Y se debe llamar a la función
  }, [dataUser?.token]); // Se ejecuta el efecto cada vez que cambia el token

  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Mis Órdenes</h2>

      {/* Estado de error */}
      {error && (
        <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4'>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className='mt-2 text-sm underline hover:no-underline'
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Estado de loading */}
      {isLoading ? (
        <div className='text-center py-8 bg-gray-50 rounded-lg'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2'></div>
          <p className='text-gray-600'>Cargando órdenes...</p>
        </div>
      ) : orders && orders.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-4 py-2'>ID</th>
                <th className='px-4 py-2'>Productos</th>
                <th className='px-4 py-2'>Estado</th>
                <th className='px-4 py-2'>Fecha</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {orders.map((order) => (
                <tr key={order.id} className='hover:bg-gray-50'>
                  <td className='px-4 py-3'>{order.id}</td>
                  <td className='px-4 py-3'>
                    {order.products?.length || 0} productos
                  </td>
                  <td className='px-4 py-3'>
                    <span className='px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs'>
                      {order.status || 'Procesada'}
                    </span>
                  </td>
                  <td className='px-4 py-3'>
                    {new Date(order.date || Date.now()).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div className='text-center py-8 bg-gray-50 rounded-lg'></div>
          <p className='text-gray-600'>No tienes órdenes todavía</p>
        </div>
      )}
    </div>
  );
};
export default OrdersViews;
