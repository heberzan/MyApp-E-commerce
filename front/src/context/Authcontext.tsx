'use client';

import { userSessionInterface } from '@/types/userSession.interface';
import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { useCart } from './CartContext';

export interface AuthContextProps {
  dataUser: userSessionInterface | null;
  loading: boolean;
  setDataUser: (dataUser: userSessionInterface | null) => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: React.ReactElement;
}
// Creación y definición de valores iniciales del contexto
export const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
  loading: false,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<userSessionInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const { clearCart } = useCart();

  // Usuario logueado?, y guardamos
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem('userSession', JSON.stringify(dataUser));
    }
  }, [dataUser]);

  // Cargamos los datos del usuario
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const dataUser = localStorage.getItem('userSession');
      if (dataUser) {
        setDataUser(JSON.parse(dataUser));
      }
      setLoading(false);
    }
  }, []);

  const logout = () => {
    setDataUser(null);
    clearCart();
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('userSession');
    }
  };

  return (
    // Enviamos el contexto
    <AuthContext.Provider value={{ dataUser, loading, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exportamos el custom hook para usar el contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
