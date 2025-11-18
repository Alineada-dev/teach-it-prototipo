// Pantallas P-14 hasta ANIMATION 36 y Pantalla Final
// Estas son las pantallas finales del flujo de Figma

import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Componente de barra de progreso reutilizable
export function ProgressBar({ progress }: { progress: number }) {
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

// P-14: TEACH-IT es un juego para compartir
export function PantallaP14({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-14-compartir.png" 
        alt="TEACH-IT es un juego para compartir"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={438} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[831px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>TEACH-IT es un juego para compartir. Aprender como profesores el uno del otro también es importante. Te recomiendo jugar con profesores novatos y experimentados dentro de la misma sesión para así aprender aún más.</p>
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
        className="absolute left-[679px] top-[705px] font-black text-[#ff3fa7] text-[24px] hover:scale-110 transition-transform"
      >
        OMITIR
      </button>
      <div className="absolute left-[509px] top-[713px] w-[55.5px] h-[2px] bg-[#5a7e80]" />
    </div>
  );
}

// P-15: Guiar a los profesores
export function PantallaP15({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-15-profesores.png" 
        alt="Guiar a los profesores"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={552} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[896px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>Guiar a los que con pasión también les gusta enseñar, es vital para ellos y sus alumnos. Así como los estudiantes poseen perfiles diversos y complejos, los profesores también. Entender esa diversidad es la clave del éxito dentro y fuera del salón de clases.</p>
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

// P-16: Guiar a los profesores (botón rosa)
export function PantallaP16({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-15-profesores.png" 
        alt="Guiar a los profesores"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={552} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[896px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>Guiar a los que con pasión también les gusta enseñar, es vital para ellos y sus alumnos. Así como los estudiantes poseen perfiles diversos y complejos, los profesores también. Entender esa diversidad es la clave del éxito dentro y fuera del salón de clases.</p>
      </div>
      
      {/* Barras decorativas izquierda */}
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
      
      {/* Botones */}
      <button
        onClick={onNext}
        className="absolute left-[443px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:scale-110 transition-transform"
      >
        CONTINUAR
      </button>
      <button
        onClick={onSkip}
        className="absolute left-[679px] top-[705px] font-black text-[#5a7e80] text-[24px] hover:scale-110 transition-transform"
      >
        OMITIR
      </button>
      <div className="absolute left-[509px] top-[713px] w-[55.5px] h-[2px] bg-[#5a7e80]" />
    </div>
  );
}

// CARGANDO COMENCEMOS 01: Pantalla de carga con punto
export function PantallaCargandoComencemos01({ onComplete }: { onComplete: () => void }) {
  // Avanzar automáticamente después de 1.5 segundos
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/CARGANDO-comencemos.png" 
        alt="Cargando..."
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

// CARGANDO COMENCEMOS 02: Pantalla negra de transición
export function PantallaCargandoComencemos02({ onComplete }: { onComplete: () => void }) {
  // Avanzar automáticamente después de 1 segundo
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-black">
      {/* Pantalla completamente negra */}
    </div>
  );
}

// P-18: Generemos un ambiente sano
export function PantallaP18({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-18-ambiente.png" 
        alt="Generemos un ambiente sano"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={663} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿QUÉ ES TEACH-IT?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[896px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>Generemos un ambiente sano para aprender de los éxitos y los fracasos de cada uno. Ayudémonos los unos a otros a ser mejores mediante la resolución de variadas problemáticas. Todos los profesores son diferentes, pero siempre podemos aprender algo nuevo.</p>
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

// P-21: ¿Empezamos?
export function PantallaP21({ onNext, onExplain }: { onNext: () => void; onExplain: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-21-empezamos.png" 
        alt="¿Empezamos?"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={773} />
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿EMPEZAMOS?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[856px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>Usa TEACH-IT, en la sala de profesores o con tus amigos docentes cuando necesites un maestro para el maestro o una opinión. Continuando, te pregunto: ¿Has jugado ya antes? Si lo necesitas, te puedo explicar como funciona TEACH-IT.</p>
      </div>
      
      {/* Barras decorativas izquierda */}
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
      
      {/* Botones */}
      <button
        disabled
        className="absolute left-[443px] top-[705px] font-black text-[#5a7e80] text-[24px] opacity-40 cursor-not-allowed"
      >
        COMENCEMOS
      </button>
      <button
        onClick={onExplain}
        className="absolute left-[702px] top-[705px] font-black text-[#a9005b] text-[24px] hover:scale-110 transition-transform"
      >
        EXPLÍCAME
      </button>
      <div className="absolute left-[533px] top-[713px] w-[55.5px] h-[2px] bg-[#5a7e80]" />
    </div>
  );
}

// P-24: ¿Ya sabemos jugar?
export function PantallaP24({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/P-24-listos.png" 
        alt="¿Ya sabemos jugar?"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Sin barra de progreso */}
      
      {/* Título */}
      <div className="absolute left-[443px] top-[359px] font-black text-[#5a7e80] text-[24px]">
        ¿EMPEZAMOS?
      </div>
      
      {/* Texto principal */}
      <div className="absolute left-[537px] top-[447px] w-[896px] font-light text-[#5a7e80] text-[32px] leading-normal">
        <p>¿Ya sabemos jugar? Recuerda que entender la finalidad de este juego es vital para una buena partida. Podemos comenzar cuando estemos listos. Tomemos asiento todos y disfrutemos de una buena charla, risas y buenas anécdotas. Mezcla bien las cartas y a jugar.</p>
      </div>
      
      {/* Barras decorativas izquierda */}
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
      
      {/* Botones */}
      <button
        disabled
        className="absolute left-[443px] top-[705px] font-black text-[#5a7e80] text-[24px] opacity-40 cursor-not-allowed"
      >
        COMENCEMOS
      </button>
      <button
        onClick={onBack}
        className="absolute left-[681px] top-[705px] font-black text-[#a9005b] text-[24px] hover:scale-110 transition-transform"
      >
        ¿QUÉ ERA TEACH-IT?
      </button>
      <div className="absolute left-[533px] top-[713px] w-[55.5px] h-[2px] bg-[#5a7e80]" />
    </div>
  );
}

// CARGANDO... EXPLICAME
export function PantallaCargandoExplicame({ onComplete }: { onComplete: () => void }) {
  // Avanzar automáticamente después de 1.5 segundos
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/CARGANDO-explicame.png" 
        alt="Cargando explicación"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

// CARGANDO... EXPLICAME 02 (pantalla negra)
export function PantallaCargandoExplicame02({ onComplete }: { onComplete: () => void }) {
  // Avanzar automáticamente después de 1 segundo
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-black">
      {/* Pantalla completamente negra */}
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 1
export function PantallaExplicacionJuego1({ onComplete }: { onComplete: () => void }) {
  // Avanzar automáticamente después de 3 segundos
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-1.png" 
        alt="Explicación del juego - Salón de clases"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 3
export function PantallaExplicacionJuego3({ onComplete }: { onComplete: () => void }) {
  // Avanzar automáticamente después de 0.5 segundos
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-3.png" 
        alt="Explicación del juego - Salón oscuro"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 4
export function PantallaExplicacionJuego4({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-4.png" 
        alt="Explicación del juego - Bienvenida de Fígaro"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Texto */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[32px] leading-normal">
        <p>¡Hola! Bienvenidos sean a su salón de clases. Son las siete de la</p>
        <p>mañana y nuestros estudiantes vienen con todo.</p>
      </div>
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 6
export function PantallaExplicacionJuego6({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-JUEGO-6.png" 
        alt="Explicación del juego - Creo..."
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[845px] w-[22px] h-[40px] bg-[#d9d9d9]" />
      
      {/* Texto "Creo..." */}
      <div className="absolute left-[218px] top-[885px] -translate-y-full font-medium text-white text-[32px] leading-normal">
        <p>Creo...</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 8
export function PantallaExplicacionJuego8({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-8.png" 
        alt="Explicación del juego - Presentación de Fígaro"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[765px] w-[22px] h-[120px] bg-[#d9d9d9]" />
      
      {/* Texto */}
      <div className="absolute left-[218px] top-[825px] -translate-y-1/2 font-medium text-white text-[32px] leading-normal">
        <p>Mi nombre es Fígaro y hoy los guiaré a través de TEACH-IT.</p>
        <p>Aprenderán a jugar y, cuando terminen, sabrán cómo manipular</p>
        <p>todas las funciones.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 10
export function PantallaExplicacionJuego10({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-10.png" 
        alt="Explicación del juego - ¡Empecemos!"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[845px] w-[22px] h-[40px] bg-[#d9d9d9]" />
      
      {/* Texto "¡Empecemos!" */}
      <div className="absolute left-[218px] top-[885px] -translate-y-full font-medium text-white text-[32px] leading-normal">
        <p>¡Empecemos!</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 12
export function PantallaExplicacionJuego12({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-12.png" 
        alt="Explicación del juego - Cartas físicas"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* GIF/Imagen de las tarjetas (izquierda) */}
      <div className="absolute left-[-659px] top-[-30px] w-[1920px] h-[1080px]">
        <img 
          src="/assets/screens/cuadro-texto-tarjetas.png" 
          alt="Tarjetas animadas"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[765px] w-[22px] h-[120px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[760px] font-medium text-white text-[32px] leading-[1.2] w-[1100px]">
        <span>Primero que nada, mezclen las cartas y colóquenlas boca abajo. En cada una de ellas encontrarán diferentes problemáticas relacionadas con los alumnos en pantalla.</span>
      </div>
      
      {/* Line 1 - Línea decorativa superior (conecta tarjetas con texto superior) */}
      <div className="absolute left-[439px] top-[240px] w-[456px] h-[162px]" style={{ transform: 'rotate(320.837deg)', transformOrigin: 'center' }}>
        <img 
          src="/assets/screens/line-1.svg" 
          alt="Línea decorativa 1"
          className="w-full h-full"
        />
      </div>
      
      {/* Texto superior derecho */}
      <div className="absolute left-[902px] top-[218px] -translate-y-1/2 font-light text-white text-[26px] leading-normal w-[695px]">
        <p>Las cartas físicas facilitan la integración al juego de profesores que estén expectantes o hayan llegado tarde a la sesión y quieran conocer qué problemática se está discutiendo.</p>
      </div>
      
      {/* Line 2 - Línea decorativa inferior (conecta tarjetas con texto inferior) */}
      <div className="absolute left-[498px] top-[527px] w-[349px] h-[12px]">
        <img 
          src="/assets/screens/line-2.svg" 
          alt="Línea decorativa 2"
          className="w-full h-full"
        />
      </div>
      
      {/* Texto inferior derecho */}
      <div className="absolute left-[902px] top-[530px] -translate-y-1/2 font-light text-white text-[26px] leading-normal w-[585px]">
        <p>Además de que pueden ser mezcladas y distribuidas por diferentes profesores en turno, ayudando a la participación y entendimiento de cada sesión o actividad de formación de TEACH-IT.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 14
export function PantallaExplicacionJuego14({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-14.png" 
        alt="Explicación del juego - Presentación de estudiantes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[32px] leading-normal">
        <p>Hecho esto, te los presento. Todos son diferentes.</p>
        <p>Distintas motivaciones, gustos, problemas, virtudes y defectos.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 16
export function PantallaExplicacionJuego16({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-16.png" 
        alt="Explicación del juego - Turno de Jugador 1"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa superior (verde) */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[93px] bg-[#5a7e80]" />
      
      {/* Texto "TURNO DE JUGADOR 1" */}
      <div className="absolute left-[218px] top-[176px] -translate-y-1/2 font-black text-[#ff3fa7] text-[48px] leading-normal">
        <p>TURNO DE</p>
        <p>JUGADOR 1</p>
      </div>
      
      {/* Barra decorativa inferior (gris) */}
      <div className="absolute left-[160px] top-[765px] w-[22px] h-[120px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[825px] -translate-y-1/2 font-medium text-white text-[32px] leading-normal">
        <p>Una vez revueltas las cartas, empezaremos con la primera</p>
        <p>ronda de tres. Como ves, será turno del primer profesor,</p>
        <p>elijan quién empieza.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 18
export function PantallaExplicacionJuego18({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-18.png" 
        alt="Explicación del juego - Botón ¡Presente!"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa superior (verde) */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[93px] bg-[#5a7e80]" />
      
      {/* Texto "TURNO DE JUGADOR 1" */}
      <div className="absolute left-[218px] top-[176px] -translate-y-1/2 font-black text-[#ff3fa7] text-[48px] leading-normal">
        <p>TURNO DE</p>
        <p>JUGADOR 1</p>
      </div>
      
      {/* Botón "¡Presente!" interactivo con hover rosa */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[262px] w-[169px] h-[38px] bg-[#5a7e80] rounded-[4px] font-semibold text-white text-[16px] hover:bg-[#ff3fa7] hover:scale-105 transition-all"
      >
        ¡Presente!
      </button>
      
      {/* Texto "[Puedes interactuar con el botón]" */}
      <div className="absolute left-[160px] top-[820px] -translate-y-1/2 font-light text-white text-[24px]">
        <p>[Puedes interactuar con el botón]</p>
      </div>
      
      {/* Barra decorativa inferior (gris) */}
      <div className="absolute left-[160px] top-[874px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[914px] -translate-y-1/2 font-medium text-white text-[32px] leading-normal">
        <p>¡Di presente! Usa este botón para empezar la ronda y, tras pulsarlo,</p>
        <p>te pediré que voltees tu primera carta.</p>
      </div>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 20
export function PantallaExplicacionJuego20({ onNext }: { onNext: () => void }) {
  const [mostrarCarta, setMostrarCarta] = React.useState(false);
  
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-20.png" 
        alt="Explicación del juego - Voltea una carta"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa superior (verde) */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[93px] bg-[#5a7e80]" />
      
      {/* Texto "VOLTEA UNA CARTA" */}
      <div className="absolute left-[218px] top-[176px] -translate-y-1/2 font-black text-[#5a7e80] text-[48px] leading-normal">
        <p>VOLTEA UNA</p>
        <p>CARTA</p>
      </div>
      
      {/* Texto "¿Qué alumno te tocó? Selecciónalo." */}
      <div className="absolute left-[302.5px] top-[259px] -translate-x-1/2 -translate-y-1/2 font-semibold text-[#5a7e80] text-[16px] text-center">
        <p>¿Qué alumno te tocó? Selecciónalo.</p>
      </div>
      
      {/* Botón de carta con animación */}
      <button
        onClick={() => setMostrarCarta(true)}
        className="absolute left-[160px] top-[290px] text-[48px] animate-bounce hover:scale-110 transition-transform cursor-pointer"
      >
        🃏
      </button>
      
      {/* Modal de carta */}
      {mostrarCarta && (
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setMostrarCarta(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🃏</div>
              <h3 className="text-2xl font-black text-[#5a7e80] mb-4">Carta Volteada</h3>
              <p className="text-lg text-gray-700 mb-6">
                Esta es una carta de ejemplo del juego TEACH-IT. En el juego real, aquí aparecería la problemática del estudiante seleccionado.
              </p>
              <button
                onClick={() => setMostrarCarta(false)}
                className="bg-[#5a7e80] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#ff3fa7] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Barra decorativa inferior (gris) */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[32px] leading-normal">
        <p>¿Qué te salió? Léela en voz alta a los profesores y</p>
        <p>colócala donde todos la puedan ver.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// EXPLICACIÓN DEL JUEGO - 22
export function PantallaExplicacionJuego22({ onNext, onSelectStudent }: { onNext: () => void; onSelectStudent?: (studentId: string) => void }) {
  const [hoveredStudent, setHoveredStudent] = React.useState<string | null>(null);
  
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/EXPLICACION-22.png" 
        alt="Explicación del juego - Selecciona alumno"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa superior (verde) */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[93px] bg-[#5a7e80]" />
      
      {/* Texto "VOLTEA UNA CARTA" */}
      <div className="absolute left-[218px] top-[176px] -translate-y-1/2 font-black text-[#5a7e80] text-[48px] leading-normal">
        <p>VOLTEA UNA</p>
        <p>CARTA</p>
      </div>
      
      {/* Texto "¿Qué alumno te tocó? Selecciónalo." en rosa */}
      <div className="absolute left-[302.5px] top-[261px] -translate-x-1/2 -translate-y-1/2 font-semibold text-[#e1007a] text-[16px] text-center">
        <p>¿Qué alumno te tocó? Selecciónalo.</p>
      </div>
      
      {/* Alumno 02 - Área de hover alrededor de la silueta */}
      <div 
        className="absolute left-[409px] top-[328px] w-[180px] h-[188px] cursor-pointer group"
        onMouseEnter={() => setHoveredStudent('02')}
        onMouseLeave={() => setHoveredStudent(null)}
        onClick={() => onSelectStudent?.('02')}
      >
        {/* Borde rosa al hacer hover */}
        {hoveredStudent === '02' && (
          <div className="absolute inset-0 border-4 border-[#ff3fa7] rounded-lg animate-pulse" />
        )}
        
        {/* Círculo con número */}
        <div 
          className={`absolute left-[102px] top-[70px] w-[41px] h-[41px] rounded-full flex items-center justify-center transition-colors ${
            hoveredStudent === '02' ? 'bg-[#ff3fa7]' : 'bg-black'
          }`}
        >
          <span className="font-black text-white text-[16px]">02</span>
        </div>
        
        {/* Tooltip "EL GENIO" */}
        {hoveredStudent === '02' && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#ff3fa7] text-white px-3 py-1 rounded font-bold text-sm whitespace-nowrap z-10">
            EL GENIO
          </div>
        )}
      </div>
      
      {/* Alumno 05 - Área de hover alrededor de la silueta */}
      <div 
        className="absolute left-[983px] top-[65px] w-[151px] h-[195px] cursor-pointer group"
        onMouseEnter={() => setHoveredStudent('05')}
        onMouseLeave={() => setHoveredStudent(null)}
        onClick={() => onSelectStudent?.('05')}
      >
        {/* Borde rosa al hacer hover */}
        {hoveredStudent === '05' && (
          <div className="absolute inset-0 border-4 border-[#ff3fa7] rounded-lg animate-pulse" />
        )}
        
        {/* Círculo con número */}
        <div 
          className={`absolute left-[125px] top-[88px] w-[42px] h-[42px] rounded-full flex items-center justify-center transition-colors ${
            hoveredStudent === '05' ? 'bg-[#ff3fa7]' : 'bg-black'
          }`}
        >
          <span className="font-black text-white text-[16px]">05</span>
        </div>
        
        {/* Tooltip "EL PROBLEMÁTICO" */}
        {hoveredStudent === '05' && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#ff3fa7] text-white px-3 py-1 rounded font-bold text-sm whitespace-nowrap z-10">
            EL PROBLEMÁTICO
          </div>
        )}
      </div>
      
      {/* Alumno 10 - Área de hover alrededor de la silueta */}
      <div 
        className="absolute left-[1212px] top-[220px] w-[151px] h-[160px] cursor-pointer group"
        onMouseEnter={() => setHoveredStudent('10')}
        onMouseLeave={() => setHoveredStudent(null)}
        onClick={() => onSelectStudent?.('10')}
      >
        {/* Borde rosa al hacer hover */}
        {hoveredStudent === '10' && (
          <div className="absolute inset-0 border-4 border-[#ff3fa7] rounded-lg animate-pulse" />
        )}
        
        {/* Círculo con número */}
        <div 
          className={`absolute left-[129px] top-[43px] w-[41px] h-[41px] rounded-full flex items-center justify-center transition-colors ${
            hoveredStudent === '10' ? 'bg-[#ff3fa7]' : 'bg-black'
          }`}
        >
          <span className="font-black text-white text-[16px]">10</span>
        </div>
        
        {/* Tooltip "EL APÁTICO" */}
        {hoveredStudent === '10' && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#ff3fa7] text-white px-3 py-1 rounded font-bold text-sm whitespace-nowrap z-10">
            EL APÁTICO
          </div>
        )}
      </div>
      
      {/* Estrellas y etiquetas de dificultad (lado derecho) */}
      {/* Estrella FÁCIL - Verde (opacidad cambia con hover en alumno 02) */}
      <div className="absolute left-[1696px] top-[131px] w-[61px] h-[61px] transition-opacity">
        <svg 
          viewBox="0 0 24 24" 
          fill={hoveredStudent === '02' ? "rgba(34, 197, 94, 1)" : "rgba(34, 197, 94, 0.3)"} 
          className="w-full h-full transition-all"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div 
        className="absolute left-[1662.5px] top-[162px] -translate-x-1/2 -translate-y-1/2 font-semibold text-[16px] text-center transition-opacity"
        style={{ 
          color: hoveredStudent === '02' ? "rgba(34, 197, 94, 1)" : "rgba(90,126,128,0.2)" 
        }}
      >
        <p>FÁCIL</p>
      </div>
      
      {/* Estrella INTERMEDIO - Amarilla (opacidad cambia con hover en alumno 10) */}
      <div className="absolute left-[1696px] top-[192px] w-[61px] h-[61px] transition-opacity">
        <svg 
          viewBox="0 0 24 24" 
          fill={hoveredStudent === '10' ? "rgba(234, 179, 8, 1)" : "rgba(234, 179, 8, 0.3)"} 
          className="w-full h-full transition-all"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div 
        className="absolute left-[1641px] top-[223px] -translate-x-1/2 -translate-y-1/2 font-semibold text-[16px] text-center transition-opacity"
        style={{ 
          color: hoveredStudent === '10' ? "rgba(234, 179, 8, 1)" : "rgba(90,126,128,0.2)" 
        }}
      >
        <p>INTERMEDIO</p>
      </div>
      
      {/* Estrella DIFÍCIL - Roja (opacidad cambia con hover en alumno 05) */}
      <div className="absolute left-[1696px] top-[253px] w-[61px] h-[61px] transition-opacity">
        <svg 
          viewBox="0 0 24 24" 
          fill={hoveredStudent === '05' ? "rgba(239, 68, 68, 1)" : "rgba(239, 68, 68, 0.3)"} 
          className="w-full h-full transition-all"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div 
        className="absolute left-[1662px] top-[284px] -translate-x-1/2 -translate-y-1/2 font-semibold text-[16px] text-center transition-opacity"
        style={{ 
          color: hoveredStudent === '05' ? "rgba(239, 68, 68, 1)" : "rgba(90,126,128,0.2)" 
        }}
      >
        <p>DIFÍCIL</p>
      </div>
      
      {/* Texto "[Puedes interactuar con el alumno 02, 05 Y 10]" */}
      <div className="absolute left-[160px] top-[820px] -translate-y-1/2 font-light text-white text-[24px]">
        <p>[Puedes interactuar con el alumno 02, 05 Y 10]</p>
      </div>
      
      {/* Barra decorativa inferior (gris) */}
      <div className="absolute left-[160px] top-[874px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[914px] -translate-y-1/2 font-medium text-white text-[32px] leading-normal">
        <p>Ahora, sobre la carta hay un número en color negro. Este corresponde</p>
        <p>a un alumno en tu salón. Haz clic sobre él. A la derecha verás su dificultad.</p>
      </div>
    </div>
  );
}

// ANIMATION 17: Transición con barras decorativas
export function AnimationP17() {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ANIMATION-17.png" 
        alt="Transición"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={438} />
      
      {/* Barras decorativas izquierda */}
      <div className="absolute left-[369px] top-[447px] w-[25px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
    </div>
  );
}

// ANIMATION 18: Transición
export function AnimationP18() {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ANIMATION-18.png" 
        alt="Transición"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={438} />
      
      {/* Barras decorativas izquierda - solo 2 */}
      <div className="absolute left-[351px] top-[447px] w-[9px] h-[200px] bg-[#5a7e80]" />
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
    </div>
  );
}

// ANIMATION 19: Transición
export function AnimationP19() {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ANIMATION-19.png" 
        alt="Transición"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={438} />
      
      {/* Barras decorativas izquierda - solo 1 */}
      <div className="absolute left-[339px] top-[447px] w-[3px] h-[200px] bg-[#5a7e80]" />
    </div>
  );
}

// ANIMATION 20: Transición sin barras
export function AnimationP20() {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ANIMATION-20.png" 
        alt="Transición"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <ProgressBar progress={438} />
    </div>
  );
}

// Continuar con más pantallas ANIMATION hasta ANIMATION 36...
// (Siguiendo el mismo patrón de transiciones)

// ANIMATION 36: Última transición antes del final
export function AnimationP36() {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ANIMATION-36.png" 
        alt="Transición final"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

// Pantalla Final: Créditos y agradecimiento
export function PantallaFinal() {
  const router = useRouter();
  
  return (
    <div className="relative w-full h-full bg-[rgba(0,0,0,0.88)]">
      {/* Texto principal */}
      <div className="absolute left-1/2 top-[482px] -translate-x-1/2 -translate-y-1/2 text-center font-black text-white text-[24px] leading-normal w-[1529px]">
        <p>Este es el final de nuestro prototipo. Gracias por jugar. Centramos todo nuestro esfuerzo en que</p>
        <p>
          el funcionamiento de <span className="text-[#90b4ff]">TEACH-IT</span> fuera claro y fiel a lo que tenemos en mente. Esperamos pueda hacer alguna diferencia
        </p>
        <p>para algún profesor en apuros allá afuera y que resulte algo agradable y novedoso.</p>
        <p>&nbsp;</p>
        <p>¡Gracias!</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p className="font-['Leckerli_One'] text-[#90b4ff]">Por Aline, Pepe y Jorge.</p>
      </div>
      
      {/* Botón regresar */}
      <button
        onClick={() => router.push('/')}
        className="absolute left-[782px] top-[700px] font-black text-white text-[32px] hover:scale-110 transition-transform"
      >
        REGRESAR A INICIO
      </button>
    </div>
  );
}

// ALUMNO 37 - EL PROBLEMÁTICO
export function PantallaAlumno37({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#5a7e80]">
      {/* Título "EL PROBLEMÁTICO" */}
      <div className="absolute left-1/2 top-[491px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[48px]">
        EL PROBLEMÁTICO
      </div>
      
      {/* Texto "¿Comenzar?" */}
      <div className="absolute left-1/2 top-[560px] -translate-x-1/2 -translate-y-1/2 font-light text-white text-[32px] text-center">
        ¿Comenzar?
      </div>
      
      {/* Línea divisoria */}
      <div className="absolute left-1/2 top-[620px] -translate-x-1/2 w-[484px] h-[2px] bg-white" />
      
      {/* Botón SÍ */}
      <button
        onClick={onYes}
        className="absolute left-[664.5px] top-[620px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        SÍ
      </button>
      
      {/* Botón NO */}
      <button
        onClick={onNo}
        className="absolute left-[1255.5px] top-[620px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        NO
      </button>
    </div>
  );
}

// ALUMNO 39 - Perfil completo de EL PROBLEMÁTICO (Omar)
export function PantallaAlumno39({ onNext }: { onNext: () => void }) {
  const [mostrarTarjeta, setMostrarTarjeta] = React.useState(false);

  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-39.png" 
        alt="Alumno 39 - El Problemático (Omar)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Botón de joker con animación de rebote */}
      <button
        onClick={() => setMostrarTarjeta(!mostrarTarjeta)}
        className="absolute right-[250px] top-[100px] text-[80px] animate-bounce hover:scale-110 transition-transform cursor-pointer"
      >
        🃏
      </button>
      
      {/* Tarjeta de información */}
      {mostrarTarjeta && (
        <div className="absolute right-[50px] top-[200px] w-[500px] bg-white rounded-lg shadow-2xl p-6 border-4 border-[#5a7e80] z-50">
          {/* Estrella roja en esquina superior izquierda */}
          <div className="absolute top-1 left-3 text-red-500 text-[32px]">
            ★
          </div>
          
          {/* Número 05 en esquina superior derecha */}
          <div className="absolute top-3 right-12 text-[#5a7e80] font-bold text-[24px]">
            05
          </div>
          
          <button
            onClick={() => setMostrarTarjeta(false)}
            className="absolute top-2 right-2 text-[#5a7e80] hover:text-[#ff3fa7] font-bold text-2xl"
          >
            ✕
          </button>
          <div className="text-[#5a7e80] text-[18px] leading-relaxed mt-4">
            <p className="font-bold text-[24px] mb-4">🃏 Problemática del Problemático</p>
            <p>El alumno problemático se encuentra nuevamente en el centro de atención. Durante una sesión de debate en clase, el estudiante problemático interrumpe constantemente las discusiones con comentarios despectivos y provocativos, lo que dificulta el desarrollo de un diálogo sano. Su comportamiento ha llevado a que varios compañeros prefieran no participar, afectando así el ambiente del aula.</p>
          </div>
        </div>
      )}
      
      {/* Barra decorativa blanca superior */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título "EL PROBLEMÁTICO" */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL PROBLEMÁTICO
      </div>
      
      {/* Subtítulo "21 AÑOS - 6TO SEMESTRE" */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        21 AÑOS - 6TO SEMESTRE
      </div>
      
      {/* Texto superior izquierdo: "Siempre está metido en problemas" */}
      <div className="absolute left-[237px] top-[291px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Siempre está metido</p>
        <p>en problemas.</p>
      </div>
      
      {/* Texto medio izquierdo: "Todos lo tienen bien ubicado..." */}
      <div className="absolute left-[160px] top-[560px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal w-[250px]">
        <p>Todos lo tienen bien ubicado y</p>
        <p>tratan de no sostener una</p>
        <p>conversación con él.</p>
      </div>
      
      {/* Texto superior derecho: "Posee una mala reputación..." */}
      <div className="absolute left-[1022px] top-[409px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal w-[400px]">
        <p>Posee una mala reputación entre</p>
        <p>los alumnos. Todos saben las cosas que</p>
        <p>ha hecho debido a que la voz se ha difundido</p>
        <p>entre todos los alumnos de la universidad.</p>
      </div>
      
      {/* Texto medio derecho: "Mentiroso, manipulador..." */}
      <div className="absolute left-[1020px] top-[547px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal w-[450px]">
        <p>Mentiroso, manipulador y buena persona</p>
        <p>con quienes le conviene.</p>
        <p>&nbsp;</p>
        <p>Posee un grupo muy selecto de amistades.</p>
        <p>&nbsp;</p>
        <p>No tiene buena relación con muchos profesores,</p>
        <p>ya que en clase también les causa problemas.</p>
      </div>
      
      {/* Texto extremo derecho: "Susurra cosas..." */}
      <div className="absolute left-[1540px] top-[471px] -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Susurra cosas para provocar</p>
        <p>a sus compañeros.</p>
      </div>
      
      {/* Línea conectora 1 - desde texto medio izquierdo hacia el personaje */}
      <div className="absolute left-[184.5px] top-[605px] w-[84px] h-[61px]">
        <img 
          src="/assets/screens/linea-alumno39-1.svg" 
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Línea conectora 2 - desde texto superior izquierdo hacia el personaje */}
      <div className="absolute left-[335.5px] top-[284.5px] w-[60.5px] h-[139.5px]">
        <img 
          src="/assets/screens/linea-alumno39-2.svg" 
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Línea conectora 3 - desde texto superior derecho hacia el personaje */}
      <div className="absolute left-[938px] top-[416px] w-[64px] h-[123.5px]">
        <img 
          src="/assets/screens/linea-alumno39-3.svg" 
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Barra decorativa gris inferior */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto explicativo inferior */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1000px]">
        <p>Muy bien, veamos qué tenemos aquí. Como puedes observar, él es Omar; El Problemático de la clase. Alrededor de él podrás apreciar toda su personalidad. Todos obsérvenlo y conózcanlo.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 42 - Resolución de problemática de EL PROBLEMÁTICO
export function PantallaAlumno42({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-42.png" 
        alt="Alumno 42 - Resolución El Problemático"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa blanca superior */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título "EL PROBLEMÁTICO" */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL PROBLEMÁTICO
      </div>
      
      {/* Subtítulo "21 AÑOS - 6TO SEMESTRE" */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        21 AÑOS - 6TO SEMESTRE
      </div>
      
      {/* Cuadro blanco superior derecho con instrucciones */}
      <div className="absolute left-[1439px] top-[131px] w-[321px] h-[100px] bg-white" />
      <div className="absolute left-[1472px] top-[180.5px] -translate-y-1/2 font-normal text-[#5a7e80] text-[15px] leading-normal">
        <p>Resuelve la problemática.</p>
        <p>Comparte tus pensamientos y</p>
        <p>reflexiones con los otros profesores.</p>
      </div>
      
      {/* Texto superior izquierdo: "Siempre está metido en problemas" */}
      <div className="absolute left-[237px] top-[291px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Siempre está metido</p>
        <p>en problemas.</p>
      </div>
      
      {/* Texto medio izquierdo: "Todos lo tienen bien ubicado..." */}
      <div className="absolute left-[160px] top-[560.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Todos lo tienen bien ubicado y</p>
        <p>tratan de no sostener una</p>
        <p>conversación con él.</p>
      </div>
      
      {/* Texto superior derecho: "Posee una mala reputación..." */}
      <div className="absolute left-[1022px] top-[409px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Posee una mala reputación entre</p>
        <p>los alumnos. Todos saben las cosas que</p>
        <p>ha hecho debido a que la voz se ha difundido</p>
        <p>entre todos los alumnos de la universidad.</p>
      </div>
      
      {/* Texto medio derecho: "Mentiroso, manipulador..." */}
      <div className="absolute left-[1020px] top-[547.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Mentiroso, manipulador y buena persona</p>
        <p>con quienes le conviene.</p>
        <p>&nbsp;</p>
        <p>Posee un grupo muy selecto de amistades.</p>
        <p>&nbsp;</p>
        <p>No tiene buena relación con muchos profesores,</p>
        <p>ya que en clase también les causa problemas.</p>
      </div>
      
      {/* Texto extremo derecho: "Susurra cosas..." */}
      <div className="absolute left-[1540px] top-[471px] -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Susurra cosas para provocar</p>
        <p>a sus compañeros.</p>
      </div>
      
      {/* Barra decorativa gris inferior */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto explicativo inferior */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[24px] leading-[1.5] w-[1500px]">
        Ahora es que el profesor en turno puede comenzar a resolver la problemática de la carta. Siempre teniendo en cuenta al alumno y su personalidad. Puedes pedir opiniones, experiencias y demás a los otros profesores. Compartan y platiquen.
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 44 - Finalización de resolución de EL PROBLEMÁTICO
export function PantallaAlumno44({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-44.png" 
        alt="Alumno 44 - Finalización El Problemático"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa blanca superior */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título "EL PROBLEMÁTICO" */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL PROBLEMÁTICO
      </div>
      
      {/* Subtítulo "21 AÑOS - 6TO SEMESTRE" */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        21 AÑOS - 6TO SEMESTRE
      </div>
      
      {/* Cuadro blanco superior derecho con instrucciones */}
      <div className="absolute left-[1439px] top-[131px] w-[321px] h-[100px] bg-white" />
      <div className="absolute left-[1472px] top-[180.5px] -translate-y-1/2 font-normal text-[#5a7e80] text-[15px] leading-normal">
        <p>Resuelve la problemática.</p>
        <p>Comparte tus pensamientos y</p>
        <p>reflexiones con los otros profesores.</p>
      </div>
      
      {/* Botón "He terminado" con animación llamativa */}
      <button
        onClick={onFinish}
        className="absolute left-[1591px] top-[254px] w-[169px] h-[38px] bg-[#d9d9d9] rounded-[4px] hover:bg-[#5a7e80] transition-all animate-pulse hover:animate-none shadow-lg hover:shadow-2xl hover:scale-110"
      >
        <div className="font-semibold text-[#5a7e80] text-[16px] text-center hover:text-[#ff3fa7]">
          He terminado
        </div>
      </button>
      
      {/* Texto superior izquierdo: "Siempre está metido en problemas" */}
      <div className="absolute left-[237px] top-[291px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Siempre está metido</p>
        <p>en problemas.</p>
      </div>
      
      {/* Texto medio izquierdo: "Todos lo tienen bien ubicado..." */}
      <div className="absolute left-[160px] top-[560.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Todos lo tienen bien ubicado y</p>
        <p>tratan de no sostener una</p>
        <p>conversación con él.</p>
      </div>
      
      {/* Texto superior derecho: "Posee una mala reputación..." */}
      <div className="absolute left-[1022px] top-[409px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Posee una mala reputación entre</p>
        <p>los alumnos. Todos saben las cosas que</p>
        <p>ha hecho debido a que la voz se ha difundido</p>
        <p>entre todos los alumnos de la universidad.</p>
      </div>
      
      {/* Texto medio derecho: "Mentiroso, manipulador..." */}
      <div className="absolute left-[1020px] top-[547.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Mentiroso, manipulador y buena persona</p>
        <p>con quienes le conviene.</p>
        <p>&nbsp;</p>
        <p>Posee un grupo muy selecto de amistades.</p>
        <p>&nbsp;</p>
        <p>No tiene buena relación con muchos profesores,</p>
        <p>ya que en clase también les causa problemas.</p>
      </div>
      
      {/* Texto extremo derecho: "Susurra cosas..." */}
      <div className="absolute left-[1540px] top-[471px] -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Susurra cosas para provocar</p>
        <p>a sus compañeros.</p>
      </div>
      
      {/* Texto indicador superior */}
      <div className="absolute left-[160px] top-[820px] -translate-y-1/2 font-light text-white text-[24px]">
        [Puedes pulsar el botón de He terminado]
      </div>
      
      {/* Barra decorativa gris inferior */}
      <div className="absolute left-[160px] top-[894px] w-[22px] h-[60px] bg-[#d9d9d9]" />
      
      {/* Texto explicativo inferior */}
      <div className="absolute left-[218px] top-[924px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1500px]">
        <p>Cuando hayan acabado, comparte la conclusión a la que has llegado, pulsa He terminado y</p>
        <p>presiona Aceptar si estás satisfecho con tu respuesta final, si no, puedes cancelar.</p>
      </div>
    </div>
  );
}

// ALUMNO 52 - ¿Acabaste? (Confirmación después de El Problemático)
export function PantallaAlumno52({ onContinue, onCancel }: { onContinue: () => void; onCancel: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-52.png" 
        alt="Alumno 52 - ¿Acabaste?"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-[rgba(90,126,128,0.8)]" />
      
      {/* Título "¿ACABASTE?" */}
      <div className="absolute left-[800px] top-[434px] -translate-y-1/2 font-black text-white text-[48px]">
        ¿ACABASTE?
      </div>
      
      {/* Texto explicativo */}
      <div className="absolute left-1/2 top-[548px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[32px] text-center w-[796px]">
        Puede que aún tengas cosas por compartir, aclarar o reflexionar.
      </div>
      
      {/* Línea divisoria */}
      <div className="absolute left-[847px] top-[656px] w-[259px] h-[2px] bg-white" />
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onContinue}
        className="absolute left-[615px] top-[656px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
      
      {/* Botón CANCELAR */}
      <button
        onClick={onCancel}
        className="absolute left-[1124px] top-[656px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CANCELAR
      </button>
    </div>
  );
}

// ALUMNO 36 - EL APÁTICO
export function PantallaAlumno36({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#5a7e80]">
      {/* Título "EL APÁTICO" */}
      <div className="absolute left-1/2 top-[491px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[48px]">
        EL APÁTICO
      </div>
      
      {/* Texto "¿Comenzar?" */}
      <div className="absolute left-1/2 top-[560px] -translate-x-1/2 -translate-y-1/2 font-light text-white text-[32px] text-center">
        ¿Comenzar?
      </div>
      
      {/* Línea divisoria */}
      <div className="absolute left-1/2 top-[620px] -translate-x-1/2 w-[484px] h-[2px] bg-white" />
      
      {/* Botón SÍ */}
      <button
        onClick={onYes}
        className="absolute left-[664.5px] top-[620px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        SÍ
      </button>
      
      {/* Botón NO */}
      <button
        onClick={onNo}
        className="absolute left-[1255.5px] top-[620px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        NO
      </button>
    </div>
  );
}

// ALUMNO 40 - PERFIL DE RAMSÉS (EL APÁTICO)
export function PantallaAlumno40({ onNext }: { onNext: () => void }) {
  const [mostrarTarjeta, setMostrarTarjeta] = React.useState(false);

  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-40.png" 
        alt="Perfil de Ramsés - El Apático"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Botón de joker con animación de rebote */}
      <button
        onClick={() => setMostrarTarjeta(!mostrarTarjeta)}
        className="absolute right-[250px] top-[100px] text-[80px] animate-bounce hover:scale-110 transition-transform cursor-pointer"
      >
        🃏
      </button>
      
      {/* Tarjeta de información */}
      {mostrarTarjeta && (
        <div className="absolute right-[50px] top-[200px] w-[500px] bg-white rounded-lg shadow-2xl p-6 border-4 border-[#5a7e80] z-50">
          {/* Estrella amarilla en esquina superior izquierda */}
          <div className="absolute top-1 left-3 text-yellow-500 text-[32px]">
            ★
          </div>
          
          {/* Número 10 en esquina superior derecha */}
          <div className="absolute top-3 right-12 text-[#5a7e80] font-bold text-[24px]">
            10
          </div>
          
          <button
            onClick={() => setMostrarTarjeta(false)}
            className="absolute top-2 right-2 text-[#5a7e80] hover:text-[#ff3fa7] font-bold text-2xl"
          >
            ✕
          </button>
          <div className="text-[#5a7e80] text-[18px] leading-relaxed mt-4">
            <p className="font-bold text-[24px] mb-4">🃏 Problemática del Apático</p>
            <p>El alumno apático habitualmente llega tarde a clase y una vez presente, se sumerge en su juego favorito en lugar de prestar atención a las lecciones. Esta falta de compromiso y distracción constante afecta no sólo su propio rendimiento académico, sino también la dinámica del aula al crear un ambiente de desinterés y desconexión. Además, su propensión a rendirse fácilmente cuando enfrenta desafíos, representa un obstáculo significativo para su desarrollo personal y académico.</p>
          </div>
        </div>
      )}
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Barra blanca superior */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título "EL APÁTICO" */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL APÁTICO
      </div>
      
      {/* Subtítulo */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        23 AÑOS - 9NO SEMESTRE
      </div>
      
      {/* Descripción izquierda superior */}
      <div className="absolute left-[160px] top-[277.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>El Apático siempre llega tarde a las</p>
        <p>clases, intenta pasar desapercibido</p>
        <p>abriendo su laptop y usando sus</p>
        <p>audífonos, ya que sabe que así</p>
        <p>nadie lo molesta.</p>
      </div>
      
      {/* Descripción izquierda inferior */}
      <div className="absolute left-[160px] top-[499.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>El alumno apático tiene</p>
        <p>poca o ninguna motivación</p>
        <p>para destacarse académicamente.</p>
      </div>
      
      {/* Cita del estudiante */}
      <div className="absolute left-[558px] top-[245px] -translate-y-1/2 font-medium text-[#5a7e80] text-[15px] leading-normal">
        <p>"¿Para qué molestarse en hacer esto? De todas</p>
        <p>formas no va a importar en el futuro."</p>
      </div>
      
      {/* Descripción derecha superior */}
      <div className="absolute left-[1201px] top-[315px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Busca cualquier manera de distraerse con</p>
        <p>algún videojuego ya sea en su computador o su celular.</p>
      </div>
      
      {/* Descripción derecha media */}
      <div className="absolute left-[1008px] top-[499.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Carece de metas profesionales claras y puede</p>
        <p>tener dificultades para visualizar un futuro más</p>
        <p>allá de la vida académica.</p>
      </div>
      
      {/* Descripción derecha inferior */}
      <div className="absolute left-[1008px] top-[592px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Falta general de motivación</p>
        <p>y entusiasmo, lo que puede</p>
        <p>afectar su bienestar</p>
        <p>emocional y mental.</p>
      </div>
      
      {/* Texto principal inferior */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal">
        <p>Muy bien, veamos qué tenemos aquí. Como puedes observar, él es Ramsés; El Apático de la clase.</p>
        <p>Alrededor de él podrás apreciar toda su personalidad. Todos obsérvenlo y conózcanlo.</p>
      </div>
      
      {/* Línea 1 - Conecta descripción izquierda superior */}
      <div className="absolute left-[342.5px] top-[333.5px] w-[23px] h-[73px]">
        <img 
          src="/assets/screens/ALUMNO-40-line1.svg" 
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Línea 2 - Conecta descripción izquierda inferior */}
      <div className="absolute left-[272.5px] top-[548px] w-[95.5px] h-[90.5px]">
        <img 
          src="/assets/screens/ALUMNO-40-line2.svg" 
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Línea 3 - Conecta descripción derecha media */}
      <div className="absolute left-[945.5px] top-[393.5px] w-[73.5px] h-[42px]">
        <img 
          src="/assets/screens/ALUMNO-40-line3.svg" 
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Línea 4 - Conecta descripción derecha superior */}
      <div className="absolute left-[1380.5px] top-[365.5px] w-[127px] h-[50px]">
        <img 
          src="/assets/screens/ALUMNO-40-line4.svg" 
          alt=""
          className="w-full h-full"
        />
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 38 - EL GENIO
export function PantallaAlumno38({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#5a7e80]">
      {/* Título "EL GENIO" */}
      <div className="absolute left-1/2 top-[491px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[48px]">
        EL GENIO
      </div>
      
      {/* Texto "¿Comenzar?" */}
      <div className="absolute left-1/2 top-[560px] -translate-x-1/2 -translate-y-1/2 font-light text-white text-[32px] text-center">
        ¿Comenzar?
      </div>
      
      {/* Línea divisoria */}
      <div className="absolute left-1/2 top-[620px] -translate-x-1/2 w-[484px] h-[2px] bg-white" />
      
      {/* Botón SÍ */}
      <button
        onClick={onYes}
        className="absolute left-[664.5px] top-[620px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        SÍ
      </button>
      
      {/* Botón NO */}
      <button
        onClick={onNo}
        className="absolute left-[1255.5px] top-[620px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        NO
      </button>
    </div>
  );
}

// ALUMNO 4 - Perfil completo de EL GENIO
export function PantallaAlumno4({ onNext }: { onNext: () => void }) {
  const [mostrarTarjeta, setMostrarTarjeta] = React.useState(false);

  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-4.png" 
        alt="Alumno 4 - El Genio (Israel)"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Botón de joker con animación de rebote */}
      <button
        onClick={() => setMostrarTarjeta(!mostrarTarjeta)}
        className="absolute right-[250px] top-[100px] text-[80px] animate-bounce hover:scale-110 transition-transform cursor-pointer"
      >
        🃏
      </button>
      
      {/* Tarjeta de información */}
      {mostrarTarjeta && (
        <div className="absolute right-[50px] top-[200px] w-[500px] bg-white rounded-lg shadow-2xl p-6 border-4 border-[#5a7e80] z-50">
          {/* Estrella verde en esquina superior izquierda */}
          <div className="absolute top-1 left-3 text-green-500 text-[32px]">
            ★
          </div>
          
          {/* Número 02 en esquina superior derecha */}
          <div className="absolute top-3 right-12 text-[#5a7e80] font-bold text-[24px]">
            02
          </div>
          
          <button
            onClick={() => setMostrarTarjeta(false)}
            className="absolute top-2 right-2 text-[#5a7e80] hover:text-[#ff3fa7] font-bold text-2xl"
          >
            ✕
          </button>
          <div className="text-[#5a7e80] text-[18px] leading-relaxed mt-4">
            <p className="font-bold text-[24px] mb-4">🃏 Problemática del Genio</p>
            <p>El alumno genio dispone de mucho tiempo en las clases que toma ya que tiende a entender y terminar antes que sus compañeros. Debido a su conocimiento previo sobre ciertos temas, los profesores invierten tiempo en darle una retroalimentación más personalizada. Gracias a su naturaleza de genio, este hace dudar a los maestros sobre sus temarios y capacidades para atender a sus necesidades.</p>
          </div>
        </div>
      )}
      
      {/* Barra decorativa blanca superior */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título "EL GENIO" */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL GENIO
      </div>
      
      {/* Subtítulo "21 AÑOS - 6TO SEMESTRE" */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        21 AÑOS - 6TO SEMESTRE
      </div>
      
      {/* Texto: "Alumno de excelentes calificaciones." */}
      <div className="absolute left-[407.5px] top-[273px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Alumno de excelentes</p>
        <p>calificaciones.</p>
      </div>
      
      {/* Texto: "Mano derecha del profesor" */}
      <div className="absolute left-[750.5px] top-[273px] -translate-x-1/2 -translate-y-1/2 font-medium text-[#5a7e80] text-[15px] text-center leading-normal">
        <p>Mano derecha del</p>
        <p>profesor</p>
      </div>
      
      {/* Texto: "Los alumnos siempre lo siguen..." */}
      <div className="absolute left-[160px] top-[555px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Los alumnos siempre</p>
        <p>lo siguen y piden su</p>
        <p>ayuda dentro y fuera</p>
        <p>de clase.</p>
      </div>
      
      {/* Texto: "Sumamente organizado..." */}
      <div className="absolute left-[1050px] top-[339.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Sumamente organizado con</p>
        <p>sus tiempos y sus entregas.</p>
        <p>Prioriza bastante su tiempo libre</p>
        <p>así que termina lo más rápido</p>
        <p>posible sus tareas.</p>
        <p>&nbsp;</p>
        <p>Alumno modelo que posee</p>
        <p>diversos talentos y es muy</p>
        <p>bueno en todo.</p>
      </div>
      
      {/* Texto: "Lee mucho y sabe de todo." */}
      <div className="absolute left-[1050px] top-[539.5px] -translate-y-1/2 font-medium text-white text-[15px]">
        Lee mucho y sabe de todo.
      </div>
      
      {/* Texto: "Muy participativo." */}
      <div className="absolute left-[1591px] top-[484.5px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center">
        Muy participativo.
      </div>
      
      {/* Línea conectora 11 - Entre "Mano derecha" y personaje */}
      <div className="absolute left-[591px] top-[264px] w-[83px] h-[33px]">
        <img src="/assets/screens/line-vector-11.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea conectora 5 - Entre "Sumamente organizado" y personaje */}
      <div className="absolute left-[934.5px] top-[263.5px] w-[89.5px] h-[35px]">
        <img src="/assets/screens/line-vector-5.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea conectora 6 - Entre "Alumno modelo" y personaje */}
      <div className="absolute left-[935px] top-[457px] w-[201px] h-[132.5px]">
        <img src="/assets/screens/line-vector-6.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea conectora 7 - Entre "Lee mucho" y personaje */}
      <div className="absolute left-[1129px] top-[574px] w-[45px] h-[77px]">
        <img src="/assets/screens/line-vector-7.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea conectora 8 - Entre "Alumno de excelentes" y personaje */}
      <div className="absolute left-[366.5px] top-[316.5px] w-[32.5px] h-[59.5px]">
        <img src="/assets/screens/line-vector-8.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea conectora 9 - Entre "Los alumnos siempre" y personaje */}
      <div className="absolute left-[196.5px] top-[616px] w-[93px] h-[26px]">
        <img src="/assets/screens/line-vector-9.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea conectora 10 - Entre "Muy participativo" y personaje (invertida verticalmente) */}
      <div className="absolute left-[1525px] top-[388px] w-[22px] h-[65px] scale-y-[-1]">
        <img src="/assets/screens/line-vector-10.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Barra decorativa gris inferior */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto principal inferior */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1000px]">
        <p>Muy bien, veamos qué tenemos aquí. Como puedes observar, él es Israel; El Genio de la clase.</p>
        <p>Alrededor podrás apreciar toda su personalidad. Todos obsérvenlo y conózcanlo.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 7 - Resolución de problemática
export function PantallaAlumno7({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-7.png" 
        alt="Alumno 7 - Resolución de problemática"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa blanca superior */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título "EL GENIO" */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL GENIO
      </div>
      
      {/* Subtítulo "21 AÑOS - 6TO SEMESTRE" */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        21 AÑOS - 6TO SEMESTRE
      </div>
      
      {/* Cuadro blanco superior derecho con instrucciones */}
      <div className="absolute left-[1439px] top-[131px] w-[321px] h-[100px] bg-white" />
      <div className="absolute left-[1472px] top-[180.5px] -translate-y-1/2 font-normal text-[#5a7e80] text-[15px] leading-normal">
        <p>Resuelve la problemática.</p>
        <p>Comparte tus pensamientos y</p>
        <p>reflexiones con los otros profesores.</p>
      </div>
      
      {/* Características del alumno */}
      <div className="absolute left-[407.5px] top-[273px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Alumno de excelentes</p>
        <p>calificaciones.</p>
      </div>
      
      <div className="absolute left-[750.5px] top-[273px] -translate-x-1/2 -translate-y-1/2 font-medium text-[#5a7e80] text-[15px] text-center leading-normal">
        <p>Mano derecha del</p>
        <p>profesor</p>
      </div>
      
      <div className="absolute left-[160px] top-[555px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Los alumnos siempre</p>
        <p>lo siguen y piden su</p>
        <p>ayuda dentro y fuera</p>
        <p>de clase.</p>
      </div>
      
      <div className="absolute left-[1050px] top-[339.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Sumamente organizado con</p>
        <p>sus tiempos y sus entregas.</p>
        <p>Prioriza bastante su tiempo libre</p>
        <p>así que termina lo más rápido</p>
        <p>posible sus tareas.</p>
        <p>&nbsp;</p>
        <p>Alumno modelo que posee</p>
        <p>diversos talentos y es muy</p>
        <p>bueno en todo.</p>
      </div>
      
      <div className="absolute left-[1050px] top-[539.5px] -translate-y-1/2 font-medium text-white text-[15px]">
        Lee mucho y sabe de todo.
      </div>
      
      <div className="absolute left-[1591px] top-[484.5px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center">
        Muy participativo.
      </div>
      
      {/* Líneas conectoras */}
      <div className="absolute left-[591px] top-[264px] w-[83px] h-[33px]">
        <img src="/assets/screens/line-vector-11.svg" alt="" className="w-full h-full" />
      </div>
      
      <div className="absolute left-[934.5px] top-[263.5px] w-[89.5px] h-[35px]">
        <img src="/assets/screens/line-vector-5.svg" alt="" className="w-full h-full" />
      </div>
      
      <div className="absolute left-[935px] top-[437px] w-[201px] h-[132.5px]">
        <img src="/assets/screens/line-vector-6.svg" alt="" className="w-full h-full" />
      </div>
      
      <div className="absolute left-[1129px] top-[574px] w-[45px] h-[77px]">
        <img src="/assets/screens/line-vector-7.svg" alt="" className="w-full h-full" />
      </div>
      
      <div className="absolute left-[366.5px] top-[316.5px] w-[32.5px] h-[59.5px]">
        <img src="/assets/screens/line-vector-8.svg" alt="" className="w-full h-full" />
      </div>
      
      <div className="absolute left-[196.5px] top-[616px] w-[93px] h-[26px]">
        <img src="/assets/screens/line-vector-9.svg" alt="" className="w-full h-full" />
      </div>
      
      <div className="absolute left-[1525px] top-[388px] w-[22px] h-[65px] scale-y-[-1]">
        <img src="/assets/screens/line-vector-10.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea horizontal bajo el título */}
      <div className="absolute left-[494px] top-[148px] w-[925px] h-[2px]">
        <img src="/assets/screens/line-vector-12.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Barra decorativa gris inferior */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto principal inferior */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1200px]">
        <p>Ahora es que el profesor en turno puede comenzar a resolver la problemática de la carta. Siempre teniendo en cuenta al alumno y su personalidad. Puedes pedir opiniones, experiencias y demás a los otros profesores. Compartan y platiquen.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 9 - Resolución con botón "He terminado"
export function PantallaAlumno9({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-9.png" 
        alt="Alumno 9 - He terminado"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa blanca superior */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título "EL GENIO" */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL GENIO
      </div>
      
      {/* Subtítulo "21 AÑOS - 6TO SEMESTRE" */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        21 AÑOS - 6TO SEMESTRE
      </div>
      
      {/* Cuadro blanco superior derecho con instrucciones */}
      <div className="absolute left-[1439px] top-[131px] w-[321px] h-[100px] bg-white" />
      <div className="absolute left-[1472px] top-[180.5px] -translate-y-1/2 font-normal text-[#5a7e80] text-[15px] leading-normal">
        <p>Resuelve la problemática.</p>
        <p>Comparte tus pensamientos y</p>
        <p>reflexiones con los otros profesores.</p>
      </div>
      
      {/* Botón "He terminado" con animación llamativa */}
      <button
        onClick={onFinish}
        className="absolute left-[1591px] top-[254px] w-[169px] h-[38px] bg-[#d9d9d9] rounded-[4px] hover:bg-[#5a7e80] transition-all animate-pulse hover:animate-none shadow-lg hover:shadow-2xl hover:scale-110"
      >
        <div className="font-semibold text-[#5a7e80] text-[16px] text-center hover:text-[#ff3fa7]">
          He terminado
        </div>
      </button>
      
      {/* Características del alumno */}
      <div className="absolute left-[407.5px] top-[273px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center leading-normal">
        <p>Alumno de excelentes</p>
        <p>calificaciones.</p>
      </div>
      
      <div className="absolute left-[750.5px] top-[273px] -translate-x-1/2 -translate-y-1/2 font-medium text-[#5a7e80] text-[15px] text-center leading-normal">
        <p>Mano derecha del</p>
        <p>profesor</p>
      </div>
      
      <div className="absolute left-[160px] top-[555px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Los alumnos siempre</p>
        <p>lo siguen y piden su</p>
        <p>ayuda dentro y fuera</p>
        <p>de clase.</p>
      </div>
      
      <div className="absolute left-[1050px] top-[339.5px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Sumamente organizado con</p>
        <p>sus tiempos y sus entregas.</p>
        <p>Prioriza bastante su tiempo libre</p>
        <p>así que termina lo más rápido</p>
        <p>posible sus tareas.</p>
        <p>&nbsp;</p>
        <p>Alumno modelo que posee</p>
        <p>diversos talentos y es muy</p>
        <p>bueno en todo.</p>
      </div>
      
      <div className="absolute left-[1050px] top-[539.5px] -translate-y-1/2 font-medium text-white text-[15px]">
        Lee mucho y sabe de todo.
      </div>
      
      <div className="absolute left-[1591px] top-[484.5px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[15px] text-center">
        Muy participativo.
      </div>
      
      {/* Texto indicador */}
      <div className="absolute left-[160px] top-[820px] -translate-y-1/2 font-light text-white text-[24px]">
        [Puedes pulsar el botón de He terminado]
      </div>
      
      {/* Barra decorativa gris inferior */}
      <div className="absolute left-[160px] top-[894px] w-[22px] h-[60px] bg-[#d9d9d9]" />
      
      {/* Texto principal inferior */}
      <div className="absolute left-[218px] top-[924px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1400px]">
        <p>Cuando hayan acabado, comparte la conclusión a la que has llegado, pulsa He terminado y</p>
        <p>presiona Aceptar si estás satisfecho con tu respuesta final, si no, puedes cancelar.</p>
      </div>
    </div>
  );
}

// ALUMNO 11 - Confirmación "¿Acabaste?"
export function PantallaAlumno11({ onContinue, onCancel }: { onContinue: () => void; onCancel: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#5a7e80]">
      <img 
        src="/assets/screens/ALUMNO-11.png" 
        alt="Alumno 11 - ¿Acabaste?"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-[rgba(90,126,128,0.8)]" />
      
      {/* Título "¿ACABASTE?" */}
      <div className="absolute left-[800px] top-[434px] -translate-y-1/2 font-black text-white text-[48px]">
        ¿ACABASTE?
      </div>
      
      {/* Texto explicativo */}
      <div className="absolute left-[960px] top-[548px] -translate-x-1/2 -translate-y-1/2 font-medium text-white text-[32px] text-center w-[796px]">
        Puede que aún tengas cosas por compartir, aclarar o reflexionar.
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onContinue}
        className="absolute left-[615px] top-[656px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
      
      {/* Botón CANCELAR */}
      <button
        onClick={onCancel}
        className="absolute left-[1124px] top-[656px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CANCELAR
      </button>
      
      {/* Línea divisoria entre botones */}
      <div className="absolute left-[847px] top-[656px] w-[259px] h-[2px] bg-white" />
    </div>
  );
}

// ALUMNO 47 - EL APÁTICO
export function PantallaAlumno47({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-47-apatico.png" 
        alt="Alumno 47 - El Apático"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa blanca */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título principal */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL APÁTICO
      </div>
      
      {/* Subtítulo */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        23 AÑOS - 9NO SEMESTRE
      </div>
      
      {/* Cuadro blanco con instrucciones */}
      <div className="absolute left-[1439px] top-[131px] w-[321px] h-[100px] bg-white" />
      
      {/* Texto de instrucciones en el cuadro */}
      <div className="absolute left-[1472px] top-[180px] -translate-y-1/2 font-normal text-[#5a7e80] text-[15px] leading-normal">
        <p>Resuelve la problemática.</p>
        <p>Comparte tus pensamientos y</p>
        <p>reflexiones con los otros profesores.</p>
      </div>
      
      {/* Descripción izquierda superior */}
      <div className="absolute left-[160px] top-[277px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>El Apático siempre llega tarde a las</p>
        <p>clases, intenta pasar desapercibido</p>
        <p>abriendo su laptop y usando sus</p>
        <p>audífonos, ya que sabe que así</p>
        <p>nadie lo molesta.</p>
      </div>
      
      {/* Cita del alumno */}
      <div className="absolute left-[558px] top-[245px] -translate-y-1/2 font-medium text-[#5a7e80] text-[15px] leading-normal">
        <p>"¿Para qué molestarse en hacer esto? De todas</p>
        <p>formas no va a importar en el futuro."</p>
      </div>
      
      {/* Descripción izquierda inferior */}
      <div className="absolute left-[160px] top-[499px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>El alumno apático tiene</p>
        <p>poca o ninguna motivación</p>
        <p>para destacarse académicamente.</p>
      </div>
      
      {/* Descripción derecha superior */}
      <div className="absolute left-[1008px] top-[499px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Carece de metas profesionales claras y puede</p>
        <p>tener dificultades para visualizar un futuro más</p>
        <p>allá de la vida académica.</p>
      </div>
      
      {/* Descripción derecha media */}
      <div className="absolute left-[1008px] top-[592px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Falta general de motivación</p>
        <p>y entusiasmo, lo que puede</p>
        <p>afectar su bienestar</p>
        <p>emocional y mental.</p>
      </div>
      
      {/* Descripción centro superior */}
      <div className="absolute left-[1201px] top-[315px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Busca cualquier manera de distraerse con</p>
        <p>algún videojuego ya sea en su computador o su celular.</p>
      </div>
      
      {/* Línea horizontal superior */}
      <div className="absolute left-[547px] top-[148px] w-[872px] h-[2px]">
        <img src="/assets/screens/alumno47-line1.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea vertical izquierda */}
      <div className="absolute left-[342px] top-[333px] w-[23px] h-[73px]">
        <img src="/assets/screens/alumno47-line2.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea horizontal izquierda inferior */}
      <div className="absolute left-[272px] top-[548px] w-[95px] h-[90px]">
        <img src="/assets/screens/alumno47-line3.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea horizontal centro */}
      <div className="absolute left-[945px] top-[393px] w-[73px] h-[42px]">
        <img src="/assets/screens/alumno47-line4.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Línea horizontal derecha superior */}
      <div className="absolute left-[1380px] top-[365px] w-[127px] h-[50px]">
        <img src="/assets/screens/alumno47-line5.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Barra decorativa gris */}
      <div className="absolute left-[160px] top-[805px] w-[22px] h-[80px] bg-[#d9d9d9]" />
      
      {/* Texto principal inferior */}
      <div className="absolute left-[218px] top-[845px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1163px]">
        <p>Ahora es que el profesor en turno puede comenzar a resolver la problemática de la carta. Siempre teniendo en cuenta al alumno y su personalidad. Puedes pedir opiniones, experiencias y demás a los otros profesores. Compartan y platiquen.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 49 - EL APÁTICO (He terminado)
export function PantallaAlumno49({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-49-he-terminado.png" 
        alt="Alumno 49 - El Apático - He terminado"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa blanca */}
      <div className="absolute left-[160px] top-[131px] w-[22px] h-[35px] bg-white" />
      
      {/* Título principal */}
      <div className="absolute left-[218px] top-[148px] -translate-y-1/2 font-black text-white text-[48px]">
        EL APÁTICO
      </div>
      
      {/* Subtítulo */}
      <div className="absolute left-[160px] top-[198px] -translate-y-1/2 font-medium text-white text-[16px]">
        23 AÑOS - 9NO SEMESTRE
      </div>
      
      {/* Cuadro blanco con instrucciones */}
      <div className="absolute left-[1439px] top-[131px] w-[321px] h-[100px] bg-white" />
      
      {/* Texto de instrucciones en el cuadro */}
      <div className="absolute left-[1472px] top-[180px] -translate-y-1/2 font-normal text-[#5a7e80] text-[15px] leading-normal">
        <p>Resuelve la problemática.</p>
        <p>Comparte tus pensamientos y</p>
        <p>reflexiones con los otros profesores.</p>
      </div>
      
      {/* Botón "He terminado" con animación llamativa */}
      <button
        onClick={onFinish}
        className="absolute left-[1591px] top-[254px] w-[169px] h-[38px] bg-[#d9d9d9] rounded-[4px] hover:bg-[#5a7e80] transition-all animate-pulse hover:animate-none shadow-lg hover:shadow-2xl hover:scale-110"
      >
        <div className="font-semibold text-[#5a7e80] text-[16px] text-center hover:text-[#ff3fa7]">
          He terminado
        </div>
      </button>
      
      {/* Descripción izquierda superior */}
      <div className="absolute left-[160px] top-[277px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>El Apático siempre llega tarde a las</p>
        <p>clases, intenta pasar desapercibido</p>
        <p>abriendo su laptop y usando sus</p>
        <p>audífonos, ya que sabe que así</p>
        <p>nadie lo molesta.</p>
      </div>
      
      {/* Cita del alumno */}
      <div className="absolute left-[558px] top-[245px] -translate-y-1/2 font-medium text-[#5a7e80] text-[15px] leading-normal">
        <p>"¿Para qué molestarse en hacer esto? De todas</p>
        <p>formas no va a importar en el futuro."</p>
      </div>
      
      {/* Descripción izquierda inferior */}
      <div className="absolute left-[160px] top-[499px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>El alumno apático tiene</p>
        <p>poca o ninguna motivación</p>
        <p>para destacarse académicamente.</p>
      </div>
      
      {/* Descripción derecha superior */}
      <div className="absolute left-[1008px] top-[499px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Carece de metas profesionales claras y puede</p>
        <p>tener dificultades para visualizar un futuro más</p>
        <p>allá de la vida académica.</p>
      </div>
      
      {/* Descripción derecha media */}
      <div className="absolute left-[1008px] top-[592px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Falta general de motivación</p>
        <p>y entusiasmo, lo que puede</p>
        <p>afectar su bienestar</p>
        <p>emocional y mental.</p>
      </div>
      
      {/* Descripción centro superior */}
      <div className="absolute left-[1201px] top-[315px] -translate-y-1/2 font-medium text-white text-[15px] leading-normal">
        <p>Busca cualquier manera de distraerse con</p>
        <p>algún videojuego ya sea en su computador o su celular.</p>
      </div>
      
      {/* Línea horizontal superior */}
      <div className="absolute left-[547px] top-[148px] w-[872px] h-[2px] bg-white" />
      
      {/* Línea vertical izquierda */}
      <div className="absolute left-[342px] top-[333px] w-[23px] h-[73px]">
        <svg viewBox="0 0 23 73" className="w-full h-full">
          <path d="M0 0 L23 73" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Línea horizontal izquierda inferior */}
      <div className="absolute left-[272px] top-[548px] w-[95px] h-[90px]">
        <svg viewBox="0 0 95 90" className="w-full h-full">
          <path d="M0 90 L95 0" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Línea horizontal centro */}
      <div className="absolute left-[945px] top-[393px] w-[73px] h-[42px]">
        <svg viewBox="0 0 73 42" className="w-full h-full">
          <path d="M0 42 L73 0" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Línea horizontal derecha superior */}
      <div className="absolute left-[1380px] top-[365px] w-[127px] h-[50px]">
        <svg viewBox="0 0 127 50" className="w-full h-full">
          <path d="M0 50 L127 0" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Barra decorativa gris */}
      <div className="absolute left-[160px] top-[894px] w-[22px] h-[60px] bg-[#d9d9d9]" />
      
      {/* Texto de instrucción */}
      <div className="absolute left-[160px] top-[820px] -translate-y-1/2 font-light text-white text-[24px]">
        [Puedes pulsar el botón de He terminado]
      </div>
      
      {/* Texto principal inferior */}
      <div className="absolute left-[218px] top-[924px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1200px]">
        <p>Cuando hayan acabado, comparte la conclusión a la que has llegado, pulsa He terminado y</p>
        <p>presiona Aceptar si estás satisfecho con tu respuesta final, si no, puedes cancelar.</p>
      </div>
    </div>
  );
}

// ALUMNO 51 - ¿ACABASTE?
export function PantallaAlumno51({ onContinue, onCancel }: { onContinue: () => void; onCancel: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-51-acabaste.png" 
        alt="Alumno 51 - ¿Acabaste?"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-[rgba(90,126,128,0.8)]" />
      
      {/* Título principal */}
      <div className="absolute left-[800px] top-[434px] -translate-y-1/2 font-black text-white text-[48px]">
        ¿ACABASTE?
      </div>
      
      {/* Texto descriptivo */}
      <div className="absolute left-[960px] top-[548px] -translate-x-1/2 -translate-y-1/2 w-[796px] text-center font-medium text-white text-[32px]">
        Puede que aún tengas cosas por compartir, aclarar o reflexionar.
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onContinue}
        className="absolute left-[615px] top-[656px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
      
      {/* Botón CANCELAR */}
      <button
        onClick={onCancel}
        className="absolute left-[1124px] top-[656px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CANCELAR
      </button>
      
      {/* Línea decorativa entre botones */}
      <div className="absolute left-[847px] top-[656px] w-[259px] h-[2px] bg-white" />
    </div>
  );
}

// ALUMNO 101 - Introducción a Competencias Docentes
export function PantallaAlumno101({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      {/* Imagen de fondo principal */}
      <img 
        src="/assets/screens/ALUMNO-101.png" 
        alt="Alumno 101 - Competencias Docentes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay con franja verde (opacidad 90%) */}
      <img 
        src="/assets/screens/ALUMNO-101-overlay.png" 
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      {/* Cuadrados decorativos rotados 45 grados - centrados horizontalmente */}
      <div className="absolute left-[459px] top-[467px] w-[103px] h-[103px] rotate-45 bg-transparent" />
      <div className="absolute left-[630px] top-[467px] w-[103px] h-[103px] rotate-45 bg-transparent" />
      <div className="absolute left-[801px] top-[467px] w-[103px] h-[103px] rotate-45 bg-transparent" />
      <div className="absolute left-[972px] top-[467px] w-[103px] h-[103px] rotate-45 bg-transparent" />
      <div className="absolute left-[1144px] top-[467px] w-[103px] h-[103px] rotate-45 bg-transparent" />
      <div className="absolute left-[1315px] top-[467px] w-[103px] h-[103px] rotate-45 bg-transparent" />
      
      {/* Texto principal */}
      <div className="absolute left-1/2 top-[820px] -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white text-[24px] leading-[1.3] w-[1400px]">
        <p className="mb-1">Ahora pasemos a la siguiente parte. Las preguntas misteriosas. Estas están basadas en el sistema de competencias</p>
        <p className="mb-1">docentes usadas comúnmente como un método de evaluación para el desempeño de los profesores.</p>
        <p>Te explico en que consisten...</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-1/2 top-[934px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 99 - Definición de Competencias Docentes
export function PantallaAlumno99({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      {/* Imagen de fondo principal */}
      <img 
        src="/assets/screens/ALUMNO-101.png" 
        alt="Alumno 99 - Definición Competencias"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay con franja verde (opacidad 90%) */}
      <img 
        src="/assets/screens/ALUMNO-101-overlay.png" 
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      {/* Texto principal - Definición de competencias docentes */}
      <div className="absolute left-1/2 top-[845px] -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white text-[24px] leading-[1.3] w-[1400px]">
        <p className="mb-1">Se entiende por competencias docentes a las capacidades del profesor(a) para</p>
        <p className="mb-1">integrar y movilizar conocimiento, habilidades, valores, actitudes y principios para resolver</p>
        <p>tareas docentes en diversos contextos, de manera eficaz y responsable (Perrenoud, 1999).</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-1/2 top-[934px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// ALUMNO 65 - Explicación de los Rombos de Competencias
export function PantallaAlumno65({ onNext }: { onNext: () => void }) {
  const [activeRombo, setActiveRombo] = React.useState<number>(-1);

  React.useEffect(() => {
    // Secuencia de iluminación de rombos (solo una vez)
    const sequence = [0, 1, 2, 3, 4, 5];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < sequence.length) {
        setActiveRombo(sequence[currentIndex]);
        currentIndex++;
      } else {
        // Detener la animación después del último rombo (verde)
        clearInterval(interval);
        // Apagar el último rombo después de 800ms
        setTimeout(() => {
          setActiveRombo(-1);
        }, 800);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Posiciones de los rombos ajustadas
  const rombos = [
    { left: 479, top: 487, color: 'rgba(255, 235, 156, 0.8)' }, // Amarillo
    { left: 650, top: 487, color: 'rgba(255, 200, 156, 0.8)' }, // Naranja
    { left: 821, top: 487, color: 'rgba(255, 156, 200, 0.8)' }, // Rosa
    { left: 992, top: 487, color: 'rgba(200, 156, 255, 0.8)' }, // Morado
    { left: 1164, top: 487, color: 'rgba(156, 220, 255, 0.8)' }, // Azul claro
    { left: 1335, top: 487, color: 'rgba(156, 255, 200, 0.8)' }, // Verde
  ];

  return (
    <div className="relative w-full h-full bg-white">
      {/* Imagen de fondo principal */}
      <img 
        src="/assets/screens/ALUMNO-101.png" 
        alt="Alumno 65 - Rombos de Competencias"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay con franja verde (opacidad 90%) */}
      <img 
        src="/assets/screens/ALUMNO-101-overlay.png" 
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      {/* Rombos animados */}
      {rombos.map((rombo, index) => (
        <div
          key={index}
          className="absolute transition-all duration-300"
          style={{
            left: `${rombo.left}px`,
            top: `${rombo.top}px`,
            width: '103px',
            height: '103px',
            transform: 'rotate(45deg)',
            backgroundColor: activeRombo === index ? 'white' : rombo.color,
            boxShadow: activeRombo === index ? '0 0 30px rgba(255, 255, 255, 0.8)' : 'none',
          }}
        />
      ))}
      
      {/* Texto principal - Explicación de los rombos */}
      <div className="absolute left-1/2 top-[845px] -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white text-[24px] leading-[1.3] w-[1400px]">
        <p className="mb-1">Ahora, estas competencias están distribuidas en estos coloridos rombos. Dependiendo del alumno, algunas estarán activas</p>
        <p className="mb-1">y otras inactivas. Puedes elegir entre tres de ellas. El profesor en turno tendrá que responder a la pregunta misteriosa y</p>
        <p>compartir su respuesta con los demás.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-1/2 top-[934px] -translate-x-1/2 -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// PANTALLA DE SELECCIÓN DE ALUMNO
export function PantallaSeleccionAlumno({ 
  onSelectGenio, 
  onSelectApatico, 
  onSelectProblematico 
}: { 
  onSelectGenio: () => void; 
  onSelectApatico: () => void; 
  onSelectProblematico: () => void; 
}) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      {/* Fondo punteado */}
      <img 
        src="/assets/screens/P-15-profesores.png" 
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Título */}
      <div className="absolute left-1/2 top-[300px] -translate-x-1/2 text-center font-black text-[#5a7e80] text-[48px] z-10">
        ¿QUÉ ALUMNO TE TOCÓ?
      </div>
      
      {/* Contenedor de botones */}
      <div className="absolute left-1/2 top-[540px] -translate-x-1/2 flex flex-col gap-8 z-10">
        {/* Botón EL GENIO */}
        <button
          onClick={onSelectGenio}
          className="w-[500px] h-[100px] bg-[#6B9B9E] hover:bg-[#5a8a8d] text-white font-black text-[36px] rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          EL GENIO
        </button>
        
        {/* Botón EL APÁTICO */}
        <button
          onClick={onSelectApatico}
          className="w-[500px] h-[100px] bg-[#6B9B9E] hover:bg-[#5a8a8d] text-white font-black text-[36px] rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          EL APÁTICO
        </button>
        
        {/* Botón EL PROBLEMÁTICO */}
        <button
          onClick={onSelectProblematico}
          className="w-[500px] h-[100px] bg-[#6B9B9E] hover:bg-[#5a8a8d] text-white font-black text-[36px] rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          EL PROBLEMÁTICO
        </button>
      </div>
    </div>
  );
}

// ALUMNO 120 - ELIGE UNA FIGURA MISTERIOSA
export function PantallaAlumno120({ onSelectRombo }: { onSelectRombo: (romboIndex: number) => void }) {
  const [hoveredRombo, setHoveredRombo] = React.useState<number | null>(null);
  const [hoveredLockedRombo, setHoveredLockedRombo] = React.useState<number | null>(null);
  
  const rombosInfo = [
    {
      titulo: "Innovación en la Enseñanza",
      descripcion: "Desarrolla e implementa recursos de enseñanza y aprendizaje para lograr los propósitos del curso.",
      color: "#9b59b6" // Morado
    },
    {
      titulo: "Construcción de Ambientes de Aprendizaje",
      descripcion: "Lidera la construcción de ambientes para promover aprendizajes diversos que contribuyan al desarrollo de las competencias de los estudiantes.",
      color: "#3498db" // Azul
    },
    {
      titulo: "Evaluación del Aprendizaje con Enfoque Formativo",
      descripcion: "Evalúa con un enfoque formativo el desempeño del estudiante en contextos de aprendizaje para favorecer su desarrollo autónomo.",
      color: "#27ae60" // Verde
    }
  ];
  
  // Información de los rombos bloqueados
  const lockedRombosInfo = [
    null, // Primer rombo bloqueado sin hover
    {
      titulo: "Compromiso y Ética Docente",
      descripcion: "Desarrolla y manifiesta una perspectiva humanista en la práctica docente para contribuir a las intencionalidades formativas de la institución.",
      color: "#ff9f43" // Naranja claro
    },
    {
      titulo: "Integración de Saberes Profesionales",
      descripcion: "Estructura saberes profesionales y disciplinares en saberes pedagógicos para favorecer el proceso de enseñanza-aprendizaje de la profesión.",
      color: "#e91e63" // Rosa mexicano
    }
  ];
  
  return (
    <div className="relative w-full h-full bg-[#b2b2ba]">
      <img 
        src="/assets/screens/ALUMNO-120-rombos.png" 
        alt="Elige una figura misteriosa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Título */}
      <div className="absolute left-1/2 top-[251px] -translate-x-1/2 -translate-y-1/2 font-black text-[#5a7e80] text-[48px]">
        ELIGE UNA FIGURA MISTERIOSA
      </div>
      
      {/* Subtítulo */}
      <div className="absolute left-1/2 top-[302px] -translate-x-1/2 -translate-y-1/2 font-medium text-[#5a7e80] text-[24px] text-center">
        Recibirás una pregunta para reforzar.
      </div>
      
      {/* Línea vertical decorativa */}
      <div className="absolute left-1/2 top-[358px] w-[2px] h-[115.5px] bg-[#5a7e80]" />
      
      {/* Rombos oscurecidos (primeros 3) con blur y candado */}
      {[0, 1, 2].map((index) => (
        <div
          key={`dark-${index}`}
          className={`absolute ${index === 1 || index === 5 ? 'cursor-pointer' : ''}`}
          style={{
            left: `${485 + (index * 171)}px`,
            top: '490px'
          }}
          onMouseEnter={() => (index === 1 || index === 2) && setHoveredLockedRombo(index)}
          onMouseLeave={() => (index === 1 || index === 2) && setHoveredLockedRombo(null)}
        >
          {/* Rombo oscurecido con blur */}
          <div className="absolute w-[103px] h-[103px] rotate-45 bg-[#707070] blur-[5px]" />
          
          {/* Emoji de candado centrado */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[48px] z-10">
            🔒
          </div>
        </div>
      ))}
      
      {/* Rombos clickeables (últimos 3) con efecto de iluminación */}
      {[3, 4, 5].map((index) => {
        const infoIndex = index - 3; // 0, 1, 2 para acceder al array de info
        const isHovered = hoveredRombo === infoIndex;
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${485 + (index * 171)}px`,
              top: '490px'
            }}
          >
            {/* Rombo iluminado en hover */}
            {isHovered && (
              <div 
                className="absolute w-[103px] h-[103px] rotate-45 transition-all duration-300 animate-pulse"
                style={{
                  backgroundColor: rombosInfo[infoIndex].color,
                  opacity: 0.7,
                  boxShadow: `0 0 30px ${rombosInfo[infoIndex].color}, 0 0 60px ${rombosInfo[infoIndex].color}`
                }}
              />
            )}
            
            {/* Botón transparente clickeable */}
            <button
              onClick={() => onSelectRombo(index)}
              onMouseEnter={() => setHoveredRombo(infoIndex)}
              onMouseLeave={() => setHoveredRombo(null)}
              className="absolute w-[103px] h-[103px] rotate-45 hover:scale-110 transition-transform cursor-pointer bg-transparent z-10"
              aria-label={`Rombo ${index + 1}`}
            />
          </div>
        );
      })}
      
      {/* Tooltip de información al hacer hover en rombos activos (posiciones 3, 4, 5) */}
      {hoveredRombo !== null && (
        <div 
          className="absolute bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 w-[450px] z-50 transition-opacity duration-200"
          style={{
            // hoveredRombo: 0=pos3, 1=pos4, 2=pos5
            // Centrar tooltip debajo del rombo correspondiente
            left: `${485 + ((hoveredRombo + 3) * 171) - 175}px`,
            top: '620px'
          }}
        >
          <div 
            className="font-black text-[20px] mb-3"
            style={{ color: rombosInfo[hoveredRombo].color }}
          >
            {rombosInfo[hoveredRombo].titulo}
          </div>
          <div className="font-light text-[16px] text-gray-700 leading-relaxed">
            {rombosInfo[hoveredRombo].descripcion}
          </div>
        </div>
      )}
      
      {/* Tooltip de información al hacer hover en rombos bloqueados (posiciones 2 y 6) */}
      {hoveredLockedRombo !== null && lockedRombosInfo[hoveredLockedRombo] && (
        <div 
          className="absolute bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 w-[450px] z-50 transition-opacity duration-200"
          style={{
            // hoveredLockedRombo: 1=pos2, 2=pos6
            // Centrar tooltip debajo del rombo correspondiente
            left: `${485 + (hoveredLockedRombo * 171) - 175}px`,
            top: '620px'
          }}
        >
          <div 
            className="font-black text-[20px] mb-3"
            style={{ color: lockedRombosInfo[hoveredLockedRombo].color }}
          >
            {lockedRombosInfo[hoveredLockedRombo].titulo}
          </div>
          <div className="font-light text-[16px] text-gray-700 leading-relaxed">
            {lockedRombosInfo[hoveredLockedRombo].descripcion}
          </div>
        </div>
      )}
    </div>
  );
}

// ALUMNO 141 - Innovación en la Enseñanza
export function PantallaAlumno141({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-141-innovacion.png" 
        alt="Innovación en la Enseñanza - Pregunta de reflexión"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo morado con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#b490ff] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#7b5a80] text-[24px] text-center">
        <p>Innovación en la</p>
        <p>Enseñanza</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-1/2 top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1101px]">
        ¿Qué medidas tomarías para renovar tus recursos y estrategias de enseñanza, adaptándolas a las necesidades específicas del alumno apático y manteniendo así su interés en el curso?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 142 - Construcción de Ambientes de aprendizaje
export function PantallaAlumno142({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-142-reflexion.png" 
        alt="Construcción de Ambientes de aprendizaje - Pregunta de reflexión"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo azul con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#90b4ff] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#5a7980] text-[24px] text-center">
        <p>Construcción de</p>
        <p>Ambientes de aprendizaje</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-1/2 top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1204px]">
        ¿Qué estrategias utilizarías para estimular la reflexión del alumno apático sobre sus propios procesos de aprendizaje y cómo lo motivarías a desarrollar mayor autonomía en su proceso educativo?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 151 - Evaluación del Aprendizaje con Enfoque Formativo
export function PantallaAlumno151({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-151-evaluacion.png" 
        alt="Evaluación del Aprendizaje con Enfoque Formativo - Pregunta de reflexión"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo verde con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#90d8aa] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#5a8072] text-[24px] text-center">
        <p>Evaluación del Aprendizaje con</p>
        <p>Enfoque Formativo</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-1/2 top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1310px]">
        ¿De qué manera dialogarías con el alumno genio para llegar a un equilibrio entre su habilidad de terminar sus proyectos rápido y los objetivos del curso a lo largo de su proceso de aprendizaje?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 150 - Construcción de Ambientes de aprendizaje (Alumno Genio)
export function PantallaAlumno150({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/ALUMNO-150-construccion.png" 
        alt="Construcción de Ambientes de aprendizaje - Pregunta de reflexión para alumno genio"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo azul con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#90b4ff] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#5a7980] text-[24px] text-center">
        <p>Construcción de</p>
        <p>Ambientes de aprendizaje</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-1/2 top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1310px]">
        ¿De qué manera promoverías un ambiente que pueda favorecer tanto al alumno genio y a sus compañeros propiciando el respeto, el diálogo, la colaboración, la confianza, el cuestionamiento y la equidad?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 156 - Construcción de Ambientes de aprendizaje - REFLEXIÓN FINAL
export function PantallaAlumno156({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ALUMNO-156-reflexion-final.png" 
        alt="Construcción de Ambientes de aprendizaje - Pregunta de reflexión final"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo azul con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#90b4ff] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#5a7980] text-[24px] text-center leading-normal">
        <p>Construcción de</p>
        <p>Ambientes de aprendizaje</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-1/2 top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1514px]">
        ¿Cómo abordarías la situación del alumno problemático para comprender sus necesidades y motivaciones subyacentes, y así poder ofrecerle el apoyo y la orientación adecuada para su desarrollo académico y personal dentro del contexto universitario?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 149 - Innovación en la Enseñanza (Alumno Genio)
export function PantallaAlumno149({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ALUMNO-149-innovacion.png" 
        alt="Innovación en la Enseñanza - Pregunta de reflexión para alumno genio"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo morado con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#b490ff] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#7b5a80] text-[24px] text-center leading-normal">
        <p>Innovación en la</p>
        <p>Enseñanza</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-[calc(50%+0.5px)] top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1101px]">
        ¿Qué medidas tomarías para renovar tus recursos y estrategias de enseñanza, adaptándolas a las necesidades específicas del alumno genio y manteniendo así su interés en el curso?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 140 - Integración de Saberes Profesionales (Alumno Apático)
export function PantallaAlumno140({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ALUMNO-140-saberes.png" 
        alt="Integración de Saberes Profesionales - Pregunta de reflexión para alumno apático"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo rosa con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#d890aa] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-[calc(50%+0.5px)] top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#805a5a] text-[24px] text-center leading-normal">
        <p>Integración de</p>
        <p>Saberes Profesionales</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-[calc(50%+0.5px)] top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1421px]">
        ¿De qué manera podrías actualizar tus saberes profesionales y reflexionar sobre ellos para desarrollar enfoques innovadores que motiven y comprometan al alumno apático en su proceso de aprendizaje?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 152 - Integración de Saberes Profesionales (Alumno Problemático)
export function PantallaAlumno152({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ALUMNO-152.png" 
        alt="Integración de Saberes Profesionales - Pregunta de reflexión para alumno problemático"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo rosa con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#d890aa] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-[calc(50%+0.5px)] top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#805a5a] text-[24px] text-center leading-normal">
        <p>Integración de</p>
        <p>Saberes Profesionales</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-[calc(50%+0.5px)] top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1421px]">
        En base a tus experiencias personales como docente, ¿De qué manera incentivarías mediante experiencias al alumno problemático para que se motive a integrarse de manera orgánica nuevamente con sus compañeros de clase?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}

// ALUMNO 154 - Compromiso y Ética Docente (Alumno Problemático)
export function PantallaAlumno154({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#E8DCC4]">
      <img 
        src="/assets/screens/ALUMNO-154.png" 
        alt="Compromiso y Ética Docente - Pregunta de reflexión para alumno problemático"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Rombo amarillo con blur */}
      <div className="absolute left-1/2 top-[207px] -translate-x-1/2">
        <div className="w-[103px] h-[103px] rotate-45 bg-[#d8b455] blur-[2.5px]" />
      </div>
      
      {/* Título de la competencia */}
      <div className="absolute left-[calc(50%+0.5px)] top-[433px] -translate-x-1/2 -translate-y-1/2 font-black text-[#806c5a] text-[24px] text-center leading-normal">
        <p>Compromiso y</p>
        <p>Ética Docente</p>
      </div>
      
      {/* Pregunta de reflexión */}
      <p className="absolute left-[calc(50%+0.5px)] top-[540px] -translate-x-1/2 font-black text-[#5a7e80] text-[32px] text-center leading-normal w-[1151px]">
        ¿Cómo fomentarías un diálogo respetuoso entre el alumno problemático y sus compañeros para mantener una relación incluyente y equitativa con los estudiantes?
      </p>
      
      {/* Instrucción */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 -translate-y-1/2 font-light text-[#5a7e80] text-[24px]">
        [ Cuando hayas terminado tu reflexión, pulsa Finalizar ]
      </div>
      
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-[775px] -translate-x-1/2 w-[2px] h-[43px] bg-[#5a7e80]" />
      
      {/* Botón FINALIZAR */}
      <button
        onClick={onFinish}
        className="absolute left-[875px] top-[835px] w-[169px] h-[38px] bg-[#5a7e80] rounded text-white font-semibold text-[16px] hover:bg-[#4a6e70] transition-colors"
      >
        FINALIZAR
      </button>
    </div>
  );
}


// ALUMNO 133 - ELIGE UNA FIGURA MISTERIOSA
export function PantallaAlumno133({ onSelectRombo }: { onSelectRombo: (romboIndex: number) => void }) {
  const [hoveredRombo, setHoveredRombo] = React.useState<number | null>(null);
  
  const rombosInfo = [
    {
      // Posición 2 (índice 0) - Beige/Crema
      titulo: "Compromiso y Ética Docente",
      descripcion: "Desarrolla y manifiesta una perspectiva humanista en la práctica docente para contribuir a las intencionalidades formativas de la institución.",
      color: "#d4a574" // Beige
    },
    {
      // Posición 3 (índice 1) - Rosa
      titulo: "Integración de Saberes Profesionales",
      descripcion: "Estructura saberes profesionales y disciplinares en saberes pedagógicos para favorecer el proceso de enseñanza-aprendizaje de la profesión.",
      color: "#e8a4c4" // Rosa
    },
    {
      // Posición 5 (índice 2) - Azul claro
      titulo: "Construcción de Ambientes de Aprendizaje",
      descripcion: "Lidera la construcción de ambientes para promover aprendizajes diversos que contribuyan al desarrollo de las competencias de los estudiantes.",
      color: "#a4d4e8" // Azul claro
    }
  ];
  
  return (
    <div className="relative w-full h-full bg-[#e8dcc4]">
      <img 
        src="/assets/screens/ALUMNO-133-rombos.png" 
        alt="Elige una figura misteriosa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Título */}
      <div className="absolute left-1/2 top-[251px] -translate-x-1/2 -translate-y-1/2 font-black text-[#5a7e80] text-[48px]">
        ELIGE UNA FIGURA MISTERIOSA
      </div>
      
      {/* Subtítulo */}
      <div className="absolute left-1/2 top-[302px] -translate-x-1/2 -translate-y-1/2 font-medium text-[#5a7e80] text-[24px] text-center">
        Recibirás una pregunta para reforzar.
      </div>
      
      {/* Línea vertical decorativa */}
      <div className="absolute left-1/2 top-[358px] w-[2px] h-[115.5px] bg-[#5a7e80]" />
      
      {/* Rombos oscurecidos con blur - posiciones 1, 4 y 6 */}
      {[0, 3, 5].map((index) => (
        <div
          key={`dark-${index}`}
          className="absolute"
          style={{
            left: `${480 + (index * 171)}px`,
            top: '494px'
          }}
        >
          {/* Rombo oscurecido con blur */}
          <div className="absolute w-[103px] h-[103px] rotate-45 bg-[#707070] blur-[5px]" />
          {/* Candado emoji */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] z-10">
            🔒
          </div>
        </div>
      ))}
      
      {/* Rombos clickeables - posiciones 2, 3 y 5 */}
      {[1, 2, 4].map((index) => {
        const infoIndex = index === 1 ? 0 : index === 2 ? 1 : 2; // Mapear a índices 0, 1, 2
        const isHovered = hoveredRombo === infoIndex;
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${480 + (index * 171)}px`,
              top: '494px'
            }}
          >
            {/* Rombo iluminado en hover */}
            {isHovered && (
              <div 
                className="absolute w-[103px] h-[103px] rotate-45 transition-all duration-300 animate-pulse"
                style={{
                  backgroundColor: rombosInfo[infoIndex].color,
                  opacity: 0.7,
                  boxShadow: `0 0 30px ${rombosInfo[infoIndex].color}, 0 0 60px ${rombosInfo[infoIndex].color}`
                }}
              />
            )}
            
            {/* Botón transparente clickeable */}
            <button
              onClick={() => onSelectRombo(index)}
              onMouseEnter={() => setHoveredRombo(infoIndex)}
              onMouseLeave={() => setHoveredRombo(null)}
              className="absolute w-[103px] h-[103px] rotate-45 hover:scale-110 transition-transform cursor-pointer bg-transparent z-10"
              aria-label={`Rombo ${index + 1}`}
            />
          </div>
        );
      })}
      
      {/* Tooltip de información al hacer hover */}
      {hoveredRombo !== null && (
        <div 
          className="absolute bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 w-[450px] z-50 transition-opacity duration-200"
          style={{
            left: `${480 + ((hoveredRombo === 0 ? 1 : hoveredRombo === 1 ? 2 : 4) * 171) - 175}px`,
            top: '627px'
          }}
        >
          <div 
            className="font-black text-[20px] mb-3"
            style={{ color: rombosInfo[hoveredRombo].color }}
          >
            {rombosInfo[hoveredRombo].titulo}
          </div>
          <div className="font-light text-[16px] text-gray-700 leading-relaxed">
            {rombosInfo[hoveredRombo].descripcion}
          </div>
        </div>
      )}
    </div>
  );
}

// ALUMNO 64 - ELIGE UNA FIGURA MISTERIOSA (6 rombos)
export function PantallaAlumno64({ onSelectRombo }: { onSelectRombo: (romboIndex: number) => void }) {
  const [hoveredRombo, setHoveredRombo] = React.useState<number | null>(null);
  
  const rombosInfo = [
    {
      // Posición 3 (índice 0) - Rosa
      titulo: "Integración de Saberes Profesionales",
      descripcion: "Estructura saberes profesionales y disciplinares en saberes pedagógicos para favorecer el proceso de enseñanza-aprendizaje de la profesión.",
      color: "#e8a4c4" // Rosa
    },
    {
      // Posición 4 (índice 1) - Morado
      titulo: "Innovación en la Enseñanza",
      descripcion: "Desarrolla e implementa recursos de enseñanza y aprendizaje para lograr los propósitos del curso.",
      color: "#c4a4e8" // Morado
    },
    {
      // Posición 5 (índice 2) - Azul claro
      titulo: "Construcción de Ambientes de Aprendizaje",
      descripcion: "Lidera la construcción de ambientes para promover aprendizajes diversos que contribuyan al desarrollo de las competencias de los estudiantes.",
      color: "#a4d4e8" // Azul claro
    }
  ];
  
  return (
    <div className="relative w-full h-full bg-[#e8dcc4]">
      <img 
        src="/assets/screens/ALUMNO-64-rombos.png" 
        alt="Elige una figura misteriosa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Título */}
      <div className="absolute left-1/2 top-[251px] -translate-x-1/2 -translate-y-1/2 font-black text-[#5a7e80] text-[48px]">
        ELIGE UNA FIGURA MISTERIOSA
      </div>
      
      {/* Subtítulo */}
      <div className="absolute left-1/2 top-[302px] -translate-x-1/2 -translate-y-1/2 font-medium text-[#5a7e80] text-[24px] text-center">
        Recibirás una pregunta para reforzar.
      </div>
      
      {/* Línea vertical decorativa */}
      <div className="absolute left-1/2 top-[358px] w-[2px] h-[115.5px] bg-[#5a7e80]" />
      
      {/* Rombos oscurecidos con blur - posiciones 1, 2 y 6 */}
      {[0, 1, 5].map((index) => (
        <div
          key={`dark-${index}`}
          className="absolute"
          style={{
            left: `${476 + (index * 173)}px`,
            top: '495px'
          }}
        >
          {/* Rombo oscurecido con blur */}
          <div className="absolute w-[103px] h-[103px] rotate-45 bg-[#707070] blur-[5px]" />
          {/* Candado emoji */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] z-10">
            🔒
          </div>
        </div>
      ))}
      
      {/* Rombos clickeables - posiciones 3, 4 y 5 */}
      {[2, 3, 4].map((index) => {
        const infoIndex = index - 2; // Mapear a índices 0, 1, 2
        const isHovered = hoveredRombo === infoIndex;
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${476 + (index * 173)}px`,
              top: '495px'
            }}
          >
            {/* Rombo iluminado en hover */}
            {isHovered && (
              <div 
                className="absolute w-[103px] h-[103px] rotate-45 transition-all duration-300 animate-pulse"
                style={{
                  backgroundColor: rombosInfo[infoIndex].color,
                  opacity: 0.7,
                  boxShadow: `0 0 30px ${rombosInfo[infoIndex].color}, 0 0 60px ${rombosInfo[infoIndex].color}`
                }}
              />
            )}
            
            {/* Botón transparente clickeable */}
            <button
              onClick={() => onSelectRombo(index)}
              onMouseEnter={() => setHoveredRombo(infoIndex)}
              onMouseLeave={() => setHoveredRombo(null)}
              className="absolute w-[103px] h-[103px] rotate-45 hover:scale-110 transition-transform cursor-pointer bg-transparent z-10"
              aria-label={`Rombo ${index + 1}`}
            />
          </div>
        );
      })}
      
      {/* Tooltip de información al hacer hover */}
      {hoveredRombo !== null && (
        <div 
          className="absolute bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 w-[450px] z-50 transition-opacity duration-200"
          style={{
            left: `${476 + ((hoveredRombo + 2) * 173) - 175}px`,
            top: '628px'
          }}
        >
          <div 
            className="font-black text-[20px] mb-3"
            style={{ 
              color: hoveredRombo === 0 ? '#e8a4c4' : hoveredRombo === 1 ? '#c4a4e8' : '#a4d4e8' 
            }}
          >
            {rombosInfo[hoveredRombo].titulo}
          </div>
          <div className="font-light text-[16px] text-gray-700 leading-relaxed">
            {rombosInfo[hoveredRombo].descripcion}
          </div>
        </div>
      )}
    </div>
  );
}


// CARGANDO FINAL - Pantalla negra de transición final
export function PantallaCargandoFinal({ onComplete }: { onComplete: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Avanza automáticamente después de 2 segundos
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      {/* Texto CARGANDO con animación de parpadeo */}
      <div className="font-black text-white text-[64px] animate-pulse">
        CARGANDO
      </div>
    </div>
  );
}

// PANTALLA X - Reflexión del Dr. Carles Monereo
export function PantallaReflexionFinal({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/PANTALLA-X-reflexion.png" 
        alt="Reflexión del Dr. Carles Monereo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[765px] w-[22px] h-[120px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[825px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1100px]">
        <p>En palabras del Dr. Carles Monereo, tratamos situaciones que, en muchos casos, modifican</p>
        <p>nuestras concepciones sobre el sentido y significado de nuestro puesto de trabajo, nuestras</p>
        <p>formas de actuar y de afrontar los problemas y la forma de sentirnos en el desempeño de</p>
        <p>nuestro rol. Es por ello que es tan importante hacer un buen proceso de reflexión.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// PANTALLA X - Reflexión de John Dewey
export function PantallaReflexionDewey({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/PANTALLA-X-dewey.png" 
        alt="Reflexión de John Dewey"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[765px] w-[22px] h-[120px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[825px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1100px]">
        <p>John Dewey, filósofo estadounidense más importante de la primera mitad del siglo XX, resalta</p>
        <p>que la educación debe basarse en la experiencia activa y reflexiva, donde los docentes</p>
        <p>compartan sus propias experiencias profesionales y personales para enriquecer el proceso</p>
        <p>de enseñanza-aprendizaje.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// PANTALLA X - Despedida de Fígaro
export function PantallaDespedidaFigaro({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/PANTALLA-X-despedida.png" 
        alt="Despedida de Fígaro"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[795px] w-[22px] h-[90px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[840px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal w-[1100px]">
        <p>Espero que TEACH-IT te pueda ser de gran ayuda para compartir y aprender con y de los</p>
        <p>demás. En fin, te dejo ya que tus alumnos se ven algo impacientes por comenzar. Si me</p>
        <p>necesitas, podrás encontrarme en el icono de ayuda en la parte inferior derecha.</p>
      </div>
      
      {/* Botón CONTINUAR */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        CONTINUAR
      </button>
    </div>
  );
}

// PANTALLA X - Final del Tutorial
export function PantallaFinalTutorial({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-white">
      <img 
        src="/assets/screens/PANTALLA-X-final.png" 
        alt="Final del Tutorial"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Barra decorativa */}
      <div className="absolute left-[160px] top-[855px] w-[22px] h-[30px] bg-[#d9d9d9]" />
      
      {/* Texto principal */}
      <div className="absolute left-[218px] top-[870px] -translate-y-1/2 font-medium text-white text-[24px] leading-normal">
        <p>¡Éxito! Y mucha suerte, profesores.</p>
      </div>
      
      {/* Botón FINALIZAR TUTORIAL */}
      <button
        onClick={onNext}
        className="absolute left-[160px] top-[934px] -translate-y-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        FINALIZAR TUTORIAL
      </button>
    </div>
  );
}

// PANTALLA X - Créditos Finales
export function PantallaCreditosFinales({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full h-full bg-[rgba(0,0,0,0.88)]">
      {/* Texto principal */}
      <div className="absolute left-1/2 top-[482px] -translate-x-1/2 -translate-y-1/2 text-center font-black text-white text-[24px] leading-normal w-[1529px]">
        <p>Este es el final de nuestro prototipo. Gracias por jugar. Centramos todo nuestro esfuerzo en que</p>
        <p>el funcionamiento de <span className="text-[#90b4ff]">TEACH-IT</span> fuera claro y fiel a lo que tenemos en mente. Esperamos pueda hacer alguna diferencia</p>
        <p>para algún profesor en apuros allá afuera y que resulte algo agradable y novedoso.</p>
        <p>&nbsp;</p>
        <p>¡Gracias!</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p className="font-['Leckerli_One'] text-[#90b4ff]">Por Aline, Pepe y Jorge.</p>
      </div>
      
      {/* Botón REGRESAR A INICIO */}
      <button
        onClick={onNext}
        className="absolute left-1/2 top-[700px] -translate-x-1/2 font-black text-white text-[32px] hover:text-[#ff3fa7] hover:scale-110 transition-all"
      >
        REGRESAR A INICIO
      </button>
    </div>
  );
}
