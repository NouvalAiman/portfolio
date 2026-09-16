"use client";

import { useFormState, useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};
import { Send, AlertCircle, CheckCircle, X, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { CyberBackgroundWrapper } from "@/components/ui/CyberBackgroundWrapper";
import { sendEmail } from "@/lib/actions/contact";

function getContactIcon(icon: string) {
  switch (icon) {
    case "github":
      return <FaGithub className="w-5 h-5" />;
    case "linkedin":
      return <FaLinkedin className="w-5 h-5" />;
    case "instagram":
      return <FaInstagram className="w-5 h-5" />;
    case "mail":
      return <FaEnvelope className="w-5 h-5" />;
    default:
      return <FaGithub className="w-5 h-5" />;
  }
}

const contactLinks = [
  { label: "GitHub", value: "github.com/NouvalAiman", href: "https://github.com/NouvalAiman", icon: "github" },
  { label: "LinkedIn", value: "linkedin.com/in/nouval-aiman-a93321417", href: "https://id.linkedin.com/in/nouval-aiman-a93321417", icon: "linkedin" },
  { label: "Instagram", value: "@palll_aimannnnn", href: "https://www.instagram.com/palll_aimannnnn?igsi=bWEweXFpdjRmYmJ0", icon: "instagram" },
];

const availability = [
  { label: "Freelance Projects", status: "Open", color: "primary" },
  { label: "Full-time Roles", status: "Selective", color: "secondary" },
  { label: "Consulting / Advisory", status: "Open", color: "primary" },
  { label: "Open Source Collaboration", status: "Always", color: "primary" },
];

const fields = [
  { name: "name", label: "NAME", type: "text", placeholder: "Your Name", required: true },
  { name: "email", label: "EMAIL", type: "email", placeholder: "you@example.com", required: true },
  { name: "subject", label: "SUBJECT", type: "text", placeholder: "Project Inquiry / Collaboration / Hello", required: true },
  { name: "message", label: "MESSAGE", type: "textarea", placeholder: "Tell me about your project, idea, or just say hi...", required: true },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="w-full mt-8 flex items-center justify-center gap-3 px-8 py-4 bg-primary text-background font-heading font-semibold text-base rounded-full overflow-hidden glow-primary hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_25px_var(--primary-glow)]"
      whileHover={{ scale: 1.01, boxShadow: "0 0 45px rgba(0, 229, 255, 0.6)" }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="relative flex items-center gap-2 z-10">
        {pending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.button>
  );
}

export function Contact() {
  const [formState, formAction] = useFormState<ContactFormState, FormData>(sendEmail, {
    success: false,
    message: "",
    errors: {},
  });

  return (
    <CyberBackgroundWrapper
      as="section"
      id="contact"
      className="py-20 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
  
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Let&apos;s <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Collaborate </span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Have a project in mind? Looking for a collaborator? Or just want to say hello?
            Drop a line below — I read every message personally.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn delay={0.2} direction="left" className="space-y-8">
            <div className="glass-hover p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-3 glass border-border/50 rounded-lg text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaEnvelope className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Direct Contact</h3>
                  <p className="text-sm text-muted">nouvalaiman51@gmail.com</p>
                </div>
              </div>

              <StaggerContainer staggerDelay={0.08} direction="left">
                {contactLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 glass border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="p-2 glass border-border/50 rounded text-primary group-hover:glow-primary transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      {getContactIcon(item.icon)}
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted">{item.label}</p>
                      <p className="text-sm text-foreground">{item.value}</p>
                    </div>
                    <motion.span
                      className="text-muted group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}
              </StaggerContainer>
            </div>

            <div className="glass-hover p-6 rounded-2xl">
              <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Availability
              </h3>
              <StaggerContainer staggerDelay={0.08} direction="left">
                {availability.map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center justify-between p-3 glass border-border/50 rounded-xl mb-2.5 last:mb-0"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm text-foreground font-medium">{item.label}</span>
                    <motion.span
                      className={`px-3 py-1 text-xs font-mono rounded-full font-semibold ${
                        item.color === "primary"
                          ? "bg-primary/10 text-primary border border-primary/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                          : "bg-secondary/10 text-secondary border border-secondary/30 shadow-[0_0_10px_rgba(176,38,255,0.2)]"
                      }`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                    >
                      {item.status}
                    </motion.span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="right">
            <form action={formAction} className="glass-hover p-6 lg:p-8 rounded-2xl" noValidate>
              <div className="mb-4 flex items-center gap-2 text-xs text-muted font-mono">
                <span className="text-primary">$</span>
                <span>contact_form --submit</span>
                <span className="text-border"># Ctrl+Enter to send</span>
              </div>

              <AnimatePresence mode="wait">
                {formState.success && (
                  <motion.div
                    key="success"
                    className="mb-6 p-4 glass border border-green-500/30 rounded-lg bg-green-500/5 flex items-center gap-3 animate-fade-in"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-500">Message sent successfully!</p>
                      <p className="text-sm text-muted">I&apos;ll get back to you within 24 hours.</p>
                    </div>
                    <motion.button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="ml-auto p-1 text-muted hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Close success message"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}

                {!formState.success && formState.message && (
                  <motion.div
                    key="error"
                    className="mb-6 p-4 glass border border-red-500/30 rounded-lg bg-red-500/5 flex items-center gap-3 animate-fade-in"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-500">Failed to send message</p>
                      <p className="text-sm text-muted">{formState.message}</p>
                    </div>
                  </motion.div>
                )}

                {formState.errors && (
                  <motion.div
                    key="validation"
                    className="mb-6 p-4 glass border border-yellow-500/30 rounded-lg bg-yellow-500/5 flex items-center gap-3 animate-fade-in"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-yellow-500">Validation failed</p>
                      <p className="text-sm text-muted">Please check the highlighted fields below.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <StaggerContainer staggerDelay={0.08} direction="left">
                {fields.map((field) => (
                  <motion.div
                    key={field.name}
                    className="relative"
                  >
                    <label
                      htmlFor={field.name}
                      className="absolute -top-3 left-3 px-2 text-xs font-mono text-primary bg-background"
                      aria-hidden="true"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={6}
                        className="w-full border border-border/50 rounded-xl px-4 py-3 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        aria-label={field.label}
                        autoComplete={field.name === "email" ? "email" : field.name}
                        aria-invalid={formState.errors?.[field.name] ? "true" : "false"}
                        aria-describedby={formState.errors?.[field.name] ? `${field.name}-error` : undefined}
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full border border-border/50 rounded-xl px-4 py-3 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        aria-label={field.label}
                        autoComplete={field.name === "email" ? "email" : field.name}
                        aria-invalid={formState.errors?.[field.name] ? "true" : "false"}
                        aria-describedby={formState.errors?.[field.name] ? `${field.name}-error` : undefined}
                      />
                    )}
                    {formState.errors?.[field.name] && (
                      <motion.p
                        id={`${field.name}-error`}
                        className="mt-1.5 text-sm text-red-500 font-mono"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {formState.errors[field.name][0]}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </StaggerContainer>

              <SubmitButton />

              <p className="text-center text-xs text-muted font-mono mt-4">
                No backend? <a href="mailto:nouvalaiman51@gmail.com" className="text-primary hover:underline">Email directly</a> instead.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </CyberBackgroundWrapper>
  );
}