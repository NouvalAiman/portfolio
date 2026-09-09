export const experienceType = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    { name: "role", title: "Role", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "dateRange", title: "Date Range (e.g., 2024 - Present)", type: "string" },
    { name: "workType", title: "Work Type (e.g., freelance, full-time)", type: "string" },
    { name: "description", title: "Short Description", type: "text" },
    { name: "bulletPoints", title: "Bullet Points", type: "array", of: [{ type: "string" }] },
    { name: "techStack", title: "Tech Stack", type: "array", of: [{ type: "string" }] },
  ],
};
