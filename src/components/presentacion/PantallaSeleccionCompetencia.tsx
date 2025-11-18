"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onSiguiente: () => void;
  onSeleccionarCompetencia: (competencia: string) => void;
}

const competencias = [
  {
    id: "planeacion",
    nombre: "Planeación y Organización",
    color: "#FF6B6B",
    activa: true
  },
  {
    id: "compromiso",
    nombre: "Compromiso y Ética Docente",
    color: "#4ECDC4",
    activa: true
  },
  {
    id: "integracion",
    nombre: "Integración de Saberes Profesionales",
    color: "#FFE66D",
    activa: false
  },
  {
    id: "innovacion",
    nombre: "Innovación en la Enseñanza",
    color: "#95E1D3",
    activa: true
  },
  {
    id: "construccion",
    nombre: "Construcción de Ambientes de Aprendizaje",
    color: "#F38181",
    activa: true
  },
  {
    id: "evaluacion",
    nombre: "Evaluación del Aprendizaje con Enfoque Formativo",
    color: "#AA96DA",
    activa: false
  }
];

export function PantallaSeleccionCompetencia({ onSiguiente, onSeleccionarCompetencia }: Props) {
  const [seleccionada, setSeleccionada] = useState<string | null>(null);

  const handleSeleccionar = (competencia: typeof competencias[0]) => {
    if (!competencia.activa) return;
    
    setSeleccionada(competencia.id);
    onSeleccionarCompetencia(competencia.id);
    setTimeout(() => {
      onSiguiente();
    }, 800);
  };

  return (
    <div className="h-full bg-[#E8DCC4] flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-8">
        {/* Título */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-[#6B9B9E] mb-4">
            ELIGE UNA FIGURA MISTERIOSA
          </h1>
          <p className="text-xl text-gray-700">
            Selecciona la competencia docente que quieres trabajar
          </p>
          <p className="text-sm text-gray-500 mt-2">
            (Las figuras en gris no están disponibles para este estudiante)
          </p>
        </motion.div>

        {/* Grid de rombos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {competencias.map((competencia, index) => (
            <motion.div
              key={competencia.id}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={() => handleSeleccionar(competencia)}
                disabled={!competencia.activa}
                whileHover={competencia.activa ? { scale: 1.1, rotate: 5 } : {}}
                whileTap={competencia.activa ? { scale: 0.95 } : {}}
                className={`relative w-40 h-40 transform rotate-45 transition-all ${
                  competencia.activa
                    ? "cursor-pointer shadow-xl hover:shadow-2xl"
                    : "cursor-not-allowed opacity-40"
                } ${
                  seleccionada === competencia.id
                    ? "ring-8 ring-white scale-110"
                    : ""
                }`}
                style={{
                  backgroundColor: competencia.activa ? competencia.color : "#CCCCCC"
                }}
              >
                {/* Contenido del rombo (rotado de vuelta) */}
                <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                  <div className="text-center p-4">
                    <div className="text-white font-bold text-sm leading-tight">
                      {competencia.nombre.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </div>
                </div>

                {/* Número */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 -rotate-45 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Leyenda */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {competencias.map((comp, index) => (
              <div key={comp.id} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 transform rotate-45 flex-shrink-0"
                  style={{ backgroundColor: comp.activa ? comp.color : "#CCCCCC" }}
                />
                <span className={comp.activa ? "text-gray-800" : "text-gray-400"}>
                  {index + 1}. {comp.nombre}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
