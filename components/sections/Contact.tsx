"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, AlertCircle, CheckCircle, Loader2, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

type FormStatus = "idle" | "submitting" | "success" | "error";

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 glass border-border/50 rounded-full text-xs font-mono text-muted mb-6"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span>Contact</span>
          </motion.span>
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

            <div className="glass-hover p-6 rounded-xl">
              <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Availability
              </h3>
              <StaggerContainer staggerDelay={0.08} direction="left">
                {availability.map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center justify-between p-3 glass border-border/50 rounded-lg"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm text-foreground">{item.label}</span>
                    <motion.span
                      className={`px-2.5 py-1 text-xs font-mono rounded ${
                        item.color === "primary"
                          ? "bg-primary/10 text-primary border border-primary/30"
                          : "bg-secondary/10 text-secondary border border-secondary/30"
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
            <form onSubmit={handleSubmit} className="glass-hover p-6 lg:p-8 rounded-xl" noValidate>
              <div className="mb-4 flex items-center gap-2 text-xs text-muted font-mono">
                <span className="text-primary">$</span>
                <span>contact_form --submit</span>
                <span className="text-border"># Ctrl+Enter to send</span>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
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
                      onClick={resetForm}
                      className="ml-auto p-1 text-muted hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Close success message"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}

                {status === "error" && (
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
                      <p className="text-sm text-muted">{errorMessage}</p>
                    </div>
                    <motion.button
                      onClick={resetForm}
                      className="ml-auto p-1 text-muted hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Close error message"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
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
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={6}
                        className="w-full border border-border/50 rounded-lg px-4 py-3 bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        aria-label={field.label}
                        autoComplete={field.name === "email" ? "email" : field.name}
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full border border-border/50 rounded-lg px-4 py-3 bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        aria-label={field.label}
                        autoComplete={field.name === "email" ? "email" : field.name}
                      />
                    )}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left transition-transform duration-300"
                      animate={{ scaleX: formData[field.name as keyof typeof formData] ? 1 : 0 }}
                    />
                  </motion.div>
                ))}
              </StaggerContainer>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                className="w-full mt-8 flex items-center justify-center gap-3 px-6 py-4 bg-primary text-background font-heading font-semibold text-base rounded-lg overflow-hidden glow-primary hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(0, 229, 255, 0.5)" }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="relative flex items-center gap-2 z-10">
                  {status === "submitting" ? (
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

              <p className="text-center text-xs text-muted font-mono mt-4">
                No backend? <a href="mailto:nouvalaiman51@gmail.com" className="text-primary hover:underline">Email directly</a> instead.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}