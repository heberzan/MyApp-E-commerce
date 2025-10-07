'use client';
import { useAuth } from '@/context/Authcontext';
import {
  PUBLIC_NAV_ITEMS,
  USER_NAV_ITEMS,
  PATHROUTES,
} from '@/helpers/NavItems';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const { dataUser, logout, loading } = useAuth();

  // Experiencia de usuario
  const pathname = usePathname(); // Ruta actual
  const isActive = (currentPath: string, route: string) => {
    if (route === '/') return currentPath === '/';
    return currentPath === route || currentPath.startsWith(route + '/');
  };

  // Mientras carga, no renderizo el estado de autenticación
  if (loading) {
    return (
      <nav className='bg-gray-900 text-white p-4 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-lg font-bold'>MyApp E-commerce</div>
          <div className='h-6 w-32 bg-gray-800 rounded-full relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite]'></div>
          </div>
          <div className='h-6 w-24 bg-gray-800 rounded animate-pulse'></div>
        </div>
      </nav>
    );
  }

  // Determina qué items mostrar
  const NavItems = [...(!dataUser?.user ? PUBLIC_NAV_ITEMS : USER_NAV_ITEMS)];

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
        {/* Usuario y cierre de sesión */}
        {dataUser?.user ? (
          <div className='flex items-center space-x-4'>
            <div className='text-right flex items-center space-x-2'>
              <span className='text-sm text-gray-300'>Hola, bienvenid@</span>
              <span className='text-md font-medium'>{dataUser.user.name}</span>
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
            className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 text-gray-300 hover:text-white hover:bg-gray-700`}
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
