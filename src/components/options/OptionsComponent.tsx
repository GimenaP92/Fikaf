'use client'

import Link from 'next/link'
import WhatsAppButton from '../wsp/WspButton'
import {
  FaDumbbell,
  FaUserMd,
  FaHandsHelping,
  FaInfoCircle,
  FaPhoneAlt,
  FaHandHoldingHeart,
} from 'react-icons/fa'
import { GiFootprint } from 'react-icons/gi'

const routes = [
  {
    id: 'physiotherapy',
    name: 'Kinesiología',
    href: '/options/physiotherapy',
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 'osteopathy',
    name: 'Osteopatía',
    href: '/options/osteopathy',
    icon: <FaHandsHelping />,
  },
  {
    id: 'gym',
    name: 'Gimnasio',
    href: '/options/gym',
    icon: <FaDumbbell />,
  },
  {
    id: 'podiatry',
    name: 'Podología',
    href: '/options/podiatry',
    icon: <GiFootprint />,
  },
  {
    id: 'contact',
    name: 'Contacto',
    href: '/options/contact',
    icon: <FaPhoneAlt />,
  },
  {
    id: 'about-us',
    name: '¿Quiénes somos?',
    href: '/options/about-us',
    icon: <FaInfoCircle />,
  },
]

export default function OptionsComponent() {
  return (
    <div className="bg-[var(--background)] h-[50vh] flex flex-col justify-center items-center gap-6 p-4 text-[var(--foreground)]">
      
      <nav
        role="navigation"
        aria-label="Opciones de navegación"
        className="flex flex-col w-4/5 max-w-[250px] border-t border-b border-gray-300"
      >
        {routes.map((route, index) => (
          <Link
            key={route.id}
            href={route.href}
            className={`
              block text-[var(--tertiary)] font-bold text-center h-12
              border-b ${index < routes.length - 1 ? 'border-gray-300' : 'border-transparent'}
              hover:bg-[rgba(37,211,102,0.1)] cursor-pointer
              select-none
              flex items-center justify-start gap-3 px-4
            `}
          >
            <span className="text-xl">{route.icon}</span>
            <span className="text-base">{route.name}</span>
          </Link>
        ))}
      </nav>

      <div className="fixed bottom-90 right-5 z-50">
        <WhatsAppButton />
      </div>
    </div>
  )
}
