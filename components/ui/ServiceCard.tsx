"use client";

import { motion } from "framer-motion";
import { Check, X, Crown, ArrowRight, Shield } from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.article
      key={service._id}
      className={`relative group glass-hover rounded-2xl overflow-hidden h-full flex flex-col ${
        service.isPopular
          ? "border-2 border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.2)] relative"
          : "border border-border/50"
      }`}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
    >
      {service.isPopular && (
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
            {service.title}
          </motion.span>
        </div>

        <div className="mb-6">
          <motion.div
            className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {service.price}
          </motion.div>
          {service.description && (
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          )}
        </div>

        <div className="space-y-4 mb-6">
          {service.pros && service.pros.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-heading font-semibold text-foreground mb-3">
                <Check className="w-5 h-5 text-green-500" />
                Pros
              </h4>
              <ul className="space-y-2">
                {service.pros.map((feature, i) => (
                  <motion.li
                    key={i}
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
          )}

          {service.cons && service.cons.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 font-heading font-semibold text-muted mb-3">
                <X className="w-5 h-5 text-muted" />
                Cons
              </h4>
              <ul className="space-y-2">
                {service.cons.map((limitation, i) => (
                  <motion.li
                    key={i}
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
          )}
        </div>

        <motion.a
          href={service.ctaLink || "/#contact"}
          target={service.ctaLink?.startsWith("http") ? "_blank" : undefined}
          rel={service.ctaLink?.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`mt-auto w-full py-3 px-4 rounded-lg font-heading font-semibold text-base text-center transition-all ${
            service.isPopular
              ? "bg-primary text-background hover:brightness-110 glow-primary"
              : "glass border-border/50 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {service.ctaText || "Pilih Paket"}
          <ArrowRight className="w-4 h-4 inline-block ml-2 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </motion.article>
  );
}

export function CustomSolutionBanner() {
  return (
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
  );
}
