
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Ana Silva",
      position: "Diretora de operações, TechSoft",
      content: "O ChatBear transformou completamente nossa operação de atendimento. Conseguimos reduzir o tempo de resposta em 70% e aumentar a satisfação dos clientes em 25%. A implantação foi rápida e o suporte técnico é excelente.",
      image: "https://s2-valor.glbimg.com/A7zxU12uWKBt0BmAxoXxXW5ywaY=/0x0:683x1024/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2023/6/p/DJ5HMHShyLVkCCW2Igtw/3bdbef74-27cf-456d-a88c-49d37758780c.jpeg"
    },
    {
      name: "Carlos Mendes",
      position: "CEO, Inovare Ltda",
      content: "Depois de implementar o ChatBear para automatizar nossos processos de documentação, conseguimos economizar cerca de 15 horas semanais por funcionário. O ROI foi alcançado em menos de 3 meses. Recomendo fortemente.",
      image: "https://i.pinimg.com/736x/87/92/90/8792906a9a41234bd90ceec2d3f4d3e9.jpg"
    },
    {
      name: "Márcia Oliveira",
      position: "Gerente de TI, Global Solutions",
      content: "A integração do ChatBear com nossos sistemas existentes foi surpreendentemente fácil. A capacidade de análise de dados nos deu insights que nunca teríamos descoberto manualmente, resultando em decisões mais estratégicas.",
      image: "https://i.pinimg.com/originals/1c/3f/f8/1c3ff84664dd06e42f7dc3593a3b71e5.jpg"
    }
  ];
  
  // Auto-rotation functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container-section">
        <h2 className="section-title">
          O que nossos <span className="text-chatbear-green-500">clientes</span> dizem
        </h2>
        
        <div className="relative mt-14">
          <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
                }`}
              >
                <Card className="border-chatbear-green-200 dark:border-chatbear-green-800">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <div className="inline-block relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-chatbear-green-400 to-chatbear-green-600"></div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="relative z-10 w-16 h-16 rounded-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-chatbear-green-300 dark:text-chatbear-green-700 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <p className="text-lg md:text-xl mb-4">{testimonial.content}</p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === index 
                    ? "bg-chatbear-green-500 w-6" 
                    : "bg-chatbear-green-200 dark:bg-chatbear-green-800"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
