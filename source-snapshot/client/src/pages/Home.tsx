/*
 * Section order: Hero → Ticker → Experience → Ticker → Work → About → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain-overlay min-h-screen bg-[#0F0F0D]">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <ExperienceSection />
      <MarqueeTicker />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
