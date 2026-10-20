import { FiGrid, FiMonitor, FiStar, FiUser, FiShoppingBag } from "react-icons/fi";

// Categorías de fakestoreapi -> etiqueta en español + ícono
export const CATEGORY_META = {
  all: { label: "Todas", icon: FiGrid },
  electronics: { label: "Tecnología", icon: FiMonitor },
  jewelery: { label: "Joyería", icon: FiStar },
  "men's clothing": { label: "Ropa hombre", icon: FiUser },
  "women's clothing": { label: "Ropa mujer", icon: FiShoppingBag },
};

export const CATEGORIES = Object.keys(CATEGORY_META);
