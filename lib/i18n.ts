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

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    meta: {
      title: "Tomas Silva — Développeur Web",
      description:
        "Portfolio d'Tomas Silva, développeur web spécialisé en React, TypeScript et Next.js. Projets, compétences et parcours.",
    },
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      journey: "Parcours",
      contact: "Contact",
    },
    hero: {
      role: "Développeur Web Full-Stack",
      greeting: "Bonjour, je suis",
      name: "Tomas Silva",
      tagline: "Je conçois et développe des applications web accessibles et performantes.",
      intro:
        "Développeur web junior diplômé, passionné par l'écosystème JavaScript moderne. Je transforme des maquettes en interfaces soignées avec React, TypeScript et Next.js.",
      cvButton: "Télécharger le CV",
      contactButton: "Me contacter",
      available: "Disponible pour de nouvelles opportunités",
    },
    about: {
      label: "À propos",
      title: "Un développeur attentif au détail et à l'utilisateur",
      paragraphs: [
        "Je suis un développeur web orienté front-end qui aime travailler à l'intersection du design et du code. Mon objectif : livrer des interfaces qui sont non seulement belles, mais aussi accessibles, rapides et maintenables.",
        "Au cours de ma formation, j'ai conçu plusieurs applications complètes, de la maquette à la mise en production, en appliquant les bonnes pratiques d'accessibilité (RGAA/WCAG), de sécurité et de performance.",
        "En dehors du code, j'aime explorer de nouveaux outils, contribuer à des projets open-source et partager ce que j'apprends.",
      ],
      factsTitle: "En bref",
      facts: [
        { label: "Localisation", value: "Paris, France" },
        { label: "Expérience", value: "Projets de formation + freelance" },
        { label: "Langues", value: "Français, Anglais, Portugais" },
        { label: "Centres d'intérêt", value: "UX, open-source, typographie" },
      ],
    },
    skills: {
      label: "Compétences",
      title: "Compétences par domaine",
      intro:
        "Mes compétences sont organisées par domaines techniques et outils de travail afin de refléter plus précisément mon profil.",
      blocks: [
        {
          id: "A",
          code: "Bloc 1",
          title: "Développer la partie front-end",
          description:
            "Maquetter une application, réaliser des interfaces statiques et dynamiques accessibles et responsives.",
          items: [
            { name: "HTML / CSS / Tailwind", description: "Structure, style et design responsive des interfaces web" },
            { name: "JavaScript (ES2023+)", description: "Interactivité dynamique et logique client modernes" },
            { name: "React", description: "Framework pour construire des interfaces composables et performantes" },
            { name: "TypeScript", description: "Typage statique pour un code plus sûr et maintenable" },
            { name: "Vue.js", description: "Framework progressif pour créer des interfaces réactives et des applications monopage" },
            { name: "Accessibilité (WCAG)", description: "Garantir l'accès du site à tous les utilisateurs" },
          ],
        },
        {
          id: "B",
          code: "Bloc 2",
          title: "Développer la partie back-end",
          description:
            "Créer une base de données, développer des composants d'accès aux données et une API sécurisée.",
          items: [
            { name: "Node.js", description: "Runtime JavaScript côté serveur pour applications scalables" },
            { name: "PHP", description: "Langage côté serveur utilisé pour développer des sites dynamiques, des API et des CMS" },
            { name: "SQL / PostgreSQL", description: "Gestion des données relationnelles et requêtes complexes" },
            { name: "MongoDB", description: "Base de données NoSQL orientée documents, adaptée aux schémas flexibles" },
            { name: "REST & authentification", description: "Conception d'API et sécurisation des accès utilisateurs" },
            { name: "Sécurité (OWASP)", description: "Prévention des failles courantes et protection des données" },
          ],
        },
        {
          id: "C",
          code: "Bloc 3",
          title: "Outils, méthodes & déploiement",
          description:
            "Collaborer en équipe, versionner le code, tester et déployer une application en continu.",
          items: [
            { name: "Git / GitHub", description: "Versioning et collaboration sur le code source" },
            { name: "Méthodes agiles", description: "Organisation itérative et livraison rapide" },
            { name: "Tests (Jest / Vitest)", description: "Tests unitaires et d'intégration pour la qualité" },
            { name: "CI/CD & Vercel", description: "Déploiement automatisé et intégration continue" },
            { name: "Figma", description: "Design d'interfaces et prototypage collaboratif" },
            { name: "Docker", description: "Conteneurisation des applications pour garder des environnements cohérents" },
          ],
        },
        {
          id: "D",
          code: "Language Systeme",
          title: "Langues & systèmes",
          description:
            "Langages techniques et environnements système que j'utilise pour programmer, automatiser et travailler efficacement en local.",
          items: [
            { name: "C++", description: "Langage performant utilisé pour comprendre les bases bas niveau, les structures de données et la programmation orientée performance" },
            { name: "C#", description: "Langage orienté objet utilisé pour développer des applications structurées avec un typage fort" },
            { name: "Bash", description: "Shell de scripting utilisé pour automatiser des tâches, manipuler des fichiers et accélérer les workflows en terminal" },
            { name: "Linux", description: "Système principal de développement pour le terminal, Git, Docker et l'exécution de serveurs locaux" },
          ],
        },
      ],
    },
    projects: {
      label: "Projets",
      title: "Une sélection de mes réalisations",
      intro:
        "Chaque projet est rattaché à un bloc de compétences pour illustrer ma progression.",
      viewDemo: "Démo",
      viewCode: "Code",
      items: [
        {
          id: "p1",
          title: "Boutique e-commerce",
          description:
            "Plateforme e-commerce complète avec panier, paiement et tableau de bord administrateur, construite en Next.js.",
          image: projectImages.ecommerce,
          tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
          block: "B2",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p2",
          title: "Gestionnaire de tâches",
          description:
            "Application Kanban en temps réel avec glisser-déposer, collaboration et synchronisation.",
          image: projectImages.tasks,
          tags: ["React", "TypeScript", "Tailwind"],
          block: "B1",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p3",
          title: "Application météo",
          description:
            "Tableau de bord météo responsive consommant une API externe, avec graphiques et géolocalisation.",
          image: projectImages.weather,
          tags: ["React", "API REST", "Recharts"],
          block: "B1",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p4",
          title: "CMS de blog",
          description:
            "Système de gestion de contenu avec éditeur Markdown, authentification et déploiement continu.",
          image: projectImages.blog,
          tags: ["Next.js", "Node.js", "CI/CD"],
          block: "B3",
          demoUrl: "#",
          codeUrl: "#",
        },
      ],
    },
    journey: {
      label: "Parcours",
      title: "Analyse de ma progression",
      intro:
        "Un regard rétrospectif sur les étapes qui ont fait évoluer mes compétences tout au long de ma formation.",
      steps: [
        {
          period: "Étape 1",
          title: "Les fondations",
          description:
            "Apprentissage du HTML, CSS et JavaScript. Premières pages statiques et compréhension du DOM et de l'accessibilité.",
        },
        {
          period: "Étape 2",
          title: "Le front-end moderne",
          description:
            "Montée en compétence sur React et TypeScript. Création d'interfaces componentisées, gestion d'état et consommation d'API.",
        },
        {
          period: "Étape 3",
          title: "Le full-stack",
          description:
            "Conception de bases de données, développement d'API sécurisées et intégration back-end avec Next.js.",
        },
        {
          period: "Étape 4",
          title: "Professionnalisation",
          description:
            "Tests, intégration continue, déploiement et travail en méthode agile sur des projets concrets.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Travaillons ensemble",
      intro:
        "Une opportunité, une question ou simplement envie d'échanger ? Envoyez-moi un message.",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      messageLabel: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@exemple.com",
      messagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer le message",
      sending: "Envoi...",
      success: "Merci ! Votre message a bien été envoyé.",
      error: "Veuillez remplir correctement tous les champs.",
      directEmail: "Ou écrivez-moi directement",
    },
    footer: {
      built: "Conçu et développé avec Next.js, TypeScript & Tailwind CSS.",
      rights: "Tous droits réservés.",
    },
  },

  en: {
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
      intro: "Each project is tied to a competency block to illustrate my progression.",
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
            "Responsive weather dashboard consuming an external API, with charts and geolocation.",
          image: projectImages.weather,
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
          image: projectImages.blog,
          tags: ["Next.js", "Node.js", "CI/CD"],
          block: "B3",
          demoUrl: "#",
          codeUrl: "#",
        },
      ],
    },
    journey: {
      label: "Journey",
      title: "My progression analysis",
      intro:
        "A retrospective look at the milestones that grew my skills throughout my training.",
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
  },

  pt: {
    meta: {
      title: "Tomas Silva — Programador Web",
      description:
        "Portfólio de Tomas Silva, programador web especializado em React, TypeScript e Next.js. Projetos, competências e percurso.",
    },
    nav: {
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos",
      journey: "Percurso",
      contact: "Contacto",
    },
    hero: {
      role: "Programador Web Full-Stack",
      greeting: "Olá, sou o",
      name: "Tomas Silva",
      tagline: "Desenho e construo aplicações web acessíveis e de alto desempenho.",
      intro:
        "Programador web júnior apaixonado pelo ecossistema JavaScript moderno. Transformo maquetes em interfaces cuidadas com React, TypeScript e Next.js.",
      cvButton: "Descarregar CV",
      contactButton: "Contactar-me",
      available: "Disponível para novas oportunidades",
    },
    about: {
      label: "Sobre",
      title: "Um programador atento ao detalhe e ao utilizador",
      paragraphs: [
        "Sou um programador web orientado ao front-end que adora trabalhar na interseção entre design e código. O meu objetivo: entregar interfaces que não são apenas bonitas, mas também acessíveis, rápidas e fáceis de manter.",
        "Durante a minha formação construí várias aplicações completas, da maquete à produção, aplicando boas práticas de acessibilidade (WCAG), segurança e desempenho.",
        "Fora do código, gosto de explorar novas ferramentas, contribuir para projetos open-source e partilhar o que aprendo.",
      ],
      factsTitle: "Em resumo",
      facts: [
        { label: "Localização", value: "Paris, França" },
        { label: "Experiência", value: "Projetos de formação + freelance" },
        { label: "Idiomas", value: "Francês, Inglês, Português" },
        { label: "Interesses", value: "UX, open-source, tipografia" },
      ],
    },
    skills: {
      label: "Competências",
      title: "Competências por área",
      intro:
        "As minhas competências estão organizadas por área técnica e ambiente de trabalho para refletir melhor o meu perfil.",
      blocks: [
        {
          id: "A",
          code: "Bloco 1",
          title: "Desenvolvimento front-end",
          description:
            "Prototipar uma aplicação e criar interfaces estáticas e dinâmicas acessíveis e responsivas.",
          items: [
            { name: "HTML / CSS / Tailwind", description: "Estrutura, estilos e design responsivo de interfaces web" },
            { name: "JavaScript (ES2023+)", description: "Interatividade dinâmica e lógica moderna no cliente" },
            { name: "React", description: "Framework para construir interfaces compostas e performantes" },
            { name: "TypeScript", description: "Tipagem estática para código mais seguro e manutenível" },
            { name: "Vue.js", description: "Framework progressivo para criar interfaces reativas e aplicações de página única" },
            { name: "Acessibilidade (WCAG)", description: "Garantir acesso do site a todos os utilizadores" },
          ],
        },
        {
          id: "B",
          code: "Bloco 2",
          title: "Desenvolvimento back-end",
          description:
            "Criar uma base de dados, desenvolver componentes de acesso a dados e uma API segura.",
          items: [
            { name: "Node.js", description: "Runtime JavaScript do servidor para aplicações escaláveis" },
            { name: "PHP", description: "Linguagem do lado do servidor usada para sites dinâmicos, APIs e plataformas CMS" },
            { name: "SQL / PostgreSQL", description: "Gestão de dados relacionais e queries complexas" },
            { name: "MongoDB", description: "Base de dados NoSQL orientada a documentos, adequada a esquemas flexíveis" },
            { name: "REST & autenticação", description: "Design de API e proteção de acessos de utilizadores" },
            { name: "Segurança (OWASP)", description: "Prevenção de vulnerabilidades comuns e proteção de dados" },
          ],
        },
        {
          id: "C",
          code: "Bloco 3",
          title: "Ferramentas, métodos & deployment",
          description:
            "Colaborar em equipa, versionar código, testar e implementar uma aplicação em contínuo.",
          items: [
            { name: "Git / GitHub", description: "Versionamento de código e colaboração" },
            { name: "Métodos ágeis", description: "Organização iterativa e entrega rápida" },
            { name: "Testes (Jest / Vitest)", description: "Testes unitários e de integração para qualidade" },
            { name: "CI/CD & Vercel", description: "Deployment automatizado e integração contínua" },
            { name: "Figma", description: "Design de interfaces e prototipagem colaborativa" },
            { name: "Docker", description: "Contentorização de aplicações para manter ambientes consistentes" },
          ],
        },
        {
          id: "D",
          code: "Language Systeme",
          title: "Idiomas & sistemas",
          description:
            "Linguagens técnicas e ambientes de sistema que utilizo para programar, automatizar tarefas e trabalhar com eficiência em ambiente local.",
          items: [
            { name: "C++", description: "Linguagem de alto desempenho usada para reforçar bases de baixo nível, estruturas de dados e programação orientada à performance" },
            { name: "C#", description: "Linguagem orientada a objetos usada para desenvolver aplicações estruturadas com tipagem forte" },
            { name: "Bash", description: "Shell de scripting usado para automatizar tarefas, gerir ficheiros e acelerar fluxos de trabalho no terminal" },
            { name: "Linux", description: "Sistema principal de desenvolvimento para terminal, Git, Docker e execução de servidores locais" },
          ],
        },
      ],
    },
    projects: {
      label: "Projetos",
      title: "Uma seleção do meu trabalho",
      intro: "Cada projeto está associado a um bloco de competências para ilustrar a minha progressão.",
      viewDemo: "Demo",
      viewCode: "Código",
      items: [
        {
          id: "p1",
          title: "Loja e-commerce",
          description:
            "Plataforma de e-commerce completa com carrinho, pagamento e painel de administração, construída em Next.js.",
          image: projectImages.ecommerce,
          tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
          block: "B2",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p2",
          title: "Gestor de tarefas",
          description:
            "Aplicação Kanban em tempo real com arrastar e largar, colaboração e sincronização.",
          image: projectImages.tasks,
          tags: ["React", "TypeScript", "Tailwind"],
          block: "B1",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p3",
          title: "Aplicação de meteorologia",
          description:
            "Painel meteorológico responsivo que consome uma API externa, com gráficos e geolocalização.",
          image: projectImages.weather,
          tags: ["React", "API REST", "Recharts"],
          block: "B1",
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: "p4",
          title: "CMS de blog",
          description:
            "Sistema de gestão de conteúdos com editor Markdown, autenticação e deployment contínuo.",
          image: projectImages.blog,
          tags: ["Next.js", "Node.js", "CI/CD"],
          block: "B3",
          demoUrl: "#",
          codeUrl: "#",
        },
      ],
    },
    journey: {
      label: "Percurso",
      title: "Análise da minha progressão",
      intro:
        "Um olhar retrospetivo sobre as etapas que fizeram crescer as minhas competências ao longo da formação.",
      steps: [
        {
          period: "Etapa 1",
          title: "As fundações",
          description:
            "Aprendizagem de HTML, CSS e JavaScript. Primeiras páginas estáticas e compreensão do DOM e da acessibilidade.",
        },
        {
          period: "Etapa 2",
          title: "Front-end moderno",
          description:
            "Evolução em React e TypeScript. Criação de interfaces componentizadas, gestão de estado e consumo de APIs.",
        },
        {
          period: "Etapa 3",
          title: "Rumo ao full-stack",
          description:
            "Conceção de bases de dados, desenvolvimento de APIs seguras e integração back-end com Next.js.",
        },
        {
          period: "Etapa 4",
          title: "Profissionalização",
          description:
            "Testes, integração contínua, deployment e trabalho em metodologia ágil em projetos reais.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Vamos trabalhar juntos",
      intro:
        "Uma oportunidade, uma questão ou só vontade de conversar? Envie-me uma mensagem.",
      nameLabel: "Nome",
      emailLabel: "E-mail",
      messageLabel: "Mensagem",
      namePlaceholder: "O seu nome",
      emailPlaceholder: "voce@exemplo.com",
      messagePlaceholder: "Fale-me do seu projeto...",
      send: "Enviar mensagem",
      sending: "A enviar...",
      success: "Obrigado! A sua mensagem foi enviada.",
      error: "Por favor preencha todos os campos corretamente.",
      directEmail: "Ou envie-me um e-mail diretamente",
    },
    footer: {
      built: "Concebido e desenvolvido com Next.js, TypeScript & Tailwind CSS.",
      rights: "Todos os direitos reservados.",
    },
  },
}
