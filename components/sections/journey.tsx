"use client"

import { useMemo, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type JourneyTab = "work" | "studies"

function getMonogram(title: string) {
  const cleaned = title
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)

  return cleaned.map((part) => part[0]?.toUpperCase() ?? "").join("") || "JR"
}

export function Journey() {
  const { t } = useLanguage()
  const [tab, setTab] = useState<JourneyTab>("work")

  const entries = useMemo(() => t.journey.tracks[tab], [t.journey.tracks, tab])

  return (
    <section
      id="journey"
      className="scroll-mt-20 border-y border-border bg-card/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label={t.journey.label}
            title={t.journey.title}
            intro={t.journey.intro}
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="relative mt-9 overflow-hidden rounded-3xl border border-border/80 bg-card/90 p-3 shadow-sm sm:p-5">
            <div className="pointer-events-none absolute -right-14 -top-16 size-44 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 size-52 rounded-full bg-accent/30 blur-3xl" />

            <div className="relative mx-auto grid max-w-2xl grid-cols-2 rounded-full border border-border bg-secondary/70 p-1.5">
              {([
                { key: "work", label: t.journey.tabs.work },
                { key: "studies", label: t.journey.tabs.studies },
              ] as const).map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTab(item.key)}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                    tab === item.key
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-pressed={tab === item.key}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <ol className="relative mt-5 space-y-6 rounded-2xl border border-border/70 bg-background/70 p-4 pb-6 backdrop-blur sm:p-6 sm:pb-8">
              <span className="pointer-events-none absolute bottom-5 left-9 top-5 w-px bg-linear-to-b from-primary/50 via-border to-transparent" />

              {entries.map((entry, i) => (
                <Reveal
                  as="li"
                  key={`${entry.title}-${entry.period}`}
                  delay={i * 90}
                  className="relative pl-14"
                >
                  <span
                    className={cn(
                      "absolute left-0 top-1 flex size-9 items-center justify-center rounded-full border bg-card text-[11px] font-semibold shadow-sm",
                      i % 3 === 0 && "border-primary/50 text-primary",
                      i % 3 === 1 && "border-chart-2/60 text-chart-2",
                      i % 3 === 2 && "border-chart-3/60 text-chart-3",
                    )}
                  >
                    {getMonogram(entry.title)}
                  </span>

                  <article className="rounded-xl border border-border/80 bg-card/90 p-4 shadow-xs transition-all hover:border-primary/35 hover:shadow-md sm:p-5">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{entry.period}</p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground sm:text-xl">{entry.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-primary/85 sm:text-base">{entry.role}</p>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
