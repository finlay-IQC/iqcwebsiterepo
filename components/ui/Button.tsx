import { cn } from "@/lib/cn";

const base =
  "group inline-flex items-center gap-[10px] rounded-[2px] border px-[26px] py-4 font-mono text-[13px] uppercase leading-none tracking-[0.06em] no-underline transition-[transform,background-color,border-color,color] duration-150 ease-out";

const variants = {
  /* Filled bronze. Lifts 1px on hover — suppressed under reduced motion via
     the .motion-lift hook in globals.css. */
  primary:
    "on-bronze motion-lift border-bronze bg-bronze text-ink hover:-translate-y-px hover:bg-bronze-hover",
  /* Outline. Border and text shift to bronze on hover — no transform. */
  ghost:
    "border-hair-strong bg-transparent text-paper hover:border-bronze hover:text-bronze",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  withArrow = false,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow && (
        <span
          aria-hidden="true"
          className="motion-nudge transition-transform duration-150 ease-out group-hover:translate-x-[3px]"
        >
          →
        </span>
      )}
    </a>
  );
}
