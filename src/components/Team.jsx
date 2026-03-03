import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Team = ({ data }) => {
  return (
    <section id="team" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
            Conoce nuestro equipo
          </h2>
          <div className="bg-primary-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
            Profesionales apasionados comprometidos con tu éxito
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data ? (
            data.map((member, index) => (
              <div key={`${member.name}-${index}`} className="group">
                <div className="relative bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all hover:-translate-y-2 duration-300">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex justify-center items-center bg-gradient-primary w-full h-full">
                        <span className="font-bold text-white text-4xl">
                          {member.name?.charAt(0) || '?'}
                        </span>
                      </div>
                    )}

                    {/* Social Media Overlay */}
                    <div className="absolute inset-0 flex justify-center items-center gap-4 bg-primary-600/90 dark:bg-primary-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="#"
                        className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-full w-10 h-10 text-primary-600 dark:text-primary-400 hover:scale-110 transition-transform"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-full w-10 h-10 text-primary-600 dark:text-primary-400 hover:scale-110 transition-transform"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-full w-10 h-10 text-primary-600 dark:text-primary-400 hover:scale-110 transition-transform"
                        aria-label="GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white text-xl">
                      {member.name}
                    </h4>
                    <p className="font-medium text-primary-600 dark:text-primary-400">
                      {member.job}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-gray-500 dark:text-gray-400 text-center">
              Cargando equipo...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
