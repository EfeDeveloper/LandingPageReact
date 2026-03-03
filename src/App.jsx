import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { enrichDataWithImages, clearOldCache } from './services/content';
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import Footer from './components/footer';
import JsonData from './data/data.json';

const App = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Limpiar caché viejo de Pexels
        clearOldCache();

        // Enriquecer datos con imágenes de Pexels
        const enrichedData = await enrichDataWithImages(JsonData);

        setLandingPageData(enrichedData);
        setError(null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Error cargando los datos');
        // Usar datos originales sin enriquecer en caso de error
        setLandingPageData(JsonData);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-white dark:bg-gray-900 min-h-screen">
        <div className="text-center">
          <div className="inline-block mb-4 border-primary-600 border-t-2 border-b-2 rounded-full w-16 h-16 animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Cargando contenido...
          </p>
        </div>
      </div>
    );
  }

  if (error && !landingPageData) {
    return (
      <div className="flex justify-center items-center bg-white dark:bg-gray-900 min-h-screen">
        <div className="text-red-600 dark:text-red-400 text-center">
          <p className="mb-4 text-xl">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-lg text-white transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Header data={landingPageData?.Header} />
        <Features data={landingPageData?.Features} />
        <About data={landingPageData?.About} />
        <Services data={landingPageData?.Services} />
        <Gallery data={landingPageData?.Gallery} />
        <Testimonials data={landingPageData?.Testimonials} />
        <Team data={landingPageData?.Team} />
        <Contact data={landingPageData?.Contact} />
        <Footer data={landingPageData?.Contact} />
      </div>
    </ThemeProvider>
  );
};

export default App;
