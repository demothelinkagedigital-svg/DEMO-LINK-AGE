import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import SiteLayout from "@/components/SiteLayout";

// SEO Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Linkage Digital",
  "description": "Creative digital agency in Texas specializing in web design, branding, and digital marketing",
  "url": "https://thelinkagedigital.com",
  "email": "info@thelinkagedigital.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Texas",
    "addressCountry": "US"
  },
  "areaServed": "Texas, USA",
  "serviceType": ["Web Design", "Web Development", "Branding", "SEO", "Digital Marketing", "Video Production"],
  "sameAs": ["https://facebook.com", "https://linkedin.com", "https://instagram.com"]
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#6f3f7f" },
      { name: "format-detection", content: "telephone=no" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
      { httpEquiv: "X-Frame-Options", content: "SAMEORIGIN" },
      { httpEquiv: "Permissions-Policy", content: "geolocation=(), microphone=(), camera=()" },
      { title: "The Linkage Digital — Web Design, Branding & Digital Marketing Agency" },
      { name: "description", content: "Creative digital agency for websites, branding, marketing, SEO, and video. We help businesses grow online with stunning sites and result-driven campaigns." },
      { name: "keywords", content: "web design, web development, branding, SEO, digital marketing, social media management, e-commerce, Texas digital agency" },
      { name: "author", content: "The Linkage Digital" },
      { property: "og:site_name", content: "The Linkage Digital" },
      { property: "og:title", content: "The Linkage Digital — Turning Ideas Into Digital Success" },
      { property: "og:description", content: "Websites, branding & marketing that drive real business growth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thelinkagedigital.com/" },
      { property: "og:image", content: "/brand/linkage-logo.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Linkage Digital" },
      { name: "twitter:description", content: "Websites, branding & marketing that drive real business growth." },
      { name: "twitter:image", content: "/brand/linkage-logo.svg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://www.thelinkagedigital.com/" },
      { rel: "icon", href: "https://cdn.builder.io/api/v1/image/assets%2Fc9eb1ef2d46349c996d329a3c104d50e%2Feb0af1f72a8449918a7b57d25e11d152?format=webp&width=800&height=1200", type: "image/webp" },
      { rel: "apple-touch-icon", href: "https://cdn.builder.io/api/v1/image/assets%2Fc9eb1ef2d46349c996d329a3c104d50e%2Feb0af1f72a8449918a7b57d25e11d152?format=webp&width=800&height=1200" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        children: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/684ad4edc3b32f1912961f53/1itiaadft';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
