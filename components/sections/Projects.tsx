import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { client } from "@/sanity/lib/client";
import { Code2 } from "lucide-react";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  description?: string;
  mainImage?: SanityImage;
  techStack?: string[];
  githubLink?: string;
  liveLink?: string;
  category?: string;
}

const query = `*[_type == "project"] | order(_createdAt desc)`;

async function getProjects(): Promise<Project[]> {
  return await client.fetch(query);
}

export default async function Projects() {
  const projects: Project[] = await getProjects();

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-4 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <Code2 className="w-4 h-4 text-primary" />
            <span>Featured Portfolio</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Projects </span>
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}