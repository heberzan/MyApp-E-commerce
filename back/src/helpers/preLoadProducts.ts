import { AppDataSource } from '../config/dataSource';
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/product.repository';

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export const productsToPreLoad: IProduct[] = [
  {
    name: 'iPhone 16 Pro',
    price: 699,
    description:
      'Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!',
    image: 'https://mac-center.com/cdn/shop/files/194252097236-7.jpg',
    categoryId: 1,
    stock: 10,
  },
  {
    name: 'MacBook Air',
    price: 999,
    description:
      'Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.',
    image: 'https://co.tiendasishop.com/cdn/shop/files/mgn63la-a_1.jpg',
    categoryId: 2,
    stock: 10,
  },
  {
    name: 'iPad Pro',
    price: 799,
    description:
      'Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.',
    image:
      'https://m.media-amazon.com/images/I/81gC7frRJyL._UF1000,1000_QL80_.jpg',
    categoryId: 3,
    stock: 10,
  },
  {
    name: 'Apple Watch Series 6',
    price: 399,
    description:
      'Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.',
    image:
      'https://m.media-amazon.com/images/I/81EBU-M8c0L._UF894,1000_QL80_.jpg',
    categoryId: 4,
    stock: 10,
  },
  {
    name: 'AirPods Pro',
    price: 249,
    description:
      'Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.',
    image:
      'https://mac-center.com/cdn/shop/files/AirPods_Pro_en_su_estuche_con_MagSafe.jpg',
    categoryId: 5,
    stock: 10,
  },
  {
    name: 'HomePod mini',
    price: 99,
    description:
      'Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_2X_983176-MLA95843433567_102025-F.webp',
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log('Products preloaded');
};
