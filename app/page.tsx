import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const heroQuery = groq`*[_type == "hero"][0]{
  animatedTitles,
  statsBar
}`;

export default async function Home() {
  const heroData = await client.fetch(heroQuery).catch(() => null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero
        animatedTitles={heroData?.animatedTitles}
        statsBar={heroData?.statsBar}
      />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}