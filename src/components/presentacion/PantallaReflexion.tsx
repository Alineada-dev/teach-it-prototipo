"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  onSiguiente: () => void;
  competenciaSeleccionada: string | null;
  estudianteSeleccionado: string | null;
}

const preguntas: Record<string, string> = {
  planeacion: "¿De qué manera podrías reorganizar tu planeación para atender las necesidades específicas de este estudiante?",
  compromiso: "¿Qué acciones éticas y profesionales tomarías para apoyar el desarrollo integral de este estudiante?",
  integracion: "¿Cómo integrarías diferentes saberes y experiencias para conectar con este estudiante?",
  innovacion: "¿Qué estrategias innovadoras implementarías para motivar y captar la atención de este estudiante?",
  construccion: "¿Cómo construirías un ambiente de aprendizaje que favorezca el desarrollo de este estudiante?",
  evaluacion: "¿Qué tipo de evaluación formativa aplicarías para apoyar el proceso de aprendizaje de este estudiante?"
};

export function PantallaReflexion({ onSiguiente, competenciaSeleccionada, estudianteSeleccionado }: Props) {
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [notas, setNotas] = useState("");

  const pregunta = preguntas[competenciaSeleccionada || "planeacion"];

  const handleTerminar = () => {
    setMostrarConfirmacion(true);
  };

  const handleConfirmar = () => {
    onSiguiente();
  };

  const handleCancelar = () => {
    setMostrarConfirmacion(false);
  };

  // Debug: ver qué competencia se recibió
  console.log("Competencia seleccionada:", competenciaSeleccionada);
  
  // Si la competencia es "innovacion", mostrar la pantalla específica ALUMNO-141
  if (competenciaSeleccionada === "innovacion") {
    return (
      <div className="relative w-full h-full bg-white overflow-hidden">
        <img 
          src="/assets/screens/ALUMNO-141-innovacion.png" 
          alt="Innovación en la Enseñanza - Alumno 141"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Rombo morado */}
        <div className="absolute left-1/2 top-[207px] -translate-x-1/2 w-[103px] h-[103px] transform rotate-45 bg-[#b490ff] blur-[2.5px]" />
        
        {/* Título de competencia */}
        <div className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 text-center font-black text-[#7b5a80] text-[24px] leading-normal">
          <p>Innovación en la</p>
          <p>Enseñanza</p>
        </div>
        
        {/* Pregunta principal */}
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[5.5px] text-center font-black text-[#5a7e80] text-[32px] leading-normal w-[1101px]">
          ¿Qué medidas tomarías para renovar tus recursos y estrategias de enseñanza, adaptándolas a las necesidades específicas del alumno apático y manteniendo así su interés en el curso?
        </p>
        
        {/* Instrucción */}
        <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
          <p>[ Cuando hayas terminado tu reflexión, pulsa Finalizar ]</p>
        </div>
        
        {/* Botón FINALIZAR */}
        <button
          onClick={onSiguiente}
          className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
        >
          FINALIZAR
        </button>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#E8DCC4] p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-6 py-8">
        {/* Título */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#6B9B9E] mb-2">
            MOMENTO DE REFLEXIÓN
          </h1>
          <p className="text-lg text-gray-700">
            Resuelve la problemática. Comparte tus pensamientos con los otros profesores
          </p>
        </motion.div>

        {/* Pregunta de reflexión */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">🤔</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Pregunta de Reflexión
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {pregunta}
              </p>
            </div>
          </div>

          {/* Área de notas */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tus notas (opcional):
            </label>
            <textarea
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-[#6B9B9E] focus:outline-none resize-none"
              placeholder="Escribe tus ideas aquí..."
            />
          </div>
        </motion.div>

        {/* Instrucciones */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#6B9B9E]/10 border-2 border-[#6B9B9E] rounded-xl p-6"
        >
          <h3 className="text-lg font-bold text-[#6B9B9E] mb-3">
            📢 Instrucciones:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#6B9B9E] mt-1">1.</span>
              <span>Reflexiona sobre la pregunta durante unos minutos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6B9B9E] mt-1">2.</span>
              <span>Comparte tus ideas verbalmente con los otros profesores</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6B9B9E] mt-1">3.</span>
              <span>Escucha las perspectivas de tus colegas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6B9B9E] mt-1">4.</span>
              <span>Cuando terminen la discusión, presiona "He terminado"</span>
            </li>
          </ul>
        </motion.div>

        {/* Botón terminar */}
        {!mostrarConfirmacion && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={handleTerminar}
              className="bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white text-xl px-12 py-6 rounded-xl"
            >
              HE TERMINADO
            </Button>
          </motion.div>
        )}

        {/* Modal de confirmación */}
        {mostrarConfirmacion && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8"
          >
            <div className="bg-white rounded-2xl p-8 max-w-md shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ¿ACABASTE?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Puede que aún tengas cosas por compartir con tus colegas.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                ¿Estás seguro de que quieres finalizar tu turno?
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleConfirmar}
                  className="flex-1 bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white py-4"
                >
                  SÍ, CONTINUAR
                </Button>
                <Button
                  onClick={handleCancelar}
                  variant="outline"
                  className="flex-1 border-2 border-gray-300 py-4"
                >
                  CANCELAR
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
