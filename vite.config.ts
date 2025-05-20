
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { sendWhatsApp } from "./server/api";
import type { Request, Response, NextFunction } from "express";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Se você tem outras configurações de proxy, mantenha-as aqui
    },
    middleware: [
      (req: Request, res: Response, next: NextFunction) => {
        // Rota específica para o API proxy
        if (req.method === 'POST' && req.url === '/api/send-whatsapp') {
          // Primeiro coletamos o body da requisição
          let body = '';
          req.on('data', (chunk: Buffer) => {
            body += chunk.toString();
          });
          
          req.on('end', () => {
            try {
              // Parseamos o JSON
              req.body = JSON.parse(body);
              // Chamamos nossa função de API
              sendWhatsApp(req, res);
            } catch (error) {
              console.error('Erro ao parsear JSON:', error);
              res.statusCode = 400;
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
