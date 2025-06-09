
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CTAAgendamento() {
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre as soluções de automação do ChatBear. Podem me ajudar?"
    );
    window.open(`https://wa.me/5562981586424?text=${message}`, '_blank');
  };

  return (
    <section id="cta-agendamento" className="py-16 md:py-24 bg-gradient-to-br from-chatbear-green-500/10 to-chatbear-green-600/5">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            Pronto para transformar seu negócio?
          </h2>
          <p className="section-subtitle">
            Agende uma reunião gratuita e descubra como podemos automatizar seus processos e aumentar suas vendas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button 
              onClick={() => navigate('/agendamento')}
              className="bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white px-8 py-4 text-lg flex items-center gap-3"
              size="lg"
            >
              <Calendar className="h-5 w-5" />
              Agendar Reunião Gratuita
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleWhatsAppContact}
              className="border-chatbear-green-500 text-chatbear-green-500 hover:bg-chatbear-green-500 hover:text-white px-8 py-4 text-lg flex items-center gap-3"
              size="lg"
            >
              <MessageSquare className="h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="mt-12 p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-chatbear-green-400">
              O que você vai descobrir na reunião:
            </h3>
            <div className="text-sm text-muted-foreground space-y-2 text-left">
              <p>✓ Como automatizar seu atendimento e aumentar as vendas</p>
              <p>✓ Estratégias personalizadas para seu tipo de negócio</p>
              <p>✓ ROI esperado com nossas soluções de automação</p>
              <p>✓ Demonstração prática das funcionalidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
