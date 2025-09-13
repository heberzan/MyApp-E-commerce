// El enum se utiliza para definir constantes nombradas que representan las rutas de navegación en la aplicación.

enum PATHROUTES {
  HOME = '/',
  PRODUCTS = '/products',
  ABOUT = '/about',
  CONTACT = '/contact',
  CART = '/cart',
  DASHBOARD = '/dashboard',
}

export const NavItems = [
  { name: 'Home', route: PATHROUTES.HOME },
  { name: 'Products', route: PATHROUTES.PRODUCTS },
  { name: 'About', route: PATHROUTES.ABOUT },
  { name: 'Contact', route: PATHROUTES.CONTACT },
  { name: 'Cart', route: PATHROUTES.CART },
  { name: 'Dashboard', route: PATHROUTES.DASHBOARD },
];
// Cada objeto en el array NavItems contiene un nombre y una ruta correspondiente, facilitando la gestión de la navegación en la interfaz de usuario.
