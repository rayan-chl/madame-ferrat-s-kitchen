export type Lang = "es" | "fr" | "en";

export type L = Record<Lang, string>;

export type MenuItem = {
  name: L;
  description: L;
  price?: string;
  sizes?: { label: string; price: string }[];
  tag?: L;
};

export type MenuCategory = {
  id: string;
  label: L;
  title: L;
  subtitle?: L;
  note?: L;
  items: MenuItem[];
};

export const categories: MenuCategory[] = [
  {
    id: "pizzas",
    label: { es: "Pizzas", fr: "Pizzas", en: "Pizzas" },
    title: { es: "Nuestras Pizzas", fr: "Nos Pizzas", en: "Our Pizzas" },
    note: {
      es: "Pídela con masa fina si lo prefieres.",
      fr: "Demandez-la en pâte fine si vous préférez.",
      en: "Ask for thin crust if you prefer.",
    },
    items: [
      {
        name: { es: "Margarita", fr: "Margherita", en: "Margherita" },
        description: {
          es: "Salsa de tomate, mozzarella, albahaca, orégano",
          fr: "Sauce tomate, mozzarella, basilic, origan",
          en: "Tomato sauce, mozzarella, basil, oregano",
        },
        price: "8€",
        tag: { es: "Clásica", fr: "Classique", en: "Classic" },
      },
      {
        name: { es: "Vegetariana", fr: "Végétarienne", en: "Vegetarian" },
        description: {
          es: "Salsa de tomate, mozzarella, pimiento, champiñones, cebolla, aceitunas",
          fr: "Sauce tomate, mozzarella, poivron, champignons, oignon, olives",
          en: "Tomato sauce, mozzarella, pepper, mushrooms, onion, olives",
        },
        price: "8€",
        tag: { es: "Veggie", fr: "Veggie", en: "Veggie" },
      },
      {
        name: { es: "Carne Picada", fr: "Viande Hachée", en: "Ground Beef" },
        description: {
          es: "Salsa de tomate, mozzarella, carne picada, cebolla, pimiento",
          fr: "Sauce tomate, mozzarella, viande hachée, oignon, poivron",
          en: "Tomato sauce, mozzarella, ground beef, onion, pepper",
        },
        price: "9,50€",
      },
      {
        name: { es: "Atún", fr: "Thon", en: "Tuna" },
        description: {
          es: "Salsa de tomate, mozzarella, atún, cebolla, pimiento",
          fr: "Sauce tomate, mozzarella, thon, oignon, poivron",
          en: "Tomato sauce, mozzarella, tuna, onion, pepper",
        },
        price: "9,50€",
      },
      {
        name: { es: "Pollo", fr: "Poulet", en: "Chicken" },
        description: {
          es: "Salsa de tomate, mozzarella, pollo, cebolla, pimiento",
          fr: "Sauce tomate, mozzarella, poulet, oignon, poivron",
          en: "Tomato sauce, mozzarella, chicken, onion, pepper",
        },
        price: "9,50€",
      },
      {
        name: { es: "Cuatro Quesos", fr: "Quatre Fromages", en: "Four Cheeses" },
        description: {
          es: "Salsa de tomate, mozzarella, gorgonzola, parmesano, gouda",
          fr: "Sauce tomate, mozzarella, gorgonzola, parmesan, gouda",
          en: "Tomato sauce, mozzarella, gorgonzola, parmesan, gouda",
        },
        price: "11€",
        tag: { es: "Especial", fr: "Spéciale", en: "Special" },
      },
      {
        name: { es: "Marinera", fr: "Marinara", en: "Seafood" },
        description: {
          es: "Salsa de tomate, mozzarella, mariscos, ajo, perejil",
          fr: "Sauce tomate, mozzarella, fruits de mer, ail, persil",
          en: "Tomato sauce, mozzarella, seafood, garlic, parsley",
        },
        price: "12€",
        tag: { es: "Del mar", fr: "De la mer", en: "From the sea" },
      },
      {
        name: { es: "Madame Ferrat", fr: "Madame Ferrat", en: "Madame Ferrat" },
        description: {
          es: "Salsa de tomate, mozzarella, rúcula, carne picada, pimiento, cebolla, champiñones, aceitunas",
          fr: "Sauce tomate, mozzarella, roquette, viande hachée, poivron, oignon, champignons, olives",
          en: "Tomato sauce, mozzarella, arugula, ground beef, pepper, onion, mushrooms, olives",
        },
        price: "12€",
        tag: { es: "La casa", fr: "La maison", en: "House special" },
      },
    ],
  },
  {
    id: "platos",
    label: { es: "Platos", fr: "Plats", en: "Mains" },
    title: { es: "Platos de Madame", fr: "Les Plats de Madame", en: "Madame's Mains" },
    subtitle: {
      es: "Cocinados con pasión · Sabores auténticos",
      fr: "Cuisinés avec passion · Saveurs authentiques",
      en: "Cooked with passion · Authentic flavours",
    },
    items: [
      {
        name: { es: "Escalope de Pollo", fr: "Escalope de Poulet", en: "Chicken Escalope" },
        description: {
          es: "Escalope de pollo al estilo Madame",
          fr: "Escalope de poulet façon Madame",
          en: "Chicken escalope, Madame style",
        },
        price: "10€",
      },
      {
        name: {
          es: "Carne Picada a la Parrilla",
          fr: "Viande Hachée Grillée",
          en: "Grilled Ground Beef",
        },
        description: {
          es: "Carne picada a la parrilla",
          fr: "Viande hachée grillée",
          en: "Grilled ground beef",
        },
        price: "10€",
      },
      {
        name: {
          es: "Pollo Marinado a la Parrilla",
          fr: "Poulet Mariné Grillé",
          en: "Grilled Marinated Chicken",
        },
        description: {
          es: "Pollo marinado a la parrilla",
          fr: "Poulet mariné grillé",
          en: "Grilled marinated chicken",
        },
        price: "10€",
      },
    ],
  },
  {
    id: "tacos",
    label: { es: "Tacos", fr: "Tacos", en: "Tacos" },
    title: { es: "Tacos", fr: "Tacos", en: "Tacos" },
    subtitle: {
      es: "Disponibles en tamaño M y L",
      fr: "Disponibles en taille M et L",
      en: "Available in size M and L",
    },
    items: [
      {
        name: { es: "Carne Picada", fr: "Viande Hachée", en: "Ground Beef" },
        description: {
          es: "Carne picada, patatas fritas, salsa de queso, ensalada",
          fr: "Viande hachée, frites, sauce fromagère, salade",
          en: "Ground beef, fries, cheese sauce, salad",
        },
        sizes: [
          { label: "M", price: "8€" },
          { label: "L", price: "9€" },
        ],
      },
      {
        name: { es: "Pollo", fr: "Poulet", en: "Chicken" },
        description: {
          es: "Pollo marinado, patatas fritas, salsa de queso, ensalada",
          fr: "Poulet mariné, frites, sauce fromagère, salade",
          en: "Marinated chicken, fries, cheese sauce, salad",
        },
        sizes: [
          { label: "M", price: "8€" },
          { label: "L", price: "9€" },
        ],
      },
      {
        name: { es: "Mixto", fr: "Mixte", en: "Mixed" },
        description: {
          es: "Carne picada, pollo, patatas fritas, salsa de queso, ensalada",
          fr: "Viande hachée, poulet, frites, sauce fromagère, salade",
          en: "Ground beef, chicken, fries, cheese sauce, salad",
        },
        sizes: [
          { label: "M", price: "8€" },
          { label: "L", price: "10€" },
        ],
      },
      {
        name: { es: "Gratinado", fr: "Gratiné", en: "Gratin" },
        description: {
          es: "Carne a elección, salsa de queso, emmental gratinado",
          fr: "Viande au choix, sauce fromagère, emmental gratiné",
          en: "Meat of your choice, cheese sauce, gratinated emmental",
        },
        sizes: [
          { label: "M", price: "9€" },
          { label: "L", price: "10€" },
        ],
        tag: {
          es: "Gratinado al horno",
          fr: "Gratiné au four",
          en: "Oven gratinated",
        },
      },
    ],
  },
  {
    id: "hamburguesas",
    label: { es: "Hamburguesas", fr: "Burgers", en: "Burgers" },
    title: { es: "Hamburguesas", fr: "Burgers", en: "Burgers" },
    items: [
      {
        name: { es: "Hamburguesa", fr: "Burger", en: "Burger" },
        description: {
          es: "Carne picada, lechuga, tomate, cebolla, salsa casera",
          fr: "Viande hachée, laitue, tomate, oignon, sauce maison",
          en: "Ground beef, lettuce, tomato, onion, house sauce",
        },
        price: "6€",
      },
      {
        name: { es: "Cheeseburger", fr: "Cheeseburger", en: "Cheeseburger" },
        description: {
          es: "Carne picada, cheddar, lechuga, tomate, cebolla, salsa casera",
          fr: "Viande hachée, cheddar, laitue, tomate, oignon, sauce maison",
          en: "Ground beef, cheddar, lettuce, tomato, onion, house sauce",
        },
        price: "7€",
      },
      {
        name: {
          es: "Hamburguesa de Pollo",
          fr: "Burger de Poulet",
          en: "Chicken Burger",
        },
        description: {
          es: "Pollo crujiente, lechuga, tomate, salsa casera",
          fr: "Poulet croustillant, laitue, tomate, sauce maison",
          en: "Crispy chicken, lettuce, tomato, house sauce",
        },
        price: "7€",
      },
      {
        name: { es: "Doble Hamburguesa", fr: "Double Burger", en: "Double Burger" },
        description: {
          es: "Doble carne picada, doble cheddar, lechuga, tomate, cebolla, salsa casera",
          fr: "Double viande hachée, double cheddar, laitue, tomate, oignon, sauce maison",
          en: "Double ground beef, double cheddar, lettuce, tomato, onion, house sauce",
        },
        price: "10€",
        tag: {
          es: "Para los valientes",
          fr: "Pour les courageux",
          en: "For the brave",
        },
      },
    ],
  },
  {
    id: "bocadillos",
    label: { es: "Bocadillos", fr: "Sandwichs", en: "Sandwiches" },
    title: { es: "Bocadillos", fr: "Sandwichs", en: "Sandwiches" },
    items: [
      {
        name: {
          es: "Tortilla con Patatas",
          fr: "Omelette aux Pommes de Terre",
          en: "Potato Omelette",
        },
        description: {
          es: "Patatas fritas, tortilla, salsa casera",
          fr: "Frites, omelette, sauce maison",
          en: "Fries, omelette, house sauce",
        },
        price: "4€",
      },
      {
        name: { es: "Escalope de Pollo", fr: "Escalope de Poulet", en: "Chicken Escalope" },
        description: {
          es: "Escalope de pollo, lechuga, tomate, cebolla, salsa casera",
          fr: "Escalope de poulet, laitue, tomate, oignon, sauce maison",
          en: "Chicken escalope, lettuce, tomato, onion, house sauce",
        },
        price: "5€",
      },
      {
        name: { es: "Carne Picada", fr: "Viande Hachée", en: "Ground Beef" },
        description: {
          es: "Carne picada, lechuga, tomate, salsa casera",
          fr: "Viande hachée, laitue, tomate, sauce maison",
          en: "Ground beef, lettuce, tomato, house sauce",
        },
        price: "5€",
      },
      {
        name: { es: "Escalope", fr: "Escalope", en: "Escalope" },
        description: {
          es: "Escalope de pollo, lechuga, tomate, cebolla, salsa casera",
          fr: "Escalope de poulet, laitue, tomate, oignon, sauce maison",
          en: "Chicken escalope, lettuce, tomato, onion, house sauce",
        },
        price: "5€",
      },
      {
        name: { es: "Madame Ferrat", fr: "Madame Ferrat", en: "Madame Ferrat" },
        description: {
          es: "Escalope, carne picada, patatas fritas, lechuga, tomate, cebolla, salsa casera",
          fr: "Escalope, viande hachée, frites, laitue, tomate, oignon, sauce maison",
          en: "Escalope, ground beef, fries, lettuce, tomato, onion, house sauce",
        },
        price: "6,50€",
        tag: { es: "La casa", fr: "La maison", en: "House special" },
      },
    ],
  },
  {
    id: "acompanamientos",
    label: { es: "Acompañamientos", fr: "Accompagnements", en: "Sides" },
    title: { es: "Acompañamientos", fr: "Accompagnements", en: "Sides" },
    subtitle: { es: "Todos a 3€", fr: "Tous à 3€", en: "All at 3€" },
    items: [
      {
        name: { es: "Patatas Fritas", fr: "Frites", en: "French Fries" },
        description: { es: "", fr: "", en: "" },
        price: "3€",
      },
      {
        name: { es: "Ensalada Verde", fr: "Salade Verte", en: "Green Salad" },
        description: { es: "", fr: "", en: "" },
        price: "3€",
      },
      {
        name: { es: "Arroz", fr: "Riz", en: "Rice" },
        description: { es: "", fr: "", en: "" },
        price: "3€",
      },
      {
        name: {
          es: "Verduras Salteadas",
          fr: "Légumes Sautés",
          en: "Sautéed Vegetables",
        },
        description: { es: "", fr: "", en: "" },
        price: "3€",
      },
      {
        name: { es: "Patatas al Horno", fr: "Pommes au Four", en: "Baked Potatoes" },
        description: { es: "", fr: "", en: "" },
        price: "3€",
      },
      {
        name: {
          es: "Judías Verdes Salteadas",
          fr: "Haricots Verts Sautés",
          en: "Sautéed Green Beans",
        },
        description: { es: "", fr: "", en: "" },
        price: "3€",
      },
    ],
  },
];

export const extras: MenuItem[] = [
  {
    name: { es: "Huevo extra", fr: "Œuf supplémentaire", en: "Extra egg" },
    description: { es: "", fr: "", en: "" },
    price: "1€",
  },
  {
    name: { es: "Queso extra", fr: "Fromage supplémentaire", en: "Extra cheese" },
    description: { es: "", fr: "", en: "" },
    price: "1€",
  },
  {
    name: { es: "Bacon", fr: "Bacon", en: "Bacon" },
    description: { es: "", fr: "", en: "" },
    price: "1€",
  },
  {
    name: { es: "Champiñones", fr: "Champignons", en: "Mushrooms" },
    description: { es: "", fr: "", en: "" },
    price: "1€",
  },
  {
    name: { es: "Barbacoa", fr: "Barbecue", en: "Barbecue" },
    description: { es: "", fr: "", en: "" },
    price: "1€",
  },
  {
    name: { es: "Cebolla", fr: "Oignon", en: "Onion" },
    description: { es: "", fr: "", en: "" },
    price: "1€",
  },
];
