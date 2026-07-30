export type MenuItem = {
  name: string;
  description: string;
  price?: string;
  sizes?: { label: string; price: string }[];
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  icon: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
};


export const categories: MenuCategory[] = [
  {
    id: "pizzas",
    label: "Pizzas",
    icon: "🍕",
    title: "Nuestras Pizzas",
    note: "Pídela con masa fina si lo prefieres.",
    items: [
      {
        name: "Margarita",
        description: "Salsa de tomate, mozzarella, albahaca, orégano",
        price: "8€",
        tag: "Clásica",
      },
      {
        name: "Vegetariana",
        description:
          "Salsa de tomate, mozzarella, pimiento, champiñones, cebolla, aceitunas",
        price: "8€",
        tag: "Veggie",
      },
      {
        name: "Carne Picada",
        description: "Salsa de tomate, mozzarella, carne picada, cebolla, pimiento",
        price: "9,50€",
      },
      {
        name: "Atún",
        description: "Salsa de tomate, mozzarella, atún, cebolla, pimiento",
        price: "9,50€",
      },
      {
        name: "Pollo",
        description: "Salsa de tomate, mozzarella, pollo, cebolla, pimiento",
        price: "9,50€",
      },
      {
        name: "Cuatro Quesos",
        description: "Salsa de tomate, mozzarella, gorgonzola, parmesano, gouda",
        price: "11€",
        tag: "Especial",
      },
      {
        name: "Marinera",
        description: "Salsa de tomate, mozzarella, mariscos, ajo, perejil",
        price: "12€",
        tag: "Del mar",
      },
      {
        name: "Madame Ferrat",
        description:
          "Salsa de tomate, mozzarella, rúcula, carne picada, pimiento, cebolla, champiñones, aceitunas",
        price: "12€",
        tag: "⭐ La casa",
      },
    ],
  },
  {
    id: "platos",
    label: "Platos",
    icon: "🍽️",
    title: "Platos",
    items: [],
  },
  {
    id: "tacos",
    label: "Tacos",
    icon: "🌮",
    title: "Tacos",
    items: [],
  },
  {
    id: "hamburguesas",
    label: "Hamburguesas",
    icon: "🍔",
    title: "Hamburguesas",
    items: [],
  },
  {
    id: "bocadillos",
    label: "Bocadillos",
    icon: "🥖",
    title: "Bocadillos",
    items: [],
  },
  {
    id: "acompanamientos",
    label: "Acompañamientos",
    icon: "🥗",
    title: "Acompañamientos",
    items: [],
  },
];

export const extras: MenuItem[] = [
  { name: "Huevo extra", description: "", price: "1€" },
  { name: "Queso extra", description: "", price: "1€" },
  { name: "Bacon", description: "", price: "1€" },
  { name: "Champiñones", description: "", price: "1€" },
  { name: "Barbacoa", description: "", price: "1€" },
  { name: "Cebolla", description: "", price: "1€" },
];
