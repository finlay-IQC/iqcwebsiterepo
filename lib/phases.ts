/**
 * The four programme phases. Shared by the hero's teaser bar and the full
 * Process section so the two can never drift apart.
 */
export type Phase = {
  code: string;
  /** Indicative duration shown under the phase code in the Process rows. */
  duration: string;
  title: string;
  description: string;
  /** Fill of the progress track, as a percentage of the programme. */
  progress: 25 | 50 | 75 | 100;
};

export const PHASES: Phase[] = [
  {
    code: "01",
    duration: "Weeks 1–2",
    title: "Pipeline Audit",
    description:
      "We map your current enquiry flow, tender hit rate and capacity, and identify exactly where the system is leaking pipeline.",
    progress: 25,
  },
  {
    code: "02",
    duration: "Weeks 2–5",
    title: "System Build",
    description:
      "We build the acquisition, qualification and CRM infrastructure around your specific capacity, margin targets and project criteria.",
    progress: 50,
  },
  {
    code: "03",
    duration: "Weeks 5–6",
    title: "Install & Launch",
    description:
      "Systems go live. Qualification criteria are tested and tightened against real enquiries, not assumptions.",
    progress: 75,
  },
  {
    code: "04",
    duration: "Ongoing",
    title: "Operate & Scale",
    description:
      "We run and report on the system weekly — scaling what's working, cutting what isn't — with full visibility, not a black box.",
    progress: 100,
  },
];
