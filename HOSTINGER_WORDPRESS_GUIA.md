# Guía de Carga y Compatibilidad con Hostinger y WordPress
## Coslink Global — Plataforma Web

Este proyecto ha sido optimizado para ser **100% compatible con Hostinger** (tanto en alojamiento web estándar LiteSpeed/Apache como junto a una instalación de WordPress).

---

### ¿Por qué ya es compatible?
1. **Rutas Relativas (`base: './'`)**: En `vite.config.ts` se configuró `base: './'`, permitiendo que el sitio funcione tanto en la raíz de un dominio (`https://coslink.global/`) como en cualquier subcarpeta de WordPress (`https://tusitio.com/coslink/`).
2. **Archivo `.htaccess` preconfigurado**: En la carpeta `dist/` se incluye automáticamente el archivo `.htaccess` con reglas de reescritura para Single Page Applications (SPA), evitando errores 404 al recargar páginas o secciones.
3. **Optimización de Assets**: Todas las imágenes, estilos CSS minificados y scripts JS se empaquetan en `./assets/` e `./images/`.

---

### Opciones para cargarlo en Hostinger con WordPress:

#### Opción 1: Como Subcarpeta dentro de tu WordPress (Recomendada)
Si ya tienes WordPress funcionando en tu dominio principal (ejemplo: `tusitio.com`):
1. Ejecuta el comando de compilación:
   ```bash
   npm run build
   ```
2. Entra a tu panel de **Hostinger (hPanel)** y abre el **Administrador de Archivos (File Manager)**.
3. Dirígete a la carpeta `public_html/`.
4. Crea una nueva carpeta, por ejemplo `coslink` (o `plataforma`).
5. Sube todo el contenido que está dentro de la carpeta `dist/` a `public_html/coslink/`.
6. ¡Listo! Tu sitio estará disponible en:
   `https://tusitio.com/coslink/`
   *(WordPress respetará automáticamente esa carpeta gracias a que LiteSpeed/Apache verifica si el directorio existe antes de ejecutar WordPress).*

---

#### Opción 2: En un Subdominio en Hostinger (Más Profesional)
1. En Hostinger hPanel ve a **Dominios** $\rightarrow$ **Subdominios**.
2. Crea el subdominio, por ejemplo: `plataforma.coslink.global` o `app.coslink.global`.
3. En el Administrador de Archivos, entra a la carpeta creada para ese subdominio (generalmente `public_html/plataforma/`).
4. Sube todos los archivos y carpetas de `dist/`.
5. Tu sitio funcionará de forma independiente con certificado SSL automático de Hostinger.

---

#### Opción 3: Incrustado dentro de una Página de WordPress (Elementor o Bloques)
Si quieres que aparezca dentro del menú y diseño de tu tema de WordPress:
1. Sube los archivos a `public_html/coslink/` como en la Opción 1.
2. En tu panel de administración de WordPress (`wp-admin`), crea una nueva Página.
3. Agrega un bloque de **HTML Personalizado** (o widget HTML en Elementor / Divi):
   ```html
   <iframe 
     src="/coslink/" 
     style="width: 100%; height: 100vh; border: none; display: block;" 
     allow="fullscreen"
     title="Coslink Global">
   </iframe>
   ```
4. Guarda y publica la página.

---

### Enlaces configurados en el proyecto:
- **WhatsApp Directo**: `https://wa.link/71ruf0`
- **Facebook**: `https://www.facebook.com/search/top?q=coslink%20global`
- **Instagram**: `https://www.instagram.com/coslink.global/`
- **LinkedIn**: `https://www.linkedin.com/company/108403984/admin/dashboard/`
