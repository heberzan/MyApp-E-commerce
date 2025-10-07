'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Función para determinar si una ruta es activa
  const isActive = (route: string) => {
    return pathname === route || pathname.startsWith(route + '/');
  };

  return (
    <div className='flex h-screen bg-gray-50'>
      {/* Sidebar / Navbar lateral */}
      <aside className='w-64 bg-gray-800 text-white p-6'>
        <div className='mb-8'>
          <h2 className='text-xl font-bold'>Panel de Administración</h2>
        </div>
        <nav className='space-y-2'>
          <Link
            href='/dashboard'
            className={`block px-4 py-2 rounded-md transition ${
              isActive('/dashboard')
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            🏠 Mi Perfil
          </Link>
          <Link
            href='/dashboard/orders'
            className={`block px-4 py-2 rounded-md transition ${
              isActive('/dashboard/orders')
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            📦 Mis Órdenes
          </Link>

          <Link
            href=''
            className={`block px-4 py-2 rounded-md transition ${
              isActive('/dashboard/settings')
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            ⚙️ Configuración
          </Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className='flex-1 overflow-y-auto p-6'>
        <header className='mb-6'>
          <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
          <p className='text-gray-600 mt-1'>
            Bienvenido al panel de administración.
          </p>
        </header>

        {/* Renderiza el contenido de la página actual */}
        {children}
      </main>
    </div>
  );
}
