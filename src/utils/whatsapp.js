// src/utils/whatsapp.js

export function buildWhatsAppURL(productName, size, whatsappNumber) {
  const message = productName && size
    ? `Hola! Me interesa comprar un par de zapatos Cabuya 🌿\n*Modelo:* ${productName}\n*Talla:* ${size}\n¿Está disponible? ¿Cuál es el precio y cómo es el envío?`
    : `Hola! Me interesa conocer los zapatos Cabuya 🌿 ¿Me pueden dar más información?`;
  
  const encodedMessage = encodeURIComponent(message);
  
  // Best effort mobile detection
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  
  if (isMobile) {
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  } else {
    // Desktop: web.whatsapp.com is more reliable for direct opening
    return `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
  }
}
