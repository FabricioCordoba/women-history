import React, { useState, useContext } from "react";
import { handleAddWoman } from "../../services/WomanService";
import { WomenContext } from "c:/Users/fabri/OneDrive/Escritorio/women-history/src/context/womenContext";
import "../ButtonAdd/ButtonAdd.css"; // CSS para el modal y otros estilos

function ButtonAdd() {
const urlWomanApi= "https://66a7a10a53c13f22a3d08009.mockapi.io/women-history/women";

  const { fetchWomen } = useContext(WomenContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWoman, setNewWoman] = useState({
    name: "",
    lastName: "",
    nationality: "",
    bio: "",
    photo: "",
  });

  const handleChange = (e) => {
    setNewWoman({ ...newWoman, [e.target.name]: e.target.value });
  };

  const addWoman = async () => {
    await handleAddWoman(newWoman);
    fetchWomen(urlWomanApi);
    setIsModalOpen(false); // Cerrar el modal
  };

  return (
    <>
      <button className="button-addWoman" onClick={() => setIsModalOpen(true)}>Add Woman</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Add a New Woman</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" value={newWoman.name} placeholder="Name" onChange={handleChange} />
              </label>
              <label>
                Last Name:
                <input type="text" name="lastName" value={newWoman.lastName}placeholder="Last Name" onChange={handleChange} />
              </label>
              <label>
                Nationality:
                <input type="text" name="nationality" value={newWoman.nationality} placeholder="Nationality" onChange={handleChange} />
              </label>
              <label>
                Bio:
                <textarea name="bio" value={newWoman.bio} placeholder="Biography" onChange={handleChange} />
              </label>
              <label>
                Photo URL:
                <input type="text" name="photo" value={newWoman.photo} placeholder="Photo" onChange={handleChange} />
              </label>
              <button type="button" className="button-addWoman" onClick={addWoman}>
                Ok
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ButtonAdd;
