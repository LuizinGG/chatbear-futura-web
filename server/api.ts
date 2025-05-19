
import type { Request, Response } from 'express';

// Função para processar a requisição de envio de WhatsApp
export async function sendWhatsApp(req: Request, res: Response) {
  try {
    // Obter dados da requisição
    const { name, phone } = req.body;

    // Validar dados recebidos
    if (!name || !phone) {
      return res.status(400).json({ 
        error: 'Nome e número de telefone são obrigatórios'
      });
    }

    // Formatar o número para garantir que comece com 55 (Brasil)
    let formattedPhone = phone.replace(/\D/g, "");
    if (!formattedPhone.startsWith("55")) {
      formattedPhone = "55" + formattedPhone;
    }

    // Construir a mensagem personalizada
    const message = `Oi ${name}! 👋 Seja muito bem-vindo ao ChatBear! 🚀\n\nJá estou aqui pra te mostrar como podemos transformar o seu atendimento e aumentar suas vendas.\n\nPode mandar sua dúvida!`;

    // Fazer a chamada para a API externa
    const apiResponse = await fetch("https://api.wts.chat/", {
      method: "POST",
      headers: {
        "Authorization": "Bearer pn_gRF7EbcE6p0bCzSxNoTE4AhwbkUIkmqGrq3e23c9Q",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: formattedPhone,
        message: message
      })
    });

    // Verificar resposta da API externa
    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      throw new Error(errorData.message || 'Erro ao enviar mensagem para API externa');
    }

    const responseData = await apiResponse.json();
    
    // Retornar sucesso
    return res.status(200).json({ 
      success: true,
      message: 'Mensagem enviada com sucesso!'
    });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Erro interno do servidor'
    });
  }
}
