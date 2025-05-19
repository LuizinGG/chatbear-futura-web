
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-chatbear-green-900 text-white">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos Conversar Sobre <span className="text-chatbear-green-300">Automação Inteligente</span>
            </h2>
            
            <p className="text-chatbear-green-50 mb-8">
              Estamos prontos para ajudar a transformar seus processos de negócio com nossas soluções de IA. Entre em contato para uma demonstração personalizada.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-chatbear-green-800 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-chatbear-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-chatbear-green-200">contato@chatbear.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-chatbear-green-800 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-chatbear-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Telefone</h3>
                  <p className="text-chatbear-green-200">+55 (11) 4321-1234</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-chatbear-green-800 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-chatbear-green-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Endereço</h3>
                  <p className="text-chatbear-green-200">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-chatbear-green-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground dark:text-white">
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] bg-background border-input"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
