"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  onSiguiente: () => void;
  estudianteSeleccionado: string | null;
}

const perfiles = {
  apatico: {
    nombre: "El Apático",
    edad: 19,
    semestre: "3er semestre",
    carrera: "Ingeniería en Sistemas",
    color: "#A8C5C7",
    emoji: "😴",
    dificultad: 2,
    caracteristicas: [
      "Llega tarde constantemente",
      "No participa en clase",
      "Entrega trabajos incompletos",
      "Muestra desinterés general",
      "Bajo rendimiento académico"
    ],
    contexto: "Estudiante con potencial pero sin motivación. Necesita encontrar el sentido de sus estudios.",
    frasesTipicas: [
      '"No me importa mucho..."',
      '"¿Para qué sirve esto?"',
      '"Luego lo hago..."'
    ]
  },
  problematico: {
    nombre: "El Problemático",
    edad: 20,
    semestre: "4to semestre",
    carrera: "Administración de Empresas",
    color: "#E89B9B",
    emoji: "😈",
    dificultad: 3,
    caracteristicas: [
      "Comportamiento disruptivo",
      "Manipula situaciones",
      "Genera conflictos con compañeros",
      "Desafía la autoridad",
      "Actitud negativa constante"
    ],
    contexto: "Estudiante con problemas de conducta que afecta el ambiente de aprendizaje del grupo.",
    frasesTipicas: [
      '"Eso no es justo..."',
      '"Los demás también lo hacen..."',
      '"Usted me tiene mala voluntad..."'
    ]
  },
  genio: {
    nombre: "El Genio",
    edad: 18,
    semestre: "2do semestre",
    carrera: "Física",
    color: "#F4D06F",
    emoji: "🤓",
    dificultad: 1,
    caracteristicas: [
      "Excelente rendimiento académico",
      "Muy organizado",
      "Termina antes que los demás",
      "Se aburre en clase",
      "Necesita retos adicionales"
    ],
    contexto: "Estudiante sobresaliente que necesita estímulos intelectuales más avanzados.",
    frasesTipicas: [
      '"Ya terminé, ¿qué sigue?"',
      '"Esto es muy fácil..."',
      '"¿Puedo hacer algo más complejo?"'
    ]
  }
};

export function PantallaPerfilEstudiante({ onSiguiente, estudianteSeleccionado }: Props) {
  const perfil = perfiles[estudianteSeleccionado as keyof typeof perfiles] || perfiles.apatico;

  return (
    <div className="h-full bg-[#E8DCC4] p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6 py-8">
        {/* Header del perfil */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-6">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-7xl shadow-lg"
              style={{ backgroundColor: perfil.color }}
            >
              {perfil.emoji}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {perfil.nombre}
              </h1>
              <div className="flex gap-4 text-gray-600">
                <span>📅 {perfil.edad} años</span>
                <span>📚 {perfil.semestre}</span>
                <span>🎓 {perfil.carrera}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm font-semibold text-gray-700">Dificultad:</span>
                <div className="text-yellow-500 text-xl">
                  {"★".repeat(perfil.dificultad)}{"☆".repeat(3 - perfil.dificultad)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Características */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#6B9B9E] mb-4 flex items-center gap-2">
              <span>📋</span> Características
            </h2>
            <ul className="space-y-2">
              {perfil.caracteristicas.map((caracteristica, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#6B9B9E] mt-1">→</span>
                  <span className="text-gray-700">{caracteristica}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Frases típicas */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#6B9B9E] mb-4 flex items-center gap-2">
              <span>💬</span> Frases Típicas
            </h2>
            <div className="space-y-3">
              {perfil.frasesTipicas.map((frase, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-3 italic text-gray-700"
                >
                  {frase}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contexto */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-[#6B9B9E] mb-4 flex items-center gap-2">
            <span>🎯</span> Contexto
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {perfil.contexto}
          </p>
        </motion.div>

        {/* Botón continuar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={onSiguiente}
            className="bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white text-xl px-12 py-6 rounded-xl"
          >
            CONTINUAR
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
