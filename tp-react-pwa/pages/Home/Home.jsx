import styles from './Home.module.css'
import List from '../../Components/List/List'
import Nav from '../../Components/Nav/Nav'
import Button from '../../Components/Button/Button'
import {useState} from "react";
import Modal from '../../Components/Modal/Modal'


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
    //Modal
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    //Listas
    const [listaPorVer, setListaPorVer] = useState([["serie1"], ["serie2"]])
    const [listaVistas, setListaVistas] = useState([["serie3"], ["serie4"]])

    
    //Funciones
    const addMovie = () => {
        // const newMovie = window.prompt("Ingrese el nombre de la pelicula: ")
        
        // setListaPorVer([...listaPorVer, newMovie])

        //Almacena el texto ingresado
        let movieName = ""

        
        //Almacena el dato ingresado
        const handleInput = (e) => {
            movieName = e.target.value
            // console.log(movieName)
        }

        //Verifica que no este vacio el input y actualiza la lista
        //"cierra" el modal
        const handleConfirm = () => {
            if(movieName.trim() !== ""){
                setListaPorVer([...listaPorVer, movieName])
                console.log("enviado")
                setShowModal(false)
                setModalContent(null)
            }
        }

        //Escribe los datos dentro del modal
        const content = (
            <div>
                <h3>Agregar Pelicula</h3>
                <input type="text" onChange={handleInput} />
                <Button name={"Agregar"} onclick={handleConfirm}/>
            </div>
        )

        setModalContent(content) //Este muestra el contenido
        setShowModal(true) //Este muestra el Modal, lo hace "visible"
        console.log("abierto")

    }

    const actions ={
        //Listar Funciones aca
        agregar: addMovie
    }
    const buttons = [
        //Agregar Botones para el nav aca
        {name: "Agregar", action: "agregar"},
    ]

    return (
        <div className={styles.mainContainer}>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    {modalContent}
            </Modal>
            <div className={styles.navContainer}>
                {/* Aca va el nav */}
                <Nav actions={actions} buttons={buttons}/>
            </div>
            <div className={styles.mainGrid}>
                
                {/* Aca van las listas */}
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

