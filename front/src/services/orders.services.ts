const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: number[], token: string) => {
  try {
    const response = await fetch(`${apiURL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });

    const orders = await response.json();
    return orders;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getAllOrders = async (token: string) => {
  try {
    const response = await fetch(`${apiURL}/users/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    const orders = await response.json();
    return orders;
  } catch (error) {
    throw new Error(error as string);
  }
};
