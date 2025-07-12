import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hola, quiero hacer una consulta";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (!phoneNumber) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      style={{
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: 60,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        color: "white",
        fontSize: 30,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <FaWhatsapp />
    </a>
  );
}
