#!/bin/bash

# Script para descargar todas las pantallas del flujo de Figma

echo "🎨 Descargando todas las pantallas de Figma..."

# Pantallas principales del flujo
curl -o p00-portada.png "http://localhost:3845/assets/e368e2a7422b8fc5337a7bbf003c8eb9ab309d68.png"
curl -o p01-inicio.png "http://localhost:3845/assets/e368e2a7422b8fc5337a7bbf003c8eb9ab309d68.png"
curl -o p02-bienvenida.png "http://localhost:3845/assets/5c9238933c5b1e3cc6226dd2172fb35260cabb8f.png"
curl -o p03-que-es.png "http://localhost:3845/assets/657e0648ac70b52885952e48fdb7eef44e889712.png"
curl -o p04-explicacion.png "http://localhost:3845/assets/657e0648ac70b52885952e48fdb7eef44e889712.png"
curl -o p05-salon-isometrico.png "http://localhost:3845/assets/bbfabbc38f99431fd2287ac40cc46980cfc1011e.png"
curl -o p06-perfil-estudiante.png "http://localhost:3845/assets/5c9238933c5b1e3cc6226dd2172fb35260cabb8f.png"
curl -o p07-competencias.png "http://localhost:3845/assets/657e0648ac70b52885952e48fdb7eef44e889712.png"
curl -o p08-reflexion.png "http://localhost:3845/assets/657e0648ac70b52885952e48fdb7eef44e889712.png"

echo "✅ Descarga completada!"
echo "📊 Total de pantallas descargadas: 9"
