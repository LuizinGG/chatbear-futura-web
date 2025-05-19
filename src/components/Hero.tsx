
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-chatbear-green-50 dark:to-chatbear-green-950/20 opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-chatbear-green-300/20 dark:bg-chatbear-green-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-chatbear-green-200/20 dark:bg-chatbear-green-800/10 rounded-full blur-3xl"></div>
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in-left">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-chatbear-green-50 dark:bg-chatbear-green-900/30 text-chatbear-green-600 dark:text-chatbear-green-300 text-sm font-medium mb-4">
                Inteligência artificial para negócios
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Automação inteligente para <span className="text-chatbear-green-500">transformar</span> o seu negócio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Potencialize sua empresa com chatbots personalizados, automação de processos, relatórios analíticos e gerenciamento com Kanban para atendimento 24/7 e decisões baseadas em dados.
            </p>
            
            <div className="flex flex-wrap space-x-0 space-y-3 sm:space-x-3 sm:space-y-0 pt-2">
              <Button size="lg" className="bg-chatbear-green-500 hover:bg-chatbear-green-600 text-white w-full sm:w-auto">
                Agendar demonstração
              </Button>
              <Button size="lg" variant="outline" className="border-chatbear-green-500 text-chatbear-green-600 hover:bg-chatbear-green-50 dark:text-chatbear-green-400 dark:hover:bg-chatbear-green-900/20 w-full sm:w-auto">
                Conhecer soluções
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <img alt="Avatar" className="rounded-full border-2 border-background w-8 h-8" src="https://i.pinimg.com/736x/19/95/13/1995135ab3279c1a65de81bf3c3b6ac9.jpg" />
                <img alt="Avatar" className="rounded-full border-2 border-background w-8 h-8" src="https://i.pinimg.com/736x/9a/77/d3/9a77d34ec81db97c5a45f75873326d6a.jpg" />
                <img alt="Avatar" className="rounded-full border-2 border-background w-8 h-8" src="https://i.pinimg.com/736x/ca/f0/00/caf00053d9b5ddd7a2d2ebd399068eea.jpg" />
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Mais de 10.000 empresas já utilizam</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative bg-gradient-to-br from-chatbear-green-100 to-chatbear-green-50 dark:from-chatbear-green-900/40 dark:to-chatbear-green-800/10 p-2 rounded-2xl shadow-xl">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://i.imgur.com/Ww2Fo12.jpeg"
                  alt="ChatBear Interface" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-chatbear-dark-800 rounded-lg p-4 shadow-lg glass">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-chatbear-green-500 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Atendimento 24/7</p>
                    <p className="font-medium text-sm">+70% de economia de tempo</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white dark:bg-chatbear-dark-800 rounded-lg p-4 shadow-lg glass">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-chatbear-green-500 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Aumento na retenção</p>
                    <p className="font-medium text-sm">80% de satisfação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
