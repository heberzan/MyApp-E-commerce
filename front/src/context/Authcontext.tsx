'use client';

import { userSessionInterface } from '@/types/userSession.interface';
import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';

// Definimos la interfaz para el contexto de autenticación

// Esto es una interface que define los valores que tendrá el contexto de autenticación
export interface AuthContextProps {
  // Esto significa que el contexto de autenticación tendrá estas propiedades
  dataUser: userSessionInterface | null; // TODO crear una interfaz para el usuario loggeado: USER SESSION
  setDataUser: (dataUser: userSessionInterface | null) => void;
  logout: () => void;
}

// Esto SI ES la creación del context y la definición de sus valores iniciales
export const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<userSessionInterface | null>(null);

  // Logica que controle con userEffect si el usuario está logueado o no, y que actualice el estado dataUser en consecuencia

  useEffect(() => {
    // Esto se ejecuta cuando cambia dataUser
    if (dataUser) {
      // Si dataUser tiene un valor (el usuario está logueado)
      localStorage.setItem('userSession', JSON.stringify(dataUser)); // Guardamos los datos del usuario en el localStorage (datos planos, solo texto, el localStorage no almacena estructuras de datos)
    }
  }, [dataUser]); // Y esto se resetea cuando el usuario cierra sesión

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Verificamos que estamos en el navegador y que localStorage está disponible
      const dataUser = localStorage.getItem('userSession'); // Obtenemos los datos del usuario del localStorage
      if (dataUser) {
        // Si hay datos del usuario en el localStorage
        setDataUser(JSON.parse(dataUser)); // Actualizamos el estado dataUser con los datos del usuario y (parseamos el string a un objeto)
      }
    }
  }, []);

  // Métodos disponibles logout que es el faltante.
  const logout = () => {
    setDataUser(null); // Reseteamos el estado dataUser a null (el usuario cierra sesión)
    if (typeof window !== 'undefined' && window.localStorage) {
      // Verificamos que estamos en el navegador y que localStorage está disponible
      localStorage.removeItem('userSession'); // Eliminamos los datos del usuario del localStorage
    }
  };

  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook para usar el contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext); // Retornamos el contexto de autenticación
};

// El AuthProvider es un componente que envuelve a otros componentes y les proporciona acceso al contexto de autenticación
// El AuthProvider se usa en el archivo layout.tsx para envolver toda la aplicación y que todos los componentes tengan acceso al contexto de autenticación
