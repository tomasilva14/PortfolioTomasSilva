"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Journey } from "@/components/sections/journey"
import { Contact } from "@/components/sections/contact"

function AutoScrollDemo() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    let rafId: number | null = null
    let lastTime = performance.now()
    let stopped = false

    const stop = () => {
      if (stopped) return
      stopped = true
      if (rafId !== null) cancelAnimationFrame(rafId)
    }

    const onUserInput = () => stop()

    const animate = (time: number) => {
      if (stopped) return

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY >= maxScroll - 1) {
        stop()
        return
      }

      const delta = time - lastTime
      lastTime = time
      const distance = delta * 0.03
      window.scrollTo({ top: Math.min(window.scrollY + distance, maxScroll), behavior: "auto" })
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener("wheel", onUserInput, { passive: true })
    window.addEventListener("touchstart", onUserInput, { passive: true })
    window.addEventListener("keydown", onUserInput)
    window.addEventListener("pointerdown", onUserInput)

    const timeoutId = window.setTimeout(() => {
      if (window.scrollY === 0) {
        rafId = requestAnimationFrame(animate)
      }
    }, 1200)

    return () => {
      stop()
      window.clearTimeout(timeoutId)
      window.removeEventListener("wheel", onUserInput)
      window.removeEventListener("touchstart", onUserInput)
      window.removeEventListener("keydown", onUserInput)
      window.removeEventListener("pointerdown", onUserInput)
    }
  }, [])

  return null
}

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <AutoScrollDemo />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}

