export type Locale = "fr" | "en" | "pt"

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
]

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  block: string
  demoUrl: string
  codeUrl: string
}

export type SkillBlock = {
  id: "A" | "B" | "C" | "D"
  code: string
  title: string
  description: string
  items: { name: string; description?: string }[]
}

export type JourneyEntry = {
  period: string
  title: string
  role: string
  description: string
}

export type Dictionary = {
  meta: { title: string; description: string }
  nav: { about: string; skills: string; projects: string; journey: string; contact: string }
  hero: {
    role: string
    greeting: string
    name: string
    tagline: string
    intro: string
    cvButton: string
    contactButton: string
    available: string
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    factsTitle: string
    facts: { label: string; value: string }[]
  }
  skills: {
    label: string
    title: string
    intro: string
    blocks: SkillBlock[]
  }
  projects: {
    label: string
    title: string
    intro: string
    viewDemo: string
    viewCode: string
    items: Project[]
  }
  journey: {
    label: string
    title: string
    intro: string
    tabs: { work: string; studies: string }
    tracks: { work: JourneyEntry[]; studies: JourneyEntry[] }
    steps: { period: string; title: string; description: string }[]
  }
  contact: {
    label: string
    title: string
    intro: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    error: string
    directEmail: string
  }
  footer: { built: string; rights: string }
}

const projectImages = {
  ecommerce: "/project-ecommerce.png",
  tasks: "/project-tasks.png",
  weather: "/project-weather.png",
  blog: "/project-blog.png",
}

