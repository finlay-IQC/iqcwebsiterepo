import { Logo } from "@/components/ui/Logo";
import { ANCHORS } from "@/lib/config";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-ink/[0.86] backdrop-blur-[10px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-wrap items-center justify-between px-[22px] py-4 w720:px-10 w720:py-5"
      >
        <Logo />
        <a
          href={ANCHORS.audit}
          className="whitespace-nowrap rounded-[2px] border border-hair-strong px-4 py-[10px] font-mono text-[12px] uppercase leading-none tracking-[0.06em] text-paper no-underline transition-colors duration-150 ease-out hover:border-bronze hover:text-bronze"
        >
          Book a Pipeline Audit
        </a>
      </nav>
    </header>
  );
}
