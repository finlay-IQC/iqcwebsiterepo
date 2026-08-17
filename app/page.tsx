import { Fit } from "@/components/Fit";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Positioning } from "@/components/Positioning";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { TrackRecord } from "@/components/TrackRecord";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Positioning />
        <Services />
        <Process />
        <TrackRecord />
        <Fit />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
