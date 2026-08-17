import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Wrap } from "@/components/ui/Wrap";

const SYSTEMS = [
  {
    index: "01",
    title: "Pipeline Acquisition",
    body: "Paid campaigns engineered around your actual capacity and margin targets — not volume for its own sake. Built for the buyers and project types that fit a £1M–£5M+ operation, across the channels that actually reach them.",
  },
  {
    index: "02",
    title: "Preconstruction Qualification",
    body: "Every enquiry is screened against your project criteria — budget, programme, procurement route, fit — before it reaches your estimating desk. Your tender team spends time on projects that are actually winnable and worth winning.",
  },
  {
    index: "03",
    title: "Growth Infrastructure",
    body: "A CRM and reporting system built around your pipeline, not a generic template. Full visibility on what's coming in, what's qualified, what's live in tender, and what's actually converting — so growth stops depending on memory and Monday-morning guesswork.",
  },
];

export function Services() {
  return (
    <Section labelledBy="services-heading">
      <Wrap>
        <Reveal>
          <Eyebrow>The system</Eyebrow>
          <h2
            id="services-heading"
            className="max-w-[640px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.2] tracking-[-0.01em] text-paper"
          >
            Three systems. One pipeline.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px border border-hair bg-hair w860:grid-cols-3">
          {SYSTEMS.map((system) => (
            <article
              key={system.index}
              className="bg-ink px-[34px] py-10 ring-1 ring-inset ring-transparent transition-[box-shadow] duration-150 ease-out hover:ring-bronze"
            >
              <p className="mb-[26px] font-mono text-[13px] text-bronze">
                {system.index}
              </p>
              <h3 className="mb-[14px] font-display text-xl font-semibold leading-[1.25] tracking-[-0.01em] text-paper">
                {system.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-paper-dim">
                {system.body}
              </p>
            </article>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
