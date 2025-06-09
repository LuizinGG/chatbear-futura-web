export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/5562981586424?text=${encodeURIComponent(message)}`;
  };

  return (
    <footer className="bg-chatbear-dark-900 text-white py-12">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <img 
                src="https://i.imgur.com/sOP8UWA.png" 
                alt="ChatBear Logo" 
                className="h-8"
              />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Transformando negócios com automação inteligente e soluções de IA personalizadas para aumentar eficiência e produtividade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/chatbear.crm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-chatbear-green-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={createWhatsAppLink("Olá! Gostaria de saber mais sobre o ChatBear e suas soluções de automação.")} target="_blank" className="text-gray-400 hover:text-chatbear-green-400">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Soluções</h3>
            <ul className="space-y-2">
              <li><a href={createWhatsAppLink("Olá! Gostaria de saber mais sobre o ChatBear Atendimento para automatizar meu atendimento ao cliente.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">ChatBear Atendimento</a></li>
              <li><a href={createWhatsAppLink("Olá! Tenho interesse no ChatBear Documentos para organizar e gerenciar meus arquivos com IA.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">ChatBear Documentos</a></li>
              <li><a href={createWhatsAppLink("Olá! Quero conhecer o ChatBear Analytics para ter relatórios inteligentes do meu negócio.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">ChatBear Analytics</a></li>
              <li><a href={createWhatsAppLink("Olá! Gostaria de saber sobre o ChatBear Workflow para automatizar meus processos.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">ChatBear Workflow</a></li>
              <li><a href={createWhatsAppLink("Olá! Preciso de informações sobre as integrações disponíveis do ChatBear.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Integrações</a></li>
              <li><a href={createWhatsAppLink("Olá! Sou desenvolvedor e gostaria de saber mais sobre a API do ChatBear.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Empresa</h3>
            <ul className="space-y-2">
              <li><a href={createWhatsAppLink("Olá! Gostaria de saber mais sobre a empresa ChatBear e sua história.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Sobre nós</a></li>
              <li><a href={createWhatsAppLink("Olá! Gostaria de ser um parceiro do ChatBear. Como posso participar?")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Parceiros</a></li>
              <li><a href={createWhatsAppLink("Olá! Tenho algumas dúvidas sobre os serviços do ChatBear. Podem me ajudar?")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Suporte</h3>
            <ul className="space-y-2">
              <li><a href={createWhatsAppLink("Olá! Preciso de ajuda técnica com o ChatBear. Podem me dar suporte?")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Central de ajuda</a></li>
              <li><a href={createWhatsAppLink("Olá! Gostaria de ter acesso à documentação técnica do ChatBear.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Documentação</a></li>
              <li><a href={createWhatsAppLink("Olá! Gostaria de verificar o status atual dos sistemas do ChatBear.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Status do sistema</a></li>
              <li><a href={createWhatsAppLink("Olá! Tenho dúvidas sobre a política de privacidade do ChatBear.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Política de privacidade</a></li>
              <li><a href={createWhatsAppLink("Olá! Gostaria de saber mais sobre os termos de serviço do ChatBear.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Termos de serviço</a></li>
              <li><a href={createWhatsAppLink("Olá! Tenho dúvidas sobre a política de cookies do ChatBear.")} target="_blank" className="text-gray-300 hover:text-chatbear-green-400 text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} ChatBear - Automação Inteligente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
