import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/credibility";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { HowIBuild } from "@/components/sections/how-i-build";
import { Experience } from "@/components/sections/experience";
import { Philosophy } from "@/components/sections/philosophy";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Proof />
        <FeaturedProducts />
        <HowIBuild />
        <Experience />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
