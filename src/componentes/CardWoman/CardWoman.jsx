import React, { useState } from 'react';
import { handleDeleteWoman, handleUpdateWoman } from '../../services/WomanService';
import './CardWoman.css';
import { WomenContext } from "c:/Users/fabri/OneDrive/Escritorio/women-history/src/context/womenContext";

import { useContext } from 'react';


function CardWoman({ woman }) {
    const {fetchWomen}= useContext(WomenContext)
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState(woman.name);
    const [lastName, setLastName] = useState(woman.lastName);
    const [nationality, setNationality] = useState(woman.nationality);
    const [bio, setBio] = useState(woman.bio);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = () => {
        // Aquí puedes manejar el guardado de los datos actualizados
        console.log('Updated Woman Data:', { name, lastName, nationality, bio });
        // Por ejemplo, podrías hacer una llamada a una API para actualizar los datos
        closeModal();
    };

    return (
        <>
            <div className="container-general-cardWoman">
                <div className="container-img-cardWoman">
                    <img src={woman.photo} alt={`${woman.name}`} />
                </div>

                <div className="container-description-cardWoman">
                    <h2>{woman.name}, {woman.lastName}</h2>
                    <p><u>{woman.nationality}</u></p>
                    <p>{woman.bio}</p>
                </div>

                <div className="container-button-cardWoman">
                    <button className="button-edit" onClick={openModal}>Edit</button>
                    <button className="button-delete">Delete</button>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <h2>Edit Woman</h2>
                        <form>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="nationality">Nationality:</label>
                                <input
                                    type="text"
                                    id="nationality"
                                    value={nationality}
                                    onChange={(e) => setNationality(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="bio">Bio:</label>
                                <textarea
                                    id="bio"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </div>
                            <div className='container-button-modalEdit'>
                                <button type="button" onClick={handleSave} className='button-save'>Save</button>
                                <button type="button" onClick={handleSave} className='button-cancel'>Cancel</button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardWoman;
