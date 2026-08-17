import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/config";

/**
 * OPEN GRAPH IMAGE PLACEHOLDER.
 *
 * Generated at build time so social previews are never a broken image, and
 * built from the design tokens rather than a bitmap. It carries the wordmark,
 * the hero headline and the positioning line — nothing invented.
 *
 * TODO (pre-launch): replace with the real 1200×630 brand asset. To swap in a
 * static file, delete this file and drop `opengraph-image.png` in `app/`.
 */

export const alt =
  "The IQ Collective — Preconstruction & pipeline systems for design & build firms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#15181A",
          color: "#EEE9E0",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              backgroundColor: "#A9814C",
              borderRadius: 2,
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 2, fontWeight: 700 }}>
            {SITE_NAME.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Satori requires one text child per element, so the headline is
              split across two lines rather than using an inline <span>. */}
          <div style={{ fontSize: 62, lineHeight: 1.1, letterSpacing: -1 }}>
            The gap between £1M and £10M isn&apos;t ability.
          </div>
          <div
            style={{
              fontSize: 62,
              lineHeight: 1.1,
              letterSpacing: -1,
              color: "#A9814C",
              marginTop: -16,
            }}
          >
            It&apos;s pipeline.
          </div>
          <div style={{ fontSize: 26, color: "#B9B4A9", lineHeight: 1.45 }}>
            Preconstruction &amp; pipeline systems for design &amp; build and
            fit-out firms, £1M–£5M+.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 20,
            color: "#B9B4A9",
          }}
        >
          <div
            style={{ width: 44, height: 4, backgroundColor: "#A9814C", borderRadius: 2 }}
          />
          Book a Pipeline Audit
        </div>
      </div>
    ),
    size,
  );
}
