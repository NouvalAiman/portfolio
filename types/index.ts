export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "api" | "tool" | "other";
  year: number;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "devops" | "database" | "tooling" | "soft";
  proficiency: number;
  icon?: string;
  color?: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  techStack: string[];
  type: "full-time" | "contract" | "freelance" | "internship";
  highlights?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  socialLinks: SocialLink[];
  navItems: NavItem[];
}