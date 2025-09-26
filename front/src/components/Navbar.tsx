'use client';
import { useAuth } from '@/context/Authcontext'; // Importa el custom hook useAuth
import { NavItems, PATHROUTES } from '@/helpers/NavItems'; // Importa el array de objetos NavItems
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook para obtener la ruta actual

const Navbar = () => {
  const { dataUser, logout } = useAuth(); // Usamos el custom hook useAuth para obtener dataUser de manera global

  console.log('dataUser en Navbar:', dataUser); // Verifica si dataUser se está obteniendo correctamente

  const pathname = usePathname(); // Obtiene la ruta actual

  // Función para determinar si una ruta es activa
  const isActive = (currentPath: string, route: string) => {
    if (route === '/') return currentPath === '/';
    return currentPath === route || currentPath.startsWith(route + '/');
  };

  return (
    <nav className='bg-gray-900 text-white p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className={`text-lg font-bold transition ${
            pathname === '/' ? 'text-white' : 'hover:text-gray-300'
          }`}
        >
          MyApp E-commerce
        </Link>

        {/* Lista de enlaces */}
        <ul className='flex space-x-6 md:space-x-8'>
          {NavItems.map((item) => {
            const isActiveLink = isActive(pathname, item.route);

            return (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200
                    ${
                      isActiveLink
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
        {/* Inicio y cierre de sesión */}
        {dataUser?.user ? (
          <div className='flex items-center space-x-4'>
            <div className='text-right'>
              <p className='text-sm text-gray-300'>Bienvenido</p>
              <h3 className='text-md font-medium'>{dataUser.user.name}</h3>
            </div>
            <button
              onClick={() => logout()}
              className='px-2 py-1 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors duration-200'
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <Link
            href={PATHROUTES.LOGIN}
            className='text-gray-300 hover:text-white font-medium transition-colors duration-200'
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// Antes, el código tenía enlaces de navegación codificados directamente en el componente Navbar. Ahora, utilizamos un array de objetos NavItems para generar dinámicamente los enlaces de navegación. Esto mejora la mantenibilidad y escalabilidad del código al centralizar la gestión de las rutas de navegación en un solo lugar.
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
