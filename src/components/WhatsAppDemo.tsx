
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, MessageSquare, Loader2 } from "lucide-react";

export function WhatsAppDemo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Função para formatar o número de telefone na interface
  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    
    if (digits.length <= 2) {
      return `(${digits}`;
    } 
    else if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } 
    else if (digits.length <= 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    
    if (phone.replace(/\D/g, "").length < 10) {
      toast.error("Número de telefone inválido. Inclua DDD e número");
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log("Enviando dados:", { name, phone });
      
      const response = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone
        })
      });
      
      console.log("Status da resposta:", response.status);
      
      // Verificar se a resposta é texto simples ou JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        try {
          const result = await response.json();
          console.log("Resposta de sucesso:", result);
          
          if (response.ok) {
            toast.success("Mensagem enviada! Verifique seu WhatsApp");
            setName("");
            setPhone("");
          } else {
            throw new Error(result.error || "Erro ao enviar mensagem");
          }
        } catch (jsonError) {
          console.error("Erro ao parsear JSON da resposta:", jsonError);
          throw new Error("Formato de resposta inválido do servidor");
        }
      } else {
        // Se não for JSON, tratar como texto
        const textResponse = await response.text();
        console.error("Resposta não-JSON recebida:", textResponse);
        throw new Error("Resposta inesperada do servidor");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error(error instanceof Error ? error.message : "Não foi possível enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="whatsapp-demo" className="py-16 md:py-24 bg-background dark:bg-chatbear-dark-950">
      <div className="container-section">
        <h2 className="section-title">Experimente o poder do ChatBear</h2>
        <p className="section-subtitle">
          Receba uma mensagem automática em seu WhatsApp e veja como podemos transformar seu negócio
        </p>
        
        <div className="max-w-lg mx-auto mt-10 p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Seu nome
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="João Silva"
                className="w-full"
                disabled={isLoading}
                autoComplete="name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                WhatsApp com DDD
              </label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                className="w-full"
                disabled={isLoading}
                autoComplete="tel"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Exemplo: (62) 98158-6424
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <MessageSquare className="h-4 w-4" />
                  Receber mensagem no WhatsApp
                  <ArrowRight className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-4 rounded border border-white/10 bg-black/20">
            <h3 className="text-sm font-medium mb-2 text-chatbear-green-400">O que você vai receber:</h3>
            <p className="text-xs text-muted-foreground">
              "Oi [seu nome]! 👋 Seja muito bem-vindo ao ChatBear! 🚀<br />
              Já estou aqui pra te mostrar como podemos transformar o seu atendimento e aumentar suas vendas.<br />
              Pode mandar sua dúvida!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
