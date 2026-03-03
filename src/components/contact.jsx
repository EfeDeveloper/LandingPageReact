import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus('sending');
    console.log('Enviando mensaje:', formData);

    // Simular envío de formulario
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Resetear estado después de 5 segundos
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
            Contáctanos
          </h2>
          <div className="bg-primary-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
            Completa el formulario a continuación y nos pondremos en contacto contigo lo
            antes posible
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 dark:text-red-400 text-sm">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 dark:text-red-400 text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Mensaje"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="bg-green-100 dark:bg-green-900/30 p-4 border border-green-400 dark:border-green-600 rounded-lg text-green-700 dark:text-green-300">
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="bg-red-100 dark:bg-red-900/30 p-4 border border-red-400 dark:border-red-600 rounded-lg text-red-700 dark:text-red-300">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 shadow-md hover:shadow-lg px-8 py-4 rounded-lg font-semibold text-white disabled:transform-none hover:scale-105 transition-all duration-300 transform"
              >
                {formStatus === 'sending' ? (
                  <>
                    <svg
                      className="mr-3 -ml-1 w-5 h-5 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <FaPaperPlane className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 font-semibold text-gray-900 dark:text-white text-2xl">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-primary-100 dark:bg-primary-900/30 rounded-full w-12 h-12 text-primary-600 dark:text-primary-400">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
                      Dirección
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {data ? data.address : 'Cargando...'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-primary-100 dark:bg-primary-900/30 rounded-full w-12 h-12 text-primary-600 dark:text-primary-400">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
                      Teléfono
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {data ? data.phone : 'Cargando...'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-primary-100 dark:bg-primary-900/30 rounded-full w-12 h-12 text-primary-600 dark:text-primary-400">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
                      Correo
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {data ? data.email : 'Cargando...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
