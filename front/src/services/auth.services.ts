import Swal from 'sweetalert2';
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
      const data = await response.json();

      // Registro exitoso
      await Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada correctamente.',
        confirmButtonText: 'Continuar',
        timer: 6000,
        timerProgressBar: true,
      });

      return data;
    } else {
      const errorData = await response.json().catch(() => ({}));
      const message =
        errorData.message ||
        'Hubo un error durante el registro. Por favor, inténtalo de nuevo.';

      // Registro fallido
      await Swal.fire({
        icon: 'error',
        title: 'Registro fallido',
        text: message,
        confirmButtonText: 'Entendido',
      });
    }
  } catch {
    // Error de red u otro
    await Swal.fire({
      icon: 'error',
      title: 'Error de conexión',
      text: 'No se pudo conectar con el servidor. Verifica tu conexión e inténtalo más tarde.',
      confirmButtonText: 'Reintentar',
    });
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
      const data = await response.json();

      // Credenciales correctas
      await Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: `Hola ${
          data.user?.name || 'usuario'
        }, has iniciado sesión correctamente.`,
        confirmButtonText: 'Continuar',
        timer: 6000,
        timerProgressBar: true,
      });

      return data;
    } else {
      const errorData = await response.json().catch(() => ({}));
      const message = errorData.message || 'Usuario o contraseña incorrectos.';

      // Credenciales inválidas
      await Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: message,
        confirmButtonText: 'Reintentar',
      });
    }
  } catch {
    // Error de red
    await Swal.fire({
      icon: 'error',
      title: 'Error de conexión',
      text: 'No se pudo conectar con el servidor. Verifica tu conexión.',
      confirmButtonText: 'Aceptar',
    });
  }
};