const englishDictionary: Dictionary = {
    meta: {
      title: "Tomas Silva — Web Developer",
      description:
        "Portfolio of Tomas Silva, a web developer specialized in React, TypeScript and Next.js. Projects, skills and journey.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      journey: "Journey",
      contact: "Contact",
    },
    hero: {
      role: "Full-Stack Web Developer",
      greeting: "Hi, I'm",
      name: "Tomas Silva ",
      tagline: "I design and build accessible, high-performance web applications.",
      intro:
        "Junior web developer passionate by coding, interested on creating well developed Web applicatiions that can be used by every one and everywhere.",
      cvButton: "Download CV",
      contactButton: "Get in touch",
      available: "Available for new opportunities!",
    },
    about: {
      label: "About",
      title: "A developer who cares about detail and the user",
      paragraphs: [
        "I'm a full-stack leaning web developer who loves working at the intersection of design and code. My goal: ship interfaces that are not only beautiful, but accessible, fast and maintainable.",
        "Throughout my training I built several complete applications, from mockup to production, applying best practices in accessibility, security and performance.",
        "Outside of code, I enjoy exploring new tools, contributing to open-source and sharing what I learn.",
      ],
      factsTitle: "At a glance",
      facts: [
        { label: "Location", value: "Lyon, France" },
        { label: "Experience", value: "School + Training projects + freelance" },
        { label: "Languages", value: "Portuguese, French, English" },
        { label: "Interests", value: "Front-end & Back-end" },
      ],
    },
    skills: {
      label: "Skills",
      title: "Skills by area",
      intro:
        "My skills are organized by technical area and work environment to reflect my profile more clearly.",
      blocks: [
        {
          id: "A",
          code: "Front-end",
          title: "Develop the front-end",
          description:
            "Mock up an application and build static and dynamic accessible and responsive interfaces.",
          items: [
            { name: "HTML / CSS / Tailwind", description: "Structure, style and responsive design of web interfaces" },
            { name: "JavaScript", description: "Core language for interactive behavior and modern client-side logic" },
            { name: "React", description: "Framework for building composable and performant interfaces" },
            { name: "TypeScript", description: "Static typing for safer and maintainable code" },
            { name: "Vue.js", description: "Progressive JavaScript framework for building reactive user interfaces" },
            { name: "Node.js", description: "JavaScript runtime used across tooling, package management and full-stack workflows" },
            { name: "Accessibility", description: "Ensures interfaces remain usable by all users, including assistive technology users" },
          ],
        },
        {
          id: "B",
          code: "Back-End",
          title: "Develop the back-end",
          description:
            "Create a database, build data-access components and a secure API.",
          items: [
            { name: "PHP", description: "Server-side scripting language for dynamic websites, APIs and CMS-based platforms" },
            { name: "Node.js", description: "Server-side JavaScript runtime for scalable applications" },
            { name: "MySQL", description: "Relational data management and complex queries" },
            { name: "Python", description: "Versatile language used for scripting, automation, data processing and backend services" },
            { name: "Security (OWASP)", description: "Prevention of common vulnerabilities and data protection" },
            { name: "MongoDB", description: "NoSQL document database suited to flexible schemas and JSON-like data models" },
            { name: "Java", description: "Object-oriented language widely used for robust backend services and enterprise applications" },

          ],
        },
        {
          id: "C",
          code: "Other Tools",
          title: "Tools, methods & deployment",
          description:
            "Collaborate in a team, version code, test and continuously deploy an application.",
          items: [
            { name: "Git / GitHub", description: "Source code versioning and collaboration" },
            { name: "Agile methods", description: "Iterative organization and rapid delivery" },
            { name: "Testing (Jest / Vitest)", description: "Unit and integration tests for quality assurance" },
            { name: "CI/CD & Vercel", description: "Automated deployment and continuous integration" },
            { name: "Figma", description: "Interface design and collaborative prototyping" },
            { name: "Docker", description: "Containerization platform for packaging applications and keeping environments consistent" },
          ],
        },
        {
          id: "D",
          code: "Language Systeme",
          title: "Languages & Systems",
          description:
            "Technical languages and system environments I use for programming, automation and efficient local development.",
          items: [
            { name: "C++", description: "High-performance language used to strengthen low-level understanding, data structures and performance-oriented programming" },
            { name: "C#", description: "Object-oriented language used to build structured applications with strong typing and clear architecture" },
            { name: "Bash", description: "Shell scripting tool used to automate tasks, manage files and speed up terminal-based workflows" },
            { name: "Linux", description: "Primary development system for terminal work, Git workflows, Docker and running local servers" },
          ],
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "A selection of my work",
      intro: "Here you can find more about my work. Projects i've done before.",
      viewDemo: "Demo",
      viewCode: "Code",
      items: [
        {
          id: "p1",
          title: "E-commerce store",
          description:
            "Full e-commerce platform with cart, checkout and admin dashboard, built with Next.js.",
          image: projectImages.ecommerce,
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
          image: projectImages.tasks,
          tags: ["React", "TypeScript", "Tailwind"],
          block: "B1",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p3",
          title: "Weather app",
          description:
            "Responsive  dashboard consuming an external API, with charts and geolocation.",
          image: projectImages.weather,
          tags: ["React", "REST API", "Recharts"],
          block: "B1",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p4",
          title: "Klivio",
          description:
            "A Template website. Made for sales and for schools. The template was used for a website where you could buy courses",
          image: projectImages.blog,
          tags: ["HTML", "TailWind", "CSS"],
          block: "B1",
          demoUrl: "https://tomasilva14.github.io/KlivioTailwindWAC/",
          codeUrl: "#",
        },
      ],
    },
    journey: {
      label: "Journey",
      title: "My progression analysis",
      intro:
        "A retrospective look at the milestones that grew my skills throughout my training.",
      tabs: {
        work: "Work",
        studies: "Studies",
      },
      tracks: {
        work: [
          {
            period: "September 2025",
            title: "Inetum",
            role: "Developer IA (Intern)",
            description:
              "Programming and teaching an AI with Python.",
          },
          {
            period: "April 2024",
            title: "TRI Rhone-Alpes",
            role: "Informatique technician",
            description:
              "Reparation of the students computers from the university of Grenoble Alpes.",
          },
          {
            period: "Jan 2020 - Mar 2020",
            title: "Innovation Makers",
            role: "Software Developer (Intern)",
            description:
              "Design and development of a web application for the management of studies who velontier with the school.",
          },
          {
            period: "Apr 2019 - Jul 2019",
            title: "Innovation Makers",
            role: "Software Developer (Intern)",
            description:
              "Development of a aplication to be able to control a machine to withdraw money",
          },
        ],
        studies: [
          {
            period: "2025 - 27",
            title: "WebAcademie by Epitech",
            role: "Titre RNCP Level 5",
            description:
              "A focused school focus on teaching how to become a Full-Stack Developer. With a strong base on PHP and teaching different ways of becoming a Full-Stack developeur with a big range of tecnologies known .",
          },
          {
            period: "2025",
            title: "Emlyon Business School Lyon",
            role: "Certificate in design and web development",
            description:
              "A web development training course with a strong base on javaScript",
          },
          {
            period: "Sep 2017 - Jul 2020",
            title: "Escola Secundária Raul Proença",
            role: "Vocational Course in Computer Systems",
            description:
              "Built a strong foundation in programming, systems and practical software development.",
          },
        ],
      },
      steps: [
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
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      intro:
        "An opportunity, a question, or just want to chat? Send me a message.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your@mail.com",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      sending: "Sending...",
      success: "Thanks! Your message has been sent.",
      error: "Please fill in all fields correctly.",
      directEmail: "Or email me directly",
    },
    footer: {
      built: "Designed made by me.",
      rights: "All rights reserved.",
    },
  }

export const dictionaries: Record<Locale, Dictionary> = {
  fr: englishDictionary,
  en: englishDictionary,
  pt: englishDictionary,
}

