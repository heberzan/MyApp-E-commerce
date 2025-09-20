// import productsToPreLoad from '@/helpers/productsToPreLoad';
import Card from './Card';
import getAllProducts from '@/services/products.services';

const CardList = async () => {
  // Se hace un fetch de data a la API para obtener los productos
  const allProducts = await getAllProducts();

  return (
    <section className='px-4 py-12 md:px-8 lg:px-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Título principal */}
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12 tracking-tight'>
          Nuestros Productos
        </h1>

        {/* Subtítulo opcional */}
        <p className='text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed'>
          Descubre nuestra selección de productos de alta calidad, diseñados
          para tu comodidad y estilo.
        </p>

        {/* Grid de cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {allProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>

        {/* Botón CTA opcional (si quieres mostrar más) */}
        <div className='mt-16 text-center'>
          <button className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
            Ver todos los productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardList;
