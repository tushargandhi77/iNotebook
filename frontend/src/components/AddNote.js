import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import ThemeContext from "../context/theme/ThemeContext";
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTimes, FaTag, FaEdit, FaStickyNote } from 'react-icons/fa';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { theme } = useContext(ThemeContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    
    const formVariants = {
        collapsed: { height: 0, opacity: 0 },
        expanded: { height: 'auto', opacity: 1, transition: { duration: 0.3 } }
    };
    
    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95, transition: { duration: 0.1 } },
        disabled: { opacity: 0.7 }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await addNote(note.title, note.description, note.tag);
            setNote({ title: "", description: "", tag: "" });
            props.showAlert("Note Added Successfully", "success");
            setIsExpanded(false);
        } catch (error) {
            props.showAlert("Failed to add note", "danger");
        } finally {
            setIsSubmitting(false);
        }
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const expandForm = () => {
        setIsExpanded(true);
    };

    return (
        <motion.div 
            className="custom-form my-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                background: 'var(--card-bg)',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                border: '1px solid var(--card-border)'
            }}
        >
            <div className="d-flex align-items-center mb-4">
                <motion.div 
                    style={{ 
                        fontSize: '1.5rem', 
                        color: 'var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px'
                    }}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isExpanded ? <FaTimes /> : <FaPlus />}
                </motion.div>
                <h2 className="mb-0" style={{ color: 'var(--text-color)' }}>Add a New Note</h2>
            </div>
            
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" style={{ color: 'var(--text-color)' }}>Title</label>
                    <div className="input-group">
                        <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                            <FaStickyNote style={{ color: 'var(--primary-color)' }} />
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            name="title" 
                            value={note.title} 
                            onChange={onChange} 
                            onClick={expandForm}
                            minLength={5} 
                            required 
                            placeholder="Enter note title"
                            style={{ 
                                background: 'var(--input-bg)',
                                color: 'var(--text-color)',
                                border: '1px solid var(--input-border)'
                            }}
                        />
                    </div>
                </div>
                
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div 
                            variants={formVariants}
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label" style={{ color: 'var(--text-color)' }}>Description</label>
                                <div className="input-group">
                                    <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                                        <FaEdit style={{ color: 'var(--primary-color)' }} />
                                    </span>
                                    <textarea 
                                        className="form-control" 
                                        id="description" 
                                        name="description" 
                                        value={note.description} 
                                        onChange={onChange} 
                                        minLength={5} 
                                        required 
                                        rows="4"
                                        placeholder="Enter note description"
                                        style={{ 
                                            background: 'var(--input-bg)',
                                            color: 'var(--text-color)',
                                            border: '1px solid var(--input-border)'
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label" style={{ color: 'var(--text-color)' }}>Tag</label>
                                <div className="input-group">
                                    <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                                        <FaTag style={{ color: 'var(--primary-color)' }} />
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="tag" 
                                        name="tag" 
                                        value={note.tag} 
                                        onChange={onChange} 
                                        placeholder="Enter tag (optional)"
                                        style={{ 
                                            background: 'var(--input-bg)',
                                            color: 'var(--text-color)',
                                            border: '1px solid var(--input-border)'
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                    
                <AnimatePresence>
                    {isExpanded && (
                        <motion.button 
                            disabled={note.title.length < 5 || note.description.length < 5 || isSubmitting} 
                            type="submit" 
                            className="btn-custom-primary d-flex align-items-center justify-content-center"
                            onClick={handleClick}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            style={{ gap: '8px' }}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <span>Adding...</span>
                                </>
                            ) : (
                                <>
                                    <FaPlus /> Add Note
                                </>
                            )}
                        </motion.button>
                    )}
                </AnimatePresence>
                
                <AnimatePresence>
                    {!isExpanded && (
                        <motion.div 
                            className="text-center mt-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <small style={{ color: 'var(--text-muted)' }}>Click in the title field to add a new note</small>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </motion.div>
    );
};

export default AddNote;