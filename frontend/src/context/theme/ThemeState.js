import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeState = (props) => {
  // Get saved theme from localStorage or use default
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'light', color: 'blue' };
  };

  const [theme, setTheme] = useState(getSavedTheme());
  
  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme.mode);
    document.documentElement.setAttribute('data-color', theme.color);
  }, [theme]);

  // Toggle between light and dark mode
  const toggleMode = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      mode: prevTheme.mode === 'light' ? 'dark' : 'light'
    }));
  };

  // Change color theme
  const changeColor = (color) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      color
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode, changeColor }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;