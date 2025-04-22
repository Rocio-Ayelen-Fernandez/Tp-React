import styles from "./Home.module.css";
import List from "../../Components/List/List";
import Nav from "../../Components/Nav/Nav";
import Modal from "../../Components/Modal/Modal";
import ModalAddMovie from "../../Components/ModalAddMovie/ModalAddMovie";
import ModalDeleteMovie from "../../Components/ModalDeleteMovie/ModalDeleteMovie";
import ModalVerMedia from "../../Components/ModalVerMedia/ModalVerMedia";
import GenreCounter from "../../Components/Counter/GenreCounter/GenreCounter";
import Aside from "../../Components/Aside/Aside"
import RenderModalContent from "../../Components/RenderModalContent/RenderModalContent"
import { useState, useEffect } from "react";



const Home = () => {
  // Aside
  const [showAside, setShowAside] = useState(false);
  const toggleAside = () => {

    setShowAside(!showAside);
  }
  

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

  const [filters, setFilters] = useState({ genre: "", type: "" });
  const [sort, setSort] = useState({ sortBy: "year", order: "asc" });

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };



  const getFilteredList = (list) => {
    let filtered = list
      .filter((item) => {
        const genreMatch = filters.genre ? item.genre === filters.genre : true;
        const typeMatch = filters.type ? item.type === filters.type : true;
        return genreMatch && typeMatch;
      })
      .filter((item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.director.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    if (sort.sortBy === "year") {
      filtered.sort((a, b) =>
        sort.order === "asc" ? a.year - b.year : b.year - a.year
      );
    } else if (sort.sortBy === "rating") {
      filtered.sort((a, b) =>
        sort.order === "asc" ? a.rating - b.rating : b.rating - a.rating
      );
    }

    return filtered;
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };
  /*const getFilteredList = (list) => {

    if (search.trim() === "") {
      return list; // Si no hay búsqueda, devuelve la lista completa
    }
    return list.filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.director.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };*/

  // MODAL



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

  const handleEdit = (itemToEdit) => {
    setMediaItem(itemToEdit);
    setModalType("editMovie");
    setShowModal(true);
  };

  // Render contenido del modal
 


  const actions = {
    Agregar: Agregar,
    Buscar: setSearch,
    Filtros: toggleAside,
    Expand: verMedia,
    State: changeStateMedia,
    Delete: deleteMediaItem,
    Edit: handleEdit,
  }

   
  
  // Cargar datos de localStorage
  useEffect(() => {
    const peliculasVistas = (JSON.parse(localStorage.getItem("listaVistas")) || [])
      .filter(item => item.title && item.director);
    const peliculasPorVer = (JSON.parse(localStorage.getItem("listaPorVer")) || [])
      .filter(item => item.title && item.director);
      
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

    const handleEditSubmit = () => {
    if (!mediaItem.title.trim()) return;

    const targetList = mediaItem.isSeen ? listaVistas : listaPorVer;
    const setList = mediaItem.isSeen ? setListaVistas : setListaPorVer;
    const storageKey = mediaItem.isSeen ? "listaVistas" : "listaPorVer";

    const updatedList = targetList.map((item) =>
      item.id === mediaItem.id ? mediaItem : item
    );

    setList(updatedList);
    localStorage.setItem(storageKey, JSON.stringify(updatedList));
    setShowModal(false);

    setMediaItem({
      title: "",
      director: "",
      year: "",
      genre: "",
      rating: "",
      type: "",
      isSeen: false,
      img: "",
    });
  }

  return (
    <div className={styles.mainContainer}>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <RenderModalContent handleSubmit={handleSubmit} mediaItem={mediaItem} setMediaItem={setMediaItem} handleEditSubmit={handleEditSubmit} modalType={modalType}/>
        </Modal>
      )}

      <div className={styles.navContainer}>
        <Nav actions={actions} />
          
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
            arrayTotal={listaPorVer}
            actions={actions}
          />
          <List
            title="Vista"
            array={getFilteredList(listaVistas)}
            arrayTotal={listaVistas}
            actions={actions}
          />

            
            {showAside && (

              <Aside
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
              setFilters={setFilters}
              filters ={filters}

              />

            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
