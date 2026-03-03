import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  // Obtener imágenes desde data
  const galleryItems = data || [];

  // Filtrar items según categoría
  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category?.toLowerCase() === filter.toLowerCase(),
        );

  // Categorías únicas para los botones de filtro
  const categories = [
    'all',
    ...new Set(galleryItems.map((item) => item.category).filter(Boolean)),
  ];

  return (
    <section id="portfolio" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
            Galería
          </h2>
          <div className="bg-primary-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
            Explora nuestros proyectos y trabajos destacados
          </p>
        </div>

        {/* Filter Buttons */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {galleryItems.length === 0 ? (
          <div className="py-12 text-gray-500 dark:text-gray-400 text-center">
            Cargando galería...
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <div
                key={`gallery-${index}`}
                className="group relative shadow-md hover:shadow-2xl rounded-lg overflow-hidden transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="relative aspect-h-3 aspect-w-4 overflow-hidden">
                  <img
                    src={item.smallImage || item.largeImage}
                    alt={item.title || 'Gallery item'}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 p-6 transition-opacity duration-300">
                    <h4 className="mb-1 font-semibold text-white text-lg">
                      {item.title || 'Proyecto'}
                    </h4>
                    {item.category && (
                      <span className="text-gray-200 text-sm">{item.category}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-gray-500 dark:text-gray-400 text-center">
            No se encontraron proyectos en esta categoría.
          </div>
        )}

        {/* Lightbox */}
        {isOpen && filteredItems.length > 0 && (
          <Lightbox
            mainSrc={filteredItems[photoIndex].largeImage}
            nextSrc={filteredItems[(photoIndex + 1) % filteredItems.length].largeImage}
            prevSrc={
              filteredItems[
                (photoIndex + filteredItems.length - 1) % filteredItems.length
              ].largeImage
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + filteredItems.length - 1) % filteredItems.length,
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % filteredItems.length)
            }
            imageTitle={filteredItems[photoIndex].title}
            imageCaption={filteredItems[photoIndex].category}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
