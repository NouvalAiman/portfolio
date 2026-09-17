import { defineArrayMember, defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "animatedTitles",
      title: "Animated Subtitle Roles",
      type: "array",
      description: "Daftar kata/role yang berganti-ganti di efek typewriter.",
      of: [defineArrayMember({ type: "string" })],
      initialValue: [
        "Full-Stack Next.js & Laravel Architect",
        "Building Scalable Systems",
        "IoT & Embedded Systems Engineer",
      ],
    }),
    defineField({
      name: "statsBar",
      title: "Bottom Stats Bar",
      type: "array",
      description: "Item statistik di bar bagian bawah hero section.",
      of: [
        defineArrayMember({
          type: "object",
          name: "statItem",
          title: "Stat Item",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Contoh: Years Exp, Projects, Open Source",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "value",
              title: "Value / Prefix",
              type: "string",
              description: "Contoh: 3+, 20+, atau kosong jika cuma badge",
            }),
            defineField({
              name: "icon",
              title: "Icon Type",
              type: "string",
              description: "Pilihan icon: rocket, code, sparkle (atau string bebas)",
              options: {
                list: [
                  { title: "Rocket", value: "rocket" },
                  { title: "Code / Terminal", value: "code" },
                  { title: "Sparkle", value: "sparkle" },
                  { title: "Mouse Click", value: "mouse" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      titles: "animatedTitles",
    },
    prepare({ titles }) {
      return {
        title: "Hero Section Settings",
        subtitle: titles && titles.length > 0 ? `${titles.length} animated titles` : "No titles set",
      };
    },
  },
});
