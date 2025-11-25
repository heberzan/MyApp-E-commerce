// Ejercicio de rutas protegidas => Saludos/page.tsx - Es una página protegida que solo pueden ver los usuarios autenticados -
'use client';
import React from 'react';
import { useAuth } from '@/context/Authcontext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Saludo() {
  const { dataUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!dataUser?.user) {
      //   alert('No tienes acceso a esta página');
      Swal.fire({
        title: 'Acceso denegado',
        text: 'No tienes acceso a esta página',
        icon: 'warning',
        confirmButtonText: 'Iniciar sesión',
        timer: 6000,
        timerProgressBar: true,
        denyButtonText: 'Registrarse',
        cancelButtonText: 'Cancelar',
      }).then(() => {
        router.push('/login');
      });
    }
  }, [dataUser?.user, router]);

  if (!dataUser) {
    return <div>Cargando...</div>;
  }

  if (!dataUser.user) {
    return null;
  }

  return <h1>Hola, bienvenido </h1>;
}
