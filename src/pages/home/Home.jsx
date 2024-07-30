import Nav from "../../componentes/Nav/Nav";
import CardWoman from "../../componentes/CardWoman/CardWoman";
import { WomenContext } from "c:/Users/fabri/OneDrive/Escritorio/women-history/src/context/womenContext";
import { useContext } from "react";
import "../home/Home.css"
import ButtonAdd from "../../componentes/ButtonAdd/ButtonAdd";

function Home(){

    const{women}= useContext(WomenContext)
    console.log(women);



    return(
        <>
        <div className="container-general-home">

            <div className="container-nav-home">
                <Nav/>
            </div>
            <h1>Women of History</h1>
            <div>
                <ButtonAdd/>
            </div>
            <div className="container-cardWoman-home">
            {women.map(woman=>(
                    <div className="container-cardTask" key={woman.id}>
                <CardWoman woman={woman}/>
                
                    </div>

                ))}
            </div>

        </div>
        </>
    )
}
export default Home