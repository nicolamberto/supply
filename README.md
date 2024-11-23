# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




<!-- 

Solucion para el problemas de rutas con vercel

Este error ocurre porque Vercel no está configurado para manejar rutas que no sean la raíz (/). Cuando cargas una ruta directamente, Vercel busca un archivo físico en el servidor para esa URL, y como no lo encuentra, muestra el 404.

Solución:
Debes agregar un archivo vercel.json en la raíz de tu proyecto con esta configuración para que todas las rutas sean manejadas por React Router:

json
Copiar código
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
Este archivo redirige todas las solicitudes al archivo index.html para que React Router pueda manejarlas. Luego, vuelve a desplegar tu proyecto. -->