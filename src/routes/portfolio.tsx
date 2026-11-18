import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { portfolioProjects } from "@/components/home-sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Web Design & Marketing Projects | The Linkage Digital" },
      { name: "description", content: "Explore real client websites built by The Linkage Digital — automotive, home services, real estate, and auto detailing brands." },
      { property: "og:title", content: "Portfolio - The Linkage Digital" },
      { property: "og:description", content: "Live client websites built and marketed by The Linkage Digital." },
      { name: "keywords", content: "portfolio, web design projects, Texas agency work, client websites" },
    ],
  }),
  component: Portfolio,
});

const categories = ["Business Websites", "E-commerce Stores", "Brand Identity Designs", "Social Media Campaigns", "Marketing Creatives"];

function Portfolio() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-20 lg:pt-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Work</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Brands we've helped <span className="text-gradient-brand">go further.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Real, live client websites — hover any card to scroll through the full page, or click to open the live site.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.title} live website`}
              className="portfolio-card group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:shadow-brand focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div
                className="portfolio-shot absolute inset-0"
                style={{ backgroundImage: `url(${p.image})` }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-7 text-white">
                <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                  {p.tag}
                </span>
                <div className="mt-3 font-display text-[10px] uppercase tracking-widest text-white/60">Project 0{i + 1}</div>
                <h3 className="mt-1 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-1.5 max-w-md text-sm text-white/80">{p.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90">
                  Visit live site <ChevronRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
