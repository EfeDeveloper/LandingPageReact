import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const About = ({ data }) => {
  // Combinar Why y Why2 en un solo array
  const allBenefits = data ? [...(data.Why || []), ...(data.Why2 || [])] : [];

  return (
    <section id="about" className="bg-white dark:bg-gray-800 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="items-center gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Column */}
          <div className="relative">
            <div className="relative shadow-2xl rounded-2xl overflow-hidden">
              {data && data.image ? (
                <img
                  src={data.image}
                  alt="Sobre nosotros"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex justify-center items-center bg-gradient-primary w-full h-96">
                  <span className="text-white text-lg">Cargando imagen...</span>
                </div>
              )}
              {/* Decorative element */}
              <div className="-right-6 -bottom-6 absolute bg-primary-600 dark:bg-primary-500 opacity-20 blur-3xl rounded-full w-32 h-32"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
                Sobre Nosotros
              </h2>
              <div className="bg-primary-600 mb-6 w-20 h-1"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {data ? data.paragraph : 'Cargando...'}
              </p>
            </div>

            <div>
              <h3 className="mb-6 font-semibold text-gray-900 dark:text-white text-2xl">
                ¿Por qué elegirnos?
              </h3>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                {allBenefits.length > 0 ? (
                  allBenefits.map((benefit, index) => (
                    <div
                      key={`benefit-${index}`}
                      className="group flex items-start space-x-3"
                    >
                      <IoCheckmarkCircle className="flex-shrink-0 mt-0.5 w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="col-span-2 text-gray-500 dark:text-gray-400">
                    Cargando beneficios...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
