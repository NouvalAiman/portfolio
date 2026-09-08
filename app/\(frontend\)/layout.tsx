import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Nouval — Full Stack Engineer",
    template: "%s | Nouval",
  },
  description: "Building scalable web applications with modern technologies. Specialized in React, Next.js, TypeScript, and cloud-native architectures.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "TypeScript", "Go", "Kubernetes", "Portfolio", "Web Developer"],
  authors: [{ name: "Nouval", url: "https://nouval.dev" }],
  creator: "Nouval",
  publisher: "Nouval",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nouval.dev",
    siteName: "Nouval Portfolio",
    title: "Nouval — Full Stack Engineer",
    description: "Building scalable web applications with modern technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nouval Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nouval — Full Stack Engineer",
    description: "Building scalable web applications with modern technologies.",
    images: ["/og-image.png"],
    creator: "@nouval",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}