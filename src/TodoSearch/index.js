import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch(){
    const onSearchValueChange = (entry)=>{
        setSearchValue(entry.target.value)
    }
    const {searchValue,setSearchValue} = React.useContext(TodoContext)


    return(
        <input 
        onChange={onSearchValueChange} placeholder="Buscar Tarea"
        value={searchValue} />
    );
}

export {TodoSearch};