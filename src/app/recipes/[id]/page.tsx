import RecipeIdPage from "@/components/pages/recipe-id-page";
import { categories } from "@/data/categories.data";
import { appRecipes } from "@/data/recipes.data";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;

  const recipe = appRecipes.find((rec) => `${rec.id}` === `${id}`);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if (!recipe) {
    return {
      title: "Receta",
    };
  }

  return {
    title: recipe.name,
    description: recipe.description,
    keywords: recipe.keywords,
    authors: {
      url: "https://wilcirom.vercel.app/",
      name: "Wilfer Daniel Ciro Maya",
    },
    category:
      categories.find((cat) => cat.id === recipe.category)?.name || "Comida",
    openGraph: {
      images: [...recipe.images, ...previousImages],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    creator: "Wilfer Daniel Ciro Maya",
    publisher: "Wilfer Daniel Ciro Maya",
  };
}

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const recipe = appRecipes.find((rec) => `${rec.id}` === `${id}`);

  if (!recipe) {
    return null;
  }
  return <RecipeIdPage recipe={recipe} />;
}
