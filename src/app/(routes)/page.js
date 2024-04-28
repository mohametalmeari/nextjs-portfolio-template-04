import { AboutSection } from "@/components/about-section";
import { ClientsSection } from "@/components/clients-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WorksSection } from "@/components/works-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
