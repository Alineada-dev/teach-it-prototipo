# 🎮 Presentación Interactiva Completa - TEACH-IT

## 📋 Descripción

Presentación interactiva completa del sistema TEACH-IT que incluye todas las pantallas del flujo del juego educativo, desde la bienvenida hasta la finalización de una ronda.

## 🎯 Características

### Pantallas Implementadas

1. **Pantalla de Inicio** (`PantallaInicio`)
   - Bienvenida al sistema
   - Opciones para comenzar o salir
   - Información básica del juego (3 jugadores, 3 rondas)

2. **Pantalla de Bienvenida** (`PantallaBienvenida`)
   - Presentación de Fígaro (guía del juego)
   - Pregunta sobre conocimiento de competencias docentes
   - Opciones interactivas

3. **Pantalla de Competencias** (`PantallaCompetencias`)
   - Explicación de las 6 competencias docentes
   - Visualización con colores distintivos
   - Descripciones breves de cada competencia

4. **Pantalla del Salón** (`PantallaSalon`)
   - Vista del salón de clases
   - 3 estudiantes interactivos (El Apático, El Problemático, El Genio)
   - Indicadores de dificultad
   - Guía de Fígaro

5. **Pantalla de Perfil de Estudiante** (`PantallaPerfilEstudiante`)
   - Información detallada del estudiante seleccionado
   - Características principales
   - Frases típicas
   - Contexto educativo
   - Nivel de dificultad

6. **Pantalla de Selección de Competencia** (`PantallaSeleccionCompetencia`)
   - 6 rombos de competencias
   - Competencias activas/inactivas según el estudiante
   - Animaciones de selección
   - Leyenda explicativa

7. **Pantalla de Reflexión** (`PantallaReflexion`)
   - Pregunta de reflexión específica
   - Área de notas opcional
   - Instrucciones para la discusión
   - Modal de confirmación

8. **Pantalla Final** (`PantallaFinal`)
   - Mensaje de felicitación
   - Estadísticas de la sesión
   - Próximos pasos
   - Opciones para reiniciar o volver al inicio

## 🎨 Características Técnicas

### Navegación
- **Navegación superior**: Botones anterior/siguiente
- **Indicadores de progreso**: Puntos en la parte inferior
- **Contador de pantallas**: X/8 pantallas
- **Botón de inicio**: Regreso rápido a la página principal

### Animaciones
- Transiciones suaves entre pantallas (Framer Motion)
- Animaciones de entrada para cada elemento
- Efectos hover en elementos interactivos
- Animaciones de selección

### Interactividad
- Selección de estudiantes con feedback visual
- Selección de competencias con estados activo/inactivo
- Área de notas para reflexiones
- Modales de confirmación

### Diseño Responsivo
- Adaptable a diferentes tamaños de pantalla
- Grid responsivo para competencias
- Texto escalable
- Imágenes optimizadas

## 🚀 Cómo Usar

### Acceso
1. Ir a la página principal: `http://localhost:3000`
2. Hacer clic en el botón **"🎮 PRESENTACIÓN COMPLETA"**
3. O acceder directamente a: `http://localhost:3000/presentacion`

### Navegación
- **Flechas superiores**: Navegar entre pantallas
- **Puntos inferiores**: Saltar a una pantalla específica
- **Botón Home**: Regresar a la página principal
- **Interacciones**: Hacer clic en elementos para avanzar automáticamente

### Flujo Recomendado
1. Leer la pantalla de inicio
2. Conocer a Fígaro en la bienvenida
3. Aprender sobre las competencias docentes
4. Seleccionar un estudiante en el salón
5. Revisar el perfil del estudiante
6. Elegir una competencia docente
7. Reflexionar sobre la pregunta
8. Ver el mensaje final y estadísticas

## 🎯 Datos de los Estudiantes

### El Apático (😴)
- **Dificultad**: ⭐⭐ (Media)
- **Color**: #A8C5C7 (Azul claro)
- **Características**: Desmotivado, llega tarde, bajo rendimiento
- **Competencias activas**: 4 de 6

### El Problemático (😈)
- **Dificultad**: ⭐⭐⭐ (Alta)
- **Color**: #E89B9B (Rojo claro)
- **Características**: Disruptivo, manipulador, genera conflictos
- **Competencias activas**: 4 de 6

### El Genio (🤓)
- **Dificultad**: ⭐ (Baja)
- **Color**: #F4D06F (Amarillo)
- **Características**: Sobresaliente, organizado, se aburre
- **Competencias activas**: 4 de 6

## 🎨 Competencias Docentes

1. **Planeación y Organización** (#FF6B6B - Rojo)
2. **Compromiso y Ética Docente** (#4ECDC4 - Turquesa)
3. **Integración de Saberes Profesionales** (#FFE66D - Amarillo)
4. **Innovación en la Enseñanza** (#95E1D3 - Verde agua)
5. **Construcción de Ambientes de Aprendizaje** (#F38181 - Rosa)
6. **Evaluación del Aprendizaje con Enfoque Formativo** (#AA96DA - Morado)

## 📝 Preguntas de Reflexión

Cada competencia tiene una pregunta específica adaptada al estudiante seleccionado:

- **Planeación**: ¿Cómo reorganizar la planeación?
- **Compromiso**: ¿Qué acciones éticas tomar?
- **Integración**: ¿Cómo integrar diferentes saberes?
- **Innovación**: ¿Qué estrategias innovadoras implementar?
- **Construcción**: ¿Cómo construir un ambiente favorable?
- **Evaluación**: ¿Qué tipo de evaluación formativa aplicar?

## 🔧 Personalización

### Agregar Nuevos Estudiantes
Editar `PantallaPerfilEstudiante.tsx` y agregar al objeto `perfiles`:

```typescript
nuevo_estudiante: {
  nombre: "Nombre",
  edad: 20,
  semestre: "Xer semestre",
  carrera: "Carrera",
  color: "#HEXCOLOR",
  emoji: "😊",
  dificultad: 2,
  caracteristicas: [...],
  contexto: "...",
  frasesTipicas: [...]
}
```

### Agregar Nuevas Competencias
Editar `PantallaSeleccionCompetencia.tsx` y agregar al array `competencias`:

```typescript
{
  id: "nueva",
  nombre: "Nueva Competencia",
  color: "#HEXCOLOR",
  activa: true
}
```

### Agregar Nuevas Preguntas
Editar `PantallaReflexion.tsx` y agregar al objeto `preguntas`:

```typescript
nueva_competencia: "¿Pregunta de reflexión?"
```

## 🎬 Próximas Mejoras

- [ ] Integración con Supabase para guardar respuestas
- [ ] Sistema de turnos para múltiples jugadores
- [ ] Timer opcional para reflexiones
- [ ] Exportar notas a PDF
- [ ] Modo presentación automática
- [ ] Agregar más estudiantes y perfiles
- [ ] Integrar videos explicativos
- [ ] Sistema de logros y badges
- [ ] Modo multijugador con celulares (tipo Kahoot)

## 📱 Compatibilidad

- ✅ Desktop (1920x1080 recomendado)
- ✅ Tablet (768px+)
- ✅ Móvil (responsive)
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🐛 Solución de Problemas

### Las imágenes no cargan
- Verificar que exista `/public/assets/figaro/figaro-cropped.png`
- Revisar la configuración de Next.js para imágenes

### Las animaciones no funcionan
- Verificar que Framer Motion esté instalado: `npm install framer-motion`

### Errores de compilación
- Ejecutar: `npm install`
- Verificar versión de Next.js: `npm list next`

## 📚 Tecnologías Utilizadas

- **Next.js 16**: Framework React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos
- **Framer Motion**: Animaciones
- **shadcn/ui**: Componentes UI

## 👥 Créditos

Desarrollado para mejorar la educación y apoyar a los profesores en el desarrollo de competencias docentes.

---

**¡Disfruta la presentación! 🎉**
