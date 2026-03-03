# React Landing Page

Landing page profesional y moderna construida con React, Tailwind CSS y las mejores prácticas de desarrollo.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- **Modo Claro/Oscuro**: Sistema de temas con persistencia en localStorage
- **Responsive**: Diseño adaptable para todos los dispositivos
- **Animaciones CSS**: Transiciones suaves y animaciones optimizadas con Tailwind
- **Imágenes Dinámicas**: Integración con Pexels API para contenido visual
- **Galería con Lightbox**: Vista previa de imágenes en pantalla completa
- **Formulario de Contacto**: Con validación y manejo de estados
- **Clean Code**: Código limpio, organizado y bien documentado
- **Performance Optimizado**: Lazy loading, code splitting y caché inteligente

## 🛠️ Tecnologías Utilizadas

- **React 16.13.1** - Biblioteca de UI
- **Tailwind CSS 3.4.1** - Framework de estilos utility-first con animaciones CSS personalizadas
- **React Icons** - Iconografía moderna
- **Axios** - Cliente HTTP
- **React Image Lightbox** - Galería de imágenes
- **Pexels API** - Imágenes y videos de alta calidad

## 📦 Instalación

1. **Verificar versión de Node**

```bash
# Si usas nvm (Node Version Manager)
nvm use 16.20.2

# O verifica que tengas la versión correcta
node --version  # Debe mostrar v16.20.2
```

2. **Clonar el repositorio**

```bash
git clone https://github.com/EfeDeveloper/LandingPageReact.git
cd LandingPageReact
```

3. **Instalar dependencias**

```bash
npm install
```

4. **Configurar variables de entorno**

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env y agregar tu Pexels API key
# Api key gratis en: https://www.pexels.com/api/
```

5. **Iniciar el servidor de desarrollo**

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponibles

### `npm start`

Ejecuta la aplicación en modo desarrollo.
La página se recargará automáticamente al hacer cambios.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.
Optimiza el build para mejor performance.

### `npm test`

Ejecuta los tests en modo watch.

## 🎨 Personalización

### Cambiar Contenido

Edita el archivo `src/data/data.json` para personalizar el contenido de tu landing page:

- **Header**: Título y descripción principal
- **Features**: Características destacadas (4 items)
- **About**: Información sobre tu empresa/proyecto
- **Services**: Servicios que ofreces (6 items)
- **Team**: Miembros del equipo (4 items)
- **Testimonials**: Testimonios de clientes (6 items)
- **Contact**: Información de contacto y redes sociales

### Cambiar Colores

Modifica `tailwind.config.js` para personalizar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#TU_COLOR_AQUI',
        // ...
      }
    }
  }
}
```

### Cambiar Fuentes

1. Importa tu fuente en `public/index.html`
2. Actualiza `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Tu Fuente', 'system-ui', 'sans-serif'],
}
```

## 🌐 Configuración de Pexels API

1. Registrarse en [Pexels](https://www.pexels.com/api/)
2. Obtener tu API key gratuita
3. Agregarla al archivo `.env`:

```bash
REACT_APP_PEXELS_API_KEY=tu_api_key_aqui
```

### Personalizar Búsquedas de Imágenes

Edita `src/utils/constants.js` para cambiar las queries de búsqueda:

```javascript
export const PEXELS_QUERIES = {
  hero: 'tu búsqueda aquí',
  about: 'tu búsqueda aquí',
  // ...
};
```

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes React
│   ├── navigation.jsx
│   ├── header.jsx
│   ├── features.jsx
│   ├── about.jsx
│   ├── services.jsx
│   ├── gallery.jsx
│   ├── testimonials.jsx
│   ├── Team.jsx
│   ├── contact.jsx
│   └── footer.jsx
├── contexts/          # Context API (Theme)
│   └── ThemeContext.jsx
├── services/          # Lógica de API
│   ├── pexels.js
│   └── content.js
├── hooks/             # Custom Hooks
│   └── useScrollSpy.js
├── utils/             # Utilidades y constantes
│   └── constants.js
├── data/              # Datos estáticos
│   └── data.json
├── App.jsx            # Componente principal
├── index.css          # Estilos globales (Tailwind)
└── index.js           # Punto de entrada
```

## 🚀 Deployment

> **Importante**: Este proyecto requiere **Node.js 16.20.2**. Las plataformas de deployment detectan automáticamente esta versión desde los archivos `.nvmrc`, `.node-version` y el campo `engines` en `package.json`.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles

## 👨‍💻 Autor

**Edwin Villa** - [@EfeDeveloper](https://github.com/EfeDeveloper)

---

⭐ Si te gustó este proyecto, por favor dale una estrella en GitHub!
