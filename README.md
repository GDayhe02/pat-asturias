# Mapa interactivo del PAT Asturias

Sitio estático generado con qgis2web y OpenLayers.

## Publicación

El workflow de GitHub Pages publica automáticamente el contenido de la rama `main` al subir cambios. En el repositorio, configura **Settings → Pages → Source: GitHub Actions**.

## Capa de hábitats

Los datos de hábitats se descargan de forma diferida y están almacenados como `layers/Habitats_Interes_Comunitario_5000_8.geojson.gz` para mantener el archivo por debajo del límite de tamaño de GitHub. La capa se descomprime en el navegador cuando se activa; requiere un navegador moderno con `DecompressionStream`.
