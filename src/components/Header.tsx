
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Check for current theme
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setTheme(customEvent.detail);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("themeChange", handleThemeChange);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-chatbear-dark-900/80 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src={theme === "dark" ? "https://i.imgur.com/sOP8UWA.png" : "https://i.imgur.com/3yb5C4O.png"}
              alt="ChatBear Logo" 
              className="h-8 md:h-10" 
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-foreground hover:text-chatbear-green-500 transition-colors">Benefícios</a>
          <a href="#solutions" className="text-foreground hover:text-chatbear-green-500 transition-colors">Soluções</a>
          <a href="#testimonials" className="text-foreground hover:text-chatbear-green-500 transition-colors">Depoimentos</a>
          <a href="#faq" className="text-foreground hover:text-chatbear-green-500 transition-colors">FAQ</a>
          <a href="#contact" className="text-foreground hover:text-chatbear-green-500 transition-colors">Contato</a>
          <div className="ml-4 flex items-center space-x-2">
            <ThemeToggle />
            <Button className="bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white">
              Começar Agora
            </Button>
          </div>
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-chatbear-dark-900 border-t dark:border-gray-800 animate-fade-in">
          <div className="container-section py-4 space-y-4">
            <a href="#benefits" className="block py-2 text-foreground hover:text-chatbear-green-500">Benefícios</a>
            <a href="#solutions" className="block py-2 text-foreground hover:text-chatbear-green-500">Soluções</a>
            <a href="#testimonials" className="block py-2 text-foreground hover:text-chatbear-green-500">Depoimentos</a>
            <a href="#faq" className="block py-2 text-foreground hover:text-chatbear-green-500">FAQ</a>
            <a href="#contact" className="block py-2 text-foreground hover:text-chatbear-green-500">Contato</a>
            <Button className="w-full bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white mt-2">
              Começar Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
