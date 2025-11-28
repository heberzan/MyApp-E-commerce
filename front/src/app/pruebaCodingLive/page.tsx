'use client';
import { useAuth } from '@/context/Authcontext';

const Prueba = () => {
  const { dataUser } = useAuth();

  return <div>{dataUser?.user.name}</div>;
};
export default Prueba;
