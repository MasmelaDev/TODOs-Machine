import React from "react";

function TodoSearch({searchValue,setSearchValue}){
    const onSearchValueChange = (entry)=>{
        setSearchValue(entry.target.value)
    }
    return(
        <input 
        onChange={onSearchValueChange} placeholder="Buscar Tarea"
        value={searchValue} />
    );
}

export {TodoSearch};