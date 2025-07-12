'use client'

import React from 'react'

const sections = [
  {
    title: 'Compromiso con el bienestar',
    text: `En FIKAF nos mueve el compromiso con el bienestar. Contamos con años de experiencia acompañando a personas en su camino hacia una mejor calidad de vida.`,
  },
  {
    title: 'Atención personalizada',
    text: `Nuestra prioridad es siempre la atención personalizada, humana y enfocada en las necesidades de cada cuerpo.`,
  },
  {
    title: 'Kinesiología y ejercicio',
    text: `Trabajamos desde la kinesiología, combinando tratamiento manual, ejercicio terapéutico y educación para la salud.`,
  },
  {
    title: 'Rehabilitación activa',
    text: `Creemos profundamente en la rehabilitación activa y en el ejercicio como herramienta clave para prevenir, recuperar y fortalecer.`,
  },
  {
    title: 'Ejercicio como estilo de vida',
    text: `También acompañamos a quienes eligen el ejercicio como estilo de vida. FIKAF es un espacio para moverse con conciencia, mejorar el rendimiento físico, trabajar la postura, la fuerza y la movilidad, incluso sin ninguna lesión.`,
  },
  {
    title: 'Movimiento y salud',
    text: `El movimiento no es solo una respuesta al dolor, sino una elección diaria para vivir mejor, con más energía, equilibrio y salud.`,
  },
]

export default function AboutUs() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 text-foreground">
      <h1 className="text-3xl font-bold text-center mb-10">
        Sobre <span className="text-tertiary">FIKAF</span>
      </h1>

      <section className="space-y-8">
        {sections.map((section, i) => (
          <article
            key={i}
            className="bg-background rounded-xl p-6 shadow-md shadow-black/10"
          >
            <h2 className="text-xl font-bold text-tertiary mb-2">{section.title}</h2>
            <p className="text-base text-foreground">{section.text}</p>
          </article>
        ))}
      </section>

      <figure className="mt-10 overflow-hidden rounded-xl shadow-lg shadow-black/10">
        <img
          src="/images/fikaf-team.jpg"
          alt="Equipo FIKAF"
          className="w-full max-h-96 object-cover"
          loading="lazy"
        />
      </figure>
    </main>
  )
}
