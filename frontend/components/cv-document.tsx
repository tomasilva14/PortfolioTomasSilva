"use client"

import Link from "next/link"
import { ArrowLeft, Printer } from "lucide-react"

const skills = {
  "Front-end": ["HTML / CSS / Tailwind", "JavaScript (ES2023+)", "React", "TypeScript", "Accessibilité (WCAG)"],
  "Back-end": ["Next.js (API & RSC)", "Node.js", "SQL / PostgreSQL", "REST", "Sécurité (OWASP)"],
  "Outils": ["Git / GitHub", "Agile / Scrum", "Jest / Vitest", "CI/CD & Vercel", "Figma"],
}

const experience = [
  {
    period: "2023 — 2024",
    role: "Projet de fin de formation — Boutique e-commerce",
    place: "Formation Développeur Web",
    points: [
      "Conception et développement full-stack d'une plateforme e-commerce avec Next.js et PostgreSQL.",
      "Mise en place du panier, du paiement (Stripe) et d'un tableau de bord administrateur.",
      "Déploiement continu sur Vercel avec tests automatisés.",
    ],
  },
  {
    period: "2023",
    role: "Projets pédagogiques — Front-end",
    place: "Formation Développeur Web",
    points: [
      "Réalisation d'interfaces responsives et accessibles (gestionnaire de tâches, app météo).",
      "Consommation d'APIs REST et gestion d'état avec React et TypeScript.",
    ],
  },
]

export function CvDocument() {
  return (
    <div className="min-h-screen bg-secondary/40 py-8">
      <div className="no-print mx-auto mb-6 flex max-w-3xl items-center justify-between px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Retour au portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <Printer className="size-4" />
          Imprimer / PDF
        </button>
      </div>

      <article className="mx-auto max-w-3xl bg-card p-8 text-card-foreground shadow-sm sm:p-12 print:shadow-none">
        <header className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight">Tomas Silva</h1>
          <p className="mt-1 font-mono text-sm text-primary">Développeur Web Full-Stack</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>Paris, France</span>
            <span>tomasilva14@gmail.com</span>
            <span>github.com/alexmartin</span>
            <span>linkedin.com/in/alexmartin</span>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Profil
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Développeur web junior passionné par l'écosystème JavaScript moderne. Spécialisé en
            React, TypeScript et Next.js, je conçois des interfaces accessibles, performantes et
            maintenables, du front-end au back-end.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Expérience & projets
          </h2>
          <div className="mt-3 space-y-5">
            {experience.map((exp) => (
              <div key={exp.role}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{exp.place}</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Compétences
          </h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold text-foreground">{group}</h3>
                <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Formation & langues
          </h2>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <p className="text-sm font-semibold text-foreground">
              Titre Professionnel Développeur Web et Web Mobile (RNCP)
            </p>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">2024</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Langues : Français (natif), Anglais (courant), Portugais (courant).
          </p>
        </section>
      </article>
    </div>
  )
}
