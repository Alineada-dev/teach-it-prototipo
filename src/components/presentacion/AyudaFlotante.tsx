"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, X } from "lucide-react";

export function AyudaFlotante() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        onClick={() => setAbierto(!abierto)}
        className="fixed right-4 bottom-20 z-50 bg-[#F4D06F] text-gray-800 p-4 rounded-full shadow-lg hover:bg-[#E8C05F] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Ayuda"
      >
        <HelpCircle size={28} />
      </motion.button>

      {/* Panel de ayuda */}
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="fixed right-4 bottom-36 w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-[#6B9B9E] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HelpCircle size={24} />
                  <h3 className="text-lg font-bold">Ayuda</h3>
                </div>
                <button
                  onClick={() => setAbierto(false)}
                  className="hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    ⌨️ Atajos de Teclado
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><kbd className="px-2 py-1 bg-gray-100 rounded">←</kbd> Pantalla anterior</p>
                    <p><kbd className="px-2 py-1 bg-gray-100 rounded">→</kbd> Pantalla siguiente</p>
                    <p><kbd className="px-2 py-1 bg-gray-100 rounded">ESC</kbd> Cerrar menús</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    🖱️ Navegación
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• Usa las flechas superiores para navegar</p>
                    <p>• Haz clic en los puntos inferiores para saltar</p>
                    <p>• Abre el menú lateral para ver todas las pantallas</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    🎮 Interacción
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• Haz clic en los estudiantes para seleccionarlos</p>
                    <p>• Selecciona los rombos de competencias</p>
                    <p>• Algunos elementos avanzan automáticamente</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    💡 Consejos
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• Lee con atención las instrucciones de Fígaro</p>
                    <p>• Tómate tu tiempo en la reflexión</p>
                    <p>• Discute con tus colegas las respuestas</p>
                  </div>
                </div>

                <div className="border-t pt-4 bg-[#E8DCC4] -mx-6 -mb-6 p-4">
                  <p className="text-sm text-gray-700 text-center italic">
                    "La educación es el arma más poderosa que puedes usar para cambiar el mundo."
                  </p>
                  <p className="text-xs text-[#6B9B9E] text-center mt-1">
                    - Nelson Mandela
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
