# UI Design System

Sistema de componentes UI reutilizables construido con React, TypeScript y Tailwind CSS. Documentado con Storybook.

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS v3** — tokens de diseño y utilidades
- **Storybook** — documentación interactiva de componentes
- **clsx** — composición de clases condicional
- **Lucide React** — iconografía

## Componentes

| Componente | Descripción | Variantes |
|-----------|-------------|-----------|
| `Button` | Botón con estados y tamaños | primary, secondary, outline, ghost, danger |
| `Badge` | Etiqueta de estado | default, primary, success, warning, danger, outline |
| `Input` | Campo de texto | con label, error, hint, iconos |
| `Card` | Tarjeta con sub-componentes | Header, Title, Description, Content, Footer |
| `Alert` | Mensaje de alerta cerrable | info, success, warning, error |
| `Spinner` | Indicador de carga | sm, md, lg, xl |

## Instalación

```bash
npm install
npm run dev       # App de demostración
npm run storybook # Documentación interactiva
```

## Uso de componentes

```tsx
import { Button, Badge, Input, Card, Alert, Spinner } from './src'

<Button variant="primary" size="md">Confirmar</Button>
<Badge variant="success" dot>Activo</Badge>
<Alert variant="info" title="Info" onClose={() => {}}>Mensaje</Alert>
```

---

Desarrollado por **Ulises Téllez Landón**
