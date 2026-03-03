import {
  fetchImages,
  fetchRandomImage,
  fetchHeroVideo,
  clearOldCache as clearPexelsCache,
} from './pexels';
import { PEXELS_QUERIES } from '../utils/constants';

/**
 * Enriquecer datos del JSON con imágenes de Pexels
 * @param {Object} data - Datos del JSON
 * @returns {Promise<Object>} - Datos enriquecidos con URLs de imágenes
 */
export const enrichDataWithImages = async (data) => {
  try {
    const enrichedData = { ...data };

    // Obtener video para hero
    const heroVideo = await fetchHeroVideo(PEXELS_QUERIES.hero);
    if (heroVideo) {
      enrichedData.Header = {
        ...enrichedData.Header,
        videoUrl: heroVideo.url,
        videoPoster: heroVideo.image,
      };
    }

    // Obtener imagen para About
    const aboutImage = await fetchRandomImage(PEXELS_QUERIES.about);
    if (aboutImage) {
      enrichedData.About = {
        ...enrichedData.About,
        image: aboutImage.src,
      };
    }

    // Obtener imágenes para Gallery (múltiples categorías)
    const galleryCategories = [
      { query: PEXELS_QUERIES.gallery.technology, name: 'Technology', count: 3 },
      { query: PEXELS_QUERIES.gallery.business, name: 'Business', count: 3 },
      { query: PEXELS_QUERIES.gallery.digital, name: 'Digital', count: 3 },
    ];

    const galleryPromises = galleryCategories.map((cat) =>
      fetchImages(cat.query, cat.count).then((images) =>
        images.map((img) => ({
          largeImage: img.src,
          smallImage: img.thumbnail,
          category: cat.name,
        })),
      ),
    );

    const galleryResults = await Promise.all(galleryPromises);
    const allGalleryImages = galleryResults.flat();

    if (allGalleryImages.length > 0) {
      enrichedData.Gallery = allGalleryImages.map((img, index) => ({
        ...img,
        title: `Proyecto ${index + 1}`,
      }));
    }

    // Obtener imágenes para Team
    const teamImages = await fetchImages(PEXELS_QUERIES.team, 4);
    if (teamImages.length > 0 && enrichedData.Team) {
      enrichedData.Team = enrichedData.Team.map((member, index) => ({
        ...member,
        img: teamImages[index]?.thumbnail || member.img,
      }));
    }

    // Obtener imágenes para Testimonials
    const testimonialImages = await fetchImages(PEXELS_QUERIES.testimonials, 6);
    if (testimonialImages.length > 0 && enrichedData.Testimonials) {
      enrichedData.Testimonials = enrichedData.Testimonials.map((testimonial, index) => ({
        ...testimonial,
        img: testimonialImages[index]?.thumbnail || testimonial.img,
      }));
    }

    return enrichedData;
  } catch (error) {
    console.error('Error enriching data with images:', error);
    // Retornar datos originales en caso de error
    return data;
  }
};

/**
 * Obtener URL del video hero
 * @returns {Promise<string|null>} - URL del video
 */
export const getVideoUrl = async () => {
  try {
    const video = await fetchHeroVideo(PEXELS_QUERIES.hero);
    return video ? video.url : null;
  } catch (error) {
    console.error('Error getting video URL:', error);
    return null;
  }
};

/**
 * Limpiar caché antiguo de Pexels
 */
export const clearOldCache = () => {
  clearPexelsCache();
};
