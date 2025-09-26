'use client';

import {
  RegisterFormValuesType,
  registerFormInitialValues,
  registerformValidatorSchema,
} from '@/validators/registerSchema';
import { useFormik } from 'formik';
import { registerUser } from '@/services/auth.services';
import React from 'react';

function RegisterForm() {
  // Configuración de Formik para manejar el formulario
  const formik = useFormik<RegisterFormValuesType>({
    initialValues: registerFormInitialValues, // Valores iniciales del formulario
    validationSchema: registerformValidatorSchema, // Usaremos Yup para validar

    // El onSubmit con la Función de registro
    onSubmit: async (values, { resetForm }) => {
      const response = await registerUser(values);
      alert('Registro exitoso');
      console.log('Registro exitoso, respuesta del servidor:', response);
      alert('Usuario registrado exitosamente');
      resetForm();
    },
  });

  return (
    <form
      className='w-full max-w-md space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100'
      onSubmit={formik.handleSubmit}
    >
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-900'>Crear cuenta</h2>
        <p className='mt-2 text-gray-600'>
          Bienvenido. <br />
          Por favor, completa tus datos para registrarte.
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={
              formik.touched.email && formik.errors.email ? 'true' : 'false'
            }
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
            placeholder='••••••••'
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

        {/* Confirm Password */}
        <div>
          <label
            htmlFor='confirmPassword'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Confirmar contraseña
          </label>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            placeholder='••••••••'
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'true'
                : 'false'
            }
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className='mt-1 text-sm text-red-600'>
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Nombre
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Tu nombre'
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 ${
              formik.touched.name && formik.errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={
              formik.touched.name && formik.errors.name ? 'true' : 'false'
            }
          />
          {formik.touched.name && formik.errors.name && (
            <p className='mt-1 text-sm text-red-600'>{formik.errors.name}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor='address'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Dirección
          </label>
          <input
            id='address'
            name='address'
            type='text'
            placeholder='Calle, número, ciudad'
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 ${
              formik.touched.address && formik.errors.address
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={
              formik.touched.address && formik.errors.address ? 'true' : 'false'
            }
          />
          {formik.touched.address && formik.errors.address && (
            <p className='mt-1 text-sm text-red-600'>{formik.errors.address}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Teléfono
          </label>
          <input
            id='phone'
            name='phone'
            type='tel'
            placeholder='+57 300 123 4567'
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 ${
              formik.touched.phone && formik.errors.phone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={
              formik.touched.phone && formik.errors.phone ? 'true' : 'false'
            }
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className='mt-1 text-sm text-red-600'>{formik.errors.phone}</p>
          )}
        </div>
      </div>

      {/* Botón de Registro */}
      <button
        type='submit'
        disabled={formik.isSubmitting}
        className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {formik.isSubmitting ? 'Registrando...' : 'Registrar'}
      </button>

      {/* Enlace a Login */}
      <div className='text-center mt-6'>
        <p className='text-gray-600 text-sm'>
          ¿Ya tienes cuenta?{' '}
          <button
            type='button'
            className='font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200'
          >
            Inicia sesión
          </button>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;
