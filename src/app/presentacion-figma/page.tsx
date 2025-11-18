"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { 
  PantallaP15,
  PantallaP18, 
  PantallaP21, 
  PantallaP24,
  PantallaCargandoExplicame,
  PantallaCargandoExplicame02,
  PantallaExplicacionJuego1,
  PantallaExplicacionJuego3,
  PantallaExplicacionJuego4,
  PantallaExplicacionJuego6,
  PantallaExplicacionJuego8,
  PantallaExplicacionJuego10,
  PantallaExplicacionJuego12,
  PantallaExplicacionJuego14,
  PantallaExplicacionJuego16,
  PantallaExplicacionJuego18,
  PantallaExplicacionJuego20,
  PantallaExplicacionJuego22,
  PantallaAlumno36,
  PantallaAlumno37,
  PantallaAlumno38,
  PantallaAlumno39,
  PantallaAlumno40,
  PantallaAlumno42,
  PantallaAlumno44,
  PantallaAlumno52,
  PantallaAlumno4,
  PantallaAlumno141,
  PantallaAlumno7,
  PantallaAlumno9,
  PantallaAlumno11,
  PantallaAlumno47,
  PantallaAlumno49,
  PantallaAlumno51,
  PantallaAlumno101,
  PantallaAlumno99,
  PantallaAlumno65,
  PantallaSeleccionAlumno,
  PantallaAlumno120,
  PantallaAlumno142,
  PantallaAlumno151,
  PantallaAlumno150,
  PantallaAlumno156,
  PantallaAlumno149,
  PantallaAlumno140,
  PantallaAlumno152,
  PantallaAlumno154,
  PantallaAlumno133,
  PantallaAlumno64,
  PantallaCargandoFinal,
  PantallaReflexionFinal,
  PantallaReflexionDewey,
  PantallaDespedidaFigaro,
  PantallaFinalTutorial,
  PantallaCreditosFinales
} from "./pantallas-p14-final";

// Componente de barra de progreso (Component 1 de Figma)
function ProgressBar({ progress }: { progress: number }) {
  // El indicador blanco debe estar alineado con el progreso
  // Ajustado para que coincida con los rectángulos verdes
  const indicatorLeft = Math.max(0, progress);
  
  return (
    <div className="absolute left-[518px] top-[80px] w-[884px] h-[35px]">
      {/* Fondo base */}
      <div className="absolute bg-[#5a7e80] h-full w-full" />
      
      {/* Barra de progreso completada (verde claro) */}
      <div 
        className="absolute bg-[#8db3b5] h-[16px] top-[9px] transition-all duration-300"
        style={{ 
          left: 0,
          width: `${progress}px`
        }}
      />
      
      {/* Indicador blanco (posición actual) - centrado sobre el progreso */}
      <div 
        className="absolute bg-white h-[16px] top-[9px] transition-all duration-300"
        style={{ 
          left: `${indicatorLeft}px`,
          width: '111px'
        }}
      />
      
      {/* Separadores verticales */}
      {[0, 109, 219, 330, 436, 550, 661, 771, 880].map((pos, i) => (
        <div 
          key={i}
          className="absolute bg-[#5a7e80] h-full w-[4px]"
          style={{ left: `${pos}px` }}
        />
      ))}
    </div>
  );
}

// Pantalla P-01: Portada
function PantallaP01({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#a2a2d4]">
      <img 
        src="/assets/screens/P-01-portada.png" 
        alt="TEACH-IT Portada"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Botón PLAY circular */}
      <button
        onClick={onNext}
        className="absolute left-[847px] top-[452px] w-[219px] h-[219px] rounded-full hover:scale-110 transition-transform cursor-pointer"
        aria-label="Comenzar"
      />
    </div>
  );
}

