import { IProduct } from '@/types/product.interface';
import Image from 'next/image';

const Card: React.FC<IProduct> = ({
  name,
  price,
  description,
  image,
  stock,
  categoryId,
}) => {
  // Elimina espacios en blanco al final de la URL
  const safeImage = image?.trim() || '';

  return (
    <div>
      <div className='relative w-72 h-72 overflow-hidden'>
        <Image
          src={safeImage}
          alt={`Imagen de producto: ${name}`}
          width={300}
          height={300}
          priority // Para pre-cargar la imagen, es decir, cargando de forma prioritaria
          className='object-cover'
          placeholder='empty' // Opcional: si quieres un placeholder
        />
      </div>
      <div className='mt-3'>
        <h2 className='text-xl font-bold'>{name}</h2>
        <p className='text-gray-700'>Precio: ${price}</p>
        <p className='text-sm text-gray-600'>{description}</p>
        <p className='text-sm'>Cantidad: {stock}</p>
        <p className='text-sm'>Categoría: {categoryId}</p>
      </div>
    </div>
  );
};

export default Card;
