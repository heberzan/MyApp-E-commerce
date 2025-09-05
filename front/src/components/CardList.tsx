import productsToPreLoad from '@/helpers/productsToPreLoad';
import Card from './Card';

const CardList = () => {
  return (
    <>
      <h1>Productos</h1>
      {productsToPreLoad?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </>
  );
};

export default CardList;
