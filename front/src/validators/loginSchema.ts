import * as Yup from 'yup';

// Definir la interfaz para los datos del formulario de inicio de sesión - login
export interface LoginFormValuesType {
  email: string;
  password: string;
}
// Definir valores iniciales para los datos del formulario de inicio de sesión

export const loginFormInitialValues: LoginFormValuesType = {
  email: '',
  password: '',
};

// Esquema de validación para el formulario con YUP
export const loginformValidatorSchema = Yup.object({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});
