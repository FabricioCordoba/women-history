import Nav from "../../componentes/Nav/Nav";
import { useContext } from "react";
import { WomenContext } from "c:/Users/fabri/OneDrive/Escritorio/women-history/src/context/womenContext";
import ButtonAdd from "../../componentes/ButtonAdd/ButtonAdd";
import SearchBar from "../../componentes/SearchBar/SearchBar";
import "../home/Home.css";

function Home() {
    const { women } = useContext(WomenContext);
    console.log(women);

    return (
        <>
            <div className="container-general-home">
                <div className="container-nav-home">
                    <Nav />
                </div>
                <h1>Women of History</h1>
                <div className="container-buttonAdd">
                    <ButtonAdd />
                </div>
                <div className="container-searchBar">
                    <SearchBar />
                </div>
                
            </div>
        </>
    );
}

export default Home;
