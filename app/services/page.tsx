import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard, CustomSolutionBanner } from "@/components/ui/ServiceCard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Service } from "@/types";

export const revalidate = 60; // revalidate at most every minute

export default async function ServicesPage() {
  const query = groq`*[_type == "service"] | order(order asc)`;
  const services: Service[] = await client.fetch(query);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" aria-labelledby="services-heading">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1} direction="up" className="text-center mb-16">
            <h1 id="services-heading" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground mb-4">
              Elevate Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Digital Presence </span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Transparent pricing, no hidden fees. Choose the tier that fits your vision — we&apos;ll handle the technical complexity.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto relative z-10">
              {services && services.map((service, index) => (
                <ServiceCard key={service._id} service={service} index={index} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="mt-16 max-w-3xl mx-auto w-full">
            <CustomSolutionBanner />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}