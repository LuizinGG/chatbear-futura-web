
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutions = [
    {
      title: "ChatBear Atendimento",
      description: "Chatbots que conversam como humanos, respondem dúvidas e guiam clientes até a compra. Integração com WhatsApp, Instagram e outras plataformas para um atendimento instantâneo e personalizado disponível 24/7.",
      features: ["Respostas em tempo real", "Integração omnichannel", "Qualificação automática de leads", "Atendimento 24/7"],
      image: "https://i.imgur.com/CtBL40T.jpeg"
    },
    {
      title: "ChatBear Automação",
      description: "Automatize fluxos de trabalho como envio de mensagens, follow-ups e agendamentos. Reduza o tempo de tarefas manuais em até 70%, permitindo que suas equipes foquem em prioridades estratégicas.",
      features: ["Automação de processos", "Redução de até 70% em tarefas manuais", "Workflows personalizáveis", "Integração com CRMs"],
      image: "/lovable-uploads/385ab704-914a-4ed3-9e2c-6bd836247b85.png"
    },
    {
      title: "ChatBear Analytics",
      description: "Obtenha relatórios detalhados sobre interações, conversões e comportamento dos clientes. Tome decisões baseadas em dados reais em tempo real para otimizar resultados e estratégias de negócio.",
      features: ["Dashboards personalizáveis", "Insights acionáveis", "Métricas de conversão", "Análise comportamental"],
      image: "https://i.imgur.com/rjbOkPa.png"
    },
    {
      title: "ChatBear Kanban",
      description: "Organize tarefas e projetos com quadros Kanban integrados que permitem a visualização do progresso em tempo real. Otimize a gestão de equipe e projetos para maior produtividade.",
      features: ["Quadros Kanban intuitivos", "Gestão visual de tarefas", "Acompanhamento em tempo real", "Delegação inteligente"],
      image: "https://i.imgur.com/J5hL3p2.jpeg"
    }
  ];

  const handleSaibaMais = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais detalhes sobre as soluções do ChatBear e como podem ajudar meu negócio."
    );
    window.open(`https://wa.me/5511991475367?text=${message}`, '_blank');
  };

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-chatbear-green-50/50 dark:to-chatbear-green-950/10"></div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title">
          Nossas <span className="text-chatbear-green-500">soluções</span> inovadoras
        </h2>
        
        <p className="section-subtitle">
          Chatbots personalizados, automações inteligentes, relatórios analíticos e gerenciamento com Kanban para transformar seu negócio.
        </p>
        
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {solutions.map((solution, index) => (
              <Button
                key={index}
                variant={activeTab === index ? "default" : "outline"}
                className={activeTab === index 
                  ? "bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white" 
                  : "text-foreground hover:text-chatbear-green-500 border-chatbear-green-200 dark:border-chatbear-green-800"
                }
                onClick={() => setActiveTab(index)}
              >
                {solution.title.replace("ChatBear ", "")}
              </Button>
            ))}
          </div>
          
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                activeTab === index ? "animate-fade-in" : "hidden"
              }`}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-medium text-lg mb-3">Recursos principais:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 mr-2 text-chatbear-green-500 flex-shrink-0 mt-0.5" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={handleSaibaMais}
                  className="bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white"
                >
                  Saiba mais
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-chatbear-green-200/30 to-chatbear-green-400/30 dark:from-chatbear-green-900/20 dark:to-chatbear-green-700/20 rounded-lg transform -rotate-2"></div>
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="rounded-lg shadow-lg relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
