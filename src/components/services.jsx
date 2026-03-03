import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Services = ({ data }) => {
  // Mapear el nombre del icono a su componente correspondiente
  const getIcon = (iconName) => {
    const Icon = FaIcons[iconName] || FaIcons.FaLaptopCode;
    return <Icon className="w-10 h-10" />;
  };

  return (
    <section id="services" className="bg-white dark:bg-gray-800 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
            Nuestros Servicios
          </h2>
          <div className="bg-primary-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
            Ofrecemos soluciones integrales diseñadas para impulsar tu negocio hacia el
            éxito
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data ? (
            data.map((service, index) => (
              <div
                key={`${service.name}-${index}`}
                className="group bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-2xl p-8 border border-transparent hover:border-primary-500 dark:hover:border-primary-400 rounded-xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex justify-center items-center bg-primary-100 dark:bg-primary-900/30 dark:group-hover:bg-primary-500 group-hover:bg-primary-600 rounded-full w-20 h-20 text-primary-600 dark:text-primary-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xl">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-gray-500 dark:text-gray-400 text-center">
              Cargando servicios...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
