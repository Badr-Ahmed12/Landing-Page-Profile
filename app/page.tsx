import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import CompaniesBar from "@/components/CompaniesBar";
import SkillsSection from "@/components/SkillsSection";
import GallerySection from "@/components/GallarySection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/Contect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <HeroSection />
      <CompaniesBar />
      <SkillsSection />
      <GallerySection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}

