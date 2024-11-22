export const openWhatsAppChat = (numero, mensaje) => {
    const urlWhatsApp = `https://wa.me/+${numero}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(urlWhatsApp, "_blank");
  };