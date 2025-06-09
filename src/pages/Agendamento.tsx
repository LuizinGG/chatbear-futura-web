import { ArrowLeft, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Agendamento = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Check for current theme
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
    
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setTheme(customEvent.detail);
    };
    
    window.addEventListener("themeChange", handleThemeChange);
    
    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-chatbear-dark-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-chatbear-dark-900/80 backdrop-blur-md shadow-md py-4">
        <div className="container-section flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-chatbear-green-500/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <img 
              src={theme === "dark" ? "https://i.imgur.com/sOP8UWA.png" : "https://i.imgur.com/3yb5C4O.png"}
              alt="ChatBear Logo" 
              className="h-8 md:h-10" 
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Agende sua Reunião
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container-section">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Vamos conversar sobre sua automação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Agende uma reunião gratuita de 30 minutos para descobrir como o ChatBear pode transformar seu negócio com automação inteligente.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
                <Calendar className="h-8 w-8 text-chatbear-green-500 mb-3" />
                <h3 className="font-semibold mb-2">Consultoria Gratuita</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Análise completa das suas necessidades de automação
                </p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
                <Clock className="h-8 w-8 text-chatbear-green-500 mb-3" />
                <h3 className="font-semibold mb-2">30 Minutos</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Tempo suficiente para entender seu negócio e propor soluções
                </p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
                <Users className="h-8 w-8 text-chatbear-green-500 mb-3" />
                <h3 className="font-semibold mb-2">Especialistas</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Conversa direta com nossos especialistas em automação
                </p>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
                Escolha o melhor horário para você
              </h3>
              <div className={`calendar-container rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-white' : ''}`}>
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0cOR4v7gJnMoQmGow_8ds0c7ekuVD1CmXhhmyQz7vC9BlwN9CEIUMvjjFCEGJw2gDGPRSWfGnv?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="600" 
                  frameBorder="0"
                  title="Agendamento ChatBear"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloatingWhatsApp />
    </div>
  );
};

export default Agendamento;
