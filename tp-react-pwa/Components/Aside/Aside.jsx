import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import Styles from './Aside.module.css'


const Aside = ({onFilterChange, onSortChange, resetFilters, setFilters, filters})=>{
    
    return (
        <aside className={Styles.aside}>
        <Filter onFilterChange={onFilterChange} resetFilters={resetFilters} setFilters={setFilters} filters={filters}/>
        <Sort onSortChange={onSortChange} />
      </aside>
    )
}

export default Aside