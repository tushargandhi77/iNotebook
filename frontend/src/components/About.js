import React, { useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeContext from '../context/theme/ThemeContext';
import { FaBook, FaShieldAlt, FaCogs, FaCloud, FaTags, FaSearch, FaEdit, 
         FaMobileAlt, FaUserShield, FaEnvelope, FaEnvelopeOpenText, 
         FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const About = () => {
    const { theme } = useContext(ThemeContext);
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            easing: 'ease-in-out'
        });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
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
    
    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.1)', transition: { duration: 0.3 } }
    };
    
    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200 } },
        hover: { scale: 1.2, rotate: 15, color: 'var(--primary-color)', transition: { duration: 0.2 } }
    };

    return (
        <motion.div 
            className="container py-5 about-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ 
                transition: 'all 0.3s ease',
                position: 'relative'
            }}
        >
            <motion.div variants={itemVariants} className="text-center mb-5">
                <motion.h1 
                    className="display-4 fw-bold"
                    initial={{ scale: 0.9, y: -50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
                >
                    About <span style={{ color: 'var(--primary-color)' }}>iNotebook</span>
                </motion.h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '150px' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ 
                        height: '4px', 
                        background: 'var(--primary-color)', 
                        margin: '15px auto',
                        borderRadius: '2px'
                    }}
                />
                <motion.p 
                    className="lead"
                    style={{ color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    Your secure digital notebook for the modern world
                </motion.p>
            </motion.div>

            <div className="row g-4">
                <div className="col-md-6" data-aos="fade-right">
                    <motion.div 
                        variants={cardVariants}
                        whileHover="hover"
                        className="custom-form p-4 h-100 about-card"
                        style={{ 
                            borderRadius: '15px',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <motion.div 
                            className="icon-background"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'var(--primary-color)',
                                opacity: '0.1',
                                zIndex: 0
                            }}
                        />
                        <div className="d-flex align-items-center mb-4">
                            <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                style={{
                                    background: 'var(--primary-color)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    color: 'white'
                                }}
                            >
                                <FaBook size={24} />
                            </motion.div>
                            <h2 className="mb-0">Our Story</h2>
                        </div>
                        <p>iNotebook was created with a simple mission: to provide a secure, accessible, and intuitive platform for note-taking in the digital age.</p>
                        <p>We believe that your thoughts, ideas, and information deserve a safe space where you can organize them efficiently and access them from anywhere.</p>
                        <p>Our team of passionate developers has crafted iNotebook to be your trusted companion for capturing and managing all your important notes.</p>
                    </motion.div>
                </div>

                <div className="col-md-6" data-aos="fade-left">
                    <motion.div 
                        variants={cardVariants}
                        whileHover="hover"
                        className="custom-form p-4 h-100 about-card"
                        style={{ 
                            borderRadius: '15px',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <motion.div 
                            className="icon-background"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'var(--primary-color)',
                                opacity: '0.1',
                                zIndex: 0
                            }}
                        />
                        <div className="d-flex align-items-center mb-4">
                            <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                style={{
                                    background: 'var(--primary-color)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    color: 'white'
                                }}
                            >
                                <FaShieldAlt size={24} />
                            </motion.div>
                            <h2 className="mb-0">Security First</h2>
                        </div>
                        <p>At iNotebook, we prioritize the security of your data above all else. All your notes are:</p>
                        <ul className="list-group list-group-flush mb-3">
                            {[
                                'Encrypted end-to-end',
                                'Accessible only with your credentials',
                                'Never shared with third parties',
                                'Backed up regularly'
                            ].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    className="list-group-item bg-transparent d-flex align-items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    style={{ border: 'none', padding: '8px 0' }}
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.2 }}
                                        style={{ color: 'var(--primary-color)', marginRight: '10px' }}
                                    >
                                        <FaCheckCircle size={18} />
                                    </motion.div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="col-12" data-aos="fade-up">
                    <motion.div 
                        variants={cardVariants}
                        whileHover="hover"
                        className="custom-form p-4 about-card"
                        style={{ 
                            borderRadius: '15px',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <div className="d-flex align-items-center mb-4">
                            <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                style={{
                                    background: 'var(--primary-color)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    color: 'white'
                                }}
                            >
                                <FaCogs size={24} />
                            </motion.div>
                            <h2 className="mb-0">Features</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="d-flex align-items-start mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px',
                                            marginTop: '5px'
                                        }}
                                    >
                                        <FaCloud size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Cloud Storage</h5>
                                        <p>Access your notes from any device, anywhere, anytime.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-start mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px',
                                            marginTop: '5px'
                                        }}
                                    >
                                        <FaTags size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Categorization</h5>
                                        <p>Organize your notes with custom tags for easy retrieval.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-start mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px',
                                            marginTop: '5px'
                                        }}
                                    >
                                        <FaSearch size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Quick Search</h5>
                                        <p>Find exactly what you're looking for in seconds.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-start mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px',
                                            marginTop: '5px'
                                        }}
                                    >
                                        <FaEdit size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Easy Editing</h5>
                                        <p>Update your notes with our intuitive editor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-start mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px',
                                            marginTop: '5px'
                                        }}
                                    >
                                        <FaMobileAlt size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Responsive Design</h5>
                                        <p>Enjoy a seamless experience on any screen size.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-start mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px',
                                            marginTop: '5px'
                                        }}
                                    >
                                        <FaUserShield size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Private Accounts</h5>
                                        <p>Your personal space, secured with authentication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="col-12" data-aos="fade-up" data-aos-delay="200">
                    <motion.div 
                        variants={cardVariants}
                        whileHover="hover"
                        className="custom-form p-4 about-card"
                        style={{ 
                            borderRadius: '15px',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <div className="d-flex align-items-center mb-4">
                            <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                style={{
                                    background: 'var(--primary-color)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    color: 'white'
                                }}
                            >
                                <FaEnvelope size={24} />
                            </motion.div>
                            <h2 className="mb-0">Contact Us</h2>
                        </div>
                        <p>We're always looking to improve iNotebook. If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us.</p>
                        
                        <div className="row g-4 mt-2">
                            <div className="col-md-6">
                                <div className="d-flex align-items-center mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px'
                                        }}
                                    >
                                        <FaEnvelopeOpenText size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Email</h5>
                                        <p className="mb-0">support@inotebook.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-center mb-3">
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover="hover"
                                        style={{
                                            color: 'var(--primary-color)',
                                            marginRight: '15px'
                                        }}
                                    >
                                        <FaMapMarkerAlt size={24} />
                                    </motion.div>
                                    <div>
                                        <h5>Address</h5>
                                        <p className="mb-0">123 Note Street, Digital City, Web 12345</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <motion.button 
                            className="btn-custom-primary mt-4"
                            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '8px',
                                padding: '10px 20px',
                                borderRadius: '10px'
                            }}
                        >
                            <FaPaperPlane size={16} /> Send Message
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
