// components/Card.tsx
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
  const safeImage = image?.trim() || '';

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 border-2 border-transparent group-hover:border-blue-500'>
      <div className='relative w-full h-70 overflow-hidden'>
        <Image
          src={safeImage}
          alt={`Imagen de producto: ${name}`}
          width={300}
          height={300}
          className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
          placeholder='empty'
        />
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors'>
          {name}
        </h2>
        <p className='text-gray-700 font-semibold'>Precio: ${price}</p>
        <p className='text-sm text-gray-600 line-clamp-2 mt-1'>{description}</p>
        <div className='mt-2 flex justify-between text-sm text-gray-500'>
          <span>Stock: {stock}</span>
          <span>Cat. {categoryId}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
