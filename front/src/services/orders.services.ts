export const createOrder = async (products: number[], token: string) => {
  try {
    const response = await fetch('http://localhost:3004/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });

    const orders = await response.json();
    return orders.user;
  } catch (error) {
    throw new Error(error as string);
  }
};
