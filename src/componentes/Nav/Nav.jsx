import React from "react"
import "../Nav/Nav.css"

function Nav() {

    return (
        <>
            <div className="container-general-nav">
                <ul>
                    <li className='navLi'>Usuario</li>
                    <li className='navLi' >Cerrar Sesión</li>
                    <li className='navLi'>Iniciar sesión</li>
                    <li className='navLi'>Registrarme</li>

                </ul>

            </div>

        </>
    )
}

export default Nav