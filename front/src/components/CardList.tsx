'use client';

import Card from './Card';
import getAllProducts from '@/services/products.services';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IProduct } from '@/types/product.interface';

const CardList = () => {
  // Obtener todos los productos
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('No se pudieron cargar los productos.');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className='text-center py-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2'></div>
        <p className='text-gray-600'>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return <div className='text-center py-8 text-red-600'>{error}</div>;
  }

  return (
    <section className='px-4 py-12 md:px-8 lg:px-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Título principal */}
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12 tracking-tight'>
          Nuestros Productos
        </h1>
        {/* Subtítulo */}
        <p className='text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed'>
          ¡Encuentra lo que necesitas en un solo lugar!
          <br />
          <br />
          Para obtener informaci&oacute;n detallada, seleccione el producto de
          su inter&eacute;s.
        </p>

        {/* Grid de cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className='group'
            >
              <Card {...product} />
            </Link>
          ))}
        </div>
        {/* Botón opcional (si quieres mostrar más) */}
        <div className='mt-16 text-center'>
          <button className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
            ¡Proximamente nuevos productos!.
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardList;
