import React from 'react';

const CartView = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Cart</h1>
      <p className='text-gray-600'>Your cart is currently empty.</p>
    </div>
  );
};

export default CartView;
