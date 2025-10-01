import { RegisterFormValuesType } from '../validators/registerSchema';
import { LoginFormValuesType } from '../validators/loginSchema';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData: RegisterFormValuesType) => {
  try {
    const response = await fetch(`${apiURL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return response.json();
    } else {
      // Aplicar una alerta con SweetAlert o similar
      alert('Ups! Algo salió mal durante el registro');
      throw new Error('Error logging failing');
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export const loginUser = async (userData: LoginFormValuesType) => {
  try {
    const response = await fetch(`${apiURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return response.json();
    } else {
      // Aplicar una alerta con SweetAlert o similar
      alert('Ups! Usuario o contraseña incorrectos');
      throw new Error('Error logging in user');
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
