import Button from "../Button/Button";

const ModalAddMovie = ({ mediaItem, setMediaItem, isSeen, setIsSeen, onSubmit }) => {
  return (
    <div>
      <h3>Agregar Película</h3>
      <input
        type="text"
        value={mediaItem}
        onChange={(e) => setMediaItem(e.target.value)}
      />
      <label>
        ¿Vista?
        <input
          type="checkbox"
          checked={isSeen}
          onChange={() => setIsSeen(!isSeen)}
        />
      </label>
      <Button name="Agregar" onclick={onSubmit} />
    </div>
  );
};

export default ModalAddMovie;
