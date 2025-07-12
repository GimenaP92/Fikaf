'use client'

import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

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
    <Box
      sx={{
        maxWidth: 1000,
        margin: 'auto',
        padding: { xs: 2, md: 4 },
        color: 'var(--foreground)',
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
        Sobre <span style={{ color: 'var(--tertiary)' }}>FIKAF</span>
      </Typography>

      {sections.map((s, i) => (
        <Paper
          key={i}
          elevation={3}
          sx={{
            mb: 3,
            p: 3,
            borderRadius: 3,
            backgroundColor: 'var(--background)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'var(--tertiary)', mb: 1 }}>
            {s.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--foreground)' }}>
            {s.text}
          </Typography>
        </Paper>
      ))}

      <Box
        component="img"
        src="/images/fikaf-team.jpg"
        alt="Equipo FIKAF"
        sx={{
          mt: 4,
          borderRadius: 3,
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        }}
      />
    </Box>
  )
}
