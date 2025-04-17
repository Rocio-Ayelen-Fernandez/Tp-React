import styles from "./Home.module.css";
import List from "../../Components/List/List";
import Nav from "../../Components/Nav/Nav";
import Button from "../../Components/Button/Button";
import Modal from "../../Components/Modal/Modal";
import ModalAddMovie from "../../Components/Modal/ModalAddMovie";
import Search from "../../Components/Search/Search";
import { useState, useEffect } from "react";

const Home = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  // Input Add Movie
  const [mediaItem, setMediaItem] = useState("");
  const [isSeen, setIsSeen] = useState(false);

// Input SearchMovie
const [search, setSearch] = useState('')
//const [searchParam, setSearchParam] = useState('')
  // Listas
  const [listaPorVer, setListaPorVer] = useState([]);
  const [listaVistas, setListaVistas] = useState([]);

  // Modal content map
  const modalContentMap = {
    addMovie: ModalAddMovie,
    // agregar más tipos acá
  };

  // Abrir modal
  const Agregar = () => {
    setModalType("addMovie");
    setShowModal(true);
  };

  // const searchMovie = () =>{
      
      
  //     const busquedaEnVer = listaPorVer.filter(item => item.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  //     if (busquedaEnVer.length === 0) {
  //         console.log("No se encontraron coincidencias");
  //     }else{
  //       console.log("Peliculas encontradas: ", busquedaEnVer);
  //     }
  // }
  // searchMovie()

  // useEffect (() =>{
    
  //   //Solo si el search no esta vacio
  //   if(search.trim() !== ""){
  //     const busquedaEnVer = listaPorVer.filter((item) =>

  //       item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //     )

  //       if (busquedaEnVer.length === 0) {
  //         console.log("No se encontraron coincidencias");
  //       }else{
  //         console.log("Peliculas encontradas: ", busquedaEnVer);
  //       }
       
  //   }

  // },[search,listaPorVer])

  // <List
  //         title="Por ver"
  //         array={listaPorVer.filter((item) =>
  //           item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //         )}
  //       />


  const actions = {
    //Listar Funciones aca
    agregar: Agregar,
    search: setSearch,
  };
  const navItem = [
    //Agregar Botones para el nav aca
    {name: "Agregar", action: "agregar", type: "Button"},
    {name: "Buscar", action: "search", type: "Search"},
  ];

  // Cargar datos de localStorage
  useEffect(() => {
    const peliculasVistas = JSON.parse(localStorage.getItem("listaVistas")) || [];
    const peliculasPorVer = JSON.parse(localStorage.getItem("listaPorVer")) || [];
    setListaVistas(peliculasVistas);
    setListaPorVer(peliculasPorVer);
  }, []);

  // Guardar película
  const handleSubmit = () => {
    if (!mediaItem.trim()) return;

    if (!isSeen) {
      const nuevaListaPorVer = [...listaPorVer, mediaItem];
      setListaPorVer(nuevaListaPorVer);
      localStorage.setItem("listaPorVer", JSON.stringify(nuevaListaPorVer));
    } else {
      const nuevaListaVistas = [...listaVistas, mediaItem];
      setListaVistas(nuevaListaVistas);
      localStorage.setItem("listaVistas", JSON.stringify(nuevaListaVistas));
    }

    setMediaItem("");
    setIsSeen(false);
    setShowModal(false);
  };

  // Render contenido del modal
  const renderModalContent = () => {
    const ModalContent = modalContentMap[modalType];
    const commonProps = {}
    if (modalType === "addMovie") {
      return (
        <ModalContent
          {...commonProps}
          mediaItem={mediaItem}
          setMediaItem={setMediaItem}
          isSeen={isSeen}
          setIsSeen={setIsSeen}
          onSubmit={handleSubmit}
        />
      );
  };
  return <ModalContent {...commonProps} />;
}

  return (
    <div className={styles.mainContainer}>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {renderModalContent()}
        </Modal>
      )}

      <div className={styles.navContainer}>
        <Nav actions={actions} items={navItem} />

        {/* <Search setSearch={setSearch}/> */}
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.listContainer}>
          {/* <List title="Por ver" array={listaPorVer} /> */}



          <List
          title="Por ver"
          array={listaPorVer.filter((item) =>
            item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )}
        />
          <List title="Vista" array={listaVistas} />
        </div>
      </div>
    </div>
  );
};

export default Home;
