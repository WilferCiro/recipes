"use client";
import { ThemeToggle } from "../molecules/theme-toggle";
import RecipeHeader from "../templates/recipes/recipe-header";
import RecipeImages from "../templates/recipes/recipe-images";
import RecipeIngredientMaterials from "../templates/recipes/recipe-ingredient-materials";
import RecipeSteps from "../templates/recipes/recipe-steps";
import RecipeTools from "../templates/recipes/recipe-tools";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { RecipeInterface } from "@/domain/interfaces/recipe.interface";
import Link from "next/link";

interface Props {
  recipe: RecipeInterface;
}

const RecipeIdPage = ({ recipe }: Props) => {
  const searchParams = useSearchParams();
  const prevCategory = searchParams.get("cat");
  const prevTerm = searchParams.get("term");
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href={`/?category=${prevCategory || ""}&term=${prevTerm || ""}`}
              >
                <Button variant="outline" className="gap-2 cursor-pointer">
                  ← Volver
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {recipe.name}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="max-w-7xl mx-auto space-y-8">
              <RecipeHeader recipe={recipe} />
              <RecipeIngredientMaterials recipe={recipe} />
              <RecipeTools recipe={recipe} />
              <RecipeImages recipe={recipe} />
            </div>
            <div className="max-w-6xl mx-auto space-y-8">
              <RecipeSteps recipe={recipe} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeIdPage;
