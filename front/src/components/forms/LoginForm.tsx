'use client';

import {
  LoginFormValuesType,
  loginFormInitialValues,
  loginformValidatorSchema,
} from '@/validators/loginSchema';
import { useFormik } from 'formik';
import React from 'react';

function LoginForm() {
  const formik = useFormik<LoginFormValuesType>({
    initialValues: loginFormInitialValues,
    validationSchema: loginformValidatorSchema,
    onSubmit: (values) => {
      console.log('Login exitoso', values);
      // Aquí viene la función de autenticación
    },
  });

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
              formik.touched.email && formik.errors.email
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
          <input
            id='password'
            name='password'
            type='password'
            placeholder='••••••'
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 ${
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
