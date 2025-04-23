import styles from './Sort.module.css'
import { useState } from "react";

const Sort = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');

  const handleSortByChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange({ sortBy: value, order });
  };

  const handleOrderChange = (e) => {
    const value = e.target.value;
    setOrder(value);
    onSortChange({ sortBy, order: value });
  };

  return (
    <div className={styles.sortGroup}>
      <div className={styles.sortRow}>
        <h3>Filtros y Ordenamientos</h3>
        <label htmlFor="sortBy" className={styles.sortLabel}>Criterio:</label>
        <select id="sortBy" className={styles.sortSelect} value={sortBy} onChange={handleSortByChange}>
          <option value="">Seleccionar</option>
          <option value="year">Año</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className={styles.sortRow}>
        <label htmlFor="order" className={styles.sortLabel}>Orden:</label>
        <select id="order" className={styles.sortSelect} value={order} onChange={handleOrderChange}>
          <option value="">Seleccionar</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>

  );
};

export default Sort;
