"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  onSiguiente: () => void;
}

export function PantallaBienvenida({ onSiguiente }: Props) {
  return (
    <div className="h-full flex items-center justify-center bg-[#E8DCC4] p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Fígaro */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <Image
              src="/assets/figaro/figaro-cropped.png"
              alt="Fígaro"
              width={400}
              height={600}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Mensaje de bienvenida */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl relative">
            {/* Pico de burbuja */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-white border-b-[20px] border-b-transparent"></div>
            
            <h2 className="text-3xl font-bold text-[#6B9B9E] mb-4">
              ¡Hola! Bienvenido a TEACH-IT
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Un proyecto de simulación dirigido a docentes en donde te quiero enseñar 
              algunas cosas de importancia, pero primero... quiero preguntarte algo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              ¿Conoces las competencias docentes?
            </p>
            <p className="text-sm text-[#6B9B9E] font-semibold mt-4 text-right italic">
              - Fígaro, tu guía
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={onSiguiente}
              className="flex-1 bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white text-lg py-6 rounded-xl"
            >
              SÍ, LAS CONOZCO
            </Button>
            <Button
              onClick={onSiguiente}
              variant="outline"
              className="flex-1 border-2 border-[#6B9B9E] text-[#6B9B9E] text-lg py-6 rounded-xl"
            >
              NO, ENSÉÑAME
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
