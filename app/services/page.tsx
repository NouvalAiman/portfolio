import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard, CustomSolutionBanner } from "@/components/ui/ServiceCard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Service } from "@/types";
import { Sparkles } from "lucide-react";

export const revalidate = 60; // revalidate at most every minute

const fallbackServices: Service[] = [
  {
    _id: "fallback-1",
    title: "Landing Page / Portofolio",
    price: "Rp 1.500.000",
    description: "Website satu halaman responsif, modern, dan dioptimalkan untuk konversi serta SEO tinggi.",
    pros: [
      "Desain custom responsive (Mobile & Desktop)",
      "Tech stack Next.js & Tailwind CSS modern",
      "Animasi interaktif halus (Framer Motion)",
      "Form kontak otomatis terhubung ke email",
      "Revisi minor hingga 3x",
    ],
    cons: ["Tidak termasuk CMS backend kompleks", "Maksimal 5 section konten"],
    isPopular: false,
    ctaText: "Pilih Starter",
    ctaLink: "/#contact",
    order: 1,
  },
  {
    _id: "fallback-2",
    title: "Full-Stack Web App",
    price: "Rp 4.500.000",
    description: "Aplikasi web dinamis lengkap dengan backend Laravel / Next.js, database, dan panel admin.",
    pros: [
      "Arsitektur MVC / RESTful API rapi",
      "Panel Admin untuk kelola konten & data",
      "Autentikasi pengguna & perizinan aman",
      "Integrasi database MySQL / PostgreSQL",
      "Support & garansi bug fix 1 bulan",
    ],
    cons: ["Belum termasuk payment gateway multi-vendor"],
    isPopular: true,
    ctaText: "Pilih Pro",
    ctaLink: "/#contact",
    order: 2,
  },
  {
    _id: "fallback-3",
    title: "Custom Enterprise Solution",
    price: "Custom",
    description: "Sistem berskala besar dengan arsitektur khusus, integrasi sistem eksisting, dan performa tinggi.",
    pros: [
      "Arsitektur disesuaikan kebutuhan spesifik",
      "Integrasi third-party API / Payment Gateway",
      "Keamanan, caching & optimasi database",
      "Dokumentasi teknis & deployment cloud",
      "Prioritas konsultasi & maintenance berkala",
    ],
    cons: [],
    isPopular: false,
    ctaText: "Hubungi Kami",
    ctaLink: "/#contact",
    order: 3,
  },
];

export default async function ServicesPage() {
  const query = groq`*[_type == "service"] | order(order asc)`;
  let services: Service[] = [];
  try {
    services = await client.fetch(query);
  } catch {
    services = [];
  }

  const displayServices = services && services.length > 0 ? services : fallbackServices;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" aria-labelledby="services-heading">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1} direction="up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-6 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Pricing & Services</span>
            </div>
            <h1 id="services-heading" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground mb-4">
              Elevate Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Digital Presence </span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Transparent pricing, no hidden fees. Choose the tier that fits your vision — we&apos;ll handle the technical complexity.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto relative z-10 items-stretch">
              {displayServices.map((service, index) => (
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