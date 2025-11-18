"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  onSiguiente: () => void;
}

const competencias = [
  {
    nombre: "Planeación y Organización",
    color: "#FF6B6B",
    descripcion: "Diseña y organiza actividades de aprendizaje efectivas"
  },
  {
    nombre: "Compromiso y Ética Docente",
    color: "#4ECDC4",
    descripcion: "Actúa con responsabilidad y valores profesionales"
  },
  {
    nombre: "Integración de Saberes Profesionales",
    color: "#FFE66D",
    descripcion: "Conecta conocimientos de diferentes áreas"
  },
  {
    nombre: "Innovación en la Enseñanza",
    color: "#95E1D3",
    descripcion: "Implementa métodos creativos y actualizados"
  },
  {
    nombre: "Construcción de Ambientes de Aprendizaje",
    color: "#F38181",
    descripcion: "Crea espacios seguros y motivadores"
  },
  {
    nombre: "Evaluación del Aprendizaje con Enfoque Formativo",
    color: "#AA96DA",
    descripcion: "Evalúa para mejorar el proceso de aprendizaje"
  }
];

export function PantallaCompetencias({ onSiguiente }: Props) {
  return (
    <div className="h-full flex items-center justify-center bg-[#E8DCC4] p-8 overflow-y-auto">
      <div className="max-w-6xl w-full space-y-8 py-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-[#6B9B9E] mb-4">
            Las 6 Competencias Docentes
          </h1>
          <p className="text-xl text-gray-700">
            Estas son las habilidades fundamentales que todo profesor debe desarrollar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencias.map((competencia, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-2xl"
                style={{ backgroundColor: competencia.color }}
              >
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {competencia.nombre}
              </h3>
              <p className="text-sm text-gray-600">
                {competencia.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button
            onClick={onSiguiente}
            className="bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white text-xl px-12 py-6 rounded-xl"
          >
            ENTENDIDO, CONTINUAR
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
