import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Wrap } from "@/components/ui/Wrap";

export function Positioning() {
  return (
    <Section labelledBy="positioning-heading">
      <Wrap>
        <div className="grid grid-cols-1 items-start gap-10 w860:grid-cols-2 w860:gap-[70px]">
          <div>
            <Reveal>
              <Eyebrow>Why this isn&apos;t an ads agency</Eyebrow>
              <h2
                id="positioning-heading"
                className="font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.2] tracking-[-0.01em] text-paper"
              >
                We&apos;ve sat on the other side of the tender.
              </h2>
            </Reveal>
          </div>

          {/* Credential card — reads as a bio/credential, deliberately not a
              testimonial or quote block. */}
          <div className="rounded-[2px] border border-hair-strong border-l-[3px] border-l-bronze bg-ink-2 px-[26px] py-[30px] w720:px-[46px] w720:py-11">
            <span className="mb-[18px] block font-mono text-[12px] uppercase tracking-[0.1em] text-bronze">
              Founder credential
            </span>

            <p className="mb-4 text-[16.5px] leading-[1.65] text-paper-dim">
              Most agencies selling &ldquo;lead generation&rdquo; to
              construction firms have never opened a BOQ, never sat in a precon
              meeting, and can&apos;t tell a qualified enquiry from a
              time-waster with a Pinterest board.
            </p>

            <p className="mb-4 text-[16.5px] leading-[1.65] text-paper-dim">
              {/* TODO: insert founder name — placeholder left visible on purpose */}
              <span className="text-paper">[Founder name]</span>{" "}
              <strong className="font-semibold text-paper">
                spent 8 years as a preconstruction manager
              </strong>{" "}
              — running tenders, building cost plans, sitting across the table
              from firms exactly like yours. We know what a real enquiry looks
              like at £1M–£5M+ scale because we&apos;ve been the one qualifying
              them from the inside.
            </p>

            <p className="text-[16.5px] leading-[1.65] text-paper-dim">
              We don&apos;t run ads and hand you a spreadsheet of names. We
              install the system — acquisition, qualification, and reporting —
              that a serious preconstruction function actually needs.
            </p>

            <dl className="mt-[30px] flex flex-wrap gap-x-[34px] gap-y-5 border-t border-hair-strong pt-[26px]">
              <div>
                <dt className="sr-only">Years in preconstruction</dt>
                <dd className="m-0">
                  <span className="block font-mono text-[26px] font-medium leading-none text-paper">
                    8
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 block text-[12.5px] text-paper-dim"
                  >
                    Years in preconstruction
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Directors — sales &amp; technical delivery</dt>
                <dd className="m-0">
                  <span className="block font-mono text-[26px] font-medium leading-none text-paper">
                    2
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 block text-[12.5px] text-paper-dim"
                  >
                    Directors — sales &amp; technical delivery
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
