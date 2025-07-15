import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import ThemeContext from "../context/theme/ThemeContext";
import { motion } from 'framer-motion';
import { FaTrashAlt, FaEdit, FaCalendarAlt } from 'react-icons/fa';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { theme } = useContext(ThemeContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        hover: { y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)', transition: { duration: 0.2 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };
    
    const iconVariants = {
        hover: { scale: 1.2, transition: { duration: 0.2 } },
        tap: { scale: 0.9, transition: { duration: 0.1 } }
    };

    // Format date if available
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Get tag color
    const getTagColor = () => {
        if (!note.tag) return 'var(--primary-color)';
        
        // Simple hash function to generate consistent colors for tags
        const hash = note.tag.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);
        
        const colors = [
            '#4a6cf7', // primary
            '#28a745', // success
            '#dc3545', // danger
            '#ffc107', // warning
            '#17a2b8', // info
            '#6610f2', // purple
            '#fd7e14', // orange
            '#20c997', // teal
        ];
        
        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <motion.div 
            className="col-md-4 col-lg-3 mb-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            layout
        >
            <div className="note-card card h-100" style={{ 
                background: 'var(--card-bg)', 
                color: 'var(--text-color)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid var(--card-border)'
            }}>
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title text-truncate" style={{ color: 'var(--text-color)' }}>{note.title}</h5>
                        <div className="note-actions" style={{ display: 'flex', gap: '12px' }}>
                            <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => {
                                    deleteNote(note._id);
                                    props.showAlert("Deleted Successfully", "success");
                                }}
                                style={{ cursor: 'pointer', color: 'var(--danger-color)' }}
                            >
                                <FaTrashAlt />
                            </motion.div>
                            <motion.div 
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => { updateNote(note) }}
                                style={{ cursor: 'pointer', color: 'var(--primary-color)' }}
                            >
                                <FaEdit />
                            </motion.div>
                        </div>
                    </div>
                    
                    <p className="card-text flex-grow-1" style={{ color: 'var(--text-secondary)' }}>{note.description}</p>
                    
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                        {note.tag && (
                            <motion.span 
                                className="badge rounded-pill" 
                                style={{ 
                                    backgroundColor: getTagColor(), 
                                    fontSize: '0.75rem',
                                    padding: '5px 10px',
                                    fontWeight: '500'
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {note.tag}
                            </motion.span>
                        )}
                        
                        {note.date && (
                            <small style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <FaCalendarAlt size={12} />
                                {formatDate(note.date)}
                            </small>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Noteitem;