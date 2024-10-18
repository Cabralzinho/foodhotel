export const getProducts = async () => {
  const response = await fetch("http://localhost:8080/api/products");

  if (!response.ok) {
    throw new Error(`Erro: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

export const apiAddProduct = async (
  name: string,
  price: number,
  quantity: number
) => {
  const response = await fetch("http://localhost:8080/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      quantity: quantity,
    }),
  });

  if (!response.ok) {
    throw new Error(`Erro: ${response.status} ${response.statusText}`);
  }
};

export const deleteProductById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/api/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Erro: ${response.status} ${response.statusText}`);
  }
};

export const editProductById = async (
  id: number,
  name: string,
  price: number,
  quantity: number
) => {
  const response = await fetch(`http://localhost:8080/api/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      quantity: quantity
    }),
  });

  if (!response.ok) {
    throw new Error(`Erro: ${response.status} ${response.statusText}`);
  }
};
