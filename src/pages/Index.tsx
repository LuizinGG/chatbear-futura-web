
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
  // Check for user's preferred color scheme on page load
  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Update the page title
    document.title = "ChatBear - Automação Inteligente";
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
