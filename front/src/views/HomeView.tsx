'use client';
import CardList from '@/components/CardList';
import Link from 'next/link';
import { useAuth } from '@/context/Authcontext';

const HomeView = () => {
  const { dataUser } = useAuth();

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-50 to-indigo-50 py-3 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Bienvenid@s a MyApp E-commerce
          </h1>
          <p className='text-lg text-gray-700 mb-8 max-w-2xl mx-auto'>
            Descubre productos de alta calidad, diseñados para tu comodidad,
            estilo y necesidades diarias.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section>
        <CardList />
      </section>

      {/* Call to Action (solo si no está logueado) */}
      {!dataUser?.user && (
        <section className='bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>¿Listo para empezar?</h2>
            <p className='text-xl text-gray-300 mb-8'>
              Únete a miles de clientes satisfechos y descubre por qué elegimos
              calidad, servicio y precios justos.
            </p>
            <Link
              href='/register'
              className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-block'
            >
              Crea tu cuenta ahora!
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomeView;
