# Moon Knight · tema para Kino TV

Tema para **toda la app** de Kino (celular y TV) inspirado en Moon Knight: noches de medianoche, luna creciente, el oro de Khonshu y el rojo de Mr. Knight. Incluye tres paletas, un logo vectorial propio y un reproductor lunar.

> **Aviso:** es un tema no oficial hecho por un fan, sin relación con Marvel ni Disney. El logo y el icono son dibujos originales (una luna creciente y un ankh), no el logo oficial del personaje.

Es un plugin de **solo temas**: los temas son datos en `kino-plugin.json` (`appThemes`). No usa la red (`"hosts": []`) y no pide permisos. Guía oficial: <https://kinotvapp.github.io/kino-plugins/themes/>

> Requiere **Kino 0.9.81 o posterior** (`apiVersion` 18). Los bordes los dibuja Kino 0.9.82 o posterior; en 0.9.81 el tema funciona, pero sin bordes.

## Los tres temas

| id | Nombre | Acento | Foco | Carácter |
|---|---|---|---|---|
| `moonknight-moon` | Caballero Luna | plata lunar `#DDE3F0` | oro `#F4D35E` | esquinas muy redondeadas, botones circulares, fundidos lentos (450 ms) y deriva del héroe activa |
| `moonknight-khonshu` | Khonshu | oro `#D4AF37` | blanco | esquinas rectas, bordes dorados de 2 dp, botones cuadrados como tablillas de piedra, experiencia ligera |
| `moonknight-mr-knight` | Señor Caballero | rojo `#F0364A` | blanco | esquinas suaves, botones redondeados, bordes granate, cortes rápidos (220 ms) |

> No cambies nunca un `id` después de publicar: de él cuelgan la elección y los ajustes de cada persona.

## Qué hay en cada parte

- **Logo.** `logo.wordmark` (menú lateral, cabecera del celular, riel abierto de la TV): una luna creciente a la izquierda, «KINO» en bloques con diagonales cortadas y una línea fina bajo las letras con un puntito de estrella en el color de acento. `logo.mark` (riel cerrado de la TV): solo la luna y la estrella. El relleno de la luna y las letras es `textPrimary` y el detalle usa `accent`, así que el logo cambia de color con cada tema. Kino conserva su propio logo en la pantalla de inicio y en las pantallas de decisión.
- **Reproductor.** Botón de play más grande (`playButtonScale` 1,4; 1,5 en TV), barra de reproducción algo más gruesa (1,25; 1,4 en TV) y botones circulares, cuadrados o redondeados según el tema.
- **Tipografía.** Kino no permite cargar una fuente desde un tema (solo escalas): `typography.scale` 1,04 y `titleScale` 1,1 dan títulos algo más grandes; la identidad tipográfica va en el logo.
- **Experiencia.** Caballero Luna y Señor Caballero sugieren la experiencia completa y Khonshu la ligera. Kino pregunta al activar el tema y nada cambia sin tu «sí».
- **Plugins de terceros.** `"pluginColors": "override"`: el tema manda también sobre los colores `theme` de otros plugins. Se puede apagar con el interruptor **Colores de los plugins**.

## Personalizar (Ajustes ▸ Apariencia ▸ Personalizar)

Se puede cambiar el acento (plata, oro, rojo o azul lunar), el color de foco, el redondeo de las tarjetas (0–20), la duración del fundido (0–600 ms), la escala de letra (1,0–1,3) y el fondo.

## Pantalla de presentación

`plugin.js` exporta `screen` y `screenEvent` para una página con un botón por tema (`go.useTheme`). Se abre desde la pestaña de ajustes del plugin con **Ver presentación** y lee `activeTheme` para alternar «Activar» y «Desactivar».

## Archivos

```
kino-plugin.json   manifiesto, tres temas y logos vectoriales
plugin.js          pantalla de presentación (los temas no necesitan código)
icon.png           icono 256×256 del plugin
README.md          este archivo
```

## Probar

Con el kit oficial de plugins de Kino:

```bash
node sdk/validate.mjs .                                                    # formato y advertencias, celular y TV
node sdk/run.mjs --context '{"activeTheme":"moonknight-moon"}' . screen    # pantalla con el tema activo
```

Los tres temas ya cumplen en mis comprobaciones las protecciones de legibilidad de Kino (fondo oscuro, `accent` y `focus` ≥ 3:1 sobre el fondo, `onAccent` y texto ≥ 4,5:1), pero confirma con el validador oficial y mira el resultado en **Ajustes ▸ Apariencia** antes de publicar. El logo usa arcos SVG que no pude rasterizar en mi entorno: revísalo en la vista previa.

## Publicar

1. Sube la carpeta a un repositorio de GitHub.
2. Sigue <https://kinotvapp.github.io/kino-plugins/publish/>.
3. `categories: ["themes"]` lo lista en **Temas** en la tienda de plugins.

El manifiesto pesa unos 12 KB de los 16 KB permitidos.

## Propuesta visual del icono (`icon.png`)

- **Fondo:** cielo nocturno en degradado de negro a azul medianoche, con estrellas de varios tamaños.
- **Símbolo:** una luna creciente plateada con un halo azul suave, y un ankh dorado dentro de su boca (guiño a Khonshu).
- **Marco:** doble borde fino, plata por fuera y oro por dentro.

Puedes reemplazarlo por un PNG tuyo cuadrado de hasta 128 KB con el mismo nombre `icon.png`.
