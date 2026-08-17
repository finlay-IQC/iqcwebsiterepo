import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";

import { SITE_NAME, SITE_URL } from "@/lib/config";

import "./globals.css";

/* ---------------------------------------------------------------------------
   Fonts — self-hosted at build time by next/font, so there is no render-blocking
   request to Google and no layout shift.
   Space Grotesk = display · Inter = body · IBM Plex Mono = data / labels
--------------------------------------------------------------------------- */

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

/* ---------------------------------------------------------------------------
   SEO — title and description are lifted from the hero copy.
--------------------------------------------------------------------------- */

const PAGE_TITLE = `${SITE_NAME} — Preconstruction & Pipeline Systems`;

const PAGE_DESCRIPTION =
  "We install the enquiry, qualification and preconstruction systems that turn a capable £1M–£5M design & build firm into one with a predictable, margin-fit pipeline.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "en_GB",
    // The OG image itself is generated as a placeholder by app/opengraph-image.tsx.
    // TODO (pre-launch): replace that file with the real 1200×630 brand asset.
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#15181A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/* Without JavaScript the scroll-reveal never fires, so neutralise its
            hidden start state. Content must never depend on JS to be readable. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1 !important;transform:none !important}",
            }}
          />
        </noscript>
      </head>
      <body className="bg-ink font-body text-paper antialiased">{children}</body>
    </html>
  );
}
