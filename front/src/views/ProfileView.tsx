// views/ProfileView.tsx
'use client';

import { useAuth } from '@/context/Authcontext';

const ProfileView = () => {
  const { dataUser } = useAuth();

  // Si no hay usuario, muestra mensaje
  if (!dataUser?.user) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
        <div className='bg-white rounded-xl shadow-md p-8 text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-16 w-16 mx-auto text-gray-400 mb-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 017 7h-14a7 7 0 017-7z'
            />
          </svg>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            No estás autenticado
          </h2>
          <p className='text-gray-600 mb-6'>
            Por favor, inicia sesión para ver tu perfil.
          </p>
          <a
            href='/login'
            className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition'
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    );
  }

  const user = dataUser.user;

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Encabezado */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Mi Perfil
          </h1>
          <p className='text-gray-600 mt-2'>
            Gestiona tu información personal y preferencias.
          </p>
        </div>

        {/* Tarjeta de perfil */}
        <div className='bg-white rounded-xl shadow-md overflow-hidden mb-8'>
          <div className='p-6'>
            <div className='flex items-center space-x-6'>
              <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-gray-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 017 7h-14a7 7 0 017-7z'
                  />
                </svg>
              </div>
              <div>
                <h2 className='text-xl font-bold text-gray-900'>{user.name}</h2>
                <p className='text-gray-600'>{user.email}</p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.role === 'admin'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {user.role === 'admin' ? 'Administrador' : 'Usuario'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Información detallada */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Contacto */}
          <div className='bg-white rounded-xl shadow-md p-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              Contacto
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-500 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14v-3M5 19v-3M5 19V5m14 14v-3M5 5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z'
                  />
                </svg>
                <span className='text-gray-700'>{user.email}</span>
              </div>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-500 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.707.293l2.414 2.414A1 1 0 0111.414 10h2M17 21l-2-2M17 21l-2-2M17 21l-2-2M17 21l-2-2'
                  />
                </svg>
                <span className='text-gray-700'>
                  {user.phone || 'No disponible'}
                </span>
              </div>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-500 mr-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='text-gray-700'>
                  {user.address || 'No disponible'}
                </span>
              </div>
            </div>
          </div>

          {/* Actividad / Estadísticas (opcional) */}
          <div className='bg-white rounded-xl shadow-md p-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              Actividad Reciente
            </h3>
            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span className='text-gray-700'>Órdenes realizadas</span>
                <span className='font-medium text-gray-900'>3</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-700'>Productos en carrito</span>
                <span className='font-medium text-gray-900'>2</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-700'>Última compra</span>
                <span className='font-medium text-gray-900'>22/05/2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de edición (opcional) */}
        <div className='mt-8 text-center'>
          <button className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition'>
            Editar perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
