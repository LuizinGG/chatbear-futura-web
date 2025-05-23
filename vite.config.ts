
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Request, Response, NextFunction } from "express";

// Função para enviar mensagem de WhatsApp
export async function sendWhatsApp(req: Request, res: Response) {
  try {
    const { name, phone } = req.body;

    // Validar dados recebidos
    if (!name || !phone) {
      return res.status(400).json({ error: "Nome e número de telefone são obrigatórios" });
    }

    // Formatar o número para E.164
    let formattedPhone = phone.replace(/\D/g, "");
    if (!formattedPhone.startsWith("55")) {
      formattedPhone = "55" + formattedPhone;
    }

    const WTS_API_URL = "https://api.wts.chat";
    const TOKEN = "pn_gRF7EbcE6p0bCzSxNoTE4AhwbkUIkmqGrq3e23c9Q";

    console.log("Enviando para API - Contato:", { phone: `+${formattedPhone}`, name });

    // Enviar mensagem usando o endpoint de mensagem simples - usando diretamente o endpoint text/send
    const messageResponse = await fetch(`${WTS_API_URL}/message/text/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: `+${formattedPhone}`,
        message: `Oi ${name}! 👋 Seja muito bem-vindo ao ChatBear! 🚀\n\nJá estou aqui pra te mostrar como podemos transformar o seu atendimento e aumentar suas vendas.\n\nPode mandar sua dúvida!`
      }),
    });

    if (!messageResponse.ok) {
      const errorData = await messageResponse.json() as { message?: string };
      throw new Error(errorData.message || "Erro ao enviar mensagem");
    }

    const responseData = await messageResponse.json();
    console.log("Resposta da API - Mensagem:", responseData);
    
    return res.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso!",
      data: responseData,
    });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Erro interno do servidor",
    });
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    middleware: [
      (req: Request, res: Response, next: NextFunction) => {
        // Rota específica para o API proxy
        if (req.method === 'POST' && req.url === '/api/send-whatsapp') {
          // Sempre definimos o content-type como JSON para evitar HTML acidental
          res.setHeader('Content-Type', 'application/json');
          
          let body = '';
          
          req.on('data', (chunk: Buffer) => {
            body += chunk.toString();
          });
          
          req.on('end', () => {
            try {
              console.log("Dados recebidos no servidor:", body);
              req.body = JSON.parse(body);
              console.log("Corpo parseado:", req.body);
              
              // Chamamos nossa função de API
              sendWhatsApp(req, res).catch(err => {
                console.error("Erro na função sendWhatsApp:", err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: "Erro interno ao processar a requisição" }));
              });
            } catch (error) {
              console.error('Erro ao parsear JSON:', error);
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'JSON inválido' }));
            }
          });
        } else {
          next();
        }
      }
    ]
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
