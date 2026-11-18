import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Palette, Megaphone, Search, Video, TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Web Design, SEO & Digital Marketing Services | Texas | The Linkage Digital" },
      { name: "description", content: "Professional web design, SEO services, digital marketing, branding, and video production for Texas businesses. Full-stack creative solutions under one roof." },
      { property: "og:title", content: "Services - The Linkage Digital" },
      { property: "og:description", content: "Complete digital services for Texas businesses: web design, SEO, social media, branding, video editing." },
      { name: "keywords", content: "web design services Texas, SEO services Texas, digital marketing services, branding services Texas, video production Texas" },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Professional websites built for performance, speed, and conversions.", bullets: ["Responsive design", "CMS integration", "E-commerce ready", "Performance-tuned"] },
  { icon: Palette, title: "Logo & Branding", desc: "Complete brand identity including logos, color palettes, typography, and guidelines.", bullets: ["Logo systems", "Brand guidelines", "Visual identity", "Print collateral"] },
  { icon: Megaphone, title: "Social Media Marketing", desc: "Content creation, ad campaigns, and account management to grow your audience.", bullets: ["Content calendars", "Paid campaigns", "Community mgmt", "Reels & creatives"] },
  { icon: Search, title: "SEO Services", desc: "Keyword research, on-page optimization, technical SEO, and content strategy.", bullets: ["Technical audits", "On-page SEO", "Link building", "Content strategy"] },
  { icon: Video, title: "Video Editing", desc: "Promotional videos, reels, ads, and motion graphics for modern marketing.", bullets: ["Promo videos", "Reels & shorts", "Ad creatives", "Motion graphics"] },
  { icon: TrendingUp, title: "Business Growth Consulting", desc: "Digital strategies to help you attract more leads and increase revenue.", bullets: ["Growth audits", "Funnel design", "Lead systems", "Analytics setup"] },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-20 lg:pt-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Everything to <span className="text-gradient-brand">launch, grow, scale.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          One team for design, development, and marketing — so your brand stays consistent from first impression to long-term growth.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-brand">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand">
                  <s.icon size={22} />
                </div>
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-brand p-12 text-center shadow-brand md:p-16 transition-all duration-300 hover:shadow-2xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Not sure which service fits?</h2>
          <p className="mt-3 text-white/80">We'll help you choose the right combination — free 20-minute consultation.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 active:scale-95">
            Book a Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
