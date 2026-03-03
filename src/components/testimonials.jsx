import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-800 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <div className="bg-primary-600 mx-auto w-20 h-1"></div>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data ? (
            data.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="relative bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-xl p-8 rounded-xl transition-all hover:-translate-y-2 duration-300"
              >
                {/* Quote Icon */}
                <div className="top-6 right-6 absolute opacity-20">
                  <FaQuoteLeft className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Stars Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded-full w-12 h-12 overflow-hidden">
                    {testimonial.img ? (
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex justify-center items-center w-full h-full font-semibold text-gray-400 dark:text-gray-500 text-xl">
                        {testimonial.name?.charAt(0) || '?'}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-gray-500 dark:text-gray-400 text-center">
              Cargando testimonios...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
