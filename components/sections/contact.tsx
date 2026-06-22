"use client"

import { useState, type FormEvent } from "react"
import { Check, Loader2, Mail, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type Status = "idle" | "sending" | "success" | "error"

const EMAIL = "tomasilva14@gmail.com"

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>("idle")
  const [values, setValues] = useState({ name: "", email: "", message: "" })

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!values.name.trim() || !isValidEmail(values.email) || values.message.trim().length < 5) {
      setStatus("error")
      return
    }
    setStatus("sending")
    // Front-end only: simulate sending. Swap with a real endpoint later.
    setTimeout(() => {
      setStatus("success")
      setValues({ name: "", email: "", message: "" })
    }, 1100)
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-8">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionHeading label={t.contact.label} title={t.contact.title} intro={t.contact.intro} />
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            <span className="font-mono">{EMAIL}</span>
          </a>
          <p className="mt-2 text-xs text-muted-foreground">{t.contact.directEmail}</p>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, name: e.target.value }))
                    if (status === "error" || status === "success") setStatus("idle")
                  }}
                  placeholder={t.contact.namePlaceholder}
                  className={inputClass}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, email: e.target.value }))
                    if (status === "error" || status === "success") setStatus("idle")
                  }}
                  placeholder={t.contact.emailPlaceholder}
                  className={inputClass}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => {
                  setValues((v) => ({ ...v, message: e.target.value }))
                  if (status === "error" || status === "success") setStatus("idle")
                }}
                placeholder={t.contact.messagePlaceholder}
                className={cn(inputClass, "resize-none")}
              />
            </div>

            {status === "error" && (
              <p className="mt-3 text-sm text-destructive" role="alert">
                {t.contact.error}
              </p>
            )}
            {status === "success" && (
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary" role="status">
                <Check className="size-4" />
                {t.contact.success}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
