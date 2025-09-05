'use client';
import { NavItems } from '@/helpers/NavItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Detecta la ruta actual

  return (
    <nav className='bg-gray-800 text-white p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-lg font-bold hover:text-gray-300 transition'
        >
          MyApp E-commerce
        </Link>

        {/* Lista de enlaces de navegación */}
        <ul className='flex space-x-6 md:space-x-8'>
          {NavItems.map((item) => {
            const isActive = pathname === item.route; // Verifica si la ruta actual coincide con la ruta del enlace

            return (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200
                    ${
                      isActive
                        ? 'text-white bg-gray-700'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// Antes, el código tenía enlaces de navegación codificados directamente en el componente Navbar. Ahora, utiliza un array de objetos NavItems para generar dinámicamente los enlaces de navegación. Esto mejora la mantenibilidad y escalabilidad del código al centralizar la gestión de las rutas de navegación en un solo lugar.
{
  /* <Link href={NavItems.HOME} className='text-gray-300 hover:text-white'>
            Home
          </Link>
          <Link
            href={NavItems.ABOUT}
            className='text-gray-300 hover:text-white'
          >
            About
          </Link>
          <a href={NavItems.CONTACT} className='text-gray-300 hover:text-white'>
            Contact
          </a>
          <Link href={NavItems.CART} className='text-gray-300 hover:text-white'>
            Cart
          </Link>
          <Link
            href={NavItems.DASHBOARD}
            className='text-gray-300 hover:text-white'
          >
            Dashboard
          </Link> */
}
