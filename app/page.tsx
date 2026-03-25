import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1b1614] text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Gallery />
      <Education />
      <Contact />
    </main>
  );
}
