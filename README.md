# Onboarding ESCALA · v2.7.6

**Fecha:** 26 may 2026  
**Versión:** 2.7.6 · Pregunta 1 quiz 4.3 corregida (cursos Semana 1)

## 🔧 Cambios v2.7.6

- **Pregunta 1 del quiz 4.3** corregida: la opción correcta ahora dice "Ciberseguridad, Ambiental y Seguridad" (3 cursos) en vez de incluir Políticas, ya que las Políticas se completan en Semana 2 según el replan de plazos de v2.7.5.

---

## 🔧 Cambios v2.7.5

- **Texto del casco y chaleco** reescrito a una sola oración corrida: "El casco blanco y el chaleco naranja son tu identificación en sitio, más allá del cumplimiento, son símbolo del estándar de ESCALA frente al cliente y a los contratistas."
- **Frase de bienvenida en la carta del Director General** ("Bienvenido. Estamos muy contentos de que estés aquí.") ya no va en itálica ni en color naranja — usa la misma tipografía y color del resto de la carta.
- **Screenshot de ESCALA Educación** (`assets/screenshots/elearning-login.png`) reemplazado por la versión limpia, sin el mensaje "Su sesión ha excedido el tiempo límite".
- **Replan de plazos de módulos en 4.3** (E-Learning):
  - Semana 1: Ciberseguridad, Compromiso ambiental, Seguridad e Higiene
  - Semana 2: 9 Políticas oficiales ESCALA
  - Semanas 3 y 4: Curso APP
  - Tabla, nota explicativa y 2 quizzes (preguntas 2 y 3) actualizados de forma coherente.

---

## 🔧 Cambios v2.7.4

- **Foto formal de Pedro Valdés** (traje gris + corbata) en la tarjeta de "Accionistas y Dirección General" del bloque superior de 1.8. El resto de unidades sigue con la foto de polo blanco.
- **Foto correcta de Jorge Ávalos Guzmán** en la tarjeta de Desarrollo de Negocios del organigrama STAFF de 1.8 (antes mostraba la foto de Jorge Avalos Carpinteyro). Nombre actualizado a "Jorge Ávalos Guzmán".
- **Banner destacado de Jorge Ávalos Guzmán removido** del inicio de la unidad 1.12 (DDN). La unidad ahora arranca directamente con el párrafo introductorio.

---

## 🔧 Cambios v2.7.3

- **Unidad 4.4 "Políticas internas · Examen obligatorio" ELIMINADA completamente** del proyecto. El examen se moverá a un SCORM independiente. Al completar 4.3 se desbloquea directamente el Bloque 5.
  - Removida del menú lateral, del array `ORDEN_UNIDADES`, de la lógica de progreso
  - Limpieza de funciones JS `iniciarExamen()`, `enviarExamen()` y constante `POLITICAS_KEY` (huérfanas tras eliminación)
- **Curso APP plazo corregido a "Semanas 1-3"** en quiz 4.3 pregunta 2 (antes "Semanas 1-2")
- **Funciones de la OAP reducidas de 7 a 6** en unidad 2.3: punto 5 (LEAN Construction) eliminado, ítems renumerados

---

## 🔧 Cambios v2.7.2

- Nuevo bloque **"Accionistas y Dirección General"** al inicio de la unidad 1.8, antes del organigrama operativo
- 3 tarjetas con foto circular, título, nombre y biografía traducida al español:
  - **Yamal Chamoun** — Fundador · Accionista
  - **Jorge Ávalos** — Accionista · Presidente del Consejo (CEO de Fibra MTY)
  - **Pedro Valdés** — Director General
- Bloque responsive: 3 columnas en desktop, 1 columna en mobile
- Subtítulo "Organigrama operativo" agregado para separar visualmente del bloque anterior
- Nuevas fotos en `assets/team/`: `yamal-chamoun.jpg`, `jorge-avalos-chairman.jpg`

---

## 🔧 Cambios v2.7.1

