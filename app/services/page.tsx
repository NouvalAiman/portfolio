"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles, Shield, Crown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const tiers = [
  {
    name: "Starter",
    price: "Mulai dari Rp 480.000",
    description: "Landing page super cepat untuk personal branding atau bisnis kecil (100% Next.js, tanpa database).",
    features: [
      "Desain responsif 1 Halaman",
      "Performa sangat cepat & SEO Friendly",
      "Tombol Direct CTA terhubung ke WhatsApp",
      "Hosting gratis & cepat via Vercel Netlify",
      "Maksimal 1x revisi minor (teks & gambar)",
      "Gratis subdomain / Domain lokal (.my.id) 1 tahun",
    ],
    limitations: [
      "Tidak ada Dashboard Admin / CMS",
      "Tidak menggunakan Laravel & Database",
      "Tidak ada fitur multi-page (hanya 1 halaman)",
      "Perubahan konten selanjutnya dikenakan biaya",
      "Contact Form to Email Integration",
    ],
    ctaText: "Pilih Starter",
    popular: false,
    color: "primary",
  },
  {
    name: "Professional",
    price: "Mulai dari Rp 2.900.000",
    description: "Website Company Profile dinamis. Laravel bertindak sebagai Headless CMS, Next.js sebagai Frontend.",
    features: [
      "Multi-page Website (Maks 7 halaman)",
      "Custom CMS berbasis Laravel yang aman",
      "Database MySQL terstruktur",
      "Kecepatan tinggi (Next.js fetch API ke Laravel)",
      "Optimasi SEO Lanjutan (Meta Tags dinamis)",
      "Hosting Frontend Vercel + Backend Cloud Hosting 1 tahun",
      "Maksimal 3x revisi minor UI",
      "Contact Form to Email Integration",
    ],
    limitations: [
      "Tidak ada fitur transaksi / e-commerce",
      "Tidak ada fitur login untuk User umum",
      "Belum termasuk domain premium (.com/.id)",
    ],
    ctaText: "Pilih Professional",
    popular: true,
    color: "secondary",
  },
  {
    name: "Enterprise",
    price: "Mulai dari Rp 4.700.000",
    description: "Sistem Informasi Manajemen Dasar & Web App Custom Ringan (Next.js + Laravel API).",
    features: [
      "Web App Custom (Absensi, Portal Sekolah, dll)",
      "Dashboard Admin Profesional (Filament/Nova)",
      "Sistem Autentikasi & Multi-Role (RBAC)",
      "Fitur Export Laporan Dasar (PDF/Excel)",
      "Maksimal 13 Halaman / Modul fungsional",
      "Integrasi API Standar (WA Gateway / G-Maps)",
      "Hosting VPS Entry-Level + Vercel & Domain 1 tahun",
      "Garansi Bug & Support Prioritas 30 Hari",
      "Contact Form to Email Integration",
    ],
    limitations: [
      "Tidak ada payment gateway otomatis",
      "Tidak termasuk integrasi hardware (RFID/Fingerprint)",
      "Bukan aplikasi ERP skala besar (Fokus MVP)",
      "Perubahan alur bisnis drastis dikenakan biaya tambahan",
    ],
    ctaText: "Konsultasi Enterprise",
    popular: false,
    color: "primary",
  },
];

export default function ServicesPage() {
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
              Transparent pricing, no hidden fees. Choose the tier that fits your vision — we'll handle the technical complexity.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto relative z-10">
              {tiers.map((tier, index) => (
                <motion.article
                  key={tier.name}
                  className={`relative group glass-hover rounded-2xl overflow-hidden h-full flex flex-col ${
                    tier.popular
                      ? "border-2 border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.2)] relative"
                      : "border border-border/50"
                  }`}
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                    {tier.popular && (
                      <motion.div
                        className="absolute top-4 right-4 bg-primary text-background font-mono text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_var(--primary-glow)]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        Most Popular
                      </motion.div>
                    )}

                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                      <div className="mb-4">
                        <motion.span
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono glass border-border/50 rounded-full text-muted"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Crown className="w-3 h-3 text-primary" />
                          {tier.name}
                        </motion.span>
                      </div>

                      <div className="mb-6">
                        <motion.div
                          className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          {tier.price}
                        </motion.div>
                        <p className="text-muted text-sm leading-relaxed">{tier.description}</p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="flex items-center gap-2 font-heading font-semibold text-foreground mb-3">
                            <Check className="w-5 h-5 text-green-500" />
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {tier.features.map((feature, i) => (
                              <motion.li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.05 }}
                              >
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-2 font-heading font-semibold text-muted mb-3">
                            <X className="w-5 h-5 text-muted" />
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {tier.limitations.map((limitation, i) => (
                              <motion.li
                                key={limitation}
                                className="flex items-start gap-2 text-sm text-muted"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + i * 0.05 }}
                              >
                                <X className="w-4 h-4 text-muted/50 flex-shrink-0 mt-0.5" />
                                <span className="text-muted">{limitation}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <motion.a
                        href="/#contact"
                        className={`mt-auto w-full py-3 px-4 rounded-lg font-heading font-semibold text-base text-center transition-all ${
                          tier.popular
                            ? "bg-primary text-background hover:brightness-110 glow-primary"
                            : "glass border-border/50 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {tier.ctaText}
                        <ArrowRight className="w-4 h-4 inline-block ml-2 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="mt-16 max-w-3xl mx-auto w-full">
              <div className="glass-hover rounded-2xl p-6 lg:p-8 text-center">
                <motion.div
                  className="p-3 glass border-border/50 rounded-lg text-primary mx-auto w-fit mb-4"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <Shield className="w-6 h-6" />
                </motion.div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-3">
                  Butuh solusi custom?
                </h3>
                <p className="text-muted max-w-xl mx-auto mb-6">
                  Setiap bisnis unik. Jika butuh kombinasi fitur khusus, integrasi legacy system, atau arsitektur khusus — mari diskusikan.
                </p>
                <motion.a
                  href="https://wa.me/6288213842912?text=Halo%20Nouval,%20saya%20tertarik%20untuk%20diskusi%20mengenai%20pembuatan%20proyek%20website%20custom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass border-border/50 text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Diskusi Proyek Custom
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </FadeIn>
        </div>
      </section>
    </main>
  );
}