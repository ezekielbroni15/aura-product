import axios from "axios";

const api = axios.create({
  baseURL: "https://b0c0-197-251-192-177.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getAllProducts() {
  const response = await api.get("/product");
  return response.data;
}

export async function getProductById(id) {
  const response = await api.get(`/product/${id}`);
  return response.data;
}

export async function addProduct(productData) {
  const response = await api.post("/product", productData);
  return response.data;
}

export async function updateProduct(id, productData) {
  const response = await api.put(`/product/${id}`, productData);
  return response.data;
}

export async function deleteProduct(id) {
  const response = await api.delete(`/product/${id}`);
  return response.data;
}
