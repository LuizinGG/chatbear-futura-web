
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutions = [
    {
      title: "ChatBear Atendimento",
      description: "Automatize seu atendimento ao cliente com respostas precisas e personalizadas. Nossa IA aprende com cada interação, melhorando continuamente a experiência do usuário.",
      features: ["Respostas em tempo real", "Integração omnichannel", "Personalização avançada", "Escalonamento inteligente"],
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop"
    },
    {
      title: "ChatBear Documentos",
      description: "Extraia informações, classifique e processe documentos automaticamente. Reduza erros e acelere a análise de contratos, faturas e formulários.",
      features: ["Extração inteligente de dados", "OCR avançado", "Classificação automática", "Validação de documentos"],
      image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&auto=format&fit=crop"
    },
    {
      title: "ChatBear Analytics",
      description: "Transforme seus dados em insights acionáveis. Obtenha relatórios detalhados e previsões precisas para tomar decisões informadas.",
      features: ["Dashboards personalizáveis", "Previsões baseadas em IA", "Alertas de anomalias", "Visualização de dados avançada"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
    },
    {
      title: "ChatBear Workflow",
      description: "Automatize fluxos de trabalho complexos e aumente a produtividade da sua equipe com nossa plataforma de orquestração de processos.",
      features: ["Automação de processos", "Integração com ferramentas existentes", "Monitoramento em tempo real", "Escalonamento inteligente"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-chatbear-green-50/50 dark:to-chatbear-green-950/10"></div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title">
          Nossas <span className="text-chatbear-green-500">Soluções</span> Inovadoras
        </h2>
        
        <p className="section-subtitle">
          Desenvolvemos tecnologias avançadas de IA adaptadas às necessidades específicas do seu negócio.
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
                
                <Button className="bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white">
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
