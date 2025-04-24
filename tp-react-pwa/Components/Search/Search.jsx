import Styles from './Search.module.css'

const Search = ({setSearch})  =>{
    return(
        <input className={Styles.input} type="text" onChange={e => setSearch(e.target.value)} placeholder="Buscar Película, Serie o Director"/>
    )
}

export default Search