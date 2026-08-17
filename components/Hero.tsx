import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Wrap } from "@/components/ui/Wrap";
import { ANCHORS } from "@/lib/config";
import { cn } from "@/lib/cn";
import { PHASES } from "@/lib/phases";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-hair pb-0 pt-[70px] w720:pt-[100px]"
    >
      {/* Faint technical grid, faded out toward the bottom of the hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--hair) 1px, transparent 1px), linear-gradient(90deg, var(--hair) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 78%)",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <Wrap className="relative pb-[70px]">
        <Eyebrow>
          Preconstruction &amp; Pipeline Systems · Design &amp; Build £1M–£5M+
        </Eyebrow>

        <h1
          id="hero-heading"
          className="mb-[26px] max-w-[920px] font-display text-[clamp(38px,5.4vw,68px)] font-semibold leading-[1.06] tracking-[-0.01em] text-paper"
        >
          The gap between £1M and £10M isn&apos;t ability.{" "}
          <em className="not-italic text-bronze">It&apos;s pipeline.</em>
        </h1>

        <p className="max-w-[640px] text-[19px] leading-[1.65] text-paper-dim">
          We install the enquiry, qualification and preconstruction systems that
          turn a capable £1M–£5M design &amp; build firm into one with a
          predictable, margin-fit pipeline — built by someone who ran precon on
          the other side of the table, not sold ads from the outside.
        </p>

        <div className="mt-[38px] flex flex-wrap items-center gap-4">
          <ButtonLink href={ANCHORS.audit} variant="primary" withArrow>
            Book a Pipeline Audit
          </ButtonLink>
          <ButtonLink href={ANCHORS.process} variant="ghost">
            See how it works
          </ButtonLink>
        </div>

        <p className="mt-5 font-mono text-[12.5px] tracking-[0.02em] text-paper-dim">
          <span aria-hidden="true" className="text-redline">
            ●
          </span>{" "}
          By invitation. A small number of D&amp;B and fit-out firms taken on per
          quarter.
        </p>

        {/* Programme bar teaser — the same motif is expanded in the Process
            section. Phase 01 is shown as the active/entry point. */}
        <ol
          aria-label="Programme phases"
          className="mt-20 grid grid-cols-2 gap-y-[22px] border-t border-hair pt-[26px] w820:grid-cols-4 w820:gap-y-0"
        >
          {PHASES.map((phase, index) => (
            <li
              key={phase.code}
              className={cn(
                "border-r border-hair pr-[18px]",
                index === 1 && "border-r-0 w820:border-r",
                index === 3 && "border-r-0",
              )}
            >
              <div
                className={cn(
                  "mb-[14px] h-[5px] rounded-[2px]",
                  index === 0 ? "bg-bronze" : "bg-hair-strong",
                )}
              />
              <div className="font-mono text-[11px] tracking-[0.08em] text-paper-dim">
                {phase.code}
              </div>
              <div className="mt-1 text-[13.5px] font-medium text-paper">
                {phase.title}
              </div>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}
