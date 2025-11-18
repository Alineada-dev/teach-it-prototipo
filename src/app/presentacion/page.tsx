"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

// Importar todas las pantallas
import {
  PantallaInicio,
  PantallaBienvenida,
  PantallaCompetencias,
  PantallaSalon,
  PantallaPerfilEstudiante,
  PantallaSeleccionCompetencia,
  PantallaReflexion,
  PantallaFinal,
  NavegacionRapida,
  AyudaFlotante
} from "@/components/presentacion";

const pantallas = [
  { id: 0, nombre: "Inicio", componente: PantallaInicio },
  { id: 1, nombre: "Bienvenida", componente: PantallaBienvenida },
  { id: 2, nombre: "Competencias", componente: PantallaCompetencias },
  { id: 3, nombre: "Salón", componente: PantallaSalon },
  { id: 4, nombre: "Perfil", componente: PantallaPerfilEstudiante },
  { id: 5, nombre: "Competencia", componente: PantallaSeleccionCompetencia },
  { id: 6, nombre: "Reflexión", componente: PantallaReflexion },
  { id: 7, nombre: "Final", componente: PantallaFinal },
];

export default function PresentacionPage() {
  const [pantallaActual, setPantallaActual] = useState(0);
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState<string | null>(null);
  const [competenciaSeleccionada, setCompetenciaSeleccionada] = useState<string | null>(null);

  const siguiente = () => {
    if (pantallaActual < pantallas.length - 1) {
      setPantallaActual(pantallaActual + 1);
    }
  };

  const anterior = () => {
    if (pantallaActual > 0) {
      setPantallaActual(pantallaActual - 1);
    }
  };

  const irAPantalla = (index: number) => {
    setPantallaActual(index);
  };

  // Atajos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        siguiente();
      } else if (e.key === "ArrowLeft") {
        anterior();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pantallaActual]);

  const PantallaComponente = pantallas[pantallaActual].componente;

  return (
    <div className="min-h-screen bg-[#E8DCC4] relative overflow-hidden">
      {/* Navegación rápida lateral */}
      <NavegacionRapida pantallaActual={pantallaActual} onIrAPantalla={irAPantalla} />

      {/* Ayuda flotante */}
      <AyudaFlotante />

      {/* Navegación superior */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Inicio
            </Button>
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {pantallaActual + 1} / {pantallas.length}
            </span>
            <span className="text-sm font-medium text-[#6B9B9E]">
              {pantallas[pantallaActual].nombre}
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={anterior}
              disabled={pantallaActual === 0}
              variant="outline"
              size="sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={siguiente}
              disabled={pantallaActual === pantallas.length - 1}
              variant="outline"
              size="sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Contenido de la pantalla */}
      <div className="pt-16 h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={pantallaActual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <PantallaComponente
              onSiguiente={siguiente}
              onAnterior={anterior}
              onSeleccionarEstudiante={setEstudianteSeleccionado}
              onSeleccionarCompetencia={setCompetenciaSeleccionada}
              estudianteSeleccionado={estudianteSeleccionado}
              competenciaSeleccionada={competenciaSeleccionada}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de pantalla (puntos) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {pantallas.map((pantalla, index) => (
            <button
              key={pantalla.id}
              onClick={() => irAPantalla(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === pantallaActual
                  ? "bg-[#6B9B9E] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              title={pantalla.nombre}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
