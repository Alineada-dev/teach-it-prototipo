#!/bin/bash

# Script para configurar Git LFS en el proyecto TEACH-IT
# Ejecutar después de instalar Git LFS con: brew install git-lfs

echo "🚀 Configurando Git LFS para TEACH-IT..."

# 1. Inicializar Git LFS en el repositorio
echo "📦 Inicializando Git LFS..."
git lfs install

# 2. Trackear archivos PNG grandes
echo "🖼️  Configurando tracking de imágenes PNG..."
git lfs track "public/assets/screens/*.png"

# 3. Trackear archivos de video
echo "🎥 Configurando tracking de videos..."
git lfs track "public/assets/videos/*.mp4"
git lfs track "public/assets/videos/*.webm"
git lfs track "public/assets/videos/*.mov"

# 4. Trackear otros archivos grandes si existen
git lfs track "*.psd"
git lfs track "*.ai"

# 5. Asegurar que .gitattributes esté en el repo
echo "📝 Agregando .gitattributes al repositorio..."
git add .gitattributes

echo ""
echo "✅ Git LFS configurado exitosamente!"
echo ""
echo "📊 Archivos que serán manejados por LFS:"
git lfs track
echo ""
echo "⚠️  IMPORTANTE: Antes de hacer commit, verifica que tienes espacio en GitHub LFS"
echo "   - Plan gratuito: 1GB storage + 1GB bandwidth/mes"
echo "   - Tamaño actual de assets: ~138MB"
echo ""
echo "🔄 Próximos pasos:"
echo "   1. git add ."
echo "   2. git commit -m 'Configurar Git LFS para assets grandes'"
echo "   3. git push"
echo ""
echo "💡 Para verificar el estado de LFS: git lfs ls-files"
