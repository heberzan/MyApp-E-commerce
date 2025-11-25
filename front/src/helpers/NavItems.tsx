// El enum se utiliza para definir constantes nombradas que representan las rutas de navegación en la aplicación.

export enum PATHROUTES {
  HOME = '/',
  DASHBOARD = '/dashboard',
  CART = '/cart',
  LOGIN = '/login',
  LOGOUT = '/logout',
  REGISTER = '/register',
  ABOUT = '/about',
  saludos = 'saludos',
}

export const PUBLIC_NAV_ITEMS = [
  { name: 'Productos', route: PATHROUTES.HOME },
  { name: 'Crear Cuenta', route: PATHROUTES.REGISTER },
  { name: 'Acerca de', route: PATHROUTES.ABOUT },
];

export const USER_NAV_ITEMS = [
  { name: 'Productos', route: PATHROUTES.HOME },
  { name: 'Mi Cuenta', route: PATHROUTES.DASHBOARD },
  { name: 'Mi Carrito', route: PATHROUTES.CART },
  { name: 'saludos', route: PATHROUTES.saludos },
];
