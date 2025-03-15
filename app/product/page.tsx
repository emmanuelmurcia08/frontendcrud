'use client';

import { useEffect, useState } from "react";
import { getProductos, Producto } from "@/lib/api";
import Button from "../../components/ui/button";
import Link from "next/link";
import api from "@/config/axios";

const ProductosPage = () => {
  const [products, setProducts] = useState<Producto[]>([]); // Estado inicial vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getProductos()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos</p>;

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {(products || []).map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosPage;