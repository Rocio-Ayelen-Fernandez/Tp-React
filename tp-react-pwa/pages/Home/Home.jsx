import styles from './Home.module.css'
import List from '../../Components/List/List'
import Nav from '../../Components/Nav/Nav'
// import {useState} from "react";


const Home = () =>{

   /*



useEffect(() => {
  const storedMovies = JSON.parse(localStorage.getItem("peliculas")) || [];

  const noVistas = storedMovies.filter(movie => movie.seen === "notSeen");
  const vistas = storedMovies.filter(movie => movie.seen === "Seen");

  setListaPorVer(noVistas);
  setListaVistas(vistas);
}, []);


   */

    // const [listaPorVer, setListaPorVer] = useState([["serie1", "serie2"]]);
    // const [listaVistas, setListaVistas] = useState([["serie3", "serie4"]]);


    // const addMovie = () => {
    //     const newMovie = window.prompt("Ingrese el nombre de la pelicula: ")
        
    //     setListaPorVer([...listaPorVer, newMovie]);

    // }

    let listaPorVer = ["serie1", "serie2"];
    let listaVistas = ["serie3", "serie4"];


    return (
        <div className={styles.mainContainer}>
            <div className={styles.navContainer}>
                <Nav/>
            </div>
            <div className={styles.mainGrid}>

                <div className={styles.listContainer}>
                
                <List title={"Sin ver"} array={listaPorVer}/>
                <List title={"Por ver"} array={listaVistas}/>
                </div>
                <div className={styles.filterContainer}></div>
            </div>
        </div>
    )
}
export default Home

