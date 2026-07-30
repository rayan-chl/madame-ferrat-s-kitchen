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
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
};


export const categories: MenuCategory[] = [
  {
    id: "pizzas",
    label: "Pizzas",
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
        tag: "La casa",
      },
    ],
  },
  {
    id: "platos",
    label: "Platos",
    title: "Platos de Madame",
    subtitle: "Cocinados con pasión · Sabores auténticos",
    items: [
      {
        name: "Escalope de Pollo",
        description: "Escalope de pollo al estilo Madame",
        price: "10€",
      },
      {
        name: "Carne Picada a la Parrilla",
        description: "Carne picada a la parrilla",
        price: "10€",
      },
      {
        name: "Pollo Marinado a la Parrilla",
        description: "Pollo marinado a la parrilla",
        price: "10€",
      },
    ],
  },
  {
    id: "tacos",
    label: "Tacos",
    title: "Tacos",
    subtitle: "Disponibles en tamaño M y L",
    items: [
      {
        name: "Carne Picada",
        description: "Carne picada, patatas fritas, salsa de queso, ensalada",
        sizes: [
          { label: "M", price: "8€" },
          { label: "L", price: "9€" },
        ],
      },
      {
        name: "Pollo",
        description: "Pollo marinado, patatas fritas, salsa de queso, ensalada",
        sizes: [
          { label: "M", price: "8€" },
          { label: "L", price: "9€" },
        ],
      },
      {
        name: "Mixto",
        description: "Carne picada, pollo, patatas fritas, salsa de queso, ensalada",
        sizes: [
          { label: "M", price: "8€" },
          { label: "L", price: "10€" },
        ],
      },
      {
        name: "Gratinado",
        description: "Carne a elección, salsa de queso, emmental gratinado",
        sizes: [
          { label: "M", price: "9€" },
          { label: "L", price: "10€" },
        ],
        tag: "Gratinado al horno",
      },
    ],
  },
  {
    id: "hamburguesas",
    label: "Hamburguesas",
    title: "Hamburguesas",
    items: [
      {
        name: "Hamburguesa",
        description: "Carne picada, lechuga, tomate, cebolla, salsa casera",
        price: "6€",
      },
      {
        name: "Cheeseburger",
        description: "Carne picada, cheddar, lechuga, tomate, cebolla, salsa casera",
        price: "7€",
      },
      {
        name: "Hamburguesa de Pollo",
        description: "Pollo crujiente, lechuga, tomate, salsa casera",
        price: "7€",
      },
      {
        name: "Doble Hamburguesa",
        description:
          "Doble carne picada, doble cheddar, lechuga, tomate, cebolla, salsa casera",
        price: "10€",
        tag: "Para los valientes",
      },
    ],
  },
  {
    id: "bocadillos",
    label: "Bocadillos",
    title: "Bocadillos",
    items: [
      {
        name: "Tortilla con Patatas",
        description: "Patatas fritas, tortilla, salsa casera",
        price: "4€",
      },
      {
        name: "Escalope de Pollo",
        description: "Escalope de pollo, lechuga, tomate, cebolla, salsa casera",
        price: "5€",
      },
      {
        name: "Carne Picada",
        description: "Carne picada, lechuga, tomate, salsa casera",
        price: "5€",
      },
      {
        name: "Escalope",
        description: "Escalope de pollo, lechuga, tomate, cebolla, salsa casera",
        price: "5€",
      },
      {
        name: "Madame Ferrat",
        description:
          "Escalope, carne picada, patatas fritas, lechuga, tomate, cebolla, salsa casera",
        price: "6,50€",
        tag: "⭐ La casa",
      },
    ],
  },
  {
    id: "acompanamientos",
    label: "Acompañamientos",
    title: "Acompañamientos",
    subtitle: "Todos a 3€",
    items: [
      { name: "Patatas Fritas", description: "", price: "3€" },
      { name: "Ensalada Verde", description: "", price: "3€" },
      { name: "Arroz", description: "", price: "3€" },
      { name: "Verduras Salteadas", description: "", price: "3€" },
      { name: "Patatas al Horno", description: "", price: "3€" },
      { name: "Judías Verdes Salteadas", description: "", price: "3€" },
    ],
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
