'use client';

import { loginUser } from '@/services/auth.services';
import {
  LoginFormValuesType,
  loginFormInitialValues,
  loginformValidatorSchema,
} from '@/validators/loginSchema';
import { useFormik } from 'formik';
// import { useState } from 'react'; // Ya no es necesario importar useState.... React.useState funciona igual
import React from 'react';
import { useAuth } from '../../context/Authcontext';

function LoginForm() {
  const { setDataUser } = useAuth(); // Usamos el contexto para obtener setDataUser

  const formik = useFormik<LoginFormValuesType>({
    initialValues: loginFormInitialValues,
    validationSchema: loginformValidatorSchema,
    onSubmit: async (values, { resetForm }) => {
      // La Función de inicio de sesión hace una llamada a la API y actualiza el contexto global

      const response = await loginUser(values); // función de autenticación

      // MANEJAR LA LOGICA PARA LA PERSISTENCIA DE LA SESION DEL USUARIO...
      setDataUser(response); // ¡Guarda la sesión en el contexto global!

      console.log('Login exitoso, respuesta del servidor:', response);
      alert('Usuario logueado exitosamente');

      resetForm(); // Reiniciar el formulario después de enviar
    },
  });

  // Estado para manejar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <form
      className='w-full max-w-md space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100'
      onSubmit={formik.handleSubmit} // Manejar el envío del formulario
    >
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-900'>Iniciar sesión</h2>
        <p className='mt-2 text-gray-600'>
          Bienvenido. <br />
          Por favor, ingresa tus credenciales.
        </p>
      </div>

      <div className='space-y-4'>
        {/* Email */}
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Correo electrónico
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='tu@email.com'
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 ${
              formik.touched.email && formik.errors.email // Si el campo ha sido tocado y tiene errores
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.email} // Obtener el valor del input
            onChange={formik.handleChange} // Manejar el cambio de valor del input
            onBlur={formik.handleBlur} // Manejar el evento de desenfoque del input, cuando salgo del campo
            aria-invalid={
              formik.touched.email && formik.errors.email ? 'true' : 'false'
            } // Accesibilidad para indicar si el input tiene errores
          />
          {formik.touched.email && formik.errors.email && (
            <p className='mt-1 text-sm text-red-600'>{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Contraseña
          </label>
          <div className='relative'>
            <input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'} // Cambia de tipo de input dinámicamente
              placeholder='••••••'
              className={`w-full px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300'
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={
                formik.touched.password && formik.errors.password
                  ? 'true'
                  : 'false'
              }
            />
            {/* Botón para manejar la visibilidad de la contraseña */}
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)} // Toggle de visibilidad, esto significa que si es true pasa a false y viceversa
              className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-blue-600 transition-colors duration-200'
              aria-label={
                showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
              }
              title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.774 3.162 10.066 7.5-1.292 4.338-5.31 7.5-10.066 7.5-1.225 0-2.41-.177-3.537-.506M6.228 6.228 3.5 3.5m2.728 2.728 14.002 14.002M18.364 18.364l-2.728-2.728'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              )}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className='mt-1 text-sm text-red-600'>
              {formik.errors.password}
            </p>
          )}
        </div>
      </div>

      {/* Olvidé contraseña (opcional, pero recomendado) */}
      <div className='text-right'>
        <button
          type='button'
          className='text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200'
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      {/* Botón de Login */}
      <button
        type='submit'
        disabled={formik.isSubmitting} // Deshabilita mientras se envía
        className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {formik.isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </button>

      {/* Separador o registro rápido (opcional) */}
      <div className='text-center mt-6'>
        <p className='text-gray-600 text-sm'>
          ¿No tienes cuenta?{' '}
          <button
            type='button'
            className='font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200'
          >
            Regístrate ahora
          </button>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
