
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Solutions } from "@/components/Solutions";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTAAgendamento } from "@/components/CTAAgendamento";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  // Set light mode as default on page load
  useEffect(() => {
    // Always set to light mode by default
    document.documentElement.classList.remove('dark');
    
    // Update the page title
    document.title = "ChatBear - Automação inteligente com chatbots e IA";
    
    // Dispatch initial theme event for logo
    window.dispatchEvent(new CustomEvent('themeChange', { detail: 'light' }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-chatbear-dark-950">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Solutions />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTAAgendamento />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
