'use client'

import React from 'react'
import WhatsAppButton from '../wsp/WspButton'
import { FaInstagram } from 'react-icons/fa'

export default function ContactComponent() {
  return (
    <div className="bg-[var(--background)] min-h-screen flex flex-col items-center p-6 text-[var(--foreground)]">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Contactanos ante cualquier duda
      </h1>

      <p className="text-center mb-6 max-w-xl mx-auto text-lg leading-relaxed">
        Nuestro consultorio está ubicado en <strong>Candido Pujato 3035, Santa Fe</strong>.  
        Podés escribirnos por WhatsApp o seguirnos en Instagram para consultas rápidas.
      </p>

      <div className="flex gap-6 mb-8">
        <WhatsAppButton />
        
        <a
          href="https://instagram.com/fikaf.cde"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguir en Instagram"
          title="Seguir en Instagram"
          className="flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-md hover:brightness-110 transition"
        >
          <FaInstagram size={24} />
         
        </a>
      </div>

      <iframe
        title="Ubicación de FIKAF en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3566976572437!2d-60.71121628436384!3d-31.633085699224734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9c63414b1b1%3A0x3e6fe63696b1b11a!2sCandido%20Pujato%203035%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1689198300000!5m2!1ses!2sar"
        width="100%"
        height="400"
        className="rounded-lg shadow-lg max-w-4xl"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      <p className="text-center mt-6 max-w-xl mx-auto text-base text-gray-400">
        Te esperamos para acompañarte en tu camino hacia un mejor bienestar.  
        ¡No dudes en contactarnos!
      </p>
    </div>
  )
}
