#!/bin/bash

# Script para descargar pantallas de Figma
# Las pantallas principales del flujo P-02 a P-28

# P-02 Bienvenida con Fígaro
curl -o public/assets/screens/p02-bienvenida.png "http://localhost:3845/assets/5c9238933c5b1e3cc6226dd2172fb35260cabb8f.png"

# Salón isométrico
curl -o public/assets/screens/salon-isometrico.png "http://localhost:3845/assets/bbfabbc38f99431fd2287ac40cc46980cfc1011e.png"

echo "Descarga completada"
