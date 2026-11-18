import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Mail, Globe, Phone, Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-reveal";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fc9eb1ef2d46349c996d329a3c104d50e%2Feb0af1f72a8449918a7b57d25e11d152?format=webp&width=800&height=1200";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://instagram.com/thelinkagedigital", label: "Instagram", Icon: Instagram },
  { href: "https://facebook.com/thelinkagedigital", label: "Facebook", Icon: Facebook },
  { href: "https://linkedin.com/company/thelinkagedigital", label: "LinkedIn", Icon: Linkedin },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  // Close on route change & lock body scroll while open
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80">
          <img src={logoUrl} alt="The Linkage Digital" className="h-10 w-10 object-contain" />
          <span className="font-display text-base font-semibold tracking-tight">
            The Linkage <span className="text-gradient-brand">Digital</span>
          </span>
        </Link>

        {/* Desktop nav with sibling-blur hover effect */}
        <nav className="nav-group hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`nav-link relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="relative z-10">{n.label}</span>
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-fuchsia-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href="tel:+15122003815"
          className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 lg:inline-flex"
        >
          Book a Call
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile drawer: slides in from right, 50% width, with blurred backdrop */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop blur */}
        <button
          aria-label="Close menu backdrop"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Drawer */}
        <aside
          className={`fixed right-0 top-0 h-screen w-1/2 min-w-[260px] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 flex-shrink-0">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <img src={logoUrl} alt="" className="h-8 w-8 object-contain rounded" />
              <span className="font-display text-sm font-semibold text-foreground">Linkage</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-foreground transition-colors hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-3 border-t border-gray-200 px-5 py-5 flex-shrink-0 bg-white">
            <a
              href="tel:+15122003815"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-brand"
            >
              <Phone size={14} /> Book a Call
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-foreground"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>

            <div className="flex items-center justify-center gap-3 pt-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-foreground transition-colors hover:bg-gray-100 hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="The Linkage Digital" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-semibold">The Linkage Digital</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-background/70">
            Design • Development • Marketing • Growth. Turning ideas into digital success.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-background/15 text-background/80 transition-colors hover:bg-background hover:text-foreground"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-background">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            {nav.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors duration-300 hover:text-background">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-background">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li className="flex items-center gap-2"><Phone size={14} /> <a href="tel:+15122003815" className="transition-colors duration-300 hover:text-background">+1 (512) 200-3815</a></li>
            <li className="flex items-center gap-2"><Mail size={14} /> info@thelinkagedigital.com</li>
            <li className="flex items-center gap-2"><Globe size={14} /> www.thelinkagedigital.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-background/60 md:flex-row">
          <p>© 2026 The Linkage Digital. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
