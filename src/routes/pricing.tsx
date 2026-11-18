import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Transparent Pricing for Web Design & Digital Services | Texas | The Linkage Digital" },
      { name: "description", content: "Affordable, transparent pricing for Texas businesses. Website design from $299, SEO services, branding, and digital marketing. Custom quotes available." },
      { property: "og:title", content: "Pricing - The Linkage Digital" },
      { property: "og:description", content: "Web design, SEO, and marketing services starting from $299. Flexible packages for Texas businesses." },
      { name: "keywords", content: "web design pricing, SEO pricing, digital marketing pricing Texas, affordable web services" },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Basic Website",
    price: "$299",
    desc: "A polished landing presence for new businesses.",
    features: [
      "Up to 5 pages",
      "Fully responsive design",
      "Contact form with email notifications",
      "Basic on-page SEO",
      "Mobile-optimized layout",
      "Clean, modern design",
      "Fast loading speeds",
      "Browser compatibility"
    ]
  },
  {
    name: "Business Website",
    price: "$599",
    desc: "A complete site for established companies.",
    features: ["Up to 10 pages", "CMS integration", "On-page SEO", "Analytics setup"],
    featured: true
  },
  {
    name: "E-commerce Store",
    price: "$899",
    desc: "Sell online with a store built to convert.",
    features: ["Product catalog", "Payments setup", "Inventory & orders", "Launch support"]
  },
];

const addons = [
  { name: "Logo Design", price: "$99" },
  { name: "Social Media Management", price: "$249/mo" },
  { name: "SEO Services", price: "$299/mo" },
];

function Pricing() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-20 lg:pt-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Flexible pricing for <span className="text-gradient-brand">every business.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Transparent starting points. Need something custom? We'll build a package that fits.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground">One-time Payment</h2>
          <p className="mt-2 text-muted-foreground">No subscriptions. No hidden fees. Build your digital presence with a single investment.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 ${
                p.featured
                  ? "border-transparent bg-gradient-brand text-white shadow-brand"
                  : "border-border bg-card shadow-soft"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className={p.featured ? "text-white" : "text-primary"} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  p.featured ? "bg-white text-foreground hover:shadow-lg" : "bg-foreground text-background hover:shadow-brand"
                }`}
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-8">
          <h3 className="font-display text-2xl font-semibold">Add-on services</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {addons.map((a) => (
              <div key={a.name} className="rounded-2xl border border-border p-5">
                <span className="font-medium">{a.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Need a custom quote?{" "}
          <Link to="/contact" className="font-semibold text-foreground underline underline-offset-4">
            Contact us for a tailored package.
          </Link>
        </p>
      </section>
    </>
  );
}
