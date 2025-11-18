"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  pantallaActual: number;
  onIrAPantalla: (index: number) => void;
}

const pantallas = [
  { id: 0, nombre: "Inicio", emoji: "🏠", descripcion: "Pantalla de bienvenida" },
  { id: 1, nombre: "Bienvenida", emoji: "👋", descripcion: "Conoce a Fígaro" },
  { id: 2, nombre: "Competencias", emoji: "📚", descripcion: "6 competencias docentes" },
  { id: 3, nombre: "Salón", emoji: "🏫", descripcion: "Selecciona un estudiante" },
  { id: 4, nombre: "Perfil", emoji: "👤", descripcion: "Información del estudiante" },
  { id: 5, nombre: "Competencia", emoji: "💎", descripcion: "Elige una competencia" },
  { id: 6, nombre: "Reflexión", emoji: "🤔", descripcion: "Momento de reflexión" },
  { id: 7, nombre: "Final", emoji: "🎉", descripcion: "Cierre y estadísticas" },
];

export function NavegacionRapida({ pantallaActual, onIrAPantalla }: Props) {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        onClick={() => setAbierto(!abierto)}
        className="fixed left-4 top-20 z-50 bg-[#6B9B9E] text-white p-3 rounded-full shadow-lg hover:bg-[#4A7A7D] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {abierto ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Panel lateral */}
      <AnimatePresence>
        {abierto && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAbierto(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#6B9B9E]">
                    Navegación
                  </h2>
                  <button
                    onClick={() => setAbierto(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-2">
                  {pantallas.map((pantalla) => (
                    <motion.button
                      key={pantalla.id}
                      onClick={() => {
                        onIrAPantalla(pantalla.id);
                        setAbierto(false);
                      }}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        pantallaActual === pantalla.id
                          ? "bg-[#6B9B9E] text-white shadow-lg"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{pantalla.emoji}</span>
                        <div className="flex-1">
                          <div className="font-semibold">
                            {pantalla.id + 1}. {pantalla.nombre}
                          </div>
                          <div
                            className={`text-sm ${
                              pantallaActual === pantalla.id
                                ? "text-white/80"
                                : "text-gray-500"
                            }`}
                          >
                            {pantalla.descripcion}
                          </div>
                        </div>
                        {pantallaActual === pantalla.id && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 text-center">
                    <p className="font-semibold mb-1">Atajos de teclado</p>
                    <div className="space-y-1">
                      <p>← → : Navegar</p>
                      <p>ESC : Cerrar menú</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
