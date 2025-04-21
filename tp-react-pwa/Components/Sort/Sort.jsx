import { useState } from "react";

const Sort = ({onSortChange}) =>{
    const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    onSortChange({ sortBy: e.target.value, order });
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    onSortChange({ sortBy, order: e.target.value });
  };

    return(
        <div>
        <h4>Ordenar por:</h4>
        <label>
        Ordenar por:
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="year">Año</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        <label>
          Orden:
          <select value={order} onChange={handleOrderChange}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </div>
    )
}
export default Sort