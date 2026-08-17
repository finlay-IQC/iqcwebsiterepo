import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Wrap } from "@/components/ui/Wrap";
import { ANCHORS, BOOKING_URL } from "@/lib/config";

export function FinalCta() {
  return (
    <Section
      id={ANCHORS.audit.slice(1)}
      labelledBy="final-cta-heading"
      className="bg-final-glow text-center"
    >
      <Wrap>
        <Eyebrow centered>Book a pipeline audit</Eyebrow>

        <h2
          id="final-cta-heading"
          className="mx-auto mb-[22px] max-w-[720px] font-display text-[clamp(30px,4vw,46px)] font-semibold leading-[1.15] tracking-[-0.01em] text-paper"
        >
          See where your pipeline is leaking.
        </h2>

        <p className="mx-auto mb-10 max-w-[640px] text-[19px] leading-[1.65] text-paper-dim">
          We offer a Pipeline Audit to a small number of D&amp;B and fit-out
          firms each quarter. If there&apos;s a fit, we&apos;ll show you exactly
          where the gaps are — and what a properly engineered pipeline could
          generate at your scale. No pitch deck, no generic proposal.
        </p>

        {/* Booking destination lives in lib/config.ts — see the TODO there
            about replacing the old residential GHL link before launch. */}
        <ButtonLink
          href={BOOKING_URL}
          variant="primary"
          withArrow
          className="px-9 py-[19px] text-sm"
        >
          Book a Pipeline Audit
        </ButtonLink>
      </Wrap>
    </Section>
  );
}
