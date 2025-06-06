import { ThemeToggle } from "../molecules/theme-toggle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { categories } from "@/data/categories.data";
import Link from "next/link";
import AppIcon from "../ui/app-icon";

interface Props {
  searchTerm: string;
  setSearchTerm: (_: string) => void;
  selectedCategory: string;
}

const SideBar = ({ searchTerm, setSearchTerm, selectedCategory }: Props) => {
  return (
    <>
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg min-h-screen p-6 border-r dark:border-gray-700">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex justify-center gap-2">
              <AppIcon size={30} /> Recetas
            </h1>
            <ThemeToggle />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Deliciosas para ti
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar recetas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <nav className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Categorías
          </h3>
          {categories.map((category) => (
            <Link key={category.id} href={`?category=${category.id}`}>
              <Button
                variant={
                  selectedCategory === category.id && !searchTerm
                    ? "default"
                    : "ghost"
                }
                className={`w-full justify-start gap-3 cursor-pointer ${
                  selectedCategory === category.id && !searchTerm
                    ? "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm">{category.name}</span>
              </Button>
            </Link>
          ))}
        </nav>

        {searchTerm && (
          <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Mostrando resultados para: <strong>{searchTerm}</strong>
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchTerm("")}
              className="mt-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Limpiar búsqueda
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
