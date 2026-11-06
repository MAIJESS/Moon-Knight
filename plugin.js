// Moon Knight · tema para Kino TV (apiVersion 18)
//
// Los temas viven como datos en kino-plugin.json (appThemes): no corren código,
// no usan la red y no piden permisos. Este archivo solo dibuja una pantalla de
// presentación con un botón por tema (go.useTheme). Ajustes ▸ Apariencia sigue
// siendo la vía principal para activarlos.

const THEMES = [
  { id: "moonknight-moon", es: "Caballero Luna", en: "Moon Knight" },
  { id: "moonknight-khonshu", es: "Khonshu", en: "Khonshu" },
  { id: "moonknight-mr-knight", es: "Señor Caballero", en: "Mr. Knight" },
];

export async function screen({ activeTheme }) {
  const buttons = THEMES.map((t) => {
    const on = activeTheme === t.id;
    return {
      type: "ElevatedButton",
      key: "theme-" + t.id,
      icon: on ? "check" : "star",
      labelText: on ? t.es + " · activo (desactivar)" : "Activar " + t.es,
      labelTextEn: on ? t.en + " · on (turn off)" : "Turn on " + t.en,
      onPressed: { go: { useTheme: { theme: on ? null : t.id } } },
    };
  });

  return {
    type: "SingleChildScrollView",
    children: [
      {
        type: "Column",
        padding: 16,
        gap: 12,
        children: [
          { type: "Badge", text: "TEMA INSPIRADO EN MOON KNIGHT", textEn: "MOON KNIGHT INSPIRED THEME", color: "primary" },
          { type: "Text", text: "Luna creciente", textEn: "Crescent moon", style: "h1" },
          {
            type: "Text",
            text: "Tres noches para toda la app: plata, oro y sangre.",
            textEn: "Three nights for the whole app: silver, gold and blood.",
            style: "caption",
            color: "muted",
          },
          { type: "Divider" },
          {
            type: "Card",
            variant: "outlined",
            key: "about",
            children: [
              {
                type: "Text",
                text: "Fondos de medianoche, luna creciente en el logo, reproductor circular y un acento distinto en cada tema.",
                textEn: "Midnight backgrounds, a crescent moon in the logo, a circular player and a different accent in each theme.",
              },
            ],
          },
          { type: "Column", gap: 8, crossAxisAlignment: "stretch", children: buttons },
          {
            type: "Text",
            text: "También puedes cambiarlo en Ajustes ▸ Apariencia. Tema no oficial hecho por un fan; sin relación con Marvel.",
            textEn: "You can also switch it in Settings ▸ Appearance. Unofficial fan-made theme; not affiliated with Marvel.",
            style: "caption",
            color: "muted",
          },
        ],
      },
    ],
  };
}

export async function screenEvent() {
  // go.useTheme lo resuelve Kino directamente desde la pulsación del botón.
  return null;
}
