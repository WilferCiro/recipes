import { getToolById, getToolsForRecipe } from "@/lib/data/tools-data";
import { ToolModal } from "../tool-modal";
import { RecipeInterface } from "@/domain/interfaces/recipe.interface";
import { PenToolIcon as Tool } from "lucide-react";

interface Props {
  recipe: RecipeInterface;
}

const RecipeTools = ({ recipe }: Props) => {
  const availableTools = recipe ? getToolsForRecipe(recipe.materials) : [];
  return (
    <div className="noPrint">
      {availableTools.length > 0 && (
        <div className="rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 dark:text-white">
            <Tool className="w-5 h-5" /> Guías de herramientas
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Esta receta requiere herramientas especiales. Haz clic para ver las
            guías de uso:
          </p>
          <div className="space-y-2">
            {availableTools.map((toolId) => {
              const tool = getToolById(toolId);
              return (
                <ToolModal
                  key={toolId}
                  tool={tool}
                  title={tool.name}
                  icon={tool.icon}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeTools;
