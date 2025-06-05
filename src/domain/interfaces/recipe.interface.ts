import { CategoriesEnum } from "@/data/categories.data";

export interface RecipeInterface {
  id: number;
  category: CategoriesEnum;
  name: string;
  time: string;
  servings: number;
  difficulty: string;
  description: string;
  images: string[];
  ingredients: string[];
  materials: string[];
  steps: string[];
  keywords: string[];
}
