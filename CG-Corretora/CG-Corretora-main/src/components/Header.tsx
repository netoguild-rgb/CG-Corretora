import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { SITE_CONFIG, openTypebot } from "../config"; // Importando a config

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">CG</span>
          </div>
          <span className="text-xl font-bold text-gray-900 hidden sm:inline-block">
            {SITE_CONFIG.APP_NAME}
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#home">Início</NavLink>
          <NavLink href="#seguros">Seguros</NavLink>
          <NavLink href="#sobre">Sobre Nós</NavLink>
          <NavLink href="#depoimentos">Depoimentos</NavLink>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 shadow-lg shadow-primary/20 transition-all hover:scale-105"
            onClick={openTypebot} // Ação de abrir o Typebot
          >
            Solicitar Cotação
          </Button>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <NavLink href="#home" onClick={() => setIsOpen(false)}>Início</NavLink>
                <NavLink href="#seguros" onClick={() => setIsOpen(false)}>Seguros</NavLink>
                <NavLink href="#sobre" onClick={() => setIsOpen(false)}>Sobre Nós</NavLink>
                <Button 
                  className="w-full mt-4" 
                  onClick={() => {
                    setIsOpen(false);
                    openTypebot();
                  }}
                >
                  Solicitar Cotação
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};