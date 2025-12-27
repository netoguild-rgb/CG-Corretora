export const SITE_CONFIG = {
  // Coloque aqui o link do seu Typebot (ex: https://typebot.co/meu-bot-seguros)
  TYPEBOT_URL: https://typebot.co/my-typebot-mkagode,
  
  // Link do WhatsApp (caso queira um botão direto pro Zap também)
  WHATSAPP_URL: https://wa.me/5583986226441,
  
  // Nome da Corretora
  APP_NAME: "CG Corretora de Seguros"
};

export const openTypebot = () => {
  window.open(SITE_CONFIG.TYPEBOT_URL, '_blank');
};