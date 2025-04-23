import styles from './Filter.module.css'
import { useState } from "react";

const Filter = ({ onFilterChange, setFilters, filters }) => {
  const [genre, setGenre] = useState('');
  const [type, setType] = useState('');

  const resetFilters = () => {
    setFilters({ genre: "", type: "" });
    setGenre("");
    setType("");
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    onFilterChange({ genre: e.target.value, type });
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setType(value);
    onFilterChange({ genre, type: value });
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterSection}>
        <h4>Filtrar por</h4>

        <label className={styles.filterLabel}>Género</label>
        <select className={styles.filterSelect} value={genre} onChange={handleGenreChange}>
          <option value="">Todas</option>
          <option value="Accion">Acción</option>
          <option value="Terror">Terror</option>
          <option value="Comedia">Comedia</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
        </select>

        <label className={styles.filterLabel}>Tipo</label>
        <select className={styles.filterSelect} value={type} onChange={handleTypeChange}>
          <option value="">Todas</option>
          <option value="Película">Películas</option>
          <option value="Serie">Series</option>
        </select>
      </div>

      <button className={styles.resetButton} onClick={resetFilters}>
        Resetear
      </button>
    </div>
  );
};

export default Filter;
