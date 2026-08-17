import { Logo } from "@/components/ui/Logo";
import { Wrap } from "@/components/ui/Wrap";
import { CONTACT_EMAIL } from "@/lib/config";

export function Footer() {
  return (
    <footer className="py-14">
      <Wrap>
        <div className="flex flex-col items-start justify-between gap-[30px] w600:flex-row w600:flex-wrap w600:items-end">
          <div>
            <Logo className="mb-[14px]" />
            <p className="max-w-[340px] text-sm leading-[1.6] text-paper-dim">
              Preconstruction &amp; pipeline systems for design &amp; build
              firms scaling to £10M+ · UK-wide
            </p>
          </div>

          <div className="text-left font-mono text-[12.5px] leading-[1.6] text-paper-dim w600:text-right">
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-paper no-underline transition-colors duration-150 ease-out hover:text-bronze"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-[6px] max-w-[340px]">
              The IQ Collective — capacity limited. Enquire to check
              availability for this quarter.
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-hair pt-6 font-mono text-[11.5px] text-paper-dim">
          © 2026 The IQ Collective Ltd
        </p>
      </Wrap>
    </footer>
  );
}
