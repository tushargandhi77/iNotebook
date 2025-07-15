import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import ThemeContext from "../context/theme/ThemeContext";
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaSave, FaStickyNote, FaSearch } from 'react-icons/fa';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { theme } = useContext(ThemeContext);
    let navigate = useNavigate();
    
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredNotes, setFilteredNotes] = useState([]);

    const { notes, getNotes, editNote } = context;
    
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredNotes(notes);
        } else {
            const filtered = notes.filter(note => 
                note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (note.tag && note.tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setFilteredNotes(filtered);
        }
    }, [searchTerm, notes]);
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Updated Succesfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
    };
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="notes-container"
            style={{ position: 'relative' }}
        >
            <motion.div variants={itemVariants}>
                <AddNote showAlert={props.showAlert}/>
            </motion.div>
            
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            
            <div className="modal fade custom-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <FaEdit className="me-2" /> Edit Note
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="etitle" 
                                        name="etitle" 
                                        value={note.etitle} 
                                        onChange={onChange} 
                                        minLength={5} 
                                        required
                                        placeholder="Enter note title"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <textarea 
                                        className="form-control" 
                                        id="edescription" 
                                        name="edescription" 
                                        value={note.edescription} 
                                        onChange={onChange} 
                                        minLength={5} 
                                        rows="4"
                                        required
                                        placeholder="Enter note description"
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="etag" 
                                        name="etag" 
                                        value={note.etag} 
                                        onChange={onChange}
                                        placeholder="Enter tag (optional)" 
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <motion.button 
                                ref={refClose} 
                                type="button" 
                                className="btn-custom-secondary" 
                                data-bs-dismiss="modal"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Cancel
                            </motion.button>
                            <motion.button 
                                disabled={note.etitle.length<5 || note.edescription.length<5} 
                                onClick={handleClick} 
                                type="button" 
                                className="btn-custom-primary"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                <FaSave /> Update Note
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div 
                className="my-4"
                variants={itemVariants}
            >
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-0" style={{ color: 'var(--text-color)' }}>Your Notes</h2>
                    <div className="d-flex align-items-center">
                        <span className="badge rounded-pill me-2" style={{ background: 'var(--primary-color)' }}>{notes.length}</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Total Notes</span>
                    </div>
                </div>
                
                <motion.div 
                    className="search-container mb-4"
                    variants={itemVariants}
                >
                    <div className="input-group">
                        <span className="input-group-text" style={{ background: 'var(--input-group-bg)', border: '1px solid var(--input-border)' }}>
                            <FaSearch size={16} style={{ color: 'var(--primary-color)' }} />
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search notes by title, description or tag..."
                            value={searchTerm}
                            onChange={handleSearch}
                            style={{ 
                                background: 'var(--input-bg)',
                                color: 'var(--text-color)',
                                border: '1px solid var(--input-border)'
                            }}
                        />
                    </div>
                </motion.div>
                
                {notes.length === 0 ? (
                    <motion.div 
                        className="text-center p-5 rounded"
                        variants={itemVariants}
                        style={{ background: 'var(--card-bg)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                    >
                        <div className="empty-notes-icon mb-3">
                            <FaStickyNote size={60} style={{ color: 'var(--text-secondary)' }} />
                        </div>
                        <h3 style={{ color: 'var(--text-secondary)' }}>No notes to display</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Add your first note using the form above</p>
                    </motion.div>
                ) : searchTerm && filteredNotes.length === 0 ? (
                    <motion.div 
                        className="text-center p-5 rounded"
                        variants={itemVariants}
                        style={{ background: 'var(--card-bg)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                    >
                        <div className="empty-notes-icon mb-3">
                            <FaSearch size={60} style={{ color: 'var(--text-secondary)' }} />
                        </div>
                        <h3 style={{ color: 'var(--text-secondary)' }}>No matching notes found</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Try a different search term</p>
                    </motion.div>
                ) : (
                    <motion.div className="row" variants={itemVariants}>
                        <AnimatePresence mode="popLayout">
                            {(searchTerm ? filteredNotes : notes).map((note) => (
                                <Noteitem 
                                    key={note._id} 
                                    updateNote={updateNote} 
                                    showAlert={props.showAlert} 
                                    note={note} 
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}

export default Notes