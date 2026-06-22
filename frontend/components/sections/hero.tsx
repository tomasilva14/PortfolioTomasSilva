"use client"

import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      id="top" 
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      
      <div 
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
        style={{
          backgroundImage: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, rgba(239, 68, 68, 0.3) 0%, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-5 pb-20 pt-32 sm:px-8 md:flex-row md:items-center md:pt-40">
        <div className="flex-1 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </span>

          <p className="mt-6 font-mono text-sm text-primary">{t.hero.greeting}</p>
          <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground">
            {t.hero.role}
            <span className="blink ml-1 text-primary">_</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Download className="size-4" />
              {t.hero.cvButton}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {t.hero.contactButton}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto w-56 sm:w-64 md:w-72">
            <div className="absolute -inset-3 rounded-3xl border border-dashed border-primary/30" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/TomasPFP.jpg"
                alt={t.hero.name}
                width={400}
                height={400}
                priority
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
            <div
              onMouseEnter={() => setShowEasterEgg(true)}
              onMouseLeave={() => setShowEasterEgg(false)}
              className="absolute -bottom-3 -right-3 rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-sm min-w-max"
            >
              {showEasterEgg ? (
                <span className="inline-flex items-center gap-0.5 font-bold wave-letters">
                  <span className="animate-wave-letter text-emerald-500">S</span>
                  <span className="animate-wave-letter text-amber-400">U</span>
                  <span className="animate-wave-letter text-red-500">I</span>
                  <span className="animate-wave-letter text-red-500">I</span>
                  <span className="animate-wave-letter text-red-500">I</span>
                  <span className="animate-wave-letter text-red-500">I</span>
                </span>
              ) : (
                <>
                  Made in <span className="font-semibold text-primary">Portugal</span> 🇵🇹
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
