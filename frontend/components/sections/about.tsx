"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading label={t.about.label} title={t.about.title} />
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {t.about.factsTitle}
            </p>
            <dl className="mt-4 space-y-3">
              {t.about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
