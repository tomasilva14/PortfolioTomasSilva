"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Journey() {
  const { t } = useLanguage()

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

        <ol className="relative mt-10 border-l border-border pl-8">
          {t.journey.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.6rem] flex size-7 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {step.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
