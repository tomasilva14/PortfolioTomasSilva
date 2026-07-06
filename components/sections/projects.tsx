"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Code2, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import type { Project } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const FILTERS = ["all", "B1", "B2", "B3"] as const
type Filter = (typeof FILTERS)[number]

const FILTER_LABELS: Record<Filter, string> = {
  all: "ALL",
  B1: "School",
  B2: "Work",
  B3: "Personnal",
}

const FALLBACK_DEMO_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

function isVideoUrl(url: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
}

function getBlockLabel(block: string) {
  if (block === "B1") return "School"
  if (block === "B2") return "Work"
  if (block === "B3") return "Personnal"
  return block
}

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const visible = t.projects.items.filter((p) => filter === "all" || p.block === filter)

  const demoSource = useMemo(() => {
    if (!activeProject) {
      return null
    }

    if (!activeProject.demoUrl || activeProject.demoUrl === "#") {
      return { type: "video" as const, src: FALLBACK_DEMO_VIDEO }
    }

    if (isVideoUrl(activeProject.demoUrl)) {
      return { type: "video" as const, src: activeProject.demoUrl }
    }

    return { type: "embed" as const, src: activeProject.demoUrl }
  }, [activeProject])

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeProject])

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
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 100}>
            <article
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  setActiveProject(project)
                }
              }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 font-mono text-xs font-semibold text-primary backdrop-blur">
                  {getBlockLabel(project.block)}
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
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      setActiveProject(project)
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {t.projects.viewDemo}
                  </button>
                  <a
                    href={project.codeUrl}
                    onClick={(event) => event.stopPropagation()}
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

      {activeProject && demoSource ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-zinc-100 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 z-20 inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-zinc-100 transition-colors hover:bg-black"
              aria-label="Close demo"
            >
              <X className="size-5" />
            </button>

            <div className="relative h-[52vh] min-h-85 bg-black sm:h-[58vh] lg:h-[64vh]">
              <Image
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                fill
                sizes="100vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

              <div className="absolute inset-0 z-10">
                {demoSource.type === "video" ? (
                  <video
                    key={demoSource.src}
                    src={demoSource.src}
                    poster={activeProject.image || "/placeholder.svg"}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="size-full object-cover"
                  />
                ) : (
                  <iframe
                    src={demoSource.src}
                    title={`${activeProject.title} demo`}
                    className="size-full"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs font-semibold text-zinc-200">
                  {getBlockLabel(activeProject.block)}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">{activeProject.title}</h3>
              </div>

              <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">{activeProject.description}</p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={activeProject.demoUrl && activeProject.demoUrl !== "#" ? activeProject.demoUrl : undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!activeProject.demoUrl || activeProject.demoUrl === "#"}
                  className={cn(
                    "inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                    activeProject.demoUrl && activeProject.demoUrl !== "#"
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "cursor-not-allowed bg-zinc-700 text-zinc-400",
                  )}
                >
                  Open Website/App
                </a>
                <a
                  href={activeProject.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-zinc-600 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-400 hover:bg-zinc-900"
                >
                  {t.projects.viewCode}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-zinc-800/90 px-2.5 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
