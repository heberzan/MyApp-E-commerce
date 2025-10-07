// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 border-t border-gray-800'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Columna 1: Logo / Nombre */}
          <div>
            <h3 className='text-xl font-bold mb-4'>MyApp E-commerce</h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Tu tienda online de confianza, con productos de calidad y atención
              personalizada.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className='font-semibold mb-4'>Enlaces Rápidos</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/'
                  className='text-gray-400 hover:text-white transition'
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href='/register'
                  className='text-gray-400 hover:text-white transition'
                >
                  Crear Cuenta
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition'
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div>
            <h4 className='font-semibold mb-4'>Soporte</h4>
            <ul className='space-y-2 text-sm  text-gray-400'>
              <li>
                <Link
                  href=''
                  className='text-gray-400 hover:text-white transition'
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href=''
                  className='text-gray-400 hover:text-white transition'
                >
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link
                  href=''
                  className='text-gray-400 hover:text-white transition'
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className='font-semibold mb-4'>Contáctanos</h4>
            <div className='text-sm space-y-2 text-gray-400'>
              <p>📧 email@myapp.com</p>
              <p>📞 +57 300 123 4567</p>
              <p>📍 Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800 mt-8 pt-6 text-center'>
          <p className='text-xs text-gray-500'>
            © {new Date().getFullYear()} MyApp E-commerce. Todos los derechos
            reservados.
          </p>

          <p className='text-xs text-gray-500 mt-2'>
            Construido con ❤️ usando React y Tailwind CSS
          </p>
          <p className='text-xs text-gray-500 mt-2'>
            Diseñado por @heberzan - Alumno Henry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
