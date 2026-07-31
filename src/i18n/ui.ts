import type { Lang } from "@/data/menu";

export const langOptions: { code: Lang; label: string; native: string }[] = [
  { code: "es", label: "Español", native: "Ver la carta en español" },
  { code: "fr", label: "Français", native: "Voir la carte en français" },
  { code: "en", label: "English", native: "View the menu in English" },
];

export const ui = {
  es: {
    chooseTitle: "Elige tu idioma",
    chooseSubtitle: "Selecciona el idioma para ver la carta",
    tagline: "Sabores auténticos · Preparados con pasión · Horno de leña",
    heroAlt: "Pizza margarita recién sacada del horno de leña",
    empty:
      "Estamos afinando esta sección de la carta. Pregunta en sala por las sugerencias del día.",
    extrasTitle: "Extras para pizza",
    footerTagline: "Horno de leña · Cocina artesana",
    changeLang: "Cambiar idioma",
  },
  fr: {
    chooseTitle: "Choisissez votre langue",
    chooseSubtitle: "Sélectionnez la langue pour voir la carte",
    tagline: "Saveurs authentiques · Préparés avec passion · Four à bois",
    heroAlt: "Pizza margherita sortie du four à bois",
    empty:
      "Nous affinons cette section de la carte. Demandez en salle les suggestions du jour.",
    extrasTitle: "Suppléments pizza",
    footerTagline: "Four à bois · Cuisine artisanale",
    changeLang: "Changer de langue",
  },
  en: {
    chooseTitle: "Choose your language",
    chooseSubtitle: "Select a language to view the menu",
    tagline: "Authentic flavours · Made with passion · Wood-fired oven",
    heroAlt: "Margherita pizza fresh from the wood-fired oven",
    empty:
      "We're refining this part of the menu. Please ask our staff for today's suggestions.",
    extrasTitle: "Pizza extras",
    footerTagline: "Wood-fired oven · Artisan kitchen",
    changeLang: "Change language",
  },
} satisfies Record<Lang, Record<string, string>>;

export const LANG_STORAGE_KEY = "mf-lang";
