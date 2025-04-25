import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import Styles from './Aside.module.css'

//buen nombre para el componente, se entiende clarisimo que hace con solo leerlo. Eso es codigo bien autodocumentado

const Aside = ({onFilterChange, onSortChange, resetFilters, setFilters, filters})=>{
    
    return (
        <aside className={Styles.aside}>
        <Filter onFilterChange={onFilterChange} resetFilters={resetFilters} setFilters={setFilters} filters={filters}/>
        <Sort onSortChange={onSortChange} />
      </aside>
    )
}

export default Aside