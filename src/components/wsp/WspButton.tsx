'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Hola, quiero hacer una consulta'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  if (!phoneNumber) return null

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      className="
        bg-[#25D366] rounded-full w-14 h-14 flex justify-center items-center
        shadow-md text-white text-2xl no-underline cursor-pointer
        hover:brightness-110 transition
      "
    >
      <FaWhatsapp />
    </a>
  )
}
