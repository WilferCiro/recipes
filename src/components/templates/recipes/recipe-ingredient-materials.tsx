import { Checkbox } from "@/components/ui/checkbox";
import { RecipeInterface } from "@/domain/interfaces/recipe.interface";
import { Utensils } from "lucide-react";
import { useState } from "react";

interface Props {
  recipe: RecipeInterface;
}
const RecipeIngredientMaterials = ({ recipe }: Props) => {
  const [checkedMaterials, setCheckedMaterials] = useState<
    Record<number, boolean>
  >({});
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<number, boolean>
  >({});

  const handleIngredientCheck = (index: number, checked: boolean) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [index]: checked,
    }));
  };

  const handleMaterialCheck = (index: number, checked: boolean) => {
    setCheckedMaterials((prev) => ({
      ...prev,
      [index]: checked,
    }));
  };

  return (
    <div className="rounded-lg shadow-sm border p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 dark:text-white">
            <span className="text-xl">🛒</span> Ingredientes
          </h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-3">
                <Checkbox
                  className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white dark:data-[state=checked]:border-purple-700 dark:data-[state=checked]:bg-purple-700"
                  id={`overview-ingredient-${index}`}
                  checked={checkedIngredients[index] || false}
                  onCheckedChange={(checked: boolean) =>
                    handleIngredientCheck(index, checked)
                  }
                />
                <label
                  htmlFor={`overview-ingredient-${index}`}
                  className={`text-sm cursor-pointer flex-1 dark:text-gray-200 ${
                    checkedIngredients[index]
                      ? "line-through text-gray-500 dark:text-gray-400"
                      : ""
                  }`}
                >
                  {ingredient}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 dark:text-white">
            <Utensils className="w-5 h-5" /> Materiales
          </h2>
          <ul className="space-y-2">
            {recipe.materials.map((material, index) => (
              <li key={index} className="flex items-center gap-3">
                <Checkbox
                  className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white dark:data-[state=checked]:border-purple-700 dark:data-[state=checked]:bg-purple-700"
                  id={`overview-material-${index}`}
                  checked={checkedMaterials[index] || false}
                  onCheckedChange={(checked: boolean) =>
                    handleMaterialCheck(index, checked)
                  }
                />
                <label
                  htmlFor={`overview-material-${index}`}
                  className={`text-sm cursor-pointer flex-1 dark:text-gray-200 ${
                    checkedMaterials[index]
                      ? "line-through text-gray-500 dark:text-gray-400"
                      : ""
                  }`}
                >
                  {material}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeIngredientMaterials;
