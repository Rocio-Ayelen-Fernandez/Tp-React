import Filter from '../FIlter/Filter';
import Sort from '../Sort/Sort';


const Aside = ({onFilterChange, onSortChange, resetFilters})=>{
    
    return (
        <aside>
        <h3>Filtros y Ordenamientos</h3>
        <Filter onFilterChange={onFilterChange} />
        <Sort onSortChange={onSortChange} />
      </aside>
    )
}

export default Aside