import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectType } from "@/sanity/schemas/project";

export default defineConfig({
  name: "portfolio",
  title: "Portfolio CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool()],

  schema: {
    types: [projectType],
  },
});