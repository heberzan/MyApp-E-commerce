import { IProduct } from './product.interface'; // Adjust the path as needed

export interface IOrder {
  id: number;
  status: string;
  date: string;
  products: IProduct[];
}
