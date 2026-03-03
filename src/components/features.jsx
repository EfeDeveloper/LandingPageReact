import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Features = ({ data }) => {
  // Mapear el nombre del icono a su componente correspondiente
  const getIcon = (iconName) => {
    const Icon = FaIcons[iconName] || FaIcons.FaRocket;
    return <Icon className="w-12 h-12" />;
  };

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
            Características
          </h2>
          <div className="bg-primary-600 mx-auto w-20 h-1"></div>
        </div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data ? (
            data.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 rounded-lg text-center transition-all hover:-translate-y-2 duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center items-center bg-primary-100 dark:bg-primary-900/30 mb-4 rounded-full w-20 h-20 text-primary-600 dark:text-primary-400">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="mb-3 font-semibold text-gray-900 dark:text-white text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-gray-500 dark:text-gray-400 text-center">
              Cargando características...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
