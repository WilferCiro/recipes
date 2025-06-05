import { CategoryInterface } from "@/domain/interfaces/category.interface";

export enum CategoriesEnum {
  desayunos = "desayunos",
  principales = "principales",
  postres = "postres",
  bebidas = "bebidas",
  ensaladas = "ensaladas",
}

export const categories: CategoryInterface[] = [
  { id: CategoriesEnum.desayunos, name: "Desayunos", icon: "🥞" },
  { id: CategoriesEnum.principales, name: "Platos Principales", icon: "🍽️" },
  { id: CategoriesEnum.postres, name: "Postres", icon: "🍰" },
  { id: CategoriesEnum.bebidas, name: "Bebidas", icon: "🥤" },
  { id: CategoriesEnum.ensaladas, name: "Ensaladas", icon: "🥗" },
];
