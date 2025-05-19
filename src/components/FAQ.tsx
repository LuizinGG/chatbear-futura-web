
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqItems = [
    {
      question: "O que é o ChatBear e como ele funciona?",
      answer: "O ChatBear é uma plataforma de automação inteligente baseada em IA que ajuda empresas a automatizar processos, melhorar o atendimento ao cliente e extrair insights de dados. Funciona através de algoritmos de aprendizado de máquina e processamento de linguagem natural que analisam seus dados e processos para oferecer soluções personalizadas."
    },
    {
      question: "Quanto tempo leva para implementar o ChatBear na minha empresa?",
      answer: "O tempo de implementação varia conforme a complexidade dos processos a serem automatizados. Para soluções básicas, a implementação pode levar apenas alguns dias. Para integrações mais complexas, o processo completo geralmente leva de 2 a 4 semanas, incluindo treinamento da equipe e personalização."
    },
    {
      question: "O ChatBear é compatível com os sistemas que já utilizamos?",
      answer: "Sim, o ChatBear foi projetado para integrar-se facilmente com a maioria dos sistemas e softwares empresariais comuns. Nossa plataforma possui APIs abertas e conectores pré-construídos para sistemas como Salesforce, SAP, Microsoft 365, Google Workplace, Zendesk, entre outros. Para sistemas personalizados, nossa equipe técnica pode desenvolver integrações específicas."
    },
    {
      question: "Como garantimos a segurança dos nossos dados ao usar o ChatBear?",
      answer: "A segurança é nossa prioridade. O ChatBear utiliza criptografia de ponta a ponta, armazenamento em servidores com certificações de segurança internacional, e está em conformidade com a LGPD e outras regulamentações de proteção de dados. Realizamos auditorias de segurança regulares e nossos clientes mantêm controle total sobre seus dados."
    },
    {
      question: "É necessário conhecimento técnico para usar a plataforma?",
      answer: "Não é necessário conhecimento técnico avançado para operar o ChatBear. Nossa interface foi projetada para ser intuitiva e fácil de usar. Oferecemos treinamento completo e suporte contínuo para garantir que sua equipe possa aproveitar ao máximo todas as funcionalidades da plataforma."
    },
    {
      question: "Qual o modelo de preços do ChatBear?",
      answer: "Oferecemos planos flexíveis baseados no tamanho da sua empresa e nas funcionalidades necessárias. Nossos modelos incluem assinaturas mensais ou anuais, com descontos para contratos de longo prazo. Entre em contato com nossa equipe de vendas para uma cotação personalizada baseada nas necessidades específicas do seu negócio."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-chatbear-green-50 dark:to-chatbear-green-950/20 opacity-50"></div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title">
          Perguntas <span className="text-chatbear-green-500">Frequentes</span>
        </h2>
        
        <p className="section-subtitle">
          Tire suas dúvidas sobre nossa plataforma de automação inteligente e como ela pode transformar seu negócio.
        </p>
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-lg font-medium hover:text-chatbear-green-500 dark:hover:text-chatbear-green-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Ainda tem dúvidas? Entre em contato com nossa equipe.
          </p>
        </div>
      </div>
    </section>
  );
}
