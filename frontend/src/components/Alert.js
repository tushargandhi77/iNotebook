import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Alert(props) {
    const capitalize = (word) => {
        if (word === "danger") {
            word = "error";
        }
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return '';
    };

    // Define alert icon based on type
    const getAlertIcon = (type) => {
        switch(type) {
            case 'success':
                return 'fas fa-check-circle';
            case 'warning':
                return 'fas fa-exclamation-triangle';
            case 'danger':
            case 'error':
                return 'fas fa-times-circle';
            default:
                return 'fas fa-info-circle';
        }
    };

    // Define alert class based on type
    const getAlertClass = (type) => {
        switch(type) {
            case 'success':
                return 'alert-success';
            case 'warning':
                return 'alert-warning';
            case 'danger':
            case 'error':
                return 'alert-danger';
            default:
                return 'alert-info';
        }
    };

    return (
        <div style={{ height: '60px', position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width: '100%', maxWidth: '600px' }}>
            <AnimatePresence>
                {props.alert && (
                    <motion.div 
                        className={`custom-alert ${getAlertClass(props.alert.type)}`}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="d-flex align-items-center">
                            <i className={`${getAlertIcon(props.alert.type)} me-2`}></i>
                            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Alert;