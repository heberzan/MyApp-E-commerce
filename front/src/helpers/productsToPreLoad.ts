import { IProduct } from '@/types/product.interface';

const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: 'iPhone 16 Pro',
    price: 800,
    description:
      'Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!',
    image:
      'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg',
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: 'MacBook Air',
    price: 999,
    description:
      'Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.',
    image:
      'https://wallpapers.com/images/high/black-macbook-1200-x-800-32aunj6i8jioq0un.webp',
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: 'iPad Pro',
    price: 799,
    description:
      'Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.',
    image:
      'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/04/ipad-pro-2021-2317515.jpg?tf=1200x',
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: 'Apple Watch Series 6',
    price: 399,
    description:
      'Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.',
    image:
      'https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg',
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: 'AirPods Pro',
    price: 249,
    description:
      'Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.',
    image:
      'https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2019/11/AirPods-Pro-cancelacion-de-ruido-1024x576.jpg',
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: 'HomePod mini',
    price: 99,
    description:
      'Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.',
    image:
      'https://media.istockphoto.com/id/1305312556/es/foto/apple-homepod-mini-sobre-un-fondo-oscuro.jpg?s=1024x1024&w=is&k=20&c=Hje5OreE0oOYhyphXiuudV-xrnp4zfJWR3vyZVhhzB8=',
    categoryId: 6,
    stock: 10,
  },
];

export default productsToPreLoad;
