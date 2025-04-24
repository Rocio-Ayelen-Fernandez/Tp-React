import ModalAddMovie from "../ModalAddMovie/ModalAddMovie";
import ModalDeleteMovie from "../ModalDeleteMovie/ModalDeleteMovie";
import ModalVerMedia from "../ModalVerMedia/ModalVerMedia";
// Modal content map
  const modalContentMap = {
    addMovie: ModalAddMovie,
    deleteMediaItem: ModalDeleteMovie,
    verMedia: ModalVerMedia,
    editMovie: ModalAddMovie,
    // agregar más tipos acá
  };

const RenderModalContent = ({handleSubmit, mediaItem, setMediaItem, handleEditSubmit, modalType}) => {
    const ModalContent = modalContentMap[modalType];
    const commonProps = {
      mediaItem,
      setMediaItem,
      modalType,
    } //Poner los props acá (?)
    if (modalType === "addMovie") {

      return (
        <ModalContent
          {...commonProps}
          onSubmit={handleSubmit}
          title="Agregar Película o Serie"
          buttonText="Agregar"
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
  }
  export default RenderModalContent