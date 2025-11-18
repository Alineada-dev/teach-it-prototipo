"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Props {
  onSiguiente: () => void;
  onSeleccionarEstudiante: (estudiante: string) => void;
}

const estudiantes = [
  { id: "02", nombre: "El Apático", tipo: "apatico", x: "20%", y: "45%" },
  { id: "05", nombre: "El Problemático", tipo: "problematico", x: "50%", y: "35%" },
  { id: "10", nombre: "El Genio", tipo: "genio", x: "70%", y: "30%" },
];

export function PantallaSalon({ onSiguiente, onSeleccionarEstudiante }: Props) {
  const [seleccionado, setSeleccionado] = useState<string | null>(null);

  const handleSeleccionar = (estudiante: typeof estudiantes[0]) => {
    setSeleccionado(estudiante.id);
    onSeleccionarEstudiante(estudiante.tipo);
    setTimeout(() => {
      onSiguiente();
    }, 1000);
  };

  return (
    <div className="h-full relative bg-[#E8DCC4]">
      {/* Imagen de fondo del salón isométrico de Figma */}
      <div className="absolute inset-0">
        <Image
          src="/assets/salon-isometrico.png"
          alt="Salón de clases"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Título */}
      <div className="absolute top-8 left-8 z-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-md"
        >
          <h2 className="text-3xl font-bold text-[#6B9B9E] mb-2">
            VOLTEA UNA CARTA
          </h2>
          <p className="text-lg text-gray-700">
            ¿Qué alumno te tocó? Selecciónalo
          </p>
          <p className="text-sm text-gray-500 mt-2">
            [Puedes interactuar con el alumno 02, 05 y 10]
          </p>
        </motion.div>
      </div>

      {/* Indicador de dificultad */}
      <div className="absolute top-8 right-8 z-20">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-700">FÁCIL</span>
            <div className="text-green-500 text-2xl">★</div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-700">INTERMEDIO</span>
            <div className="text-yellow-500 text-2xl">★★</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700">DIFÍCIL</span>
            <div className="text-red-500 text-2xl">★★★</div>
          </div>
        </motion.div>
      </div>

      {/* Salón isométrico */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-5xl">
          {/* Imagen de fondo del salón */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="text-9xl text-[#6B9B9E]/20">🏫</div>
          </div>

          {/* Estudiantes interactivos */}
          {estudiantes.map((estudiante, index) => (
            <motion.div
              key={estudiante.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              style={{
                position: "absolute",
                left: estudiante.x,
                top: estudiante.y,
              }}
              className="cursor-pointer"
              onClick={() => handleSeleccionar(estudiante)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative ${
                  seleccionado === estudiante.id ? "ring-4 ring-pink-500 rounded-full" : ""
                }`}
              >
                {/* Avatar del estudiante */}
                <div
                  className={`w-32 h-32 rounded-full flex items-center justify-center text-6xl shadow-xl ${
                    estudiante.tipo === "apatico"
                      ? "bg-[#A8C5C7]"
                      : estudiante.tipo === "problematico"
                      ? "bg-[#E89B9B]"
                      : "bg-[#F4D06F]"
                  }`}
                >
                  {estudiante.tipo === "apatico" ? "😴" : estudiante.tipo === "problematico" ? "😈" : "🤓"}
                </div>

                {/* Número */}
                <div className="absolute -top-2 -right-2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {estudiante.id}
                </div>

                {/* Etiqueta */}
                {estudiante.id === "10" && (
                  <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                    EL APÁTICO
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fígaro guía */}
      {mostrarFigaro && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <div className="flex items-end gap-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-md">
              <p className="text-gray-700 italic">
                "Ahora, sobre la carta hay un número en color negro. Este corresponde 
                a un alumno en tu salón. Haz clic sobre él. A la derecha verás su dificultad."
              </p>
            </div>
            <div className="w-32 h-40 bg-white rounded-full flex items-center justify-center text-6xl shadow-xl">
              👋
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
