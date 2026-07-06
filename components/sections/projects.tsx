"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const FILTERS = ["all", "B1", "B2", "B3"] as const
type Filter = (typeof FILTERS)[number]

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")

  const visible = t.projects.items.filter((p) => filter === "all" || p.block === filter)

  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          label={t.projects.label}
          title={t.projects.title}
          intro={t.projects.intro}
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {f === "all" ? "*" : f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
              <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 font-mono text-xs font-semibold text-primary backdrop-blur">
                  {project.block}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {t.projects.viewDemo}
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Code2 className="size-4" />
                    {t.projects.viewCode}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
