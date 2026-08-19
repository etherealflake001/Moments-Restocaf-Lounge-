import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ReservationCTA from "@/components/ReservationCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <Testimonials />
      <ReservationCTA />
    </main>
  );
}
