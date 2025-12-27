import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { openTypebot } from "../config";

export const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto e Chamada */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Sua segurança é nossa prioridade</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Proteja o que realmente <span className="text-primary">importa</span> para você
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Soluções completas em seguros com atendimento personalizado. 
              Cote agora mesmo pelo nosso assistente virtual e durma tranquilo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                onClick={openTypebot}
              >
                Fazer Cotação Online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 text-lg border-2"
                onClick={openTypebot} // Pode mudar para whatsapp se preferir
              >
                Falar com Especialista
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {["Atendimento 24h", "Cobertura Nacional", "Cotação Rápida", "Melhores Taxas"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="relative animate-fade-in-right hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-95 opacity-50 blur-3xl" />
            <img 
              src="/placeholder.svg" // Substitua pela sua foto real se tiver (ex: hero-family.jpg)
              alt="Família Protegida" 
              className="relative rounded-3xl shadow-2xl border-4 border-white object-cover w-full h-[600px]"
            />
            
            {/* Card Flutuante de Confiança */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs animate-float">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100% Seguro</p>
                  <p className="text-sm text-gray-500">Corretora Regulamentada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};