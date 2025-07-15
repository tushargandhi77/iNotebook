import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Notes from './Notes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from '../context/theme/ThemeContext';
import { FaLock, FaSync, FaTags, FaArrowRight, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

export const Home = (props) => {
    const { showAlert } = props;
    const { theme } = useContext(ThemeContext);
    
    useEffect(() => {
        // Initialize AOS animation library
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
            offset: 100
        });
    }, []);

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('token');
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };
    
    const buttonVariants = {
        hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
        tap: { scale: 0.95 }
    };

    return (
        <div>
            {!isLoggedIn ? (
                // Hero section for non-logged in users
                <section className="hero-section" style={{ background: theme.mode === 'dark' ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)' : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                    <div className="container">
                        <motion.div 
                            className="row align-items-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="col-md-6">
                                <div className="hero-content">
                                    <motion.h1 
                                        className="hero-title"
                                        variants={itemVariants}
                                    >
                                        <span style={{ color: 'var(--primary-color)' }}>i</span>Notebook
                                        <motion.span 
                                            style={{ display: 'inline-block' }}
                                            animate={{ 
                                                rotate: [0, 5, 0, -5, 0],
                                            }}
                                            transition={{ 
                                                duration: 0.5, 
                                                repeat: Infinity, 
                                                repeatDelay: 5 
                                            }}
                                        >
                                            ✨
                                        </motion.span>
                                    </motion.h1>
                                    <motion.h2 
                                        variants={itemVariants}
                                        style={{ fontSize: '2rem', marginBottom: '1rem' }}
                                    >
                                        Your Ideas, Organized
                                    </motion.h2>
                                    <motion.p 
                                        className="hero-subtitle"
                                        variants={itemVariants}
                                    >
                                        Securely capture your ideas, thoughts, and important information in one place. 
                                        Access them anytime, anywhere.
                                    </motion.p>
                                    <motion.div 
                                        className="hero-buttons"
                                        variants={itemVariants}
                                    >
                                        <motion.div
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <Link to="/login" className="btn-custom-primary">
                                                <FaSignInAlt style={{ marginRight: '8px' }} /> Login
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <Link to="/signup" className="btn-custom-secondary">
                                                <FaUserPlus style={{ marginRight: '8px' }} /> Sign Up
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-image text-center">
                                    <motion.div
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                    >
                                        <motion.img 
                                            src="https://cdn-icons-png.flaticon.com/512/2965/2965358.png" 
                                            alt="Notebook Illustration" 
                                            className="img-fluid"
                                            style={{ maxWidth: '70%' }}
                                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Features Section */}
                        <div className="row mt-5 py-5">
                            <div className="col-12 text-center mb-5">
                                <motion.h2 
                                    data-aos="fade-up"
                                    className="mb-3"
                                    style={{ fontSize: '2.5rem', fontWeight: '700' }}
                                >
                                    Why Choose <span style={{ color: 'var(--primary-color)' }}>iNotebook</span>?
                                </motion.h2>
                                <motion.p 
                                    data-aos="fade-up" 
                                    data-aos-delay="100"
                                    className="lead"
                                    style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}
                                >
                                    Experience the perfect digital notebook with these amazing features
                                </motion.p>
                            </div>
                            
                            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                                <motion.div 
                                    className="custom-card h-100"
                                    whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="card-body text-center p-4">
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="icon-container mb-4"
                                            style={{ 
                                                width: '80px', 
                                                height: '80px', 
                                                borderRadius: '50%', 
                                                background: 'rgba(74, 108, 247, 0.1)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}
                                        >
                                            <FaLock size={30} style={{ color: 'var(--primary-color)' }} />
                                        </motion.div>
                                        <h3 className="mb-3">Secure Storage</h3>
                                        <p className="mb-4">Your notes are encrypted and securely stored in the cloud, ensuring your data remains private.</p>
                                        <motion.div 
                                            className="text-primary d-inline-flex align-items-center"
                                            style={{ fontWeight: '600', cursor: 'pointer' }}
                                            whileHover={{ x: 5 }}
                                        >
                                            Learn more <FaArrowRight size={14} style={{ marginLeft: '8px' }} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                            
                            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                                <motion.div 
                                    className="custom-card h-100"
                                    whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="card-body text-center p-4">
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className="icon-container mb-4"
                                            style={{ 
                                                width: '80px', 
                                                height: '80px', 
                                                borderRadius: '50%', 
                                                background: 'rgba(74, 108, 247, 0.1)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}
                                        >
                                            <FaSync size={30} style={{ color: 'var(--primary-color)' }} />
                                        </motion.div>
                                        <h3 className="mb-3">Sync Everywhere</h3>
                                        <p className="mb-4">Access your notes from any device, anytime, anywhere. Your notes are always up to date.</p>
                                        <motion.div 
                                            className="text-primary d-inline-flex align-items-center"
                                            style={{ fontWeight: '600', cursor: 'pointer' }}
                                            whileHover={{ x: 5 }}
                                        >
                                            Learn more <FaArrowRight size={14} style={{ marginLeft: '8px' }} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                            
                            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                                <motion.div 
                                    className="custom-card h-100"
                                    whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="card-body text-center p-4">
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="icon-container mb-4"
                                            style={{ 
                                                width: '80px', 
                                                height: '80px', 
                                                borderRadius: '50%', 
                                                background: 'rgba(74, 108, 247, 0.1)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}
                                        >
                                            <FaTags size={30} style={{ color: 'var(--primary-color)' }} />
                                        </motion.div>
                                        <h3 className="mb-3">Easy Organization</h3>
                                        <p className="mb-4">Organize your notes with tags and categories. Find what you need instantly with powerful search.</p>
                                        <motion.div 
                                            className="text-primary d-inline-flex align-items-center"
                                            style={{ fontWeight: '600', cursor: 'pointer' }}
                                            whileHover={{ x: 5 }}
                                        >
                                            Learn more <FaArrowRight size={14} style={{ marginLeft: '8px' }} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                // Notes section for logged in users
                <div className="container mt-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="notes-container"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div 
                                className="row mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="col-12">
                                    <motion.h2 
                                        style={{ 
                                            color: 'var(--text-color)', 
                                            borderBottom: '2px solid var(--primary-color)',
                                            paddingBottom: '10px',
                                            display: 'inline-block'
                                        }}
                                        initial={{ width: 0 }}
                                        animate={{ width: 'auto' }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        Your Notes
                                    </motion.h2>
                                </div>
                            </motion.div>
                            <Notes showAlert={showAlert} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};