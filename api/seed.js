require("dotenv").config()
const mongoose = require("mongoose")

const Project = require("./models/project")
const SkillBlock = require("./models/skillBlock")
const JourneyStep = require("./models/journeyStep")
const ContactSetting = require("./models/contactSetting")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio"

async function main() {
  await mongoose.connect(MONGODB_URI)
  console.log("Connected to MongoDB", MONGODB_URI)

  // Clear existing
  await Promise.all([
    Project.deleteMany({}),
    SkillBlock.deleteMany({}),
    JourneyStep.deleteMany({}),
    ContactSetting.deleteMany({}),
  ])

  const projects = [
    {
      id: "p1",
      title: "E-commerce store",
      description:
        "Full e-commerce platform with cart, checkout and admin dashboard, built with Next.js.",
      image: "/project-ecommerce.png",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      block: "B2",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: "p2",
      title: "Task manager",
      description:
        "Real-time Kanban app with drag-and-drop, collaboration and live sync.",
      image: "/project-tasks.png",
      tags: ["React", "TypeScript", "Tailwind"],
      block: "B1",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: "p3",
      title: "Weather app",
      description:
        "Responsive weather dashboard consuming an external API, with charts and geolocation.",
      image: "/project-weather.png",
      tags: ["React", "REST API", "Recharts"],
      block: "B1",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: "p4",
      title: "Blog CMS",
      description:
        "Content management system with a Markdown editor, authentication and continuous deployment.",
      image: "/project-blog.png",
      tags: ["Next.js", "Node.js", "CI/CD"],
      block: "B3",
      demoUrl: "#",
      codeUrl: "#",
    },
  ]

  const skillBlocks = [
    {
      id: "B1",
      code: "Block 1",
      title: "Front-end development",
      description:
        "Prototype an application and build static and dynamic interfaces that are accessible and responsive.",
      items: [
        { name: "HTML / CSS / Tailwind", level: 92 },
        { name: "JavaScript (ES2023+)", level: 88 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 84 },
        { name: "Accessibility (WCAG)", level: 78 },
      ],
    },
    {
      id: "B2",
      code: "Block 2",
      title: "Back-end development",
      description: "Create a database, build data-access components and a secure API.",
      items: [
        { name: "Next.js (API & RSC)", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "SQL / PostgreSQL", level: 76 },
        { name: "REST & authentication", level: 78 },
        { name: "Security (OWASP)", level: 70 },
      ],
    },
    {
      id: "B3",
      code: "Block 3",
      title: "Tooling, methods & deployment",
      description:
        "Collaborate in a team, version code, test and continuously deploy an application.",
      items: [
        { name: "Git / GitHub", level: 88 },
        { name: "Agile methods", level: 80 },
        { name: "Testing (Jest / Vitest)", level: 72 },
        { name: "CI/CD & Vercel", level: 82 },
        { name: "Figma", level: 75 },
      ],
    },
  ]

  const journeySteps = [
    {
      period: "Step 1",
      title: "The foundations",
      description:
        "Learning HTML, CSS and JavaScript. First static pages and understanding the DOM and accessibility.",
    },
    {
      period: "Step 2",
      title: "Modern front-end",
      description:
        "Leveling up on React and TypeScript. Building componentized UIs, state management and API consumption.",
    },
    {
      period: "Step 3",
      title: "Going full-stack",
      description:
        "Designing databases, building secure APIs and back-end integration with Next.js.",
    },
    {
      period: "Step 4",
      title: "Becoming professional",
      description:
        "Testing, continuous integration, deployment and working in agile on real-world projects.",
    },
  ]

  const contactSetting = { directEmail: "tomasilva14@gmail.com" }

  await Project.insertMany(projects)
  await SkillBlock.insertMany(skillBlocks)
  await JourneyStep.insertMany(journeySteps)
  await ContactSetting.create(contactSetting)

  console.log("Seeding complete")
  await mongoose.disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