- **Christian Reyes Armenta** agregado como Director de Proyecto en banderola OPERACIÓN (unidad 1.8)
- **Guillermo Salas Rábago** agregado como Director de Proyecto en banderola OPERACIÓN (unidad 1.8)
- Banderola OPERACIÓN reorganizada a **6 columnas** (responsive: 3 columnas en tablet, 2 columnas en mobile)
- **Foto destacada de Jorge Ávalos Guzmán** agregada al inicio de la unidad 1.12 (DDN), correctamente diferenciada de Jorge Avalos Carpinteyro (que sigue en STAFF de 1.8 como accionista)
- Nuevas fotos en `assets/team/`: `christian-reyes.jpg`, `guillermo-salas.jpg`, `jorge-avalos-guzman.jpg`

---

## 🎯 Cambios v2.7.0 (resumen de 41 ajustes)

### Datos institucionales actualizados
- **+1,000 proyectos** (antes +900) — actualizado en carta del Director, header, KPIs 1.2, y unidad 1.7
- **35 años de trayectoria** (antes 34)
- Eliminada referencia "+50% Escalos con +10 años" (header y unidad 1.2)
- **+220 clientes industriales** como nuevo dato en quiz 1.7
- **Jorge Avalos Carpinteyro** incorporado como nuevo accionista (timeline 2021)
- **PCC creado en 2018** (introducción de unidad 2.4)

### Estructura del onboarding
- **Unidad 1.1 (Bienvenida del Director General)** → narrativa con botón Continuar (sin quiz)
- **Unidad 1.5 (Los Escalos · ADN y valores)** → narrativa con botón Continuar
- **Unidad 1.6 (Nuestra oficina · Monterrey)** → quiz fusionado de 8 preguntas (5 del antiguo 1.5 + 3 de valores)
- **Unidad 1.8 (Directivos y Departamentos)** → organigrama operativo con bandera STAFF y OPERACIÓN, fotos circulares, sin quiz (botón Continuar). Sistemas eliminado del organigrama, RH agregado como placeholder.
- **Unidad 2.1 (5 líneas de servicio)** → narrativa con botón Continuar
- **Unidad 2.2 (4 sectores)** → narrativa con botón Continuar; tabla cambiada a descripciones (sin cifras)
- **Unidad 2.3 (La OAP)** → bloque Lean Construction eliminado, puntos renumerados; tabla de integrantes con fotos circulares (Federico, Ángela, Ana Karen, Leonel, Jaciel, Carlos, Pamela)
- **Unidad 2.4 (PCC)** → sección "Formatos autorizados" y XLSX eliminados

### Quiz ajustados
- Quiz 1.2: pregunta 3 ahora "Más de 1,000"; pregunta 5 (50% del equipo) eliminada → 4 preguntas
- Quiz 1.7: pregunta 4 ahora "clientes industriales" con respuesta +220
- Quiz 1.9: pregunta 7 (EscalaONE) eliminada → 6 preguntas
- Quiz 1.11: pregunta 2 cambiada de laptop a impresora (problema de lógica)
- Quiz 2.3: preguntas 3 y 4 eliminadas → 3 preguntas
- Quiz 2.4: pregunta 5 ahora "2018" como respuesta correcta

### Unidad 1.10 Recursos Humanos
- Curso DC3 enriquecido con explicación STPS
- Nota en "EN TUS VACACIONES" sobre acceso a Intelexion vía RH

### Unidad 1.12 Desarrollo de Negocios
- Todas las ocurrencias **DN → DDN** (19 reemplazos)
- "Coordina con OAP y Administración" → "Coordina con Dirección General"

### Unidad 3.1 Roles
- **KPIs del Director:** Utilidad de proyectos · Desviación de margen · Evaluación de Gerentes
- **KPIs del Gerente:** Satisfacción de Cliente · Cobranza · Auditorías Internas

### Unidad 4.3 Tus módulos asignados
- Banderola "⏱️ Plazo total: 4 semanas para completar todos los cursos"
- Curso APP cambiado a "Semanas 1–3"

