export const SITE_CONFIG = {
  // Link do seu Typebot corrigido com aspas
  TYPEBOT_URL: "https://typebot.co/my-typebot-mkagode",
  
  // Link do WhatsApp corrigido com aspas
  WHATSAPP_URL: "https://wa.me/5583986226441",
  
  // Nome da Corretora
  APP_NAME: "CG Corretora de Seguros"
};

export const openTypebot = () => {
  window.open(SITE_CONFIG.TYPEBOT_URL, '_blank');
};