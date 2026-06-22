"use client"

import { createContext, useContext, useEffect, useState, useMemo } from "react"
import { dictionaries, type Dictionary, type Locale } from "@/lib/i18n"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "portfolio-locale"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr")
  const [remote, setRemote] = useState<any | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && ["fr", "en", "pt"].includes(stored)) {
      setLocaleState(stored)
    } else {
      const browser = navigator.language.slice(0, 2)
      if (browser === "en" || browser === "pt") setLocaleState(browser)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    // fetch content from the new API and merge into dictionary
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => setRemote(data))
      .catch(() => {})
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const merged = useMemo<Dictionary>(() => {
    const base = dictionaries[locale]
    if (!remote) return base

    // Use local blocks as source of truth; ignore remote skill blocks
    const mergedBlocks = base.skills.blocks

    return {
      ...base,
      projects: {
        ...base.projects,
        items: remote.projects ?? base.projects.items,
      },
      skills: {
        ...base.skills,
        blocks: mergedBlocks,
      },
      journey: {
        ...base.journey,
        steps: remote.journeySteps ?? base.journey.steps,
      },
      contact: {
        ...base.contact,
        directEmail: remote.contactSetting?.directEmail ?? base.contact.directEmail,
      },
    }
  }, [locale, remote])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: merged }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
