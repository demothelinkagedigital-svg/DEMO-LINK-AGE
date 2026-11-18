import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import { TeamSection } from "@/components/home-sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The Linkage Digital | Texas Digital Agency" },
      { name: "description", content: "Learn about The Linkage Digital - a Texas-based creative agency dedicated to helping businesses build strong online presence through expert design, technology, and digital marketing." },
      { property: "og:title", content: "About The Linkage Digital" },
      { property: "og:description", content: "Texas digital agency committed to smart digital strategies and measurable business growth." },
      { name: "keywords", content: "about The Linkage Digital, Texas agency, digital services Texas" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 lg:pt-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          We turn ideas into <span className="text-gradient-brand">measurable growth.</span>
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
          The Linkage Digital is a creative digital agency dedicated to helping businesses establish a strong online presence. We combine design, technology, and marketing to create solutions that not only look great but also deliver measurable results.
        </p>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          From startups to established companies, we work closely with our clients to understand their goals and turn their ideas into successful digital experiences.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, t: "Mission", d: "Help businesses grow through smart, results-driven digital strategies." },
            { icon: Eye, t: "Vision", d: "To become a trusted digital growth partner for businesses worldwide." },
            { icon: Heart, t: "Values", d: "Honest collaboration, craft, and long-term commitment to client success." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand">
                <x.icon size={22} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{x.t}</h3>
              <p className="mt-2 text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-foreground p-12 text-center text-background md:p-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let's build something that <span className="text-gradient-brand">moves the needle.</span>
          </h2>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
