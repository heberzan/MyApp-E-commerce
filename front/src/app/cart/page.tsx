'use client';
import CartView from '@/views/CartView';
import React from 'react';
import { useAuth } from '@/context/Authcontext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
const Cart = () => {
  const { dataUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !dataUser?.user) {
      Swal.fire({
        title: 'Acceso denegado',
        text: 'Debes iniciar sesión para ver esta página.',
        icon: 'warning',
        showConfirmButton: true,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Iniciar sesión',
        denyButtonText: 'Registrarse',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/login');
        } else if (result.isDenied) {
          router.push('/register');
        }
      });
    }
  }, [dataUser, loading, router]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!dataUser?.user) {
    return null;
  }

  return (
    <div>
      <CartView />
    </div>
  );
};
export default Cart;
