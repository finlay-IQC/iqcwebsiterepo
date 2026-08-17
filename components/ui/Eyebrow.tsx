import { cn } from "@/lib/cn";

/** Mono, uppercase, bronze section label with the short leading rule. */
export function Eyebrow({
  children,
  centered = false,
  className,
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-[18px] flex items-center gap-[10px] font-mono text-[12px] uppercase leading-normal tracking-[0.14em] text-bronze",
        centered && "justify-center",
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block h-px w-[22px] shrink-0 bg-bronze" />
      {children}
    </p>
  );
}
