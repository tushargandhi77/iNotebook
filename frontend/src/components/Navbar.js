import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from '../context/theme/ThemeContext';
import { FaBook, FaSignOutAlt, FaHome, FaInfoCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Animation variants
    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    
    const linkVariants = {
        hover: { scale: 1.05, color: 'var(--primary-color)', transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };
    
    const buttonVariants = {
        hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
        tap: { scale: 0.95 }
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.nav 
            className={`custom-navbar navbar navbar-expand-lg ${scrolled ? 'shadow-sm' : ''}`}
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            style={{
                background: 'var(--navbar-background)',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <motion.div 
                        className="me-2"
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            background: 'var(--primary-color)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}
                    >
                        <FaBook size={18} />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ fontWeight: '700', fontSize: '1.5rem' }}
                    >
                        <span style={{ color: 'var(--primary-color)' }}>i</span>Notebook
                    </motion.span>
                </Link>
                
                <motion.button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle navigation"
                    style={{ color: 'var(--text-color)' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </motion.button>
                
                <AnimatePresence>
                    <motion.div 
                        className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`} 
                        id="navbarSupportedContent"
                        initial={isMenuOpen ? { height: 0, opacity: 0 } : false}
                        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : false}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <motion.li 
                            className="nav-item"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <motion.div
                                whileHover="hover"
                                whileTap="tap"
                                variants={linkVariants}
                            >
                                <Link 
                                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                                    aria-current="page" 
                                    to="/"
                                    style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    <FaHome size={16} />
                                    <span>Home</span>
                                </Link>
                            </motion.div>
                        </motion.li>
                        <motion.li 
                            className="nav-item"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            <motion.div
                                whileHover="hover"
                                whileTap="tap"
                                variants={linkVariants}
                            >
                                <Link 
                                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                                    to="/about"
                                    style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    <FaInfoCircle size={16} />
                                    <span>About</span>
                                </Link>
                            </motion.div>
                        </motion.li>
                    </ul>
                    
                    {!localStorage.getItem('token') ? (
                        <motion.div 
                            className="d-flex gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                        >
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link className="btn-custom-secondary d-flex align-items-center" to="/login" role="button">
                                    <FaSignInAlt className="me-2" /> Login
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link className="btn-custom-primary d-flex align-items-center" to="/signup" role="button">
                                    <FaUserPlus className="me-2" /> Sign Up
                                </Link>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                        >
                            <motion.button 
                                onClick={handleLogout} 
                                className='btn-custom-primary d-flex align-items-center'
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FaSignOutAlt className="me-2" /> Logout
                            </motion.button>
                        </motion.div>
                    )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;