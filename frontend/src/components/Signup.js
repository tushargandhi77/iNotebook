import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeContext from '../context/theme/ThemeContext';
import { FaUserPlus, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;

        // Validate form
        const errors = {};
        if (password !== cpassword) {
            errors.password = "Passwords do not match";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsLoading(true);
        try {
            // API Call
            const response = await fetch("https://i-notebook-backend-tau.vercel.app/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();

            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken);
                navigate("/");
                props.showAlert("Account Created Successfully", "success");
            } else {
                props.showAlert(json.error || "Failed to create account", "danger");
            }
        } catch (error) {
            props.showAlert("An error occurred. Please try again.", "danger");
        } finally {
            setIsLoading(false);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        
        // Clear errors when user types
        if (formErrors[e.target.name]) {
            setFormErrors({
                ...formErrors,
                [e.target.name]: null
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };
    
    const formVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                delay: 0.2, 
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.1
            } 
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
    };
    
    const buttonVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        hover: { scale: 1.03, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" },
        tap: { scale: 0.97 }
    };

    return (
        <motion.div 
            className="container mt-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <motion.div 
                        className="custom-form p-4"
                        variants={formVariants}
                        style={{ 
                            borderRadius: '15px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <motion.div 
                            className="background-shape"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7 }}
                            style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'var(--primary-color)',
                                opacity: '0.05',
                                zIndex: 0
                            }}
                        />
                        <motion.div className="text-center mb-4" variants={itemVariants}>
                            <motion.div 
                                className="icon-container mx-auto mb-3"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'var(--primary-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '3rem',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                }}
                            >
                                <FaUserPlus size={40} />
                            </motion.div>
                            <motion.h2 
                                variants={itemVariants}
                                style={{ fontWeight: '700' }}
                            >
                                Create an <span style={{ color: 'var(--primary-color)' }}>Account</span>
                            </motion.h2>
                            <motion.p 
                                variants={itemVariants}
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Join iNotebook to store your notes securely
                            </motion.p>
                        </motion.div>

                        <form onSubmit={handleSubmit}>
                            <motion.div className="mb-3" variants={itemVariants}>
                                <label htmlFor="name" className="form-label">Name</label>
                                <div className="input-group">
                                    <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                                        <FaUser size={16} style={{ color: 'var(--primary-color)' }} />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        onChange={onChange}
                                        placeholder="Enter your name"
                                        required
                                        minLength={3}
                                        style={{ 
                                            background: 'var(--input-bg)',
                                            color: 'var(--text-color)',
                                            border: '1px solid var(--input-border)'
                                        }}
                                    />
                                </div>
                                <small className="form-text" style={{ color: 'var(--text-secondary)' }}>Minimum 3 characters required</small>
                            </motion.div>
                            <motion.div className="mb-3" variants={itemVariants}>
                                <label htmlFor="email" className="form-label">Email address</label>
                                <div className="input-group">
                                    <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                                        <FaEnvelope size={16} style={{ color: 'var(--primary-color)' }} />
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={onChange}
                                        placeholder="Enter your email"
                                        required
                                        style={{ 
                                            background: 'var(--input-bg)',
                                            color: 'var(--text-color)',
                                            border: '1px solid var(--input-border)'
                                        }}
                                    />
                                </div>
                            </motion.div>
                            <motion.div className="mb-3" variants={itemVariants}>
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                                        <FaLock size={16} style={{ color: 'var(--primary-color)' }} />
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                                        id="password"
                                        name="password"
                                        onChange={onChange}
                                        placeholder="Create a password"
                                        required
                                        minLength={5}
                                        style={{ 
                                            background: 'var(--input-bg)',
                                            color: 'var(--text-color)',
                                            border: '1px solid var(--input-border)'
                                        }}
                                    />
                                    <motion.button 
                                        className="input-group-text" 
                                        type="button" 
                                        onClick={togglePasswordVisibility}
                                        whileHover={{ backgroundColor: 'var(--input-hover-bg)' }}
                                        style={{ 
                                            background: 'var(--input-group-bg)', 
                                            border: '1px solid var(--input-border)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                    </motion.button>
                                </div>
                                <small className="form-text" style={{ color: 'var(--text-secondary)' }}>Minimum 5 characters required</small>
                            </motion.div>
                            <motion.div className="mb-4" variants={itemVariants}>
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <div className="input-group">
                                    <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                                        <FaLock size={16} style={{ color: 'var(--primary-color)' }} />
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                                        id="cpassword"
                                        name="cpassword"
                                        onChange={onChange}
                                        placeholder="Confirm your password"
                                        required
                                        minLength={5}
                                        style={{ 
                                            background: 'var(--input-bg)',
                                            color: 'var(--text-color)',
                                            border: '1px solid var(--input-border)'
                                        }}
                                    />
                                </div>
                                {formErrors.password && (
                                    <div className="invalid-feedback d-block" style={{ color: 'var(--danger-color)' }}>{formErrors.password}</div>
                                )}
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="btn-custom-primary w-100 py-2 mb-3"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                disabled={isLoading}
                                style={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    borderRadius: '10px',
                                    height: '48px'
                                }}
                            >
                                {isLoading ? (
                                    <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    <>
                                        <FaUserPlus size={16} /> Sign Up
                                    </>
                                )}
                            </motion.button>
                            <motion.div className="text-center" variants={itemVariants}>
                                <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                                    Already have an account? <Link to="/login" className="text-decoration-none" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Login</Link>
                                </p>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Signup;
