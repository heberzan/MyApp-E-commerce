const apiURL = process.env.NEXT_PUBLIC_API_URL;

import { IProduct } from '../types/product.interface';
const getAllProducts = async () => {
  try {
    const response = await fetch(`${apiURL}/products`, {
      method: 'GET',
    });
    const products: IProduct[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default getAllProducts;

export const getProductById = async (idByParams: string) => {
  try {
    const AllProducts = await getAllProducts();
    const product = AllProducts.find(
      (product) => product.id.toString() === idByParams
    );
    if (!product) {
      throw new Error('No se encontró el producto' + idByParams);
    }
    return product;
  } catch (error) {
    console.error(`Error fetching product by ID: ${idByParams}`, error);
    return null;
  }
};
