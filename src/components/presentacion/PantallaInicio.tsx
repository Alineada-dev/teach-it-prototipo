"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  onSiguiente: () => void;
}

export function PantallaInicio({ onSiguiente }: Props) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-b from-[#E8DCC4] to-[#D4C5A8]">
      <div className="text-center space-y-8 max-w-4xl px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl font-bold text-[#6B9B9E] mb-4">
            TEACH-IT
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Sistema de Resolución de Incidentes Universitarios
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              ¿Estás listo para comenzar?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Un juego colaborativo para profesores donde resolverás incidentes críticos
              relacionados con estudiantes universitarios.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={onSiguiente}
                className="bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white text-xl px-12 py-6 rounded-xl"
              >
                SÍ, COMENZAR
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#6B9B9E] text-[#6B9B9E] text-xl px-12 py-6 rounded-xl"
              >
                NO, SALIR
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6B9B9E]"></div>
              <span>3 Jugadores</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6B9B9E]"></div>
              <span>3 Rondas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6B9B9E]"></div>
              <span>Sin límite de tiempo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
