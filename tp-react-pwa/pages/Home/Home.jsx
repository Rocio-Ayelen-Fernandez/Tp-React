import styles from "./Home.module.css";
import List from "../../Components/List/List";
import Nav from "../../Components/Nav/Nav";
import Modal from "../../Components/Modal/Modal";
import ModalAddMovie from "../../Components/Modal/ModalAddMovie";
import ModalDeleteMovie from "../../Components/Modal/ModalDeleteMovie";
import ModalVerMedia from "../../Components/Modal/ModalVerMedia";
import GenreCounter from "../../Components/Counter/GenreCounter/GenreCounter";
import { useState, useEffect } from "react";
import { Plus, Trash2, BookmarkCheck, Expand, BookmarkX, SquarePen } from 'lucide-react';



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
    deleteMediaItem: ModalDeleteMovie,
    verMedia: ModalVerMedia,
    // agregar más tipos acá
  };

  // Abrir modal
  const Agregar = () => {
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
    setModalType("addMovie");
    setShowModal(true);
  };
  

  const deleteMediaItem = (item) => {
    setMediaItem(item)
    setModalType("deleteMediaItem")
    setShowModal(true)
  }

  const verMedia = (item) => {
    setMediaItem(item)
    setModalType("verMedia")
    setShowModal(true)
  }

  const changeStateMedia = (item) => {
    let updatedItem = {...item, isSeen: !item.isSeen}
    let nuevaListaPorVer = listaPorVer.filter((i) => i.id !== item.id);
    let nuevaListaVistas = listaVistas.filter((i) => i.id !== item.id);
  
    if (updatedItem.isSeen) {
      nuevaListaVistas = [...nuevaListaVistas, updatedItem];
    } else {
      nuevaListaPorVer = [...nuevaListaPorVer, updatedItem];
    }
  
    setListaPorVer(nuevaListaPorVer);
    setListaVistas(nuevaListaVistas);
  
    localStorage.setItem("listaPorVer", JSON.stringify(nuevaListaPorVer));
    localStorage.setItem("listaVistas", JSON.stringify(nuevaListaVistas));
  };

  // Render contenido del modal
  const renderModalContent = () => {
    const ModalContent = modalContentMap[modalType];
    const commonProps = {} //Poner los props acá (?)
    if (modalType === "addMovie") {
      return (
        <ModalContent
          {...commonProps}
          mediaItem={mediaItem}
          setMediaItem={setMediaItem}
          onSubmit={handleSubmit}
        />
      );
    };
    if (modalType === "deleteMediaItem") {
      return (
        <ModalContent {...commonProps}
          mediaItem={mediaItem}
          setMediaItem={setMediaItem}
          onConfirm={handleSubmit}
        />
      )
    };
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

  const navItems = [
    { name: "Agregar", action: Agregar, type: "Button", icon: <Plus /> },
    { name: "Buscar", action: setSearch, type: "Search" },
  ];
  
  const listButtons = [
    { name: "Expand", icon: <Expand />, action: verMedia },
    {
      name: "State",
      icon: (item) =>
        item.isSeen ? (
          <BookmarkX />
        ) : (
          <BookmarkCheck />
        ),
      action: changeStateMedia,
    },
    { name: "Delete", icon: <Trash2 />, action: deleteMediaItem },
    { name: "Edit", icon: <SquarePen /> },
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
    if (modalType === "addMovie") {
      // Generar un id único
      if (!mediaItem.title.trim()) return;
      const newMediaItem = {
        ...mediaItem,
        id: crypto.randomUUID() // esto genera un id único automáticamente
      };

      if (!mediaItem.isSeen) {
        const nuevaListaPorVer = [...listaPorVer, newMediaItem];
        setListaPorVer(nuevaListaPorVer);
        localStorage.setItem("listaPorVer", JSON.stringify(nuevaListaPorVer));
      } else {
        const nuevaListaVistas = [...listaVistas, newMediaItem];
        setListaVistas(nuevaListaVistas);
        localStorage.setItem("listaVistas", JSON.stringify(nuevaListaVistas));
      }
    }

    if (modalType === "deleteMediaItem") {
      const nuevaListaPorVer = listaPorVer.filter(
        (item) => item.id !== mediaItem.id
      );
      const nuevaListaVistas = listaVistas.filter(
        (item) => item.id !== mediaItem.id
      );
      setListaPorVer(nuevaListaPorVer);
      setListaVistas(nuevaListaVistas);

      localStorage.setItem("listaPorVer", JSON.stringify(nuevaListaPorVer));
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
        <Nav items={navItems} />
      </div>
      <div className={styles.mainGrid}>
        <div className={styles.listContainer}>
          {/* <List title="Por ver" array={listaPorVer} /> */}
          <List
            title="Por ver"
            array={getFilteredList(listaPorVer)}
            arrayTotal={listaPorVer}
            buttons={listButtons}
          />
          <List
            title="Vista"
            array={getFilteredList(listaVistas)}
            arrayTotal={listaVistas}
            buttons={listButtons}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
