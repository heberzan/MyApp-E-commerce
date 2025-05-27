import { IProduct } from '@/types';
import React from 'react';

const Card: React.FC<IProduct> = ({
  name,
  price,
  //   description,
  image,
  stock,
  categoryId,
}) => {
  return (
    <div>
      <img
        src={image}
        alt={`Imagen de producto: ${name}`}
        height={300}
        width={300}
      />
      <div>
        <h2>{name}</h2>
        <p>Precio {price}</p>
        {/* <p>{description}</p> */}
        <p>Cantidad {stock}</p>
        <p>Categoria {categoryId}</p>
      </div>
    </div>
  );
};
export default Card;
