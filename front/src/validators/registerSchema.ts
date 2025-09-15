import * as Yup from 'yup';

// Definir la interfaz para los datos del formulario de registro - register
export interface RegisterFormValuesType {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  address: string;
  phone: string;
}
// Definir valores iniciales para los datos del formulario de registro

export const registerFormInitialValues: RegisterFormValuesType = {
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  address: '',
  phone: '',
};

// Esquema de validación para el formulario con YUP
export const registerformValidatorSchema = Yup.object({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseñ debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
    .required('La confirmación de la contraseña es obligatoria'),
  firstname: Yup.string().required('El nombre es obligatorio'),
  address: Yup.string().required('La dirección es obligatoria'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'El teléfono debe ser numérico')
    .required('El teléfono es obligatorio'),
});
