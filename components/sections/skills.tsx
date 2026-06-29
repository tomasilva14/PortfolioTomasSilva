"use client"

import type { LucideIcon } from "lucide-react"
import {
  Accessibility,
  Atom,
  Boxes,
  Braces,
  Code2,
  Database,
  Figma,
  GitBranch,
  Layers3,
  LayoutGrid,
  Rocket,
  Server,
  Shield,
  TerminalSquare,
  TestTube2,
  Workflow,
  type LucideProps,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type SkillItem = { name: string; description?: string }

type SkillLane = {
  title: string
  description: string
  items: SkillItem[]
  reverse?: boolean
  duration: string
}

function normalizeSkillName(name: string) {
  return name.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

function getSkillIcon(name: string): LucideIcon {
  const normalized = normalizeSkillName(name)

  if (normalized.includes("html") || normalized.includes("css") || normalized.includes("tailwind")) return LayoutGrid
  if (normalized.includes("javascript") || normalized === "bash") return Braces
  if (normalized.includes("react")) return Atom
  if (normalized.includes("typescript")) return Code2
  if (normalized.includes("vue")) return Layers3
  if (normalized.includes("accessibil")) return Accessibility
  if (normalized.includes("node.js") || normalized === "nodejs") return Server
  if (normalized.includes("php")) return Code2
  if (normalized.includes("sql") || normalized.includes("postgres") || normalized.includes("mysql") || normalized.includes("mongodb")) return Database
  if (normalized.includes("rest") || normalized.includes("authent")) return Shield
  if (normalized.includes("security") || normalized.includes("securit") || normalized.includes("owasp")) return Shield
  if (normalized.includes("git") || normalized.includes("github")) return GitBranch
  if (normalized.includes("agile") || normalized.includes("scrum") || normalized.includes("method")) return Workflow
  if (normalized.includes("test")) return TestTube2
  if (normalized.includes("cicd") || normalized.includes("vercel")) return Rocket
  if (normalized.includes("figma")) return Figma
  if (normalized.includes("docker")) return Boxes
  if (normalized.includes("c++")) return Code2
  if (normalized.includes("c#")) return Code2
  if (normalized.includes("linux")) return TerminalSquare
  return Code2
}

function SkillCard({ name, description }: SkillItem) {
  const Icon = getSkillIcon(name)

  return (
    <div
      title={description ? `${name} — ${description}` : name}
      aria-label={description ? `${name}: ${description}` : name}
      className="flex w-68 shrink-0 items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/50"
    >
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-foreground">{name}</div>
        {description && <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</div>}
      </div>
    </div>
  )
}

function SkillMarquee({ lane }: { lane: SkillLane }) {
  const doubled = [...lane.items, ...lane.items]

  return (
    <div className="rounded-3xl border border-border bg-background/80 p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-foreground">{lane.title}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {lane.description}
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {lane.items.length} skills
        </span>
      </div>

      <div className="skills-marquee overflow-hidden rounded-2xl">
        <div
          className={cn("skills-marquee-track", lane.reverse && "skills-marquee-reverse")}
          style={{ ["--skills-marquee-duration" as string]: lane.duration } as React.CSSProperties}
        >
          <div className="skills-marquee-group">
            {lane.items.map((item) => (
              <SkillCard key={item.name} {...item} />
            ))}
          </div>
          <div className="skills-marquee-group" aria-hidden="true">
            {doubled.slice(0, lane.items.length).map((item) => (
              <SkillCard key={`${item.name}-dup`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  const { t } = useLanguage()

  const lanes: SkillLane[] = [
    {
      title: t.skills.blocks[0].title,
      description: t.skills.blocks[0].description,
      items: t.skills.blocks[0].items,
      duration: "28s",
    },
    {
      title: t.skills.blocks[1].title,
      description: t.skills.blocks[1].description,
      items: t.skills.blocks[1].items,
      reverse: true,
      duration: "34s",
    },
    {
      title: `${t.skills.blocks[2].title} + ${t.skills.blocks[3].title}`,
      description: `${t.skills.blocks[2].description} ${t.skills.blocks[3].description}`,
      items: [...t.skills.blocks[2].items, ...t.skills.blocks[3].items],
      duration: "40s",
    },
  ]

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-card/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading label={t.skills.label} title={t.skills.title} intro={t.skills.intro} />
        </Reveal>

        <div className="mt-10 space-y-6">
          {lanes.map((lane, i) => (
            <Reveal key={lane.title} delay={i * 120}>
              <SkillMarquee lane={lane} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
