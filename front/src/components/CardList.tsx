import productsToPreLoad from '@/helpers/productsToPreLoad';
import Card from './Card';
import React from 'react';

const CardList = () => {
  return (
    <div>
      {productsToPreLoad &&
        productsToPreLoad?.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
    </div>
  );
};

export default CardList;
