import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroPizza from "@/assets/hero-pizza.jpg";
import { categories, extras, type Lang } from "@/data/menu";
import { LANG_STORAGE_KEY, langOptions, ui } from "@/i18n/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madame Ferrat · Pizzas al horno de leña" },
      {
        name: "description",
        content:
          "Carta de Madame Ferrat en español, francés e inglés: pizzas artesanas al horno de leña desde 8€, platos, tacos, hamburguesas y bocadillos.",
      },
      { property: "og:title", content: "Madame Ferrat · Pizzas al horno de leña" },
      {
        property: "og:description",
        content:
          "Pizzas artesanas al horno de leña, tacos, hamburguesas y más. Carta disponible en ES · FR · EN.",
      },
      { property: "og:type", content: "restaurant.menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [active, setActive] = useState(categories[0].id);

  // El selector de idioma se muestra en cada visita.
  useEffect(() => {
    setPickerOpen(true);
  }, []);

  const choose = (code: Lang) => {
    setLang(code);
    setPickerOpen(false);
  };


  const l: Lang = lang ?? "es";
  const t = ui[l];
  const category = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <main className="min-h-screen">
      {pickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 px-5 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-2xl border border-ember/40 bg-card p-8 text-center shadow-warm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
              <span className="font-display text-xl italic text-gold">MF</span>
            </div>
            <h2 className="mt-5 font-display text-2xl">
              <span className="text-gradient-ember">Madame Ferrat</span>
            </h2>
            <p className="mt-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Idioma · Langue · Language
            </p>
            <div className="mt-7 flex flex-col gap-3">
              {langOptions.map((o) => (
                <button
                  key={o.code}
                  onClick={() => choose(o.code)}
                  className="group rounded-xl border border-border px-5 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-ember/60 hover:shadow-warm"
                >
                  <span className="font-display text-lg">{o.label}</span>
                  <span className="block text-xs text-muted-foreground">{o.native}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <header className="relative isolate overflow-hidden">
        <img
          src={heroPizza}
          alt={t.heroAlt}
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-veil" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-background/30 backdrop-blur-sm">
            <span className="font-display text-2xl italic text-gold">MF</span>
          </div>
          <h1 className="mt-6 font-display text-5xl tracking-tight sm:text-7xl">
            Madame Ferrat
          </h1>
          <div className="mt-4 flex items-center gap-3 text-gold/90">
            <span className="h-px w-8 bg-gold/40" />
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-sm">
                ★
              </span>
            ))}
            <span className="h-px w-8 bg-gold/40" />
          </div>
          <p className="mt-5 text-sm tracking-[0.22em] text-muted-foreground uppercase sm:text-base">
            {t.tagline}
          </p>
        </div>
      </header>

      <nav className="sticky top-0 z-10 border-y border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-4 py-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2 text-sm tracking-wide transition-all",
                active === c.id
                  ? "border-transparent bg-ember font-medium text-ember-foreground shadow-warm"
                  : "border-border text-muted-foreground hover:border-ember/60 hover:text-foreground",
              )}
            >
              {c.label[l]}
            </button>
          ))}
          <button
            onClick={() => setPickerOpen(true)}
            aria-label={t.changeLang}
            className="ml-auto shrink-0 rounded-full border border-border px-4 py-2 text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:border-gold/60 hover:text-gold"
          >
            {l}
          </button>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-ember/40" />
          <h2 className="text-center font-display text-3xl sm:text-4xl">
            <span className="text-gradient-ember">{category.title[l]}</span>
          </h2>
          <span className="h-px w-12 bg-ember/40" />
        </div>
        {category.subtitle && (
          <p className="mt-3 text-center text-sm tracking-[0.18em] text-muted-foreground uppercase">
            {category.subtitle[l]}
          </p>
        )}

        {category.items.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
            {t.empty}
          </p>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {category.items.map((item) => (
              <li
                key={item.name.es}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-ember/60 hover:shadow-warm"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl">{item.name[l]}</h3>
                  {item.price && (
                    <span className="font-display text-xl text-ember">{item.price}</span>
                  )}
                  {item.sizes && (
                    <span className="flex shrink-0 gap-2">
                      {item.sizes.map((s) => (
                        <span
                          key={s.label}
                          className="flex items-baseline gap-1 rounded-full bg-secondary px-3 py-1"
                        >
                          <span className="text-xs text-muted-foreground">{s.label}</span>
                          <span className="font-display text-base text-ember">
                            {s.price}
                          </span>
                        </span>
                      ))}
                    </span>
                  )}
                </div>
                {item.description[l] && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description[l]}
                  </p>
                )}
                {item.tag && (
                  <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs tracking-wide text-gold uppercase">
                    {item.tag[l]}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        {category.id === "pizzas" && (
          <div className="mt-14 rounded-2xl border border-ember/40 bg-card/60 p-7">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold/40" />
              <h3 className="text-center font-display text-2xl text-gold">
                {t.extrasTitle}
              </h3>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
              {extras.map((extra) => (
                <li
                  key={extra.name.es}
                  className="flex items-baseline justify-between gap-3 border-b border-dashed border-border pb-2 text-sm"
                >
                  <span>{extra.name[l]}</span>
                  <span className="text-ember">{extra.price}</span>
                </li>
              ))}
            </ul>
            {category.note && (
              <p className="mt-6 text-center text-xs tracking-wide text-muted-foreground">
                * {category.note[l]}
              </p>
            )}
          </div>
        )}
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg text-foreground">Madame Ferrat</p>
        <p className="mt-2">{t.footerTagline}</p>
      </footer>
    </main>
  );
}
