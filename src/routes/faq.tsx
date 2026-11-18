import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Web Design, SEO & Marketing Questions | The Linkage Digital Texas" },
      { name: "description", content: "Find answers to common questions about web design, SEO services, digital marketing, and web development for Texas businesses." },
      { property: "og:title", content: "FAQ - The Linkage Digital" },
      { property: "og:description", content: "Common questions about our web design, SEO, and marketing services in Texas." },
      { name: "keywords", content: "FAQ web design, SEO questions, Texas digital marketing, website design questions" },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How long does a website take to design and develop?", a: "Most projects are completed within 1–3 weeks depending on complexity, scope, and how quickly we receive content and feedback. For Texas businesses, we prioritize quick turnarounds without compromising quality." },
  { q: "Do I own the website and domain?", a: "Yes — the website and domain belong entirely to you. We hand over full access and ownership at launch. You control your hosting, email, and all assets." },
  { q: "Do you provide support and maintenance after launch?", a: "Absolutely. We offer ongoing maintenance, updates, security patches, and support packages so your site keeps running smoothly. Texas businesses appreciate our responsive support team." },
  { q: "Can you help with SEO and digital marketing too?", a: "Yes. We provide social media marketing, SEO services, paid advertising, and content strategy — all under one roof. For Texas businesses, we optimize for local search rankings." },
  { q: "Do you serve Texas businesses specifically?", a: "Yes! We specialize in helping Texas businesses grow online. We understand the Texas market and optimize websites for local search visibility across all major Texas cities and regions." },
  { q: "What is your experience with local SEO for Texas companies?", a: "We have extensive experience with local SEO optimization for Texas businesses. This includes Google My Business optimization, local citations, geo-targeted keywords, and location-based content strategies." },
  { q: "Can you help with e-commerce website development?", a: "Yes. We build full-featured e-commerce stores with payment processing, inventory management, and conversion optimization. Great for Texas retailers wanting to sell online." },
  { q: "Do you offer social media marketing services?", a: "Absolutely. We create content calendars, manage accounts, produce reels and creatives, and run paid social campaigns. We help Texas brands build engaged audiences and drive sales." },
  { q: "What industries do you have experience with?", a: "We've worked with businesses across many industries including consulting, apparel, wellness, automotive, and professional services. No matter your Texas industry, we bring relevant expertise." },
  { q: "How do you determine pricing for custom projects?", a: "We base pricing on project scope, complexity, timeline, and deliverables. We provide transparent quotes with no hidden fees. Contact us for a free consultation about your Texas business needs." },
];

function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 pt-12 lg:pt-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
        Questions, <span className="text-gradient-brand">answered.</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">Everything you need to know before getting started.</p>

      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`f-${i}`} className="rounded-2xl border border-border bg-card px-6 transition-all duration-300 hover:border-primary/50 hover:shadow-soft">
            <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline hover:text-primary transition-colors duration-300">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
