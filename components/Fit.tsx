import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Wrap } from "@/components/ui/Wrap";

const FOR_YOU = [
  "You're a design & build, commercial fit-out, or large-scale renovation/construction firm doing £1M–£5M+ turnover",
  "You're capable of £10M+ but capped by pipeline, not delivery",
  "You want enquiries qualified before they reach your estimating desk, not after",
  'You want to see the pipeline, not just be told "it\'s going well"',
];

const NOT_FOR_YOU = [
  "You're under £1M turnover and need volume more than precision (different offer — ask us)",
  "You want the cheapest leads possible, not the right ones",
  "You're not willing to let someone else own part of your growth infrastructure",
];

function FitColumn({
  id,
  title,
  items,
  marker,
  tone,
}: {
  id: string;
  title: string;
  items: string[];
  marker: string;
  tone: "yes" | "no";
}) {
  return (
    <div className="bg-ink px-9 py-[38px]">
      <h3
        id={id}
        className={`mb-6 font-mono text-base uppercase tracking-[0.06em] ${
          tone === "yes" ? "text-bronze" : "text-paper-dim"
        }`}
      >
        {title}
      </h3>
      <ul aria-labelledby={id} className="m-0 list-none p-0">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-[14px] border-t border-hair py-[14px] text-[15px] leading-[1.6] text-paper-dim first:border-t-0"
          >
            <span
              aria-hidden="true"
              className={`shrink-0 font-mono ${
                tone === "yes" ? "text-bronze" : "text-paper-dim"
              }`}
            >
              {marker}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Fit() {
  return (
    <Section labelledBy="fit-heading">
      <Wrap>
        <Reveal>
          <Eyebrow>Fit, not volume</Eyebrow>
          <h2
            id="fit-heading"
            className="max-w-[640px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.2] tracking-[-0.01em] text-paper"
          >
            We work with a small number of firms. On purpose.
          </h2>
        </Reveal>

        <div className="mt-[50px] grid grid-cols-1 gap-px border border-hair bg-hair w800:grid-cols-2">
          <FitColumn
            id="fit-yes"
            title="This is for you if"
            items={FOR_YOU}
            marker="+"
            tone="yes"
          />
          <FitColumn
            id="fit-no"
            title="This isn't for you if"
            items={NOT_FOR_YOU}
            marker="–"
            tone="no"
          />
        </div>
      </Wrap>
    </Section>
  );
}
