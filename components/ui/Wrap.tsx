import { cn } from "@/lib/cn";

/** The shared content container: max 1180px, 22px gutters, 40px from 720px up. */
export function Wrap({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-wrap px-[22px] w720:px-10", className)}>
      {children}
    </div>
  );
}
