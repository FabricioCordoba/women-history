import { createContext, useContext, useState, useEffect } from "react";

export const WomenContext = createContext()

export const WomenProvider =({children})=>{

    const urlWomanApi= "https://66a7a10a53c13f22a3d08009.mockapi.io/women-history/women";

    const [women, setWomen]= useState([]);

    const fetchWomen = async (urlWomanApi)=>{
        try {
            const response = await fetch(urlWomanApi);
            const dataWomen = await response.json();
            setWomen(dataWomen);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchWomen(urlWomanApi);
    },[urlWomanApi])

    return(
        <WomenContext.Provider value={{fetchWomen, women}}>
            {children}
        </WomenContext.Provider>
    )
}