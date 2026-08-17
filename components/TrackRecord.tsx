import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Wrap } from "@/components/ui/Wrap";

/**
 * ⚠️ ACCURACY REQUIREMENT — READ BEFORE EDITING
 *
 * Both figures below are real results from the RESIDENTIAL division, not from
 * design & build / commercial fit-out clients. The "Residential division
 * client · 2026" caption on each stat is what makes that honest, and it is a
 * factual accuracy requirement, not a styling choice.
 *
 * Do not remove it, do not generalise it, and do not reword the surrounding
 * copy so these read as D&B results. No figures may be added here that are not
 * in iq-collective-website-copy.md.
 */
const PROOF = [
  {
    figure: "£3.38M",
    label: "In active qualified project enquiries, generated in roughly 60 days",
    caption: "Residential division client · 2026",
  },
  {
    figure: "£831K",
    label: "In qualified pipeline, off £1M+ in total enquiries",
    caption: "Residential division client · 2026",
  },
];

export function TrackRecord() {
  return (
    <Section labelledBy="track-record-heading">
      <Wrap>
        <Reveal>
          <Eyebrow>Track record</Eyebrow>
          <h2
            id="track-record-heading"
            className="max-w-[760px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.2] tracking-[-0.01em] text-paper"
          >
            Built on results at the tier below. Now installing the same
            infrastructure at £1M–£5M+.
          </h2>
        </Reveal>

        <p className="mt-5 max-w-[640px] text-[16.5px] leading-[1.65] text-paper-dim">
          This system isn&apos;t theoretical. It&apos;s the same pipeline,
          qualification and reporting infrastructure we&apos;ve run for premium
          residential contractors.
        </p>

        <div className="mb-[30px] mt-11 grid grid-cols-1 gap-px border border-hair bg-hair w720:grid-cols-2">
          {PROOF.map((stat) => (
            <div key={stat.figure} className="bg-ink px-[34px] py-9">
              <p className="font-mono text-[34px] font-medium leading-none text-paper">
                {stat.figure}
              </p>
              <p className="mt-[10px] text-[14.5px] leading-[1.5] text-paper-dim">
                {stat.label}
              </p>
              {/* Provenance caption — required. See the note at the top of this file. */}
              <p className="mt-[14px] font-mono text-[11px] uppercase tracking-[0.06em] text-redline">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[700px] border-l-2 border-hair-strong pl-[18px] text-[14.5px] leading-[1.6] text-paper-dim">
          <p>
            We&apos;re now rebuilding that same system for the scale,
            procurement complexity and margin discipline of £1M–£5M+ D&amp;B and
            fit-out firms — and taking on a small number of founding partners at
            this tier.
          </p>
          <p className="mt-3">
            {/* TODO: insert founder name — placeholder left visible on purpose */}
            Early partners get direct access to{" "}
            <span className="text-paper">[Founder name]</span> and Nathan — not
            an account manager and a template.
          </p>
        </div>
      </Wrap>
    </Section>
  );
}
