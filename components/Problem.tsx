import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Wrap } from "@/components/ui/Wrap";

const DIAGNOSTICS = [
  { label: "Enquiry flow", value: "Feast or famine" },
  { label: "Lead qualification", value: "None. Everything gets tendered." },
  { label: "Pipeline visibility", value: "In someone's head, not a system" },
  { label: "Growth ceiling", value: "Set by your network, not your capacity" },
];

export function Problem() {
  return (
    <Section labelledBy="problem-heading">
      <Wrap>
        <Reveal>
          <Eyebrow>Where most £1M–£5M firms get stuck</Eyebrow>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-10 w860:grid-cols-2 w860:gap-[70px]">
          <div>
            <Reveal>
              <h2
                id="problem-heading"
                className="mb-5 font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.2] tracking-[-0.01em] text-paper"
              >
                You&apos;re not short on ability. You&apos;re short on the
                systems that turn ability into revenue.
              </h2>
            </Reveal>
            <p className="max-w-[640px] text-[16.5px] leading-[1.65] text-paper-dim">
              Most design &amp; build and fit-out firms at this stage are good at
              the work and bad at the pipeline. Enquiries come from referrals,
              repeat clients, and whoever happens to call. There&apos;s no
              consistent way to generate the right kind of enquiry — the ones
              that fit your programme, your capacity and your margin, not just
              anyone with a postcode and a budget.
            </p>
            <p className="mt-5 max-w-[640px] text-[16.5px] leading-[1.65] text-paper-dim">
              Tender teams end up chasing volume instead of fit. Growth gets
              capped by the founder&apos;s network, not the firm&apos;s
              capability.
            </p>
          </div>

          <dl className="border-t border-hair">
            {DIAGNOSTICS.map((item) => (
              <div
                key={item.label}
                className="flex justify-between gap-5 border-b border-hair py-5 font-mono text-sm"
              >
                <dt className="pt-[2px] text-[12px] uppercase tracking-[0.05em] text-paper-dim">
                  {item.label}
                </dt>
                <dd className="m-0 max-w-[60%] text-right text-paper">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Wrap>
    </Section>
  );
}
