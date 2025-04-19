import styles from "./Home.module.css";
import List from "../../Components/List/List";
import Nav from "../../Components/Nav/Nav";
import Button from "../../Components/Button/Button";
import Modal from "../../Components/Modal/Modal";
import ModalAddMovie from "../../Components/Modal/ModalAddMovie";
import Search from "../../Components/Search/Search";
import Aside from "../../Components/Aside/Aside";
import { useState, useEffect } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const [mediaItem, setMediaItem] = useState({
    title: "",
    director: "",
    year: "",
    genre: "",
    rating: "",
    type: "",
    isSeen: false,
    img: ""
  });

  const [search, setSearch] = useState("");

  const [listaPorVer, setListaPorVer] = useState([]);
  const [listaVistas, setListaVistas] = useState([]);

  const [filters, setFilters] = useState({ genre: "", type: "" });
  const [sort, setSort] = useState({ sortBy: "", order: "asc" });

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const resetFilters = () => {
    setFilters({ genre: "", type: "" });
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

  const modalContentMap = {
    addMovie: ModalAddMovie,
    editMovie: ModalAddMovie,
  };

  const Agregar = () => {
    setModalType("addMovie");
    setShowModal(true);
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
  };

  const handleEdit = (itemToEdit) => {
    setMediaItem(itemToEdit);
    setModalType("editMovie");
    setShowModal(true);
  };

  const actions = {
    agregar: Agregar,
    search: setSearch,
  };

  const navItem = [
    //Agregar Botones para el nav aca
    {name: "Agregar", action: Agregar, type: "Button"},
    {name: "Buscar", action: setSearch, type: "Search"},
  ];
  const cardButtons = [
    {name: "Ver", action: "ver", type: "Button"},
    {name: "Estado", action:"estado", type: "Button"},
    {name: "Eliminar", action:"eliminar", type: "Button"},
    {name: "Editar", action: handleEdit, type: "Button"},
  ]

  useEffect(() => {
    const peliculasVistas =
      JSON.parse(localStorage.getItem("listaVistas")) || [];
    const peliculasPorVer =
      JSON.parse(localStorage.getItem("listaPorVer")) || [];
    setListaVistas(peliculasVistas);
    setListaPorVer(peliculasPorVer);
  }, []);

  const handleSubmit = () => {
    const nuevaLista = mediaItem.isSeen
      ? [...listaVistas, mediaItem]
      : [...listaPorVer, mediaItem];

    const setList = mediaItem.isSeen ? setListaVistas : setListaPorVer;
    const storageKey = mediaItem.isSeen ? "listaVistas" : "listaPorVer";

    setList(nuevaLista);
    localStorage.setItem(storageKey, JSON.stringify(nuevaLista));

    setMediaItem({
      title: "",
      director: "",
      year: "",
      genre: "",
      rating: "",
      type: "",
      isSeen: false,
      img: "" 
    });
    setShowModal(false);
  };

  const renderModalContent = () => {
    const ModalContent = modalContentMap[modalType];
    const commonProps = {
      mediaItem,
      setMediaItem,
    };

    if (modalType === "addMovie") {
      return (
        <ModalContent
          {...commonProps}
          onSubmit={handleSubmit}
          title="Agregar Película o Serie"
          buttonText="Agregar"
        />
      );
    }

    if (modalType === "editMovie") {
      return (
        <ModalContent
          {...commonProps}
          onSubmit={handleEditSubmit}
          title="Editar Película o Serie"
          buttonText="Guardar Cambios"
        />
      );
    }

    return <ModalContent {...commonProps} />;
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
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.listContainer}>
          <List
            title="Por ver"
            array={getFilteredList(listaPorVer)}
            button={cardButtons}
          />
          <List
            title="Vista"
            array={getFilteredList(listaVistas)}
            button={cardButtons}
          />
          <Aside
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            onEdit={resetFilters}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
