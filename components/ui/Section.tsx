import { cn } from "@/lib/cn";

/**
 * Standard page section: 110px vertical rhythm (70px on mobile) with a
 * hairline rule beneath, matching the approved design reference.
 */
export function Section({
  id,
  labelledBy,
  className,
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative border-b border-hair py-[70px] w720:py-[110px]",
        className,
      )}
    >
      {children}
    </section>
  );
}
