import { useState } from "react";


const Search = ({setSearch})  =>{
    return(
        <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Buscar Película o Serie"/>
    )
}

export default Search