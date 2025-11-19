# 🎓 TEACH-IT - Prototipo Interactivo

Simulación educativa interactiva diseñada para ayudar a docentes a comprender mejor la diversidad de sus estudiantes mediante un juego colaborativo.

## 📖 Descripción

TEACH-IT es una simulación interactiva que permite a los profesores experimentar diferentes escenarios del aula a través de tres perfiles de estudiantes: El Genio, El Problemático y El Apático. Los docentes enfrentan problemáticas reales, reflexionan sobre competencias pedagógicas y aprenden colaborativamente mediante cartas físicas y discusiones grupales.

## ✨ Características

- **61 pantallas interactivas** con navegación fluida y animaciones
- **3 perfiles de estudiantes** con problemáticas únicas
- **Sistema de competencias docentes**: Innovación pedagógica, construcción de ambientes, integración de saberes, evaluación del aprendizaje, y compromiso ético
- **Cartas físicas** para facilitar la discusión grupal
- **Reflexiones pedagógicas** basadas en John Dewey y Carles Monereo
- **Experiencia colaborativa** diseñada para 3 profesores

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **UI Components**: shadcn/ui
- **Diseño**: Figma

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/teach-it-prototipo.git

# Navegar al directorio
cd teach-it-prototipo

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Scripts Disponibles

```bash
npm run dev      # Ejecutar en desarrollo
npm run build    # Construir para producción
npm run start    # Ejecutar en producción
npm run lint     # Verificar código
```

## 📱 Rutas Principales

- `/` - Página principal con selector de temas
- `/presentacion-figma` - **Presentación interactiva completa** (61 pantallas)
- `/presentacion` - Presentación alternativa con componentes React
- `/salon` - Vista isométrica del salón de clases
- `/salon-figma` - Vista del salón con diseño de Figma

## 🎮 Flujo de la Experiencia

1. **Introducción** (9 pantallas): Bienvenida y explicación del concepto
2. **Tutorial del Juego** (14 pantallas): Guía interactiva con Fígaro
3. **Simulación** (32 pantallas): Selección de estudiantes y resolución de problemáticas
4. **Reflexión** (6 pantallas): Cierre pedagógico y despedida

## 🎯 Competencias Docentes

El juego trabaja con 5 competencias clave:

1. **Innovación en la Enseñanza** (Morado)
2. **Construcción de Ambientes de Aprendizaje** (Azul)
3. **Integración de Saberes** (Rosa)
4. **Evaluación del Aprendizaje** (Verde)
5. **Compromiso y Ética Docente** (Beige)

## 📂 Estructura del Proyecto

```
teach-it/
├── src/
│   ├── app/
│   │   ├── presentacion-figma/      # Presentación principal (61 pantallas)
│   │   ├── presentacion/            # Presentación alternativa
│   │   ├── salon/                   # Vista del salón
│   │   └── page.tsx                 # Página principal
│   ├── components/
│   │   ├── presentacion/            # Componentes de presentación
│   │   └── ui/                      # Componentes UI reutilizables
│   └── lib/
├── public/
│   └── assets/
│       └── screens/                 # Imágenes de pantallas (61+)
└── ...
```

## 📄 Documentación

- `CODIGO_COMPLETO_PRESENTACION.md` - Código completo de la presentación (8,195 líneas)
- `PRESENTACION_FIGMA_COMPLETA.md` - Documentación de la implementación
- `RESUMEN_FINAL_COMPLETO.md` - Resumen del proyecto
- `GUIA_RAPIDA.md` - Guía rápida de uso

## 🎨 Diseño

El diseño original fue creado en Figma y exportado como imágenes PNG de alta calidad. Cada pantalla mantiene fidelidad al 100% con el diseño original.

## 👥 Autores

**Por Aline, Pepe y Jorge**

## 🎓 Contexto Pedagógico

Este proyecto se basa en las teorías de:
- **John Dewey**: Aprendizaje experiencial y reflexión
- **Dr. Carles Monereo**: Competencias docentes y formación continua

## 📝 Notas de Desarrollo

- Proyecto desarrollado con Next.js 14 usando App Router
- Todas las pantallas son componentes React con TypeScript
- Navegación implementada con estado local y Framer Motion
- Barra de progreso dinámica con 9 separadores
- Sistema de navegación condicional según elecciones del usuario

## 🔄 Actualizaciones Recientes

- ✅ Corrección de barra de progreso
- ✅ Agregada pantalla Explicación 12 (cartas físicas)
- ✅ Implementadas 61 pantallas interactivas completas
- ✅ Sistema de navegación condicional
- ✅ Documentación completa del código

## 📄 Licencia

Este proyecto es un prototipo educativo desarrollado con fines académicos.

## 🤝 Contribuciones

Este es un prototipo cerrado. Para consultas o sugerencias, contacta a los autores.

---

**Desarrollado con ❤️ para mejorar la educación**
