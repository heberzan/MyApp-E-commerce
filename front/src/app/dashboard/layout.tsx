import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <Link href='/dashboard'>Dashboard</Link>
      </nav>
      <Link href='/dashboard/orders'>Orders</Link>
      {children}
    </section>
  ); // children sería ruta de las páginas de dashboard.
}
