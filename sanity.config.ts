import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectType } from "@/sanity/schemas/project";
import { experienceType } from "@/sanity/schemas/experience";

export default defineConfig({
  basePath: "/studio",
  name: "portfolio",
  title: "Portfolio CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool()],

  schema: {
    types: [projectType, experienceType],
  },
});
