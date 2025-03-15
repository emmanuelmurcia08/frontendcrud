
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Button from "../components/ui/button";

export default function Navbar() {
  return (
    <nav className="p-4 border-b flex justify-between">
      <h1 className="text-xl font-bold">Mi Tienda</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Menú</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/productos">Productos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/categorias">Categorías</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