// Pantalla P-02: Bienvenida
function PantallaP02({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-02-bienvenida-figma.png" 
        alt="Bienvenida"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={0} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[919px] font-light text-[#5a7e80] text-[40px] leading-normal">
        <p>¡Hola! Bienvenido a TEACH-IT, un proyecto</p>
        <p>de simulación dirigido a docentes en donde</p>
        <p>te quiero enseñar algunas cosas de importancia,</p>
        <p>pero primero… quiero preguntarte algo.</p>
      </div>
      
      {/* Barras decorativas izquierda */}
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
      
      {/* Botones */}
      <button
        onClick={onNext}
        className="absolute left-[443px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
      <button
        onClick={onSkip}
        className="absolute left-[679px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:scale-110 transition-transform"
      >
        OMITIR
      </button>
    </div>
  );
}

// Pantalla P-03: ¿Qué es?
function PantallaP03({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-03-que-es-figma.png" 
        alt="¿Qué es?"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={110} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[938px] font-light text-[#5a7e80] text-[40px] leading-normal">
        <p>¿Alguna vez te has adentrado en la compleja vida</p>
        <p>de tus estudiantes? Todos ellos son diferentes y</p>
        <p>día con día viven situaciones en las que muchas</p>
        <p>veces no tienen ni tú o ellos el control.</p>
      </div>
      
      {/* Barras decorativas izquierda */}
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
      
      {/* Botones */}
      <button
        onClick={onNext}
        className="absolute left-[443px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
      <button
        onClick={onSkip}
        className="absolute left-[679px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:scale-110 transition-transform"
      >
        OMITIR
      </button>
    </div>
  );
}

// Pantalla P-04: Explicación
function PantallaP04({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-04-explicacion-figma.png" 
        alt="Explicación"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={221} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[1003px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>Los alumnos en sí son como pequeños mundos y es</p>
        <p>mediante este proyecto que te ayudaré a adentrarte</p>
        <p>en los ecosistemas que cada uno de ellos representa.</p>
        <p>La idea es que al terminar de jugar, seas capaz de</p>
        <p>entender mejor a tus alumnos con esta simulación.</p>
      </div>
      
      {/* Barras decorativas izquierda */}
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
      
      {/* Botones */}
      <button
        onClick={onNext}
        className="absolute left-[443px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
      <button
        onClick={onSkip}
        className="absolute left-[679px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:scale-110 transition-transform"
      >
        OMITIR
      </button>
    </div>
  );
}

// Pantalla P-05: ¿Qué es TEACH-IT?
function PantallaP05({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-05-que-es.png" 
        alt="¿Qué es TEACH-IT?"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={332} />
      
      {/* Título */}
      <div className="absolute left-[1038px] top-[299px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[1038px] top-[387px] w-[756px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>Junta a un grupo de profesores, 3 personas que puedan reunirse es lo ideal. Compartiremos experiencias y nos cuestionaremos algunas cosas mediante un salón ficticio.</p>
        <p className="mt-1">Ten a la mano tus cartas y prepárense para esta experiencia, pero antes de empezar, deben tomar algo en cuenta...</p>
      </div>
      
      {/* Botones */}
      <button
        onClick={onNext}
        className="absolute left-[1038px] top-[765px] font-black text-[#5a7e80] text-[24px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
      <button
        onClick={onSkip}
        className="absolute left-[1274px] top-[765px] font-black text-[#5a7e80] text-[24px] hover:scale-110 transition-transform"
      >
        OMITIR
      </button>
    </div>
  );
}

// P-08: TEACH-IT es un juego para compartir
function PantallaP08({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-14-compartir.png" 
        alt="TEACH-IT es un juego para compartir"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={438} />
      
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      <div className="absolute left-[537px] top-[447px] w-[831px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>TEACH-IT es un juego para compartir. Aprender como profesores el uno del otro también es importante. Te recomiendo jugar con profesores novatos y experimentados dentro de la misma sesión para así aprender aún más.</p>
      </div>
      
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
      
      <button onClick={onNext} className="absolute left-[443px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:text-[#ff3fa7] hover:scale-110 transition-all">
        CONTINUAR
      </button>
      <button onClick={onSkip} className="absolute left-[679px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:scale-110 transition-transform">
        OMITIR
      </button>
    </div>
  );
}

// ANIMATION 17-20: Transiciones con barras decorativas
function AnimationTransition({ progress, bars }: { progress: number; bars: number }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ANIMATION-17.png" 
        alt="Transición"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <ProgressBar progress={progress} />
      {bars >= 3 && <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />}
      {bars >= 2 && <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />}
      {bars >= 1 && <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />}
    </div>
  );
}

// Pantalla Final
function PantallaFinal({ onHome }: { onHome: () => void }) {
  return (
    <div className="relative w-full h-full bg-[rgba(0,0,0,0.88)]">
      <div className="absolute left-1/2 top-[482px] -translate-x-1/2 -translate-y-1/2 text-center font-black text-white text-[24px] leading-normal w-[1529px]">
        <p>Este es el final de nuestro prototipo. Gracias por jugar. Centramos todo nuestro esfuerzo en que</p>
        <p>el funcionamiento de <span className="text-[#90b4ff]">TEACH-IT</span> fuera claro y fiel a lo que tenemos en mente. Esperamos pueda hacer alguna diferencia</p>
        <p>para algún profesor en apuros allá afuera y que resulte algo agradable y novedoso.</p>
        <p>&nbsp;</p>
        <p>¡Gracias!</p>
        <p>&nbsp;</p>
        <p className="font-['Leckerli_One'] text-[#90b4ff]">Por Aline, Pepe y Jorge.</p>
      </div>
      <button onClick={onHome} className="absolute left-[782px] top-[700px] font-black text-white text-[32px] hover:scale-110 transition-transform">
        REGRESAR A INICIO
      </button>
    </div>
  );
}

export default function PresentacionFigmaPage() {
  const [pantallaActual, setPantallaActual] = useState(0);
  const totalPantallas = 61;

  const siguiente = () => {
    if (pantallaActual < totalPantallas - 1) {
      setPantallaActual(pantallaActual + 1);
    }
  };

  const anterior = () => {
    if (pantallaActual > 0) {
      setPantallaActual(pantallaActual - 1);
    }
  };

  const irACargandoExplicame = () => setPantallaActual(9); // Ir a la pantalla de carga
  const irAExplicacion = () => setPantallaActual(1); // Volver al inicio de la explicación (P-02)
  const irAP24 = () => setPantallaActual(28); // Ir directamente a P-24

  const pantallas = [
    "P-01 Portada",
    "P-02 Bienvenida", 
    "P-03 ¿Qué es?",
    "P-04 Explicación",
    "P-05 ¿Qué es TEACH-IT?",
    "P-08 Compartir",
    "P-15 Profesores",
    "P-18 Ambiente",
    "P-21 ¿Empezamos?",
    "Cargando Explicame",
    "Cargando Explicame 02",
    "Explicación Juego 1",
    "Explicación Juego 3",
    "Explicación Juego 4",
    "Explicación Juego 6",
    "Explicación Juego 8",
    "Explicación Juego 10",
    "Explicación Juego 12",
    "Explicación Juego 14",
    "Explicación Juego 16",
    "Explicación Juego 18",
    "Explicación Juego 20",
    "Explicación Juego 22",
    "Alumno 38 - El Genio",
    "Alumno 4 - Perfil Israel",
    "Alumno 7 - Resolución",
    "Alumno 9 - He terminado",
    "Alumno 11 - ¿Acabaste?",
    "P-24 ¿Listos?",
    "Alumno 37 - El Problemático",
    "Alumno 39 - Perfil Omar",
    "Alumno 42 - Resolución",
    "Alumno 44 - He terminado",
    "Alumno 52 - ¿Acabaste?",
    "Alumno 36 - El Apático",
    "Alumno 40 - Perfil Ramsés",
    "Alumno 47 - El Apático",
    "Alumno 49 - He terminado",
    "Alumno 51 - ¿Acabaste?",
    "Alumno 101 - Competencias",
    "Alumno 99 - Definición",
    "Alumno 65 - Rombos",
    "Selección de Alumno",
    "Alumno 120 - Rombos Misteriosos",
    "Alumno 141 - Innovación en la Enseñanza",
    "Alumno 142 - Construcción de Ambientes",
    "Alumno 151 - Evaluación del Aprendizaje",
    "Alumno 150 - Construcción de Ambientes (Genio)",
    "Alumno 156 - Reflexión Final (Problemático)",
    "Alumno 149 - Innovación en la Enseñanza (Genio)",
    "Alumno 140 - Integración de Saberes (Apático)",
    "Alumno 152 - Integración de Saberes (Problemático)",
    "Alumno 154 - Compromiso y Ética Docente (Problemático)",
    "Alumno 133 - Rombos Misteriosos",
    "Alumno 64 - Elige Figura Misteriosa",
    "Cargando Final",
    "Reflexión Final - Dr. Carles Monereo",
    "Reflexión Final - John Dewey",
    "Despedida de Fígaro",
    "Final del Tutorial",
    "Créditos Finales"
  ];

  return (
    <div className="min-h-screen bg-[#E8DCC4] relative overflow-hidden">
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
              {pantallaActual + 1} / {totalPantallas}
            </span>
            <span className="text-sm font-medium text-[#6B9B9E]">
              {pantallas[pantallaActual]}
            </span>
          </div>

          <div className="flex gap-2">
            <Button onClick={anterior} disabled={pantallaActual === 0} variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button onClick={siguiente} disabled={pantallaActual === totalPantallas - 1} variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-16 h-screen flex items-center justify-center">
        <div className="relative w-[1920px] h-[1080px] bg-white shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={pantallaActual}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {pantallaActual === 0 && <PantallaP01 onNext={siguiente} />}
              {pantallaActual === 1 && <PantallaP02 onNext={siguiente} onSkip={irAP24} />}
              {pantallaActual === 2 && <PantallaP03 onNext={siguiente} onSkip={irAP24} />}
              {pantallaActual === 3 && <PantallaP04 onNext={siguiente} onSkip={irAP24} />}
              {pantallaActual === 4 && <PantallaP05 onNext={siguiente} onSkip={irAP24} />}
              {pantallaActual === 5 && <PantallaP08 onNext={siguiente} onSkip={irAP24} />}
              {pantallaActual === 6 && <PantallaP15 onNext={siguiente} onSkip={irAP24} />}
              {pantallaActual === 7 && <PantallaP18 onNext={siguiente} onSkip={irAP24} />}
              {pantallaActual === 8 && <PantallaP21 onNext={siguiente} onExplain={irACargandoExplicame} />}
              {pantallaActual === 9 && <PantallaCargandoExplicame onComplete={siguiente} />}
              {pantallaActual === 10 && <PantallaCargandoExplicame02 onComplete={siguiente} />}
              {pantallaActual === 11 && <PantallaExplicacionJuego1 onComplete={siguiente} />}
              {pantallaActual === 12 && <PantallaExplicacionJuego3 onComplete={siguiente} />}
              {pantallaActual === 13 && <PantallaExplicacionJuego4 onNext={siguiente} />}
              {pantallaActual === 14 && <PantallaExplicacionJuego6 onNext={siguiente} />}
              {pantallaActual === 15 && <PantallaExplicacionJuego8 onNext={siguiente} />}
              {pantallaActual === 16 && <PantallaExplicacionJuego10 onNext={siguiente} />}
              {pantallaActual === 17 && <PantallaExplicacionJuego12 onNext={siguiente} />}
              {pantallaActual === 18 && <PantallaExplicacionJuego14 onNext={siguiente} />}
              {pantallaActual === 19 && <PantallaExplicacionJuego16 onNext={siguiente} />}
              {pantallaActual === 20 && <PantallaExplicacionJuego18 onNext={siguiente} />}
              {pantallaActual === 21 && <PantallaExplicacionJuego20 onNext={siguiente} />}
              {pantallaActual === 22 && <PantallaExplicacionJuego22 onNext={siguiente} onSelectStudent={(id) => {
                if (id === '02') setPantallaActual(23); // Ir a Alumno 38 (El Genio)
                if (id === '05') setPantallaActual(29); // Ir a Alumno 37 (El Problemático)
                if (id === '10') setPantallaActual(34); // Ir a Alumno 36 (El Apático)
              }} />}
              {pantallaActual === 23 && <PantallaAlumno38 onYes={siguiente} onNo={() => setPantallaActual(22)} />}
              {pantallaActual === 24 && <PantallaAlumno4 onNext={siguiente} />}
              {pantallaActual === 25 && <PantallaAlumno7 onNext={siguiente} />}
              {pantallaActual === 26 && <PantallaAlumno9 onFinish={siguiente} />}
              {pantallaActual === 27 && <PantallaAlumno11 onContinue={() => setPantallaActual(39)} onCancel={() => setPantallaActual(26)} />}
              {pantallaActual === 28 && <PantallaP24 onNext={() => {}} onBack={irAExplicacion} />}
              {pantallaActual === 29 && <PantallaAlumno37 onYes={siguiente} onNo={() => setPantallaActual(22)} />}
              {pantallaActual === 30 && <PantallaAlumno39 onNext={siguiente} />}
              {pantallaActual === 31 && <PantallaAlumno42 onNext={siguiente} />}
              {pantallaActual === 32 && <PantallaAlumno44 onFinish={siguiente} />}
              {pantallaActual === 33 && <PantallaAlumno52 onContinue={() => setPantallaActual(39)} onCancel={() => setPantallaActual(32)} />}
              {pantallaActual === 34 && <PantallaAlumno36 onYes={siguiente} onNo={() => setPantallaActual(22)} />}
              {pantallaActual === 35 && <PantallaAlumno40 onNext={siguiente} />}
              {pantallaActual === 36 && <PantallaAlumno47 onNext={siguiente} />}
              {pantallaActual === 37 && <PantallaAlumno49 onFinish={siguiente} />}
              {pantallaActual === 38 && <PantallaAlumno51 onContinue={siguiente} onCancel={() => setPantallaActual(37)} />}
              {pantallaActual === 39 && <PantallaAlumno101 onNext={siguiente} />}
              {pantallaActual === 40 && <PantallaAlumno99 onNext={siguiente} />}
              {pantallaActual === 41 && <PantallaAlumno65 onNext={siguiente} />}
              {pantallaActual === 42 && <PantallaSeleccionAlumno 
                onSelectGenio={() => setPantallaActual(43)} 
                onSelectApatico={() => setPantallaActual(54)} 
                onSelectProblematico={() => setPantallaActual(53)} 
              />}
              {pantallaActual === 43 && <PantallaAlumno120 onSelectRombo={(index) => {
                if (index === 3) {
                  setPantallaActual(49); // Rombo posición 4 (morado) va a página 50
                } else if (index === 4) {
                  setPantallaActual(47); // Rombo posición 5 (azul) va a página 48
                } else if (index === 5) {
                  setPantallaActual(46); // Rombo posición 6 (verde) va a página 47
                } else {
                  setPantallaActual(44); // Otros rombos van a la siguiente pantalla
                }
              }} />}
              {pantallaActual === 44 && <PantallaAlumno141 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 45 && <PantallaAlumno142 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 46 && <PantallaAlumno151 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 47 && <PantallaAlumno150 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 48 && <PantallaAlumno156 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 49 && <PantallaAlumno149 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 50 && <PantallaAlumno140 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 51 && <PantallaAlumno152 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 52 && <PantallaAlumno154 onFinish={() => setPantallaActual(55)} />}
              {pantallaActual === 53 && <PantallaAlumno133 onSelectRombo={(index) => {
                // Navegar según el rombo seleccionado
                if (index === 1) {
                  setPantallaActual(52); // Rombo posición 2 (índice 1) - Beige - Compromiso y Ética → Pantalla 53
                } else if (index === 2) {
                  setPantallaActual(51); // Rombo posición 3 (índice 2) - Rosa - Integración de Saberes → Pantalla 52
                } else if (index === 4) {
                  setPantallaActual(48); // Rombo posición 5 (índice 4) - Azul - Construcción de Ambientes → Pantalla 49
                } else {
                  setPantallaActual(54); // Otros casos van a Alumno 64
                }
              }} />}
              {pantallaActual === 54 && <PantallaAlumno64 onSelectRombo={(index) => {
                // Navegar según el rombo seleccionado
                if (index === 2) {
                  setPantallaActual(50); // Rombo posición 3 (índice 2) - Rosa - Integración de Saberes → Pantalla 51
                } else if (index === 3) {
                  setPantallaActual(44); // Rombo posición 4 (índice 3) - Morado - Innovación → Pantalla 45
                } else if (index === 4) {
                  setPantallaActual(45); // Rombo posición 5 (índice 4) - Azul - Construcción de Ambientes → Pantalla 46
                } else {
                  setPantallaActual(55); // Otros casos van a pantalla de carga final
                }
              }} />}
              {pantallaActual === 55 && <PantallaCargandoFinal onComplete={siguiente} />}
              {pantallaActual === 56 && <PantallaReflexionFinal onNext={siguiente} />}
              {pantallaActual === 57 && <PantallaReflexionDewey onNext={siguiente} />}
              {pantallaActual === 58 && <PantallaDespedidaFigaro onNext={siguiente} />}
              {pantallaActual === 59 && <PantallaFinalTutorial onNext={siguiente} />}
              {pantallaActual === 60 && <PantallaCreditosFinales onNext={() => setPantallaActual(0)} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {Array.from({ length: totalPantallas }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPantallaActual(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === pantallaActual
                  ? "bg-[#6B9B9E] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              title={pantallas[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
