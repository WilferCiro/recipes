import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RecipeInterface } from "@/domain/interfaces/recipe.interface";
import { ChefHat, Clock, Printer, Share2, Users } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface Props {
  recipe: RecipeInterface;
}

const RecipeHeader = ({ recipe }: Props) => {
  return (
    <div className="rounded-lg shadow-sm border p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={recipe.images[0] || "/placeholder.svg"}
              alt={recipe.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <Badge className="absolute top-3 right-3" variant="secondary">
              {recipe.difficulty}
            </Badge>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-3 py-2 rounded-md">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{recipe.time}</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-md">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">
                {recipe.servings} porciones
              </span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-2 rounded-md">
              <ChefHat className="w-4 h-4" />
              <span className="text-sm font-medium">
                {recipe.steps.length} pasos
              </span>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {recipe.description}
          </p>

          <div className="flex gap-2 noPrint">
            {/*<Button variant="outline" size="sm" className="gap-2">
              <Bookmark className="w-4 h-4" />
              <span>Guardar</span>
            </Button>*/}
            <Button
              variant="outline"
              size="sm"
              className="gap-2 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://recipes.vercel.app/recipes/${recipe.id}`
                );
                toast.success("🔗 Enlace copiado exitosamente.");
              }}
            >
              <Share2 className="w-4 h-4" />
              <span>Compartir</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 cursor-pointer"
              onClick={() => window.print()}
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
