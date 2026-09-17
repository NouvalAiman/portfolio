import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Contoh: Remote atau Jakarta, Indonesia",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
      description: "Contoh: Sep 2022 atau Nov 2022",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "string",
      description: "Contoh: May 2024 (kosongkan jika masih aktif)",
    }),
    defineField({
      name: "isCurrent",
      title: "Currently Working Here / Present",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "dateRange",
      title: "Date Range (Legacy / Fallback)",
      type: "string",
    }),
    defineField({
      name: "workType",
      title: "Work Type",
      type: "string",
      description: "Contoh: Remote, Freelance, Full-time",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "bulletPoints",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
  preview: {
    select: {
      title: "role",
      subtitle: "company",
    },
  },
});
