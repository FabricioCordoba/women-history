const urlWomanApi= "https://66a7a10a53c13f22a3d08009.mockapi.io/women-history/women";

export const handleAddWoman= async(woman)=>{
    try{
        await fetch(urlWomanApi, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(woman),
        });
    } catch (error) {
        console.error('Error adding woman:', error);
    }
};

export const handleDeleteWoman = async (id) => {      

    try {
        await fetch(`${urlWomanApi}/${id}`, {
            method: 'DELETE',
        });
   
    } catch (error) {
        console.error('Error deleting woman:', error);
    }
};



export const handleUpdateWoman = async (id, updatedWoman) => {
    console.log(updatedWoman);
    try {
        const response = await fetch(`${urlWomanApi}/${id}`, {
            method: 'PATCH', // o PATCH según tu backend
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWoman),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar la tarea');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};