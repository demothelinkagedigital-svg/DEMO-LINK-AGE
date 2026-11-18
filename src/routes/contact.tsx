import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Globe, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact The Linkage Digital | Web Design & Marketing Services" },
      { name: "description", content: "Get in touch with The Linkage Digital. Contact us for web design, SEO, digital marketing, or branding services. Free consultation available." },
      { property: "og:title", content: "Contact - The Linkage Digital" },
      { property: "og:description", content: "Contact The Linkage Digital for your web design and digital marketing needs." },
      { name: "keywords", content: "contact web designer, digital marketing agency contact, web design services contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    if (fd.get("botcheck")) { setSent(true); return; }
    setSubmitting(true);
    setError(null);
    fd.append("access_key", "04fd7c41-1d3a-4f8a-90d5-dadb90d2bc2d");
    fd.append("subject", `New contact form submission from ${fd.get("name") || "website"}`);
    fd.append("from_name", "The Linkage Digital — Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) { setSent(true); formEl.reset(); }
      else setError(data?.message || "Could not send right now. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:pt-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
            Let's work <span className="text-gradient-brand">together.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Tell us about your project and we'll help bring your vision to life.
          </p>

          <div className="mt-10 space-y-4">
            <a href="tel:+15122003815" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:bg-accent hover:border-primary/50 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-semibold">+1 (512) 200-3815</div>
              </div>
            </a>
            <a href="mailto:info@thelinkagedigital.com" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:bg-accent hover:border-primary/50 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-semibold">info@thelinkagedigital.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <Globe size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Website</div>
                <div className="font-semibold">www.thelinkagedigital.com</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We typically respond within 24 hours.</p>

          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
          </div>
          <Field className="mt-4" label="Company" name="company" placeholder="Optional" required={false} />
          <div className="mt-4">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground" htmlFor="message">Project</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={1000}
              placeholder="Tell us a bit about what you need..."
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>

          {error && <p className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={submitting || sent}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95 disabled:opacity-75"
          >
            {sent ? "Thanks — we'll be in touch!" : submitting ? "Sending…" : (<>Send message <Send size={16} /></>)}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = true, className = "" }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={255}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
