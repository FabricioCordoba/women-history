import React, { useState, useContext } from 'react';
import { WomenContext } from 'c:/Users/fabri/OneDrive/Escritorio/women-history/src/context/womenContext';
import CardWoman from '../CardWoman/CardWoman';
import "../SearchBar/SearchBar.css"

function SearchBar() {
    const { women } = useContext(WomenContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrado considerando las primeras letras del nombre y apellido
    const filteredWomen = women.filter((woman) =>
        woman.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
        woman.lastName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search by name or last name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <div className="card-container">
                {filteredWomen.length > 0 ? (
                    filteredWomen.map((woman) => (
                        <CardWoman key={woman.id} woman={woman} />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
