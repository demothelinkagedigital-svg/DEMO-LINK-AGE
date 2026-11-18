import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Palette, Megaphone, Search, Video, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { PricingSummary, Testimonials, ContactSection, HomepageFAQ } from "@/components/home-sections";
import { AnimatedCounter } from "@/components/animated-counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Design & Digital Marketing Agency in Texas | The Linkage Digital" },
      { name: "description", content: "Leading Texas web design, branding, and digital marketing agency. We help Texas businesses grow with responsive websites, SEO services, and creative solutions." },
      { property: "og:title", content: "The Linkage Digital - Texas Digital Agency" },
      { property: "og:description", content: "Transform your Texas business with expert web design, branding, SEO, and digital marketing services." },
      { name: "keywords", content: "web design Texas, digital marketing Texas, SEO agency Texas, branding Texas, web development Texas" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "Texas" },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Modern, responsive, high-converting websites tailored to your business goals." },
  { icon: Palette, title: "Branding & Logo Design", desc: "Build a memorable brand identity that stands out in your market." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Reach the right audience with strategic social and online campaigns." },
  { icon: Search, title: "SEO Optimization", desc: "Improve search rankings and drive organic traffic to your business." },
  { icon: Video, title: "Video Editing & Motion", desc: "Engaging visual content that captures attention and converts." },
  { icon: TrendingUp, title: "Business Consulting", desc: "Practical strategies to help your business grow online." },
];

const reasons = [
  "Custom solutions for every business",
  "Fast turnaround times",
  "Affordable pricing",
  "Professional communication",
  "Long-term support",
  "Focus on business growth, not just design",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" suppressHydrationWarning>
        <div
          className="absolute inset-0 -z-10 opacity-90"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:pt-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles size={14} className="text-primary" /> Trusted Digital Growth Partner
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Turning Ideas Into <span className="text-gradient-brand">Digital Success.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              We help businesses grow through stunning websites, powerful branding, and result-driven digital marketing. Whether you're launching a startup or scaling an established company, we deliver creative solutions that generate real results.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* stats */}
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
            <div>
              <AnimatedCounter endValue={120} suffix="+" />
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <AnimatedCounter endValue={60} suffix="+" />
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <AnimatedCounter endValue={6} />
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Service Verticals</div>
            </div>
            <div>
              <AnimatedCounter endValue={100} suffix="%" />
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Growth-Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16" suppressHydrationWarning>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Everything you need to grow online.
            </h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-foreground underline underline-offset-4">
            All services →
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-background p-8 transition-colors hover:bg-accent">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand">
                <s.icon size={22} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Basic Website Features */}
      <section className="mx-auto max-w-7xl px-6 py-16" suppressHydrationWarning>
        <div className="rounded-3xl border border-border bg-card p-12 shadow-soft md:p-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Get started with our <span className="text-gradient-brand">Basic Website package.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Perfect for new businesses and startups. Everything you need to establish a professional online presence.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Up to 4 pages website</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Fully responsive design</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Contact form with email notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Mobile-optimized layout</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Basic on-page SEO</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Clean, modern design</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Fast loading speeds</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-base text-foreground">Browser compatibility</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
            >
              Explore More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-foreground text-background" suppressHydrationWarning>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-background/60">Why Choose Us</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              A trusted partner <br />
              <span className="text-gradient-light">obsessed with results.</span>
            </h2>
            <p className="mt-6 max-w-md text-background/70">
              We don't just hand off pretty files. We're in it with you — strategy, design, build, and the growth that follows.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-2xl border border-background/10 bg-background/5 p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} />
                <span className="text-sm font-medium text-background">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Pricing summary */}
      <PricingSummary />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact form */}
      <ContactSection />

      {/* FAQ */}
      <HomepageFAQ />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16" suppressHydrationWarning>
        <div className="overflow-hidden rounded-3xl bg-gradient-brand p-12 text-center shadow-brand md:p-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to grow your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Let's create a digital presence that attracts customers and increases sales.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
