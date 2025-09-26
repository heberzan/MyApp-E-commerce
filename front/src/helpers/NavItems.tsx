// El enum se utiliza para definir constantes nombradas que representan las rutas de navegación en la aplicación.

export enum PATHROUTES {
  HOME = '/',
  DASHBOARD = '/dashboard',
  CART = '/cart',
  LOGIN = '/login',
  REGISTER = '/register',
  CHECKOUT = '/checkout',
  ABOUT = '/about',
}

export const NavItems = [
  { name: 'Home', route: PATHROUTES.HOME },
  { name: 'Dashboard', route: PATHROUTES.DASHBOARD },
  { name: 'Cart', route: PATHROUTES.CART },
  { name: 'About', route: PATHROUTES.ABOUT },
  { name: 'Login', route: PATHROUTES.LOGIN },
  { name: 'Register', route: PATHROUTES.REGISTER },
  { name: 'Checkout', route: PATHROUTES.CHECKOUT },
];
// Cada objeto en el array NavItems contiene un nombre y una ruta correspondiente, facilitando la gestión de la navegación en la interfaz de usuario.
