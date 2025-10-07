'use client';

import Link from 'next/link';
import { PATHROUTES } from '@/helpers/NavItems';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4'>
      <div className='text-center max-w-md'>
        <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
        <h2 className='text-2xl font-semibold text-gray-700 mb-2'>
          Página no encontrada
        </h2>
        <p className='text-gray-600 mb-6'>
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          href={PATHROUTES.HOME}
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg'
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
