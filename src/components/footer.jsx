import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="mb-4 font-bold text-white text-2xl">React Landing</h3>
            <p className="text-gray-400 leading-relaxed">
              Transformamos ideas en soluciones digitales innovadoras que impulsan el
              éxito de tu negocio.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="mb-4 font-semibold text-white text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-primary-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="mb-4 font-semibold text-white text-lg">Síguenos</h4>
            <div className="flex space-x-4">
              {data?.facebook && (
                <a
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-gray-800 hover:bg-primary-600 rounded-full w-10 h-10 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              )}
              {data?.twitter && (
                <a
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-gray-800 hover:bg-primary-600 rounded-full w-10 h-10 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              )}
              {data?.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-gray-800 hover:bg-primary-600 rounded-full w-10 h-10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              )}
              {data?.instagram && (
                <a
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-gray-800 hover:bg-primary-600 rounded-full w-10 h-10 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex sm:flex-row flex-col justify-between items-center pt-8 border-gray-800 border-t">
          <p className="mb-4 sm:mb-0 text-gray-400 text-sm">
            &copy; 2021 React Landing. Diseñado con ❤️ por{' '}
            <a
              href="https://github.com/EfeDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              EfeDeveloper
            </a>
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
            aria-label="Volver arriba"
          >
            <span className="text-sm">Volver arriba</span>
            <FaArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
