'use client';

import { useAuth } from '@/context/Authcontext';

const ProfileView = () => {
  const { dataUser } = useAuth(); // Usamos el custom hook useAuth para obtener dataUser de manera global

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Dashboard............</h1>
      <p className='text-lg'>Welcome to your Profile!</p>
      <p className='text-lg'>
        Here you can manage your account settings and view your activity.
      </p>
      <p className='text-lg'>Nombre: {dataUser?.user.name}</p>
      <p className='text-lg'>Email: {dataUser?.user.email}</p>
      <p className='text-lg'>Role: {dataUser?.user.role}</p>
      <p className='text-lg'>Phone: {dataUser?.user.phone}</p>
      <p className='text-lg'>Address: {dataUser?.user.address}</p>
    </div>
  );
};
export default ProfileView;
