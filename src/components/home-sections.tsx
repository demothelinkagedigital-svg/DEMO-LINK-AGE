import { useState } from "react";
import { useEffect } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Quote, Star, Check, Send, ArrowRight, ChevronRight } from "lucide-react";

/* ───────────────── Portfolio Carousel ───────────────── */

export const portfolioProjects = [
  {
    tag: "Automotive",
    title: "Evan's Complete Automotive",
    desc: "Expert repair services brand built for trust, conversions and local SEO.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F88dab00ab7f44039b3292b0f9db0a910%2F07932a03f2194383a9e432693cb00ab1?format=webp&width=800&height=1200",
    url: "https://www.evanscompleteautomotive.com/",
  },
  {
    tag: "Home Services",
    title: "Dream House Cleaning Services",
    desc: "A bright, friendly site for a residential & commercial cleaning company.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F88dab00ab7f44039b3292b0f9db0a910%2F515d7e6e98aa4c7a9995ce51953dd901?format=webp&width=800&height=1200",
    url: "https://www.dreamhousecleaning.net/",
  },
  {
    tag: "Real Estate",
    title: "Take U There - Cash Offers",
    desc: "Cash-offer home buying landing experience focused on speed and clarity.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F88dab00ab7f44039b3292b0f9db0a910%2Fca2186ceed1043958f3908b9dcd5fc5e?format=webp&width=800&height=1200",
    url: "https://www.takeuthereservicesllc.site/",
  },
  {
    tag: "Auto Detailing",
    title: "Street Theory Detailing",
    desc: "Premium detailing brand with cinematic visuals and booking-first UX.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F88dab00ab7f44039b3292b0f9db0a910%2Fea20c048d1064392b9e20c073b22d0a5?format=webp&width=800&height=1200",
    url: "https://www.streettheorydetailing.com",
  },
];

