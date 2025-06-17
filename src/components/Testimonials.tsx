
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Pedro Paulo Bessa",
      position: "Sócio-fundador, Nave Marketing Jurídico",
      content: "O ChatBear revolucionou nossa estratégia de captação de clientes. Com a automação de primeiro contato, conseguimos qualificar leads 24/7 e aumentar nossa conversão em 45%. A ferramenta é intuitiva e o suporte é excepcional.",
      image: "https://i.imgur.com/UibaVDs.jpeg"
    },
    {
      name: "Dr. Henrique Rodrigues",
      position: "Sócio-diretor, Rodrigues e Aquino Advocacia",
      content: "Implementamos o ChatBear para automatizar o atendimento inicial e triagem de casos. Em 3 meses, reduzimos o tempo de resposta em 80% e liberamos nossa equipe para focar em atividades estratégicas. Resultado: mais eficiência e clientes satisfeitos.",
      image: "https://rodrigueseaquinoadvocacia.com.br/wp-content/uploads/2022/01/logo-com-fundo.jpg"
    },
    {
      name: "Dr. Igor Matheus Rezende",
      position: "Sócio-fundador, Rezende Achar Advocacia",
      content: "O ChatBear nos ajudou a profissionalizar completamente nosso atendimento digital. Agora nossos clientes recebem respostas imediatas sobre andamentos processuais e dúvidas gerais, enquanto casos complexos são direcionados diretamente para nossa equipe.",
      image: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/339132433_920816692584161_7896688312645632829_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SCEHRChJ2B4Q7kNvwGdy5h-&_nc_oc=AdlbDZrpzRJokKpE6M61p_Bpdkm7WHtlh8FWFlitN3rbhtLqFhvyqXbLdzROqsyJD00&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=okFG6rAOVBkmI6zsOmgQbQ&oh=00_AfMx7CLoAD9vYA461cbJwr-xpNDyKX1WtRIoMi-D0hnN9A&oe=68577A30"
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
