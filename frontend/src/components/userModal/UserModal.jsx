import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editUsername } from '../../redux/actions/auth.actions'; 
import './UserModal.scss'; 
import Button from '../Button/Button'; // Assurez-vous que le chemin est correct

const UserModal = ({ isOpen, onClose }) => {
    const [newName, setNewName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen) {
            setNewName(''); // Réinitialise l'input quand la modal est ouverte
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUsername(newName));
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Nouveau nom d'utilisateur :</label>
                    <input
                        type="text"
                        id="username"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        required
                    />
                    <div className='buttonValid'>
                    <Button type="submit" text="Mettre à jour" className="custom-button">Mettre à jour</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;