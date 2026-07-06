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
          <div className="relative mt-9 overflow-hidden rounded-2xl border border-border/80 bg-black/80 p-3 sm:p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative grid grid-cols-2 rounded-xl bg-zinc-950/80 p-1.5">
              {([
                { key: "work", label: t.journey.tabs.work },
                { key: "studies", label: t.journey.tabs.studies },
              ] as const).map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTab(item.key)}
                  className={cn(
                    "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    tab === item.key
                      ? "bg-zinc-100 text-zinc-900"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100",
                  )}
                  aria-pressed={tab === item.key}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <ol className="relative mt-4 space-y-8 rounded-xl border border-zinc-800/90 bg-zinc-950/90 p-5 pb-8 sm:p-7 sm:pb-10">
              <span className="pointer-events-none absolute bottom-0 left-10 top-0 w-px bg-linear-to-b from-zinc-500/90 via-zinc-700 to-transparent" />

              {entries.map((entry, i) => (
                <Reveal
                  as="li"
                  key={`${entry.title}-${entry.period}`}
                  delay={i * 90}
                  className="relative pl-14"
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border text-xs font-bold",
                      i % 3 === 0 && "border-cyan-300/60 bg-cyan-400/15 text-cyan-100",
                      i % 3 === 1 && "border-emerald-300/60 bg-emerald-400/15 text-emerald-100",
                      i % 3 === 2 && "border-amber-300/60 bg-amber-400/15 text-amber-100",
                    )}
                  >
                    {getMonogram(entry.title)}
                  </span>

                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">{entry.period}</p>
                  <h3 className="mt-1 text-xl font-semibold text-zinc-100">{entry.title}</h3>
                  <p className="mt-1 text-base text-zinc-400">{entry.role}</p>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">{entry.description}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
