import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function Home() {
  return (
    <div className="min-h-screen dotted-background p-8">
      <ThemeSelector />
      <div className="max-w-6xl mx-auto space-y-8 sketch-border p-8">
        {/* Header con Fígaro */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold theme-text">
            Teach-It
          </h1>
          <p className="text-xl theme-text">
            Sistema de Resolución de Incidentes Universitarios
          </p>
          
          {/* Fígaro - Guía del proyecto */}
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="relative w-80 h-96">
              <Image
                src="/assets/figaro/figaro-cropped.png"
                alt="Fígaro - Tu guía en Teach-It"
                width={600}
                height={1000}
                className="object-contain"
                priority
              />
            </div>
            <div className="max-w-2xl bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
              <p className="text-lg text-gray-700 italic">
                "¡Hola! Bienvenido a TEACH-IT, un proyecto de simulación dirigido a docentes en donde te quiero enseñar algunas cosas de importancia, pero primero... quiero preguntarte algo."
              </p>
              <p className="text-sm text-[#6B9B9E] font-semibold mt-2 text-right">
                - Fígaro
              </p>
            </div>
          </div>
        </div>

        {/* Paleta de Colores Principal */}
        <Card className="p-6 theme-bg theme-card">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Paleta de Colores Principal</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[#6B9B9E] flex items-center justify-center">
                <span className="text-white font-medium">Turquesa</span>
              </div>
              <p className="text-sm text-gray-600">#6B9B9E</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[#8FB5B8] flex items-center justify-center">
                <span className="text-white font-medium">Turquesa Light</span>
              </div>
              <p className="text-sm text-gray-600">#8FB5B8</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[#E8DCC4] border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-700 font-medium">Beige</span>
              </div>
              <p className="text-sm text-gray-600">#E8DCC4</p>
            </div>
          </div>
        </Card>

        {/* Perfiles de Estudiantes */}
        <Card className="p-6 theme-bg theme-card">
          <h2 className="text-2xl font-semibold mb-4 theme-text">Perfiles de Estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#A8C5C7] text-center space-y-2">
              <h3 className="font-bold text-lg text-gray-800">El Apático</h3>
              <Badge className="bg-white text-gray-700">Desmotivado</Badge>
            </div>
            <div className="p-4 rounded-lg bg-[#E89B9B] text-center space-y-2">
              <h3 className="font-bold text-lg text-gray-800">El Problemático</h3>
              <Badge className="bg-white text-gray-700">Disruptivo</Badge>
            </div>
            <div className="p-4 rounded-lg bg-[#F4D06F] text-center space-y-2">
              <h3 className="font-bold text-lg text-gray-800">El Genio</h3>
              <Badge className="bg-white text-gray-700">Sobresaliente</Badge>
            </div>
          </div>
        </Card>

        {/* Competencias Docentes */}
        <Card className="p-6 theme-bg theme-card">
          <h2 className="text-2xl font-semibold mb-4 theme-text">Competencias Docentes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#FF6B6B] text-white text-center">
              <p className="font-semibold">Planeación</p>
            </div>
            <div className="p-4 rounded-lg bg-[#4ECDC4] text-white text-center">
              <p className="font-semibold">Compromiso</p>
            </div>
            <div className="p-4 rounded-lg bg-[#FFE66D] text-gray-800 text-center">
              <p className="font-semibold">Integración</p>
            </div>
            <div className="p-4 rounded-lg bg-[#95E1D3] text-gray-800 text-center">
              <p className="font-semibold">Innovación</p>
            </div>
            <div className="p-4 rounded-lg bg-[#F38181] text-white text-center">
              <p className="font-semibold">Construcción</p>
            </div>
            <div className="p-4 rounded-lg bg-[#AA96DA] text-white text-center">
              <p className="font-semibold">Evaluación</p>
            </div>
          </div>
        </Card>

        {/* Presentación Completa - Destacada */}
        <Card className="p-8 bg-gradient-to-br from-[#6B9B9E] to-[#4ECDC4] border-4 border-white shadow-2xl">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white mb-2">
              🎮 Presentación Interactiva Completa
            </h2>
            <p className="text-white/90 text-lg mb-4">
              Experimenta el flujo completo del juego educativo con todas las pantallas, 
              animaciones e interacciones implementadas.
            </p>
            <Link href="/presentacion">
              <Button className="bg-white text-[#6B9B9E] hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                ▶️ INICIAR PRESENTACIÓN
              </Button>
            </Link>
            <div className="flex justify-center gap-6 mt-4 text-white/80 text-sm">
              <span>✨ 8 Pantallas</span>
              <span>🎯 3 Estudiantes</span>
              <span>💎 6 Competencias</span>
              <span>⌨️ Atajos de teclado</span>
            </div>
          </div>
        </Card>

        {/* Componentes UI */}
        <Card className="p-6 theme-bg theme-card">
          <h2 className="text-2xl font-semibold mb-4 theme-text">Otros Componentes</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/salon">
              <Button className="bg-[#6B9B9E] hover:bg-[#4A7A7D]">
                🎓 Ver Salón 3D
              </Button>
            </Link>
            <Link href="/salon-sketch">
              <Button className="bg-[#F4D06F] hover:bg-[#E8C05F] text-gray-800">
                ✏️ Ver Salón Sketch
              </Button>
            </Link>
            <Link href="/salon-figma">
              <Button className="bg-[#A8C5C7] hover:bg-[#8FB5B8] text-gray-800">
                🎨 Ver Salón Figma
              </Button>
            </Link>
            <Button variant="outline" className="border-[#6B9B9E] text-[#6B9B9E]">
              Ver Estudiantes
            </Button>
            <Button variant="secondary">
              Cancelar
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p>Stack: Next.js 16 + TypeScript + Tailwind CSS + Supabase</p>
        </div>
      </div>
    </div>
  );
}
