import { RecipeInterface } from "@/domain/interfaces/recipe.interface";
import Image from "next/image";

interface Props {
  recipe: RecipeInterface;
}
const RecipeImages = ({ recipe }: Props) => {
  return (
    <div className="rounded-lg shadow-sm border p-6">
      <h2 className="text-lg font-semibold mb-4">🖼️ Galería de imágenes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {recipe?.images.map((image, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${recipe?.name} - imagen ${index + 1}`}
              width={200}
              height={150}
              className="w-full h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeImages;
