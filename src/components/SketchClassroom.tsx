'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tipos de estudiantes
type StudentType = 'apatico' | 'problematico' | 'genio' | null

interface StudentCardProps {
  type: 'apatico' | 'problematico' | 'genio'
  position: { x: number; y: number }
  isSelected: boolean
  onClick: () => void
}

// Componente de tarjeta de estudiante estilo sketch
function StudentCard({ type, position, isSelected, onClick }: StudentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const config = {
    apatico: {
      color: '#A8C5C7',
      name: 'El Apático',
      emoji: '😴',
      description: 'Desmotivado y desinteresado'
    },
    problematico: {
      color: '#E89B9B',
      name: 'El Problemático',
      emoji: '😠',
      description: 'Disruptivo y desafiante'
    },
    genio: {
      color: '#F4D06F',
      name: 'El Genio',
      emoji: '🤓',
      description: 'Sobresaliente y arrogante'
    }
  }
  
  const student = config[type]
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: isSelected ? 1.15 : 1,
        rotate: 0,
        y: isHovered ? -10 : 0
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sombra */}
      <div 
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 rounded-full blur-sm opacity-30"
        style={{ backgroundColor: student.color }}
      />
      
      {/* Tarjeta del estudiante */}
      <div
        className="relative w-24 h-32 rounded-lg border-4 border-gray-800 shadow-lg overflow-hidden"
        style={{ 
          backgroundColor: student.color,
          transform: 'rotate(-2deg)',
          boxShadow: isSelected ? '0 8px 16px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.2)'
        }}
      >
        {/* Emoji del estudiante */}
        <div className="text-5xl mt-4 text-center">
          {student.emoji}
        </div>
        
        {/* Nombre */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <p className="text-xs font-bold text-gray-800 px-1">
            {student.name}
          </p>
        </div>
        
        {/* Indicador de selección */}
        {isSelected && (
          <motion.div
            className="absolute inset-0 border-4 border-white rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Efecto de brillo */}
        {isHovered && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
      
      {/* Tooltip al hacer hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg border-2 border-gray-800 shadow-lg whitespace-nowrap z-50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <p className="text-xs font-semibold text-gray-800">
              {student.description}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-gray-800 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Componente principal del salón sketch
export default function SketchClassroom() {
  const [selectedStudent, setSelectedStudent] = useState<StudentType>(null)
  
  const handleStudentClick = (type: StudentType) => {
    setSelectedStudent(selectedStudent === type ? null : type)
  }
  
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#E8DCC4] to-[#D4C4A8] overflow-hidden relative">
      {/* Textura de puntos de fondo */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Header con Fígaro */}
      <motion.div 
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
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
            className="w-32 h-40 mx-auto"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/assets/figaro/figaro-cropped.png" 
              alt="Fígaro"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Salón isométrico estilo sketch */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative"
          style={{
            width: '800px',
            height: '600px',
            transform: 'perspective(1000px) rotateX(20deg) rotateZ(-5deg)'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Piso del salón */}
          <div 
            className="absolute inset-0 border-4 border-gray-800 rounded-lg"
            style={{
              backgroundColor: '#6B9B9E',
              backgroundImage: `
                linear-gradient(45deg, #8FB5B8 25%, transparent 25%),
                linear-gradient(-45deg, #8FB5B8 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #8FB5B8 75%),
                linear-gradient(-45deg, transparent 75%, #8FB5B8 75%)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            {/* Marco decorativo sketch */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.2))' }}
            >
              <rect 
                x="10" 
                y="10" 
                width="780" 
                height="580" 
                fill="none" 
                stroke="#2C5F2D" 
                strokeWidth="3"
                strokeDasharray="10,5"
                rx="10"
              />
            </svg>
            
            {/* Pizarra en el fondo */}
            <motion.div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-[#2C5F2D] border-4 border-[#8B4513] rounded-lg shadow-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Texto en la pizarra */}
              <div className="text-white text-center mt-4 font-handwriting">
                <p className="text-xl font-bold">TEACH-IT</p>
                <p className="text-xs mt-2">Sistema de Simulación</p>
              </div>
            </motion.div>
            
            {/* Escritorio del profesor */}
            <motion.div
              className="absolute top-44 left-1/2 transform -translate-x-1/2 w-48 h-20 bg-[#8B4513] border-4 border-gray-800 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
            >
              <div className="absolute -bottom-2 left-4 w-3 h-16 bg-[#654321] border-2 border-gray-800" />
              <div className="absolute -bottom-2 right-4 w-3 h-16 bg-[#654321] border-2 border-gray-800" />
            </motion.div>
            
            {/* Los 3 Estudiantes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {/* El Apático - Izquierda */}
              <StudentCard
                type="apatico"
                position={{ x: 25, y: 60 }}
                isSelected={selectedStudent === 'apatico'}
                onClick={() => handleStudentClick('apatico')}
              />
              
              {/* El Problemático - Centro */}
              <StudentCard
                type="problematico"
                position={{ x: 50, y: 65 }}
                isSelected={selectedStudent === 'problematico'}
                onClick={() => handleStudentClick('problematico')}
              />
              
              {/* El Genio - Derecha */}
              <StudentCard
                type="genio"
                position={{ x: 75, y: 60 }}
                isSelected={selectedStudent === 'genio'}
                onClick={() => handleStudentClick('genio')}
              />
            </motion.div>
            
            {/* Mano señalando (decorativa) */}
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
        </motion.div>
      </div>
      
      {/* Panel de información del estudiante seleccionado */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="bg-white px-8 py-6 rounded-2xl border-4 border-gray-800 shadow-2xl max-w-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 capitalize">
                {selectedStudent === 'apatico' && '😴 El Apático'}
                {selectedStudent === 'problematico' && '😠 El Problemático'}
                {selectedStudent === 'genio' && '🤓 El Genio'}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {selectedStudent === 'apatico' && 'Estudiante desmotivado que muestra poco interés en las actividades de clase.'}
                {selectedStudent === 'problematico' && 'Estudiante disruptivo que constantemente desafía la autoridad del docente.'}
                {selectedStudent === 'genio' && 'Estudiante sobresaliente que puede mostrar actitudes de superioridad.'}
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
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg border-3 border-gray-800 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedStudent(null)}
                >
                  Cancelar
                </motion.button>
              </div>
            </div>
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
      
      {/* Indicador de competencias (decorativo) */}
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
    </div>
  )
}
