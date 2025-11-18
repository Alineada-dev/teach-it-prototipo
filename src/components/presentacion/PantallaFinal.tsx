"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props {
  onAnterior: () => void;
}

export function PantallaFinal({ onAnterior }: Props) {
  return (
    <div className="h-full bg-gradient-to-b from-[#E8DCC4] to-[#6B9B9E] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8 text-center">
        {/* Fígaro celebrando */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative">
            <Image
              src="/assets/figaro/figaro-cropped.png"
              alt="Fígaro"
              width={300}
              height={450}
              className="object-contain"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-8 -right-8 text-6xl"
            >
              🎉
            </motion.div>
          </div>
        </motion.div>

        {/* Mensaje final */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-2xl"
        >
          <h1 className="text-5xl font-bold text-[#6B9B9E] mb-4">
            ¡Felicidades!
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Este es el final de nuestro prototipo
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Has completado una ronda del juego TEACH-IT. Esperamos que esta experiencia 
            te haya ayudado a reflexionar sobre las competencias docentes y cómo aplicarlas 
            en situaciones reales con tus estudiantes.
          </p>
          <p className="text-lg text-gray-600 italic">
            "La educación no es preparación para la vida; la educación es la vida misma."
          </p>
          <p className="text-sm text-[#6B9B9E] font-semibold mt-2">
            - John Dewey
          </p>
        </motion.div>

        {/* Estadísticas de la sesión */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-[#6B9B9E]">1</div>
            <div className="text-sm text-gray-600 mt-2">Ronda Completada</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-[#6B9B9E]">6</div>
            <div className="text-sm text-gray-600 mt-2">Competencias Exploradas</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-[#6B9B9E]">3</div>
            <div className="text-sm text-gray-600 mt-2">Tipos de Estudiantes</div>
          </div>
        </motion.div>

        {/* Próximos pasos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Próximos Pasos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <h4 className="font-semibold text-gray-800">Comparte tu experiencia</h4>
                <p className="text-sm text-gray-600">
                  Discute con tus colegas sobre los aprendizajes obtenidos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-gray-800">Aplica lo aprendido</h4>
                <p className="text-sm text-gray-600">
                  Implementa estas estrategias en tu práctica docente
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-semibold text-gray-800">Juega otra ronda</h4>
                <p className="text-sm text-gray-600">
                  Explora diferentes estudiantes y competencias
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-semibold text-gray-800">Comparte casos reales</h4>
                <p className="text-sm text-gray-600">
                  Ayuda a enriquecer la base de datos con tus experiencias
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/">
            <Button className="bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white text-lg px-8 py-6 rounded-xl">
              REGRESAR A INICIO
            </Button>
          </Link>
          <Button
            onClick={onAnterior}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
          >
            VER PRESENTACIÓN DE NUEVO
          </Button>
        </motion.div>

        {/* Créditos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-white/80 text-sm"
        >
          <p>Desarrollado con ❤️ para mejorar la educación</p>
          <p className="mt-1">Next.js 16 • TypeScript • Tailwind CSS • Framer Motion</p>
        </motion.div>
      </div>
    </div>
  );
}
