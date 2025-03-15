import { useState } from "react";
import { createCategoria } from "@/lib/api";
import { useRouter } from "next/navigation";
import Button from "../components/ui/button";
import Input from "../components/ui/input";

export default function CategoriaForm() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCategoria({ nombre: name });
    router.push("/categorias");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Nombre de la categoria"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>Guardar</Button>
    </form>
  );
}
