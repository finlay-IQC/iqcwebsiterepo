import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Wrap } from "@/components/ui/Wrap";
import { ANCHORS } from "@/lib/config";
import { PHASES } from "@/lib/phases";

/** Progress-track fill widths, keyed by phase percentage. */
const TRACK_WIDTH: Record<number, string> = {
  25: "w-1/4",
  50: "w-1/2",
  75: "w-3/4",
  100: "w-full",
};

export function Process() {
  return (
    <Section id={ANCHORS.process.slice(1)} labelledBy="process-heading">
      <Wrap>
        <Reveal>
          <Eyebrow>How we install it</Eyebrow>
          <h2
            id="process-heading"
            className="max-w-[640px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.2] tracking-[-0.01em] text-paper"
          >
            A phased build. Not a campaign switched on overnight.
          </h2>
        </Reveal>

        <ol className="mt-[60px]">
          {PHASES.map((phase) => (
            <li
              key={phase.code}
              className="grid grid-cols-1 items-start gap-[26px] border-t border-hair py-[26px] last:border-b last:border-hair w640:grid-cols-[120px_1fr]"
            >
              <p className="font-mono text-sm tracking-[0.05em] text-bronze">
                {phase.code}
                <span className="mt-1 block text-[11px] text-paper-dim">
                  {phase.duration}
                </span>
              </p>
              <div>
                <h3 className="mb-2 font-display text-[18.5px] font-semibold leading-[1.25] tracking-[-0.01em] text-paper">
                  {phase.title}
                </h3>
                <p className="max-w-[620px] text-[15px] leading-[1.6] text-paper-dim">
                  {phase.description}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-4 h-[3px] max-w-[620px] overflow-hidden rounded-[2px] bg-hair-strong"
                >
                  <span
                    className={`block h-full bg-bronze ${TRACK_WIDTH[phase.progress]}`}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Wrap>
    </Section>
  );
}
