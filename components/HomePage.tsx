import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import { getSiteContent, type Locale } from "@/data/site";

type HomePageProps = {
  locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
  const content = getSiteContent(locale);

  return (
    <main className="min-h-screen bg-[#1b1614] text-white">
      <Header locale={locale} navigation={content.navigation} />
      <Hero content={content} />
      <About content={content} />
      <Services content={content} />
      <Reviews content={content} />
      <Gallery content={content} />
      <Education content={content} />
      <Contact content={content} />
    </main>
  );
}
