// Configuración general de la aplicación

// API Keys - En producción usar variables de entorno
export const PEXELS_API_KEY =
  process.env.REACT_APP_PEXELS_API_KEY || 'YOUR_PEXELS_API_KEY'; // Reemplazar con tu API key de https://www.pexels.com/api/

// Configuración de API
export const PEXELS_API_BASE_URL = 'https://api.pexels.com/v1';
export const PEXELS_VIDEO_API_URL = 'https://api.pexels.com/videos';

// Configuración de caché
export const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

// Límites de contenido
export const DEFAULT_IMAGES_PER_PAGE = 15;
export const GALLERY_ITEMS_COUNT = 9;

// Queries de búsqueda para Pexels
export const PEXELS_QUERIES = {
  hero: 'business technology',
  about: 'business team meeting',
  services: 'technology workspace',
  team: 'professional portrait',
  testimonials: 'happy customer',
  gallery: {
    technology: 'modern technology',
    business: 'business innovation',
    team: 'team collaboration',
    office: 'modern office',
    digital: 'digital transformation',
    startup: 'startup workspace',
  },
};

// Theme configuration
export const THEME_STORAGE_KEY = 'landing-theme';
export const DEFAULT_THEME = 'light';
