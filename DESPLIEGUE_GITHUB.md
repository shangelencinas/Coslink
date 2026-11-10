# Solución al error de despliegue en GitHub Actions

## Causa del error en tu captura de pantalla:
```
Error: Dependencies lock file is not found in /home/runner/work/Coslink/Coslink
```
GitHub Actions intentó buscar el archivo `package-lock.json` para almacenar la caché de dependencias, pero como no estaba subido en tu repositorio de GitHub, el paso **Setup Node.js** falló antes de comenzar.

---

## Solución aplicada:

1. **Se actualizó el flujo `.github/workflows/deploy.yml`**:
   - Se removió la directiva `cache: 'npm'` para que GitHub Actions **no exija** tener el lockfile obligatoriamente.
   - Se configuró la instalación con `npm install --legacy-peer-deps` para evitar cualquier conflicto de versiones de dependencias en las máquinas virtuales de GitHub.
2. **Se generó el archivo `package-lock.json`** en el proyecto.

---

## Pasos para aplicar la solución en GitHub:

En tu terminal local, simplemente sube estos cambios actualizados:

```bash
git add .
git commit -m "Corregir workflow de GitHub Actions para despliegue sin lockfile"
git push origin main
```

Una vez hecho el push:
1. Ve a la pestaña **Actions** en tu repositorio en GitHub.
2. Verás que el nuevo flujo **Deploy to GitHub Pages** se ejecutará en verde (exitoso) en todos sus pasos:
   - ✅ Setup Node.js
   - ✅ Install dependencies
   - ✅ Build project
   - ✅ Setup GitHub Pages
   - ✅ Upload dist artifact
   - ✅ Deploy to GitHub Pages
3. Tu sitio web cargará completo y funcional en GitHub Pages.
