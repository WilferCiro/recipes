import RecipesListPage from "@/components/pages/recipe-list.page";

type Props = {
  searchParams: Promise<{ category?: string; term?: string }>;
};

export default async function RecipesApp({ searchParams }: Props) {
  const { category, term } = await searchParams;
  return (
    <RecipesListPage selectedCategory={category || ""} term={term || ""} />
  );
}
