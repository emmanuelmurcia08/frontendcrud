// filepath: c:\xampp\htdocs\LaravelNext\frontend\lib\api.ts
import axios from "@/config/axios";

const API_URL = "http://localhost:8000/api";

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
  id: number;
  name: string;
  price: number;
  category_id: number;
}

export const getCategorias = async (): Promise<Categoria[]> => {
  const res = await axios.get<{ data: Categoria[] }>(`${API_URL}/category/`);
  return res.data.data;
};

export const getProductos = async (): Promise<Producto[]> => {
  const res = await axios.get<{ data: Producto[] }>(`${API_URL}/products/`);
  return res.data.data;
};

export const createProducto = async (data: any) => {
  const res = await axios.post(`${API_URL}/products/`, data);
  return res.data;
};

export const createCategoria = async (data: { nombre: string }) => {
  const res = await axios.post(`${API_URL}/category/`, data);
  return res.data;
};