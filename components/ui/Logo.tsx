import { ANCHORS, SITE_NAME } from "@/lib/config";
import { cn } from "@/lib/cn";

/**
 * Logo lockup: mark + wordmark.
 *
 * TODO (pre-launch): the mark is a placeholder — a 9px bronze square standing
 * in for the real IQ Collective mark. Drop the final SVG in place of the
 * <span aria-hidden> below (and update app/icon.svg with the same artwork so
 * the favicon matches).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href={ANCHORS.top}
      className={cn(
        "inline-flex items-center gap-[10px] font-display text-[17px] font-bold uppercase tracking-[0.02em] text-paper no-underline",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="inline-block h-[9px] w-[9px] shrink-0 rounded-[1px] bg-bronze"
      />
      {SITE_NAME}
    </a>
  );
}
