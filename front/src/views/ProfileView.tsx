const ProfileView = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Dashboard</h1>
      <p className='text-lg'>Welcome to your Profile!</p>
      <p className='text-lg'>
        Here you can manage your account settings and view your activity.
      </p>
      <p className='text-lg'>Nombre: Heber Marzán.</p>
      <p className='text-lg'>Email: heberzan@gmail.com</p>
      <p className='text-lg'>Phone: 123-456-7890</p>
      <p className='text-lg'>Address: 123 Main St, Anytown, USA</p>
    </div>
  );
};
export default ProfileView;