export function PortfolioCarousel() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16" suppressHydrationWarning>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Selected Work</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Brands we've helped <span className="text-gradient-brand">go further.</span>
          </h2>
        </div>
        <Link to="/portfolio" className="text-sm font-semibold underline underline-offset-4 transition-colors duration-300 hover:text-primary">
          See full portfolio →
        </Link>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="mt-12">
        <CarouselContent className="-ml-4">
          {portfolioProjects.map((p, i) => (
            <CarouselItem key={p.title} className="pl-4 md:basis-1/2 lg:basis-1/2">
              <a
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
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-6 text-white">
                  <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium backdrop-blur">
                    {p.tag}
                  </span>
                  <div className="mt-3 font-display text-[10px] uppercase tracking-widest text-white/60">Project 0{i + 1}</div>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-white/80">{p.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90">
                    Visit live site <ChevronRight size={14} />
                  </span>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex items-center justify-end gap-3">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}

/* ───────────────── Pricing Summary ───────────────── */

const pricingItems = [
  { name: "Basic Website", price: "$299", note: "One-time", features: ["Up to 5 pages", "Responsive design", "Contact form"] },
  { name: "Business Website", price: "$599", note: "One-time", features: ["Up to 10 pages", "CMS integration", "On-page SEO"], featured: true },
  { name: "E-commerce Store", price: "$899", note: "One-time", features: ["Product catalog", "Payments setup", "Inventory & orders"] },
  { name: "Logo Design", price: "$99", note: "One-time", features: ["Logo concepts", "Source files", "Brand colors"] },
  { name: "Social Media Mgmt.", price: "$249", note: "per month", features: ["Content calendar", "Account management", "Reels & creatives"] },
  { name: "SEO Services", price: "$299", note: "per month", features: ["Technical SEO", "On-page optimization", "Monthly reporting"] },
];

export function PricingSummary() {
  return (
    <section className="bg-secondary/40" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Service packages <span className="text-gradient-brand">tailored to you.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Explore what each package includes and request a custom quote that fits your business needs.
            </p>
          </div>
          <Link to="/pricing" className="text-sm font-semibold underline underline-offset-4 transition-colors duration-300 hover:text-primary">View all services →</Link>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {pricingItems.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col bg-card p-7 transition-all duration-300 hover:bg-accent hover:shadow-brand ${
                  p.featured ? "lg:bg-gradient-brand lg:text-white lg:hover:bg-gradient-brand lg:hover:shadow-2xl" : ""
                }`}
              >
                {p.featured && (
                  <span className="absolute right-5 top-5 hidden rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur lg:inline-flex">
                    Popular
                  </span>
                )}
                <h3 className={`font-display text-lg font-semibold ${p.featured ? "lg:text-white" : ""}`}>{p.name}</h3>
                <ul className={`mt-5 space-y-2 text-sm ${p.featured ? "lg:text-white/90" : "text-muted-foreground"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={14} className={p.featured ? "lg:text-white" : "text-primary"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:translate-x-1 ${
                    p.featured ? "lg:text-white" : "text-foreground"
                  }`}
                >
                  Get started <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Testimonials ───────────────── */

const testimonials = [
  { name: "Sarah Mitchell", role: "Founder, Aurora Consulting", quote: "The team rebuilt our site in under three weeks and leads jumped almost immediately. Genuinely felt like a growth partner — not a vendor.", initials: "SM" },
  { name: "Daniel Roy", role: "CEO, Halcyon Apparel", quote: "Our store finally feels like the brand. Conversion is up 38% and the post-launch support has been incredible.", initials: "DR" },
  { name: "Priya Shah", role: "Marketing Lead, Bloomwell", quote: "Their social content engine took us from invisible to a real community. Reels reach went 4x in two months.", initials: "PS" },
  { name: "Marcus Lee", role: "Owner, Linden & Co.", quote: "Calm, organized, and the design taste is on another level. They translated a vague idea into a brand we're proud of.", initials: "ML" },
];

const teamMembers = [
  { name: "Bryan Davis", role: "Team Lead", initials: "BD", bio: "Leads strategy & design with expertise in digital growth." },
  { name: "Saadi", role: "Sr. Project Manager", initials: "SA", bio: "Manages projects with precision and collaborative approach." },
  { name: "Melissa James", role: "Creative Designer & Content Creator", initials: "MJ", bio: "Creates memorable designs and engaging visual content." },
  { name: "Luke James", role: "Sr. Project Manager", initials: "LJ", bio: "Drives project success through strategic planning." },
];

export function Testimonials() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Suppress ResizeObserver loop warnings from third-party widgets
    const originalWarn = console.warn;
    const originalError = console.error;

    const filterResizeObserverWarning = (args: any[]) => {
      const message = args[0]?.toString() || "";
      return !message.includes("ResizeObserver loop");
    };

    console.warn = function(...args: any[]) {
      if (filterResizeObserverWarning(args)) {
        originalWarn.apply(console, args);
      }
    };

    console.error = function(...args: any[]) {
      if (filterResizeObserverWarning(args)) {
        originalError.apply(console, args);
      }
    };

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Loved by the <span className="text-gradient-brand">teams we work with.</span>
        </h2>
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft">
        <div className="elfsight-app-60a34734-476a-494f-a25a-585ac60401d1" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}

/* ───────────────── Team Section ───────────────── */

export function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16" suppressHydrationWarning>
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Team</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Meet the people behind <span className="text-gradient-brand">your growth.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We're a collaborative team of designers, developers, and strategists dedicated to your success.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="group rounded-3xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-brand hover:scale-105">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white font-display text-2xl font-semibold shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300">
              {member.initials}
            </div>
            <h3 className="mt-6 font-display text-lg font-semibold">{member.name}</h3>
            <p className="mt-1 text-sm text-primary font-medium">{member.role}</p>
            <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Contact Form ───────────────── */

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Max 100 characters"),
  email: z.string().trim().email("Enter a valid email").max(255, "Max 255 characters"),
  company: z.string().trim().max(120, "Max 120 characters").optional(),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000, "Max 1000 characters"),
});

type ContactErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<ContactErrors>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company") || undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const next: ContactErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof ContactErrors;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setServerError(null);
    setSubmitting(true);

    // Honeypot (bot field) — if filled, silently succeed
    if (fd.get("botcheck")) { setSent(true); setSubmitting(false); return; }

    try {
      fd.append("access_key", "04fd7c41-1d3a-4f8a-90d5-dadb90d2bc2d");
      fd.append("subject", `New website enquiry from ${parsed.data.name}`);
      fd.append("from_name", "The Linkage Digital — Website");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setSent(true);
        formEl.reset();
      } else {
        setServerError(data?.message || "Could not send right now. Please try again.");
      }
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16" suppressHydrationWarning>
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
        <div className="grid lg:grid-cols-2">
          <div className="relative bg-gradient-to-br from-foreground via-foreground to-primary/20 p-10 text-background md:p-14 overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-brand)" }} />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Contact</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Let's work together.
              </h2>
              <p className="mt-4 max-w-md text-white/80">
                Tell us about your project and we'll get back within 24 hours with next steps.
              </p>
              <dl className="mt-10 space-y-4 text-sm text-white/85">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">Phone</dt>
                  <dd className="mt-1 font-medium"><a href="tel:+15122003815" className="transition-colors duration-300 hover:text-white">+1 (512) 200-3815</a></dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">Email</dt>
                  <dd className="mt-1 font-medium">info@thelinkagedigital.com</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">Website</dt>
                  <dd className="mt-1 font-medium">www.thelinkagedigital.com</dd>
                </div>
              </dl>
              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    { initials: "AJ", color: "from-blue-500 to-cyan-400" },
                    { initials: "MP", color: "from-purple-500 to-pink-400" },
                    { initials: "JC", color: "from-orange-500 to-red-400" },
                  ].map((member, i) => (
                    <div
                      key={i}
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${member.color} font-display text-xs font-semibold text-white border-2 border-background shadow-lg`}
                    >
                      {member.initials}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/70">Ready to help</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="p-10 md:p-14">
            <h3 className="font-display text-2xl font-semibold">Start a project</h3>
            <p className="mt-1 text-sm text-muted-foreground">Fill in the form — short or long, both work.</p>

            {/* Honeypot for spam bots — hidden from real users */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
              aria-hidden="true"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Jane Doe" error={errors.name} maxLength={100} />
              <Field name="email" label="Email" type="email" placeholder="jane@company.com" error={errors.email} maxLength={255} />
            </div>
            <Field className="mt-4" name="company" label="Company" placeholder="Optional" error={errors.company} maxLength={120} required={false} />

            <div className="mt-4">
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Project</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Tell us a bit about what you need..."
                className={`mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary ${
                  errors.message ? "border-destructive" : "border-border"
                }`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            {serverError && (
              <p className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">{serverError}</p>
            )}

            <button
              type="submit"
              disabled={submitting || sent}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95 disabled:opacity-75"
            >
              {sent ? "Thanks — we'll be in touch!" : submitting ? "Sending…" : (<>Send message <Send size={16} /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", placeholder, error, maxLength, required = true, className = "",
}: {
  name: string; label: string; type?: string; placeholder?: string; error?: string;
  maxLength?: number; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className={`mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

/* ───────────────── Homepage FAQ ───────────────── */

const homepageFaqs = [
  { q: "How long does a website take to build?", a: "Most projects take 1–3 weeks depending on complexity. We work fast without compromising quality." },
  { q: "Do I own the website after launch?", a: "Yes, complete ownership. You control hosting, domain, and all files. We hand over everything at launch." },
  { q: "What makes your agency different?", a: "We focus on growth, not just design. Every project is built to attract customers and drive real business results." },
  { q: "Can you help with SEO and marketing?", a: "Absolutely. We offer SEO services, social media management, paid advertising, and content strategy — all integrated with your website." },
];

export function HomepageFAQ() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" suppressHydrationWarning>
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Common Questions</p>
        <div className="mt-3 flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Questions? We have <span className="text-gradient-brand">answers.</span>
          </h2>
          <Link to="/faq" className="text-sm font-semibold text-foreground underline underline-offset-4 transition-colors duration-300 hover:text-primary whitespace-nowrap">
            See all →
          </Link>
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {homepageFaqs.map((f, i) => (
          <AccordionItem key={i} value={`hf-${i}`} className="rounded-2xl border border-border bg-card px-6 transition-all duration-300 hover:border-primary/50 hover:shadow-soft">
            <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline hover:text-primary transition-colors duration-300">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 text-center">
        <p className="text-muted-foreground">Still have questions?</p>
        <Link to="/contact" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors duration-300">
          Get in touch with our team <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  );
}
