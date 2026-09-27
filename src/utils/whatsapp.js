/**
 * Utilitário de Geração de Link para o WhatsApp do Batucaki
 */

export function buildWhatsAppUrl(phoneNumber, defaultMessage = '') {
  // Limpa caracteres não numéricos
  const cleanDigits = String(phoneNumber).replace(/\D/g, '');
  
  // Adiciona DDI 55 caso não possua
  const fullNumber = cleanDigits.startsWith('55') ? cleanDigits : `55${cleanDigits}`;
  
  const encodedText = encodeURIComponent(defaultMessage);
  return `https://wa.me/${fullNumber}?text=${encodedText}`;
}
