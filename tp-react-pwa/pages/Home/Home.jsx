import styles from "./Home.module.css";
import List from "../../Components/List/List";
import Nav from "../../Components/Nav/Nav";
import Button from "../../Components/Button/Button";
import {useState, useEffect} from "react";
import Modal from "../../Components/Modal/Modal";

const Home = () => {

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

  useEffect(() => { 
    const peliculasVistas = JSON.parse(localStorage.getItem('listaVistas') ) || []
    const peliculasPorVer = JSON.parse(localStorage.getItem('listaPorVer') ) || []
    
    setListaPorVer(peliculasPorVer)
    setListaVistas(peliculasVistas)
  
  }, [])


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
                    if (!isSeen) {
                        const nuevaListaPorVer = [...listaPorVer, value]; // Crea una nueva lista con el valor actualizado
                        setListaPorVer(nuevaListaPorVer); // Actualiza el estado
                        localStorage.setItem('listaPorVer', JSON.stringify(nuevaListaPorVer)); // Guarda la nueva lista en localStorage
                      } else {
                        const nuevaListaVistas = [...listaVistas, value]; // Crea una nueva lista con el valor actualizado
                        setListaVistas(nuevaListaVistas); // Actualiza el estado
                        localStorage.setItem('listaVistas', JSON.stringify(nuevaListaVistas)); // Guarda la nueva lista en localStorage
                      }
                  
                      setValue(""); // Limpia el input
                      setShowModal(false); // Cierra el modal
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
          <List title={"Por ver"} array={listaPorVer} />
          <List title={"Vista"} array={listaVistas} />
        </div>
        {/* <div className={styles.filterContainer}></div> */}
      </div>
    </div>
  );
};
export default Home;
