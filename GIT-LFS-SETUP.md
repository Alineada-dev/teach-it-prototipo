# 📦 Configuración de Git LFS para TEACH-IT

## ¿Por qué Git LFS?

El proyecto tiene **138MB** de imágenes en `public/assets/screens/`, lo cual es demasiado para Git normal.
Git LFS (Large File Storage) permite versionar archivos grandes de manera eficiente.

## 🚀 Instalación

### macOS (con Homebrew)
```bash
brew install git-lfs
```

### Otras opciones
- Descargar desde: https://git-lfs.github.com/
- Con MacPorts: `port install git-lfs`

## ⚙️ Configuración Automática

Ejecuta el script incluido:
```bash
cd teach-it
./setup-git-lfs.sh
```

## 📝 Configuración Manual

Si prefieres hacerlo manualmente:

```bash
# 1. Inicializar Git LFS
git lfs install

# 2. Trackear archivos grandes
git lfs track "public/assets/screens/*.png"
git lfs track "public/assets/videos/*.mp4"

# 3. Agregar .gitattributes
git add .gitattributes

# 4. Commit y push
git add .
git commit -m "Configurar Git LFS para assets"
git push
```

## 📊 Límites de GitHub LFS (Plan Gratuito)

- **Storage**: 1GB
- **Bandwidth**: 1GB/mes
- **Tamaño actual**: ~138MB ✅

## ✅ Verificación

```bash
# Ver archivos trackeados por LFS
git lfs ls-files

# Ver estado de LFS
git lfs status
```
