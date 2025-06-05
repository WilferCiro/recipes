"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { appRecipes } from "@/data/recipes.data";
import SideBar from "@/components/templates/sidebar";
import Link from "next/link";

interface Props {
  selectedCategory: string;
  term: string;
}

export default function RecipesListPage({ selectedCategory, term }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>(term || "");

  // Filtrar recetas basado en el término de búsqueda
  const filteredRecipes = useMemo(() => {
    if (!searchTerm) {
      return (
        appRecipes.filter((rec) => rec.category === selectedCategory) || []
      );
    }

    return appRecipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="flex">
        <SideBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
        />

        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-8">
            <header className="mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {searchTerm
                  ? `${filteredRecipes.length} receta(s) encontrada(s)`
                  : "Descubre recetas increíbles para cada momento"}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.id}?term=${searchTerm}&cat=${selectedCategory}`}
                >
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 group dark:bg-gray-800 dark:border-gray-700">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={recipe.images[0] || "/placeholder.svg"}
                        alt={recipe.name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{recipe.difficulty}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors dark:text-white">
                        {recipe.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{recipe.servings} porciones</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 group-hover:bg-purple-600 transition-colors">
                        Ver receta completa
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredRecipes.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  No se encontraron recetas
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  No hay recetas que coincidan con &quot;{searchTerm}&quot;
                </p>
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Limpiar búsqueda
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