### Unidad 4.4 Políticas
- Sección "LAS 9 POLÍTICAS OFICIALES" eliminada (curso completo se toma en ESCALA Educación)
- El examen final de 15 preguntas se mantiene

### Diseño y UX
- **Timeline 1.2 rediseñado** estilo gráfico (Mockup B): línea horizontal naranja con 5 tarjetas equiespaciadas por período, cada una con icono, año, título y subtítulo
- **Carta del Director General** ahora en tipografía Nimbus Sans (antes Georgia + Brush Script para firma)
- **Casco y chaleco naranja**: redacción suavizada ("no son opcionales" → "son tu identificación en sitio")
- **Letras E·S·C·A·L·A** en valores: color hardcoded `#E85C2C` para que no dependa de variables CSS
- **6 tarjetas de proyectos eliminadas** de 1.7: Corning, Vesta, Bájalta, Reforma 35, Nuevo Sur, Resort Riviera Maya
- **Cierre de popup/lightbox huérfano** al cargar la página

### Nuevos archivos en `assets/team/`
- federico-guerra.jpg
- angela-esquivel.jpg
- ana-karen-gonzalez.jpg
- leonel-chavez.jpg
- jaciel-dominguez.jpg
- carlos-navarro.jpg
- pamela-cardenas.jpg

### Eliminados
- `assets/formatos/` (3 XLSX de PCC: FO-PCC-01, FO-PCC-02, FO-PCC-03)

## 🛠️ Herramientas de debug (consola F12)

```javascript
escalaOnboarding.getProgreso();
escalaOnboarding.reset();
escalaOnboarding.completarManual('u-1-1');
escalaOnboarding.marcarTodas();
```

## 🚀 Cómo subir a GitHub

Descomprime el ZIP y sube todo el contenido de `/docs` a la raíz del repo (https://github.com/ehuerta1975/Onboarding), respetando la estructura. GitHub Pages servirá `docs/index.html` como entrada.

## ⚠️ Después de subir, SIEMPRE:

Abre el sitio en **ventana incógnito** (Ctrl+Shift+N) o presiona **Ctrl+Shift+R**.

Para limpiar progreso anterior (consola F12):
```javascript
localStorage.clear();
location.reload();
```

## 📊 Histórico de versiones

- **v2.7.6** (26 may 2026): Pregunta 1 del quiz 4.3 corregida (quitar Políticas de la respuesta correcta)
- **v2.7.5** (26 may 2026): Texto casco/chaleco, frase bienvenida sin itálica, screenshot ESCALA Educación limpio, replan de plazos en 4.3 (4 semanas escalonadas)
- **v2.7.4** (25 may 2026): Foto formal de Pedro Valdés solo en bloque Accionistas; foto correcta de Jorge Ávalos Guzmán en STAFF; banner DDN removido
- **v2.7.3** (25 may 2026): Unidad 4.4 eliminada (examen se moverá a SCORM externo); OAP de 7 a 6 funciones (LEAN quitado); Curso APP corregido a Semanas 1-3
- **v2.7.2** (25 may 2026): Bloque de Accionistas (Yamal Chamoun, Jorge Ávalos Chairman) y CEO (Pedro Valdés) al inicio de 1.8
- **v2.7.1** (25 may 2026): Christian Reyes y Guillermo Salas agregados al organigrama de OPERACIÓN; foto destacada de Jorge Ávalos Guzmán en 1.12
- **v2.7.0** (25 may 2026): 41 ajustes — actualización integral de contenido, timeline gráfico, organigrama Staff/Operación, KPIs, fotos de equipo OAP
- **v2.6.3** (24 may 2026): Fix botones Verificar + Fix rutas de fuentes
- **v2.6.2** (24 may 2026): Sin botones "Marcar" + Continuar narrativas + Pre-ingreso informativo
- **v2.6.1 / 2.6 / 2.5 / 2.4 / 2.3 / 2.2**: versiones previas
