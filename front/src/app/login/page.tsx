import LoginForm from '@/components/forms/LoginForm';
import React from 'react';

function LoginPage() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4'>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
