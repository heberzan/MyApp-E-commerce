'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IProduct } from '@/types/product.interface';
import { getProductById } from '@/services/products.services';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/Authcontext';
import Swal from 'sweetalert2';

const ProductDetail = () => {
  const params = useParams();
  const { addtoCart } = useCart();
  const [productData, setProductData] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { dataUser } = useAuth();

  // Extraer productId desde la URL
  const productId = params.productId as string;

  useEffect(() => {
    // Efecto para cargar el producto al montar el componente o cambiar productId
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!productId) {
          throw new Error('ID del producto no proporcionado');
        }

        const productData = await getProductById(productId);
        setProductData(productData);
      } catch (err) {
        console.error('Error al cargar el producto:', err);
        setError(
          'No se pudo cargar el detalle del producto. Por favor, inténtalo de nuevo.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Mostrar carga
  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <p className='text-lg text-gray-600'>
          Cargando detalle del producto...
        </p>
      </div>
    );
  }

  // Mostrar error
  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center p-8 bg-red-50 border border-red-200 rounded-lg'>
          <h2 className='text-xl font-bold text-red-700 mb-2'>Error</h2>
          <p className='text-red-600'>{error}</p>
        </div>
      </div>
    );
  }

  // Si no hay producto, mostrar mensaje
  if (!productData) {
    Swal.fire({
      icon: 'info',
      title: 'Producto no encontrado',
      text: 'El producto que buscas no existe.',
      confirmButtonText: 'Aceptar',
      timer: 6000,
      timerProgressBar: true,
    }).then(() => {
      window.location.href = '/';
    });
    return null;
  }

  // Función para manejar el clic en "Agregar al carrito"
  const handleAddToCart = () => {
    if (!dataUser) {
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Debes iniciar sesión para agregar productos al carrito',
        showDenyButton: true,
        denyButtonText: 'Registrarse',
        confirmButtonText: 'Iniciar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/login';
        } else if (result.isDenied) {
          window.location.href = '/register';
        }
      });
      return;
    }
    if (productData) {
      addtoCart(productData);
    }
  };

  // Detalle del producto
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      {/* Encabezado */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800'>{productData.name}</h1>
        <p className='mt-4 text-lg text-gray-600'>Detalles del producto</p>
      </div>

      {/* Contenido principal */}
      <div className='grid md:grid-cols-2 gap-12 items-start'>
        {/* Imagen */}
        <div className='flex justify-center'>
          <Image
            src={productData.image}
            alt={productData.name}
            width={400}
            height={400}
            className='rounded-xl shadow-lg object-cover max-w-full h-auto'
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                '/images/default-product.jpg';
            }}
          />
        </div>

        {/* Información */}
        <div className='space-y-6'>
          {/* Descripción */}
          <div>
            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
              Descripción
            </h2>
            <p className='text-gray-700 leading-relaxed'>
              {productData.description}
            </p>
          </div>

          {/* Precio */}
          <div>
            <h3 className='text-xl font-medium text-gray-800 mb-2'>Precio</h3>
            <p className='text-3xl font-bold text-blue-600'>
              ${productData.price.toFixed(2)}
            </p>
          </div>

          {/* Stock */}
          <div>
            <h3 className='text-xl font-medium text-gray-800 mb-2'>
              Disponibilidad
            </h3>
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                productData.stock > 0
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {productData.stock > 0
                ? `${productData.stock} unidades disponibles`
                : 'Agotado'}
            </span>
          </div>

          {/* ID del Producto */}
          <div>
            <h3 className='text-xl font-medium text-gray-800 mb-2'>
              ID del Producto
            </h3>
            <code className='bg-gray-100 px-4 py-2 rounded text-sm text-gray-700'>
              {productData.id}
            </code>
          </div>

          {/* Categoría */}
          <div>
            <h3 className='text-xl font-medium text-gray-800 mb-2'>
              Categoría
            </h3>
            <span className='inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm'>
              ID: {productData.categoryId}
            </span>
            <p className='text-sm text-gray-500 mt-1'>
              *(Para ver el nombre de la categoría, conecta con tu API de
              categorías)*
            </p>
          </div>

          {/* Botón CTA */}
          <button
            onClick={handleAddToCart}
            disabled={productData.stock === 0}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-md ${
              productData.stock > 0
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {productData.stock > 0 ? 'Agregar al carrito' : 'Agotado'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
