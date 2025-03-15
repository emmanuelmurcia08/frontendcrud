// filepath: c:\xampp\htdocs\LaravelNext\frontend\app\categori\page.tsx
'use client';

import { useEffect, useState } from "react";
import { getCategorias, Categoria } from "@/lib/api";
import Button from "../../components/ui/button";
import Link from "next/link";

export default function CategoriPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    getCategorias().then((data) => setCategorias(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categoria</h2>
      <Link href="/categoria/nuevo">
        <Button>Nueva Categoria</Button>
      </Link>
      <ul className="mt-4">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="border p-2 my-2">{categoria.nombre}</li>
        ))}
      </ul>
    </div>
  );
}