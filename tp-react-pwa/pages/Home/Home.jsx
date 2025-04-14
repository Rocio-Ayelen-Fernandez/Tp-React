import styles from "./Home.module.css";
import List from "../../Components/List/List";
import Nav from "../../Components/Nav/Nav";
import Button from "../../Components/Button/Button";
import {useState} from "react";
import Modal from "../../Components/Modal/Modal";

const Home = () => {
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
  const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState(null)
  const [modalType, setModalType] = useState(null);

  //Listas
  const [listaPorVer, setListaPorVer] = useState([["serie1"], ["serie2"]]);
  const [listaVistas, setListaVistas] = useState([["serie3"], ["serie4"]]);

  //input
  const [value, setValue] = useState("");
  const [isSeen, setIsSeen] = useState(false);

  //Funciones
  const addMovie = () => {
    setModalType("addMovie");
    setShowModal(true);
  };

  const actions = {
    //Listar Funciones aca
    agregar: addMovie,
  };
  const buttons = [
    //Agregar Botones para el nav aca
    {name: "Agregar", action: "agregar"},
  ];

  UseEffect(){  
    

  }

  return (
    <div className={styles.mainContainer}>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalType === "addMovie" && (
            <div>
              <h3>Agregar Pelicula</h3>

              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
               <label>
            ¿Vista?
            <input
          type="checkbox"
          checked={isSeen}
          onChange={() => setIsSeen(!isSeen)} 
            />
            </label>
              <Button
                name={"Agregar"}
                onclick={() => {
                    if(!isSeen){   
                    setListaPorVer([...listaPorVer, value]);
                    localStorage.setItem('listaPorVer', JSON.stringify(listaPorVer) || [])
                }else{
                    setListaVistas([...listaVistas, value]);
                    localStorage.setItem('listasVistas', JSON.stringify(listaVistas)|| [])
                }
               
                  setValue("");
                  setShowModal(false);
                }}
              />
            </div>
          )}
          {modalType === "otraAccion" && (
            <div>
              <p>Otro contenido diferente</p>
            </div>
          )}
        </Modal>
      )}

      <div className={styles.navContainer}>
        {/* Aca va el nav */}
        <Nav actions={actions} buttons={buttons} />
      </div>
      <div className={styles.mainGrid}>
        {/* Aca van las listas */}
        <div className={styles.listContainer}>
          <List title={"Sin ver"} array={listaPorVer} />
          <List title={"Por ver"} array={listaVistas} />
        </div>
        <div className={styles.filterContainer}></div>
      </div>
    </div>
  );
};
export default Home;
