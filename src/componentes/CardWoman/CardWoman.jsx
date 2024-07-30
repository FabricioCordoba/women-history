import React, { useState, useContext } from 'react';
import { handleDeleteWoman, handleUpdateWoman } from '../../services/WomanService';
import './CardWoman.css';
import { WomenContext } from "c:/Users/fabri/OneDrive/Escritorio/women-history/src/context/womenContext";

function CardWoman({ woman }) {
    const { fetchWomen,urlWomanApi } = useContext(WomenContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState(woman.name);
    const [lastName, setLastName] = useState(woman.lastName);
    const [nationality, setNationality] = useState(woman.nationality);
    const [bio, setBio] = useState(woman.bio);
    const [photo,setPhoto]= useState(woman.photo)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = async () => {
        const updatedWoman = { name, lastName, nationality, bio, photo };
        try {
            await handleUpdateWoman(woman.id, updatedWoman);
            fetchWomen(urlWomanApi); 
            closeModal();
        } catch (error) {
            console.error('Error updating woman:', error);
        }
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
                            <div>
                                <label htmlFor="photo">Photo:</label>
                                <input
                                    type="text"
                                    id="photo"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                />
                            </div>
                            <div className='container-button-modalEdit'>
                                <button type="button" onClick={handleSave} className='button-save'>Save</button>
                                <button type="button" onClick={closeModal} className='button-cancel'>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardWoman;
