import { useState } from "react";
const Filter = ({onFilterChange, setFilters, filters}) =>{
  const [genre, setGenre] = useState('');
  const [type, setType] = useState('');

  const resetFilters = () => {
    
    setFilters({ genre: "", type: "" });
    setGenre("")
    setType("")
  };

  const handleGenreChange =(e) =>{
    setGenre(e.target.value)
    onFilterChange({genre: e.target.value, type})
  }
  const handleTypeChange = (e) => {
    
    const value = e.target.value;
    setType(value);
    onFilterChange({ type: value }); 
  };

  
    return(
        <div>
            <h4>Filtrar por</h4>
            <label>Género</label>
            <select value={genre} onChange={handleGenreChange}>
                <option value="">Todas</option>
                <option value="Accion">Accion</option>
                <option value="Terror">Terror</option>
                <option value="Comedia">Comedia</option>
                <option value="Ciencia Ficción">Ciencia Ficción</option>
            </select>
            <select value={type} onChange={handleTypeChange}>
                <option value="">Todas</option>
                <option value="Película">Películas</option>
                <option value="Serie">Series</option>
            </select>
            <button onClick={resetFilters}>Resetear</button>
        </div>
    )
}
export default Filter