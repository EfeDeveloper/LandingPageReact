import { useState, useEffect } from 'react';

/**
 * Hook personalizado para scroll spy
 * Detecta qué sección está actualmente visible en el viewport
 * @param {Array<string>} sectionIds - Array de IDs de secciones a observar
 * @param {number} offset - Offset desde el top (útil para navbar fija)
 * @returns {string} - ID de la sección actualmente activa
 */
const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Encontrar qué sección está actualmente en el viewport
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }

      // Si estamos en el top de la página, activar la primera sección
      if (window.scrollY < offset) {
        setActiveSection(sectionIds[0]);
      }
    };

    // Ejecutar al montar para establecer la sección inicial
    handleScroll();

    // Agregar event listener con throttle
    let timeoutId;
    const throttledHandleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledHandleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
