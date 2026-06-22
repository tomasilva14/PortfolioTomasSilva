import { cn } from "@/lib/utils"

export function SectionHeading({
  label,
  title,
  intro,
  className,
}: {
  label: string
  title: string
  intro?: string
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
        {"// "}
        {label}
      </span>
      <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  )
}
