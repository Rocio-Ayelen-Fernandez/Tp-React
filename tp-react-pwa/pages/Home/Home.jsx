import styles from "./Home.module.css";
import List from "../../Components/List/List";
import Nav from "../../Components/Nav/Nav";
import Modal from "../../Components/Modal/Modal";
import ModalAddMovie from "../../Components/Modal/ModalAddMovie";
import ModalVerMedia from "../../Components/Modal/ModalVerMedia";
import GenreCounter from "../../Components/Counter/GenreCounter/GenreCounter";
import { useState, useEffect } from "react";



const Home = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  // Input Add Movie
  const [mediaItem, setMediaItem] = useState({
    title: "",
    director: "",
    year: "",
    genre: "",
    rating: "",
    type: "",
    isSeen: false,
    url: "",
  });


// Input SearchMovie
const [search, setSearch] = useState('')
//const [searchParam, setSearchParam] = useState('')
  // Listas
  const [listaPorVer, setListaPorVer] = useState([]);
  const [listaVistas, setListaVistas] = useState([]);

  


  const getFilteredList = (list) => {
    
    if (search.trim() === "") {
      return list; // Si no hay búsqueda, devuelve la lista completa
    }
    return list.filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.director.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  
// MODAL

  // Modal content map
  const modalContentMap = {
    addMovie: ModalAddMovie,
    verMedia: ModalVerMedia,
    // agregar más tipos acá
  };

  //Funciones Modal
  const Agregar = () => {
    setModalType("addMovie")
    setShowModal(true)
  };
  const verMedia = (item) => {
    setMediaItem(item)
    setModalType("verMedia")
    setShowModal(true)
  }


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
          onSubmit={handleSubmit}
        />
      )
    }
    if (modalType === "verMedia") {

      return (
        <ModalContent
          {...commonProps}
          mediaItem={mediaItem}
          setMediaItem={setMediaItem}
          onSubmit={handleSubmit}
        />
      )
    }
    return <ModalContent {...commonProps} />;
  }

  const actions = {
    //Listar Funciones aca
    agregar: Agregar,
    search: setSearch,
    ver: verMedia,
  };
  const navItem = [
    //Agregar Botones para el nav aca
    {name: "Agregar", action: "agregar", type: "Button"},
    {name: "Buscar", action: "search", type: "Search"},
  ];
  const cardButtons = [
    {name: "Ver", action:"ver", type: "Button"},
    {name: "Estado", action:"estado", type: "Button"},
    {name: "Eliminar", action:"eliminar", type: "Button"},
    {name: "Editar", action:"editar", type: "Button"},
  ]

  // Cargar datos de localStorage
  useEffect(() => {
    const peliculasVistas = JSON.parse(localStorage.getItem("listaVistas")) || [];
    const peliculasPorVer = JSON.parse(localStorage.getItem("listaPorVer")) || [];
    setListaVistas(peliculasVistas);
    setListaPorVer(peliculasPorVer);
  }, []);

  // Guardar película
  const handleSubmit = () => {
    if (!mediaItem.title.trim()) return;


    if (!mediaItem.isSeen) {
      const nuevaListaPorVer = [...listaPorVer, mediaItem];
      setListaPorVer(nuevaListaPorVer);
      localStorage.setItem("listaPorVer", JSON.stringify(nuevaListaPorVer));
    } else {
      const nuevaListaVistas = [...listaVistas, mediaItem];
      setListaVistas(nuevaListaVistas);
      localStorage.setItem("listaVistas", JSON.stringify(nuevaListaVistas));
    }

    setMediaItem({
      title: "",
      director: "",
      year: "",
      genre: "",
      rating: "",
      type: "",
      isSeen: false,
      url: ""
    });
    setShowModal(false);
  };


  

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


      <div className={styles.counterContainer}>
        <GenreCounter list1={listaPorVer} list2={listaVistas} />
      </div>
      
      <div className={styles.mainGrid}>
        <div className={styles.listContainer}>
          {/* <List title="Por ver" array={listaPorVer} /> */}

          <List
          title="Por ver"
          array={getFilteredList(listaPorVer)} 
          button={cardButtons} 
          buttonAction={actions}
        />
          <List title="Vista" 
          array={getFilteredList(listaVistas)} 
          button={cardButtons} 
          buttonAction={actions} />
        </div>

        <div className={styles.filterContainer}>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
