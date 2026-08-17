/**
 * Site-wide configuration constants.
 *
 * Keep every externally-facing URL and repeated string here rather than
 * hardcoding it across components.
 */

/**
 * Destination for the primary "Book a Pipeline Audit" call to action.
 *
 * TODO (pre-launch): swap this for the new booking flow.
 * The current GoHighLevel booking link is wired into the OLD residential
 * offer's pipeline (its calendar, workflows and automations all assume a
 * homeowner enquiry). It must NOT be reused for the D&B / fit-out Pipeline
 * Audit — a new booking flow needs to be built and its URL dropped in here.
 * Until then this points at the in-page final CTA section.
 */
export const BOOKING_URL = "#audit";

/** In-page anchor targets used by the nav and the hero's secondary CTA. */
export const ANCHORS = {
  top: "#top",
  process: "#process",
  audit: "#audit",
} as const;

/** Contact details shown in the footer. */
export const CONTACT_EMAIL = "info@theiqcollective.com";

/** Canonical site URL — update once the production domain is pointed at Vercel. */
export const SITE_URL = "https://www.theiqcollective.com";

export const SITE_NAME = "The IQ Collective";
