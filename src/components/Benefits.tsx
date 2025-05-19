
import { Card, CardContent } from "@/components/ui/card";

export function Benefits() {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M8 13h8"/>
          <path d="M8 17h8"/>
          <path d="M8 9h1"/>
        </svg>
      ),
      title: "Automação de Documentos",
      description: "Automatize a criação, revisão e aprovação de documentos com tecnologia de IA avançada."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
          <path d="M12 18V6"/>
        </svg>
      ),
      title: "Redução de Custos",
      description: "Economia de até 40% em custos operacionais com nossas soluções de automação inteligente."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: "Maior Eficiência",
      description: "Otimize processos empresariais e aumente a produtividade da sua equipe com automação."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      ),
      title: "Alertas Inteligentes",
      description: "Receba notificações e insights proativos baseados em padrões identificados pela IA."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: "Segurança Avançada",
      description: "Proteção robusta de dados com criptografia de ponta a ponta e conformidade com LGPD."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: "Análise de Dados",
      description: "Transforme dados brutos em insights acionáveis com nossa tecnologia de análise avançada."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container-section">
        <h2 className="section-title">
          Benefícios da <span className="text-chatbear-green-500">Automação Inteligente</span>
        </h2>
        
        <p className="section-subtitle">
          Nossa plataforma de IA oferece soluções personalizadas que transformam processos complexos em fluxos de trabalho eficientes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-lg hover:border-chatbear-green-200 dark:hover:border-chatbear-green-800 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 text-chatbear-green-500 dark:text-chatbear-green-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
