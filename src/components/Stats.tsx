
import { useEffect, useState, useRef } from "react";

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Stats data
  const stats = [
    { number: 98, suffix: "%", label: "Satisfação dos Clientes" },
    { number: 1000, suffix: "+", label: "Empresas Atendidas" },
    { number: 45, suffix: "%", label: "Aumento de Produtividade" },
    { number: 500, suffix: "K+", label: "Horas Economizadas" }
  ];

  // Animation for counting up numbers
  const CountingNumber = ({ target, duration = 2000, suffix = "", isAnimating }: { 
    target: number; 
    duration?: number; 
    suffix?: string; 
    isAnimating: boolean;
  }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isAnimating) return;
      
      let startTime: number | null = null;
      const startValue = 0;
      const endValue = target;
      
      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
      
      return () => setCount(0);
    }, [isAnimating, target, duration]);
    
    // Format the number with commas for thousands
    const formattedNumber = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return (
      <span>{formattedNumber}{suffix}</span>
    );
  };
  
  // Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-chatbear-green-500 text-white">
      <div className="container-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountingNumber 
                  target={stat.number} 
                  suffix={stat.suffix}
                  isAnimating={isVisible} 
                />
              </div>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
