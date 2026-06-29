"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

function SkillItem({ name, description }: { name: string; description?: string }) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div
      className="cursor-help"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div className="text-sm">
        <span className="font-medium text-foreground hover:text-primary transition-colors">{name}</span>
      </div>
      {showDescription && description && (
        <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
          {description}
        </div>
      )}
    </div>
  )
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-card/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading label={t.skills.label} title={t.skills.title} intro={t.skills.intro} />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.skills.blocks.map((block, i) => (
            <Reveal key={block.id} delay={i * 120}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-background p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs font-semibold text-primary">
                    {block.id}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {block.code}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{block.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {block.description}
                </p>
                <div className="mt-5 space-y-3.5">
                  {block.items.map((item) => (
                    <SkillItem key={item.name} name={item.name} description={item.description} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
