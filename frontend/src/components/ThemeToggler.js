import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from '../context/theme/ThemeContext';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';
import styled from 'styled-components';

const ThemeTogglerContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThemeButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  background-color: var(--light-color);
  color: var(--dark-color);
  font-size: 1.2rem;
  
  &.active {
    background-color: var(--primary-color);
    color: white;
  }
  
  &.palette {
    background-color: var(--accent-color);
    color: white;
  }
`;

const ColorPalette = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const ColorOption = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
  &.blue {
    background-color: #4a6cf7;
  }
  
  &.red {
    background-color: #dc3545;
  }
  
  &.green {
    background-color: #28a745;
  }
  
  &.orange {
    background-color: #fd7e14;
  }
`;

const ThemeToggler = () => {
  const { theme, toggleMode, changeColor } = useContext(ThemeContext);
  const [showPalette, setShowPalette] = React.useState(false);
  
  const togglePalette = () => {
    setShowPalette(!showPalette);
  };
  
  const colorOptions = [
    { name: 'blue', color: '#4a6cf7' },
    { name: 'red', color: '#dc3545' },
    { name: 'green', color: '#28a745' },
    { name: 'orange', color: '#fd7e14' }
  ];
  
  return (
    <ThemeTogglerContainer>
      <AnimatePresence>
        {showPalette && (
          <ColorPalette
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {colorOptions.map((option) => (
              <ColorOption
                key={option.name}
                className={option.name}
                onClick={() => changeColor(option.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  boxShadow: theme.color === option.name ? '0 0 0 2px var(--primary-color)' : ''
                }}
              />
            ))}
          </ColorPalette>
        )}
      </AnimatePresence>
      
      <ThemeButton 
        className="palette"
        onClick={togglePalette}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPalette />
      </ThemeButton>
      
      <ThemeButton 
        onClick={toggleMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={theme.mode === 'dark' ? 'active' : ''}
      >
        {theme.mode === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeButton>
    </ThemeTogglerContainer>
  );
};

export default ThemeToggler;