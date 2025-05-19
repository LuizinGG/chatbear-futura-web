
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Solutions } from "@/components/Solutions";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Set dark mode as default on page load
  useEffect(() => {
    // Always set to dark mode by default
    document.documentElement.classList.add('dark');
    
    // Update the page title
    document.title = "ChatBear - Automação inteligente com chatbots e IA";
    
    // Dispatch initial theme event for logo
    window.dispatchEvent(new CustomEvent('themeChange', { detail: 'dark' }));
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
        <Partners />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
