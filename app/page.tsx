import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Dynamic imports for below-the-fold sections to optimize LCP and code splitting
const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About));
const Skills = dynamic(() => import("@/components/sections/Skills").then((mod) => mod.Skills));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));

const heroQuery = groq`*[_type == "hero"][0]{
  animatedTitles,
  statsBar
}`;

export default async function Home() {
  const heroData = await client.fetch(heroQuery).catch(() => null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero stays static and prioritized for fastest LCP */}
      <Hero
        animatedTitles={heroData?.animatedTitles}
        statsBar={heroData?.statsBar}
      />
      <div className="content-auto">
        <About />
      </div>
      <div className="content-auto">
        <Skills />
      </div>
      <div className="content-auto">
        <Suspense fallback={<div className="py-20 min-h-[400px]" />}>
          <Projects />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<div className="py-20 min-h-[400px]" />}>
          <Experience />
        </Suspense>
      </div>
      <div className="content-auto">
        <Contact />
      </div>
    </div>
  );
}