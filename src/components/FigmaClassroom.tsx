'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Tipos de estudiantes según Figma
type StudentType = 'apatico' | 'problematico' | 'genio' | null

// Posiciones de los estudiantes en el salón (basado en la imagen de Figma)
const STUDENT_POSITIONS = {
  // Fila trasera (arriba en la vista isométrica)
  student1: { x: 15, y: 25, type: null },
  student2: { x: 25, y: 22, type: null },
  student3: { x: 35, y: 25, type: null },
  student4: { x: 45, y: 22, type: null },
  student5: { x: 55, y: 25, type: 'problematico' as const },
  student6: { x: 65, y: 22, type: null },
  student7: { x: 75, y: 25, type: null },
  student8: { x: 85, y: 22, type: null },
  
  // Fila media
  student9: { x: 15, y: 40, type: null },
  student10: { x: 25, y: 37, type: 'apatico' as const },
  student11: { x: 35, y: 40, type: null },
  student12: { x: 45, y: 37, type: null },
  student13: { x: 55, y: 40, type: null }, // Centro oscuro
  student14: { x: 65, y: 37, type: null },
  student15: { x: 75, y: 40, type: null },
  student16: { x: 85, y: 37, type: null },
  
  // Fila delantera
  student17: { x: 15, y: 55, type: null },
  student18: { x: 25, y: 52, type: null },
  student19: { x: 35, y: 55, type: null },
  student20: { x: 45, y: 52, type: 'genio' as const },
  student21: { x: 55, y: 55, type: null },
  student22: { x: 65, y: 52, type: null },
  student23: { x: 75, y: 55, type: null },
  student24: { x: 85, y: 52, type: null },
}

export default function FigmaClassroom() {
  const [selectedStudent, setSelectedStudent] = useState<StudentType>(null)
  const [hoveredStudent, setHoveredStudent] = useState<string | null>(null)

  const handleStudentClick = (type: StudentType) => {
    if (type) {
      setSelectedStudent(selectedStudent === type ? null : type)
    }
  }

  const getStudentInfo = (type: StudentType) => {
    const info = {
      apatico: {
        name: 'El Apático',
        emoji: '😴',
        color: '#A8C5C7',
        description: 'Estudiante desmotivado que muestra poco interés en las actividades de clase.'
      },
      problematico: {
        name: 'El Problemático',
        emoji: '😠',
        color: '#E89B9B',
        description: 'Estudiante disruptivo que constantemente desafía la autoridad del docente.'
      },
      genio: {
        name: 'El Genio',
        emoji: '🤓',
        color: '#F4D06F',
        description: 'Estudiante sobresaliente que puede mostrar actitudes de superioridad.'
      }
    }
    return type ? info[type] : null
  }

  return (
    <div className="w-full h-screen bg-[#E8DCC4] overflow-hidden relative">
      {/* Textura de fondo */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Header con Fígaro */}
      <motion.div 
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <div className="relative">
          {/* Burbuja de diálogo */}
          <motion.div
            className="bg-white px-6 py-4 rounded-2xl border-4 border-gray-800 shadow-lg max-w-md mb-4"
            animate={{ 
              rotate: [-1, 1, -1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <p className="text-sm font-semibold text-gray-800 text-center">
              "¡Hola! Selecciona un estudiante para comenzar la simulación"
            </p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-r-4 border-b-4 border-gray-800 rotate-45" />
          </motion.div>
          
          {/* Fígaro */}
          <motion.div
            className="w-32 h-40 mx-auto relative"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image 
              src="/assets/figaro/figaro-cropped.png" 
              alt="Fígaro"
              fill
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Salón isométrico de Figma */}
      <div className="absolute inset-0 flex items-center justify-center pt-32">
        <motion.div 
          className="relative w-[900px] h-[500px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Imagen del salón de Figma */}
          <div className="relative w-full h-full">
            <Image
              src="/salon/salon-isometrico.png"
              alt="Salón de clases isométrico"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>

          {/* Hotspots interactivos sobre los estudiantes clave */}
          {Object.entries(STUDENT_POSITIONS).map(([key, pos]) => {
            if (!pos.type) return null
            
            const info = getStudentInfo(pos.type)
            if (!info) return null

            return (
              <motion.div
                key={key}
                className="absolute cursor-pointer"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStudentClick(pos.type)}
                onMouseEnter={() => setHoveredStudent(key)}
                onMouseLeave={() => setHoveredStudent(null)}
              >
                {/* Círculo indicador */}
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl"
                  style={{ 
                    backgroundColor: info.color,
                    borderColor: selectedStudent === pos.type ? '#000' : '#fff'
                  }}
                  animate={{
                    scale: selectedStudent === pos.type ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: selectedStudent === pos.type ? Infinity : 0
                  }}
                >
                  {info.emoji}
                </motion.div>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredStudent === key && (
                    <motion.div
                      className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg border-3 border-gray-800 shadow-xl whitespace-nowrap z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <p className="text-sm font-bold text-gray-800">
                        {info.name}
                      </p>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r-3 border-b-3 border-gray-800 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Panel de información del estudiante seleccionado */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {(() => {
              const info = getStudentInfo(selectedStudent)
              if (!info) return null

              return (
                <div 
                  className="px-8 py-6 rounded-2xl border-4 border-gray-800 shadow-2xl max-w-md"
                  style={{ backgroundColor: info.color }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {info.emoji} {info.name}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    {info.description}
                  </p>
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-[#6B9B9E] hover:bg-[#4A7A7D] text-white font-bold py-3 px-6 rounded-lg border-3 border-gray-800 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => alert('Próximamente: Selección de competencias')}
                    >
                      Aplicar Competencia
                    </motion.button>
                    <motion.button
                      className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg border-3 border-gray-800 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedStudent(null)}
                    >
                      Cancelar
                    </motion.button>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón de regreso */}
      <motion.button
        className="absolute top-4 left-4 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg border-3 border-gray-800 shadow-lg z-30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '/'}
      >
        ← Volver
      </motion.button>

      {/* Indicador de competencias */}
      <motion.div
        className="absolute top-4 right-4 bg-white px-4 py-3 rounded-lg border-3 border-gray-800 shadow-lg z-30"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-xs font-bold text-gray-600 mb-2">6 Competencias Docentes</p>
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-[#FF6B6B] rounded border-2 border-gray-800" title="Planeación" />
          <div className="w-6 h-6 bg-[#4ECDC4] rounded border-2 border-gray-800" title="Compromiso" />
          <div className="w-6 h-6 bg-[#FFE66D] rounded border-2 border-gray-800" title="Integración" />
          <div className="w-6 h-6 bg-[#95E1D3] rounded border-2 border-gray-800" title="Innovación" />
          <div className="w-6 h-6 bg-[#F38181] rounded border-2 border-gray-800" title="Construcción" />
          <div className="w-6 h-6 bg-[#AA96DA] rounded border-2 border-gray-800" title="Evaluación" />
        </div>
      </motion.div>

      {/* Instrucción flotante */}
      <AnimatePresence>
        {!selectedStudent && (
          <motion.div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, 10, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="text-6xl">👇</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
