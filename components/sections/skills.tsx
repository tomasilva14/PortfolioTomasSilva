"use client"

import { Code2, Shield, Workflow } from "lucide-react"
import type { CSSProperties } from "react"
import type { IconType } from "react-icons"
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenaccess,
  SiOpenjdk,
  SiOwasp,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiVitest,
} from "react-icons/si"
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

function getSkillIcons(name: string): IconType[] {
  const normalized = normalizeSkillName(name)

  if (normalized.includes("html") || normalized.includes("css") || normalized.includes("tailwind")) {
    return [SiHtml5, SiCss, SiTailwindcss]
  }

  if (normalized.includes("javascript")) return [SiJavascript]
  if (normalized.includes("react")) return [SiReact]
  if (normalized.includes("typescript")) return [SiTypescript]
  if (normalized.includes("vue")) return [SiVuedotjs]
  if (normalized.includes("accessibil")) return [SiOpenaccess]

  if (normalized.includes("node.js") || normalized === "nodejs") return [SiNodedotjs]
  if (normalized.includes("php")) return [SiPhp]
  if (normalized.includes("sql") || normalized.includes("postgres")) return [SiPostgresql]
  if (normalized.includes("mysql")) return [SiMysql]
  if (normalized.includes("mongodb")) return [SiMongodb]
  if (normalized.includes("python")) return [SiPython]
  if (normalized.includes("java")) return [SiOpenjdk]

  if (normalized.includes("rest") || normalized.includes("authent")) return [Shield]
  if (normalized.includes("security") || normalized.includes("securit") || normalized.includes("owasp")) return [SiOwasp]

  if (normalized.includes("git") || normalized.includes("github")) return normalized.includes("github") ? [SiGithub, SiGit] : [SiGit]
  if (normalized.includes("agile") || normalized.includes("scrum") || normalized.includes("method")) return [Workflow]
  if (normalized.includes("test")) return [SiJest, SiVitest]
  if (normalized.includes("cicd") || normalized.includes("vercel")) return [SiVercel]
  if (normalized.includes("figma")) return [SiFigma]
  if (normalized.includes("docker")) return [SiDocker]
  if (normalized.includes("c++")) return [SiCplusplus]
  if (normalized.includes("c#") || normalized.includes("sharp")) return [SiSharp]
  if (normalized.includes("bash")) return [SiGnubash]
  if (normalized.includes("linux")) return [SiLinux]

  return [Code2]
}

function SkillCard({ name, description }: SkillItem) {
  const icons = getSkillIcons(name)

  return (
    <div
      title={description ? `${name} — ${description}` : name}
      aria-label={description ? `${name}: ${description}` : name}
      className="flex w-68 shrink-0 items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/50"
    >
      <span
        className={cn(
          "inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary",
          icons.length > 1 ? "min-w-12 gap-1 px-2" : "min-w-10 px-0"
        )}
      >
        {icons.map((Icon, index) => (
          <Icon
            key={`${name}-${index}`}
            className={cn("shrink-0", icons.length > 1 ? "size-4" : "size-5")}
            aria-hidden="true"
          />
        ))}
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
          style={{ ["--skills-marquee-duration" as string]: lane.duration } as CSSProperties}
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
