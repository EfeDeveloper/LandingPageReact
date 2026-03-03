import axios from 'axios';
import {
  PEXELS_API_KEY,
  PEXELS_API_BASE_URL,
  PEXELS_VIDEO_API_URL,
  CACHE_DURATION,
  DEFAULT_IMAGES_PER_PAGE,
} from '../utils/constants';

// Cliente HTTP configurado para Pexels API
const pexelsClient = axios.create({
  baseURL: PEXELS_API_BASE_URL,
  headers: {
    Authorization: PEXELS_API_KEY,
  },
});

const pexelsVideoClient = axios.create({
  baseURL: PEXELS_VIDEO_API_URL,
  headers: {
    Authorization: PEXELS_API_KEY,
  },
});

// Utilidad para manejar caché en localStorage
const cache = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;

      const { data, timestamp } = JSON.parse(item);
      const now = Date.now();

      // Verificar si el caché ha expirado
      if (now - timestamp > CACHE_DURATION) {
        localStorage.removeItem(key);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error reading cache:', error);
      return null;
    }
  },

  set: (key, data) => {
    try {
      const item = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  },
};

/**
 * Buscar imágenes en Pexels
 * @param {string} query - Término de búsqueda
 * @param {number} perPage - Cantidad de imágenes por página
 * @returns {Promise<Array>} - Array de objetos de imagen
 */
export const fetchImages = async (query, perPage = DEFAULT_IMAGES_PER_PAGE) => {
  const cacheKey = `pexels_images_${query}_${perPage}`;

  // Intentar obtener del caché primero
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await pexelsClient.get('/search', {
      params: {
        query,
        per_page: perPage,
        orientation: 'landscape',
      },
    });

    const images = response.data.photos.map((photo) => ({
      id: photo.id,
      src: photo.src.large,
      thumbnail: photo.src.medium,
      alt: photo.alt || query,
      photographer: photo.photographer,
      url: photo.url,
    }));

    // Guardar en caché
    cache.set(cacheKey, images);

    return images;
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    // Retornar array vacío en caso de error
    return [];
  }
};

/**
 * Obtener una imagen aleatoria de una búsqueda
 * @param {string} query - Término de búsqueda
 * @returns {Promise<Object|null>} - Objeto de imagen
 */
export const fetchRandomImage = async (query) => {
  try {
    const images = await fetchImages(query, 15);
    if (images.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  } catch (error) {
    console.error('Error fetching random image:', error);
    return null;
  }
};

/**
 * Buscar video para hero section
 * @param {string} query - Término de búsqueda
 * @returns {Promise<Object|null>} - Objeto con URL del video
 */
export const fetchHeroVideo = async (query = 'technology business') => {
  const cacheKey = `pexels_video_${query}`;

  // Intentar obtener del caché primero
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await pexelsVideoClient.get('/search', {
      params: {
        query,
        per_page: 10,
        orientation: 'landscape',
      },
    });

    if (response.data.videos.length === 0) return null;

    // Obtener el primer video con calidad HD
    const video = response.data.videos[0];
    const hdFile = video.video_files.find(
      (file) => file.quality === 'hd' || file.quality === 'sd',
    );

    if (!hdFile) return null;

    const videoData = {
      id: video.id,
      url: hdFile.link,
      image: video.image,
      duration: video.duration,
      width: hdFile.width,
      height: hdFile.height,
    };

    // Guardar en caché
    cache.set(cacheKey, videoData);

    return videoData;
  } catch (error) {
    console.error('Error fetching video from Pexels:', error);
    return null;
  }
};

/**
 * Obtener múltiples imágenes para diferentes queries
 * @param {Object} queries - Objeto con keys y queries
 * @returns {Promise<Object>} - Objeto con keys y arrays de imágenes
 */
export const fetchMultipleQueries = async (queries) => {
  const results = {};

  try {
    const promises = Object.entries(queries).map(async ([key, query]) => {
      const images = await fetchImages(query, 6);
      return [key, images];
    });

    const resolvedPromises = await Promise.all(promises);

    resolvedPromises.forEach(([key, images]) => {
      results[key] = images;
    });

    return results;
  } catch (error) {
    console.error('Error fetching multiple queries:', error);
    return results;
  }
};

// Limpiar caché antiguo
export const clearOldCache = () => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith('pexels_')) {
        const item = localStorage.getItem(key);
        if (item) {
          const { timestamp } = JSON.parse(item);
          if (Date.now() - timestamp > CACHE_DURATION) {
            localStorage.removeItem(key);
          }
        }
      }
    });
  } catch (error) {
    console.error('Error clearing old cache:', error);
  }
};
