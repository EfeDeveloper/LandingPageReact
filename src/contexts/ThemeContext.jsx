import React, { createContext, useState, useEffect, useContext } from 'react';
import { THEME_STORAGE_KEY, DEFAULT_THEME } from '../utils/constants';

// Crear el contexto
const ThemeContext = createContext();

/**
 * Hook personalizado para usar el contexto de tema
 * @returns {Object} - Objeto con tema actual, función toggle y estado isDark
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

/**
 * Proveedor de contexto de tema
 * Maneja el estado del tema (claro/oscuro) y su persistencia
 */
export const ThemeProvider = ({ children }) => {
  // Obtener tema inicial desde localStorage o usar default
  const getInitialTheme = () => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      return savedTheme || DEFAULT_THEME;
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
      return DEFAULT_THEME;
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  // Aplicar clase 'dark' al elemento HTML cuando el tema cambia
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Guardar en localStorage
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }, [theme]);

  /**
   * Alternar entre tema claro y oscuro
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
    isDark,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
