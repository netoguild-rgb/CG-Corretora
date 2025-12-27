import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openTypebot } from "../config";

export const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={openTypebot}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Falar Conosco</span>
      </Button>
    </div>
  );
};