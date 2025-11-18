'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { useState, useMemo } from 'react'
import * as THREE from 'three'

// Tipos de estudiantes
type StudentType = 'apatico' | 'problematico' | 'genio' | null

interface StudentProps {
  position: [number, number, number]
  type: 'apatico' | 'problematico' | 'genio'
  onClick: (type: StudentType) => void
  isSelected: boolean
}

// Componente de Estudiante 3D
function Student({ position, type, onClick, isSelected }: StudentProps) {
  const [hovered, setHovered] = useState(false)
  
  const colors = {
    apatico: '#6B9BD9',    // Azul
    problematico: '#D96B6B', // Rojo
    genio: '#D9C96B'        // Amarillo
  }
  
  const labels = {
    apatico: 'El Apático',
    problematico: 'El Problemático',
    genio: 'El Genio'
  }
  
  return (
    <group position={position}>
      {/* Cuerpo del estudiante (cilindro simple) */}
      <mesh
        onClick={() => onClick(type)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0.75, 0]}
        castShadow
      >
        <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
        <meshStandardMaterial 
          color={colors[type]} 
          emissive={hovered || isSelected ? colors[type] : '#000000'}
          emissiveIntensity={hovered || isSelected ? 0.3 : 0}
        />
      </mesh>
      
      {/* Cabeza */}
      <mesh position={[0, 1.7, 0]} castShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#FFD4A3" />
      </mesh>
      
      {/* Indicador especial para El Problemático (serpiente) */}
      {type === 'problematico' && (
        <mesh position={[0.5, 1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.15, 0.05, 8, 16]} />
          <meshStandardMaterial color="#8B0000" emissive="#FF0000" emissiveIntensity={0.5} />
        </mesh>
      )}
      
      {/* Indicador especial para El Genio (estrella/brillo) */}
      {type === 'genio' && (
        <mesh position={[0, 2.3, 0]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
        </mesh>
      )}
      
      {/* Etiqueta flotante */}
      {(hovered || isSelected) && (
        <Html position={[0, 2.5, 0]} center>
          <div className="bg-white px-3 py-1 rounded-lg shadow-lg border-2 border-gray-800 whitespace-nowrap">
            <p className="text-sm font-bold" style={{ color: colors[type] }}>
              {labels[type]}
            </p>
          </div>
        </Html>
      )}
      
      {/* Círculo de selección en el piso */}
      {isSelected && (
        <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.5, 0.7, 32]} />
          <meshBasicMaterial color={colors[type]} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  )
}

// Componente del Salón
export default function IsometricClassroom() {
  const [selectedStudent, setSelectedStudent] = useState<StudentType>(null)
  
  const handleStudentClick = (type: StudentType) => {
    setSelectedStudent(type)
    console.log('Estudiante seleccionado:', type)
  }
  
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-sky-100">
      {/* UI Overlay */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border-2 border-gray-800 max-w-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-800">🎓 Salón de Clases</h2>
        <p className="text-sm text-gray-600 mb-2">
          Haz clic en un estudiante para seleccionarlo
        </p>
        {selectedStudent && (
          <div className="mt-3 p-3 bg-blue-50 rounded border-2 border-blue-300">
            <p className="text-sm font-semibold text-blue-800">
              Seleccionado: <span className="capitalize">{selectedStudent}</span>
            </p>
            <button 
              onClick={() => setSelectedStudent(null)}
              className="mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Deseleccionar
            </button>
          </div>
        )}
      </div>
      
      {/* Instrucciones */}
      <div className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border-2 border-gray-800">
        <p className="text-xs text-gray-600">
          🖱️ Arrastra para rotar • 🔍 Scroll para zoom
        </p>
      </div>
      
      {/* Canvas 3D */}
      <Canvas
        shadows
        camera={{ 
          position: [12, 10, 12], 
          fov: 50 
        }}
      >
        {/* Iluminación */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 15, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.3} color="#FFE4B5" />
        
        {/* Piso del salón con patrón de baldosas */}
        <TiledFloor />
        
        {/* Paredes */}
        {/* Pared trasera */}
        <mesh position={[0, 3, -10]} receiveShadow>
          <boxGeometry args={[20, 6, 0.2]} />
          <meshStandardMaterial color="#F5E6D3" />
        </mesh>
        
        {/* Ventana grande en la pared trasera (lado derecho) */}
        <group position={[5, 4, -9.9]}>
          {/* Marco exterior */}
          <mesh>
            <boxGeometry args={[4, 2.5, 0.15]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          
          {/* Vidrio */}
          <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[3.8, 2.3]} />
            <meshStandardMaterial 
              color="#B0E0E6" 
              transparent 
              opacity={0.25}
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
          
          {/* Marcos divisores - 2 verticales */}
          <mesh position={[-1.3, 0, 0.08]}>
            <boxGeometry args={[0.08, 2.3, 0.05]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          <mesh position={[1.3, 0, 0.08]}>
            <boxGeometry args={[0.08, 2.3, 0.05]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          
          {/* Marco divisor horizontal */}
          <mesh position={[0, 0, 0.08]}>
            <boxGeometry args={[3.8, 0.08, 0.05]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          
          {/* Reflejos de luz */}
          <mesh position={[-1, 0.8, 0.06]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial 
              color="#FFFFFF" 
              transparent 
              opacity={0.15}
            />
          </mesh>
          <mesh position={[1.2, 0.6, 0.06]}>
            <planeGeometry args={[0.6, 0.6]} />
            <meshBasicMaterial 
              color="#FFFFFF" 
              transparent 
              opacity={0.2}
            />
          </mesh>
        </group>
        
        {/* Pared lateral izquierda */}
        <mesh position={[-10, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[20, 6, 0.2]} />
          <meshStandardMaterial color="#F5E6D3" />
        </mesh>
        
        {/* Ventana en la pared lateral */}
        <group position={[-9.9, 3.5, -3]} rotation={[0, Math.PI / 2, 0]}>
          {/* Marco exterior de la ventana */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 2, 0.15]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          
          {/* Vidrio */}
          <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[2.8, 1.8]} />
            <meshStandardMaterial 
              color="#87CEEB" 
              transparent 
              opacity={0.3}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          
          {/* Marco divisor horizontal */}
          <mesh position={[0, 0, 0.08]}>
            <boxGeometry args={[2.8, 0.08, 0.05]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          
          {/* Marco divisor vertical */}
          <mesh position={[0, 0, 0.08]}>
            <boxGeometry args={[0.08, 1.8, 0.05]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          
          {/* Reflejo de luz en el vidrio */}
          <mesh position={[0.5, 0.5, 0.06]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial 
              color="#FFFFFF" 
              transparent 
              opacity={0.2}
            />
          </mesh>
        </group>
        
        {/* Pizarra */}
        <mesh position={[0, 3.5, -9.8]}>
          <boxGeometry args={[6, 2.5, 0.1]} />
          <meshStandardMaterial color="#2C5F2D" roughness={0.3} />
        </mesh>
        
        {/* Marco de la pizarra */}
        <mesh position={[0, 3.5, -9.7]}>
          <boxGeometry args={[6.2, 2.7, 0.05]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Fígaro en el pizarrón */}
        <Html position={[0, 3.5, -9.6]} center transform>
          <div className="pointer-events-none" style={{ width: '200px', height: '250px' }}>
            <img 
              src="/assets/figaro/figaro-cropped.png" 
              alt="Fígaro"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
              }}
            />
          </div>
        </Html>
        
        {/* Texto de bienvenida en el pizarrón */}
        <Html position={[0, 2.2, -9.6]} center>
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border-2 border-gray-800 max-w-xs pointer-events-none">
            <p className="text-xs text-gray-800 font-semibold text-center">
              "¡Bienvenidos! Selecciona un estudiante para comenzar"
            </p>
          </div>
        </Html>
        
        {/* Escritorio del profesor */}
        <group position={[0, 0, -7]}>
          <mesh position={[0, 0.5, 0]} castShadow>
            <boxGeometry args={[3, 0.1, 1.5]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[-1, 0.25, 0]} castShadow>
            <boxGeometry args={[0.1, 0.5, 0.1]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          <mesh position={[1, 0.25, 0]} castShadow>
            <boxGeometry args={[0.1, 0.5, 0.1]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
        </group>
        
        {/* Pupitres (simples) */}
        {/* Fila 1 */}
        <Desk position={[-3, 0, -2]} />
        <Desk position={[0, 0, -2]} />
        <Desk position={[3, 0, -2]} />
        
        {/* Fila 2 */}
        <Desk position={[-3, 0, 1]} />
        <Desk position={[0, 0, 1]} />
        <Desk position={[3, 0, 1]} />
        
        {/* Fila 3 */}
        <Desk position={[-3, 0, 4]} />
        <Desk position={[0, 0, 4]} />
        <Desk position={[3, 0, 4]} />
        
        {/* Los 3 Estudiantes Principales */}
        <Student 
          position={[-3, 0, 1]} 
          type="apatico" 
          onClick={handleStudentClick}
          isSelected={selectedStudent === 'apatico'}
        />
        
        <Student 
          position={[3, 0, -2]} 
          type="problematico" 
          onClick={handleStudentClick}
          isSelected={selectedStudent === 'problematico'}
        />
        
        <Student 
          position={[0, 0, 4]} 
          type="genio" 
          onClick={handleStudentClick}
          isSelected={selectedStudent === 'genio'}
        />
        
        {/* Controles de cámara */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={8}
          maxDistance={25}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

// Componente de piso con textura de baldosas
function TiledFloor() {
  // Crear textura procedural de baldosas
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')!
    
    // Color base beige
    ctx.fillStyle = '#E8DCC4'
    ctx.fillRect(0, 0, 512, 512)
    
    // Dibujar líneas de baldosas
    const tileSize = 128
    ctx.strokeStyle = '#D4C4A8'
    ctx.lineWidth = 3
    
    // Líneas verticales
    for (let x = 0; x <= 512; x += tileSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 512)
      ctx.stroke()
    }
    
    // Líneas horizontales
    for (let y = 0; y <= 512; y += tileSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(512, y)
      ctx.stroke()
    }
    
    // Agregar variación de color a cada baldosa
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        const variation = Math.random() * 10 - 5
        const brightness = 232 + variation
        ctx.fillStyle = `rgb(${brightness}, ${Math.floor(brightness * 0.9)}, ${Math.floor(brightness * 0.8)})`
        ctx.globalAlpha = 0.1
        ctx.fillRect(x * tileSize + 2, y * tileSize + 2, tileSize - 4, tileSize - 4)
      }
    }
    
    const canvasTexture = new THREE.CanvasTexture(canvas)
    canvasTexture.wrapS = THREE.RepeatWrapping
    canvasTexture.wrapT = THREE.RepeatWrapping
    canvasTexture.repeat.set(5, 5)
    
    return canvasTexture
  }, [])
  
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, 0, 0]} 
      receiveShadow
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial 
        map={texture}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  )
}

// Componente auxiliar para pupitres
function Desk({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Superficie */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.8, 0.05, 0.6]} />
        <meshStandardMaterial color="#A0826D" />
      </mesh>
      {/* Patas */}
      <mesh position={[-0.3, 0.3, -0.2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[0.3, 0.3, -0.2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[-0.3, 0.3, 0.2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[0.3, 0.3, 0.2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
    </group>
  )
}
