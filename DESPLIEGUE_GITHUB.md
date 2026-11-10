# Solución al error de pantalla en blanco en GitHub Pages

## ¿Por qué se veía la pantalla en blanco?

Hay 2 causas muy comunes por las cuales una aplicación de **React + Vite** se ve en blanco al subirla a GitHub:

1. **GitHub Pages intentó servir los archivos sin compilar:**
   Si en GitHub configuraste Pages como `Deploy from a branch > main / (root)`, GitHub sirve el archivo `index.html` original que contiene `<script src="/src/main.tsx">`. Los navegadores **no entienden TypeScript ni JSX (`.tsx`) directamente**, por lo que fallan al cargar y la pantalla queda en blanco.
   👉 **Solución:** GitHub debe compilar el proyecto (`npm run build`) y publicar únicamente la carpeta `dist`.

2. **Rutas absolutas:**
   Al desplegar en `https://usuario.github.io/nombre-repositorio/`, las imágenes o scripts que apuntan a `/assets/...` buscan en la raíz del dominio `usuario.github.io/assets/...` en lugar de la subcarpeta del repositorio.
   👉 **Ya solucionado:** Se configuraron todas las rutas relativas (`./`) y `base: './'` en `vite.config.ts`.

---

## Cómo solucionarlo en GitHub (Paso a paso)

Ya te dejamos configurado el flujo automatizado en `.github/workflows/deploy.yml`. Solo debes activar **GitHub Actions** en tu repositorio:

### Método 1: GitHub Actions (Recomendado y 100% Automático)

1. Ve a tu repositorio en GitHub.
2. Haz clic en la pestaña **Settings** (Configuración del repositorio).
3. En el menú lateral izquierdo, entra a **Pages** (dentro de "Code and automation").
4. En la sección **Build and deployment**:
   - En **Source**, cambia de *"Deploy from a branch"* a **"GitHub Actions"**.
5. Ahora haz un `git add .`, `git commit -m "Configurar despliegue GitHub Pages"` y `git push origin main`.
6. Ve a la pestaña **Actions** en tu repositorio: verás que se ejecuta automáticamente el flujo de compilación y publicación.
7. Al terminar (aprox. 1 minuto), tu página estará funcionando perfectamente sin pantalla en blanco.

---

### Método 2: Despliegue manual con la carpeta `dist`

Si prefieres no usar GitHub Actions:
1. En tu computadora ejecuta:
   ```bash
   npm run build
   ```
2. Esto generará la carpeta `dist/`.
3. Sube el contenido de esa carpeta `dist/` a la rama `gh-pages` de tu repositorio (puedes usar el paquete `gh-pages`: `npx gh-pages -d dist`).
4. En **Settings > Pages**, selecciona la rama `gh-pages` como origen.
