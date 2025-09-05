import React from 'react';

const Detail = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  //console.log(params);
  const productID = (await params).productId;
  return (
    <div>
      {/* Aquii se renderiza el componente que se va a mostrar*/}
      <h1>Product Detail Page</h1>
      <p>This is the detail page for a specific product - ID: {productID}.</p>
    </div>
  );
};

export default Detail;
