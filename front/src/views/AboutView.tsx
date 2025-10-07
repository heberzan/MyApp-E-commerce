'use client';
import Link from 'next/link';
const AboutView = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Encabezado */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Sobre Nosotros
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            En MyApp E-commerce, nos dedicamos a ofrecerte productos de alta
            calidad, con un servicio al cliente excepcional y una experiencia de
            compra sin igual.
          </p>
        </div>

        {/* Sección de misión */}
        <div className='bg-white rounded-xl shadow-md p-8 mb-12'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Nuestra Misión
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            Brindar soluciones innovadoras que mejoren la vida diaria de
            nuestros clientes, con productos accesibles, seguros y de
            vanguardia.
          </p>
        </div>

        {/* Sección de valores */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-xl shadow-md p-6 text-center'>
            <div className='w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              🎯
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Calidad
            </h3>
            <p className='text-gray-600'>
              Cada producto es seleccionado con cuidado para garantizar tu
              satisfacción.
            </p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-6 text-center'>
            <div className='w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              💡
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Innovación
            </h3>
            <p className='text-gray-600'>
              Estamos siempre en busca de las últimas tendencias y tecnologías.
            </p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-6 text-center'>
            <div className='w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              ❤️
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Compromiso
            </h3>
            <p className='text-gray-600'>
              Tu confianza es nuestra prioridad. Estamos aquí para ayudarte.
            </p>
          </div>
        </div>

        {/* Botón de contacto */}
        <div className='text-center'>
          <Link
            href=''
            className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition'
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
