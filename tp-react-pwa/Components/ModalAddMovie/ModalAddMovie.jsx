import Button from "../Button/Button";
import styles from "../Modal/Modal.module.css";
import { useState } from "react";

const ModalAddMovie = ({ mediaItem, setMediaItem, onSubmit, title, buttonText, modalType }) => {
  const [error, setError] = useState("");
  const fields = [
    { name: "title", placeholder: "Título", type: "text" },
    { name: "director", placeholder: "Director", type: "text" },
    { name: "year", placeholder: "Año", type: "number" },
    {
      name: "genre",
      type: "select",
      options: ["Drama", "Acción", "Comedia", "Ciencia Ficción", "Terror", "Romance", "Aventura", "Animación", "Documental", "Fantasía", "Musical", "Suspenso"],
      placeholder: "Seleccionar género",
    },
    {
      name: "type",
      type: "select",
      options: ["Película", "Serie"],
      placeholder: "Seleccionar tipo",
    },
    { name: "url", placeholder: "URL de la imagen", type: "text" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMediaItem((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const isFormValid = () => {
    let errorMessage = "";

    for (const field of fields) {
      const value = mediaItem[field.name];

      if (!value && value !== 0) {
        errorMessage = `El campo ${field.placeholder} es obligatorio.`;
      }

      if (field.name === "year" && (value < 1800 || value > new Date().getFullYear())) {
        errorMessage = `El campo ${field.placeholder} debe estar entre 1800 y ${new Date().getFullYear()}.`;
      }

      if (field.name === "rating" && mediaItem.isSeen) {
        if (value < 0 || value > 5) {
          errorMessage = `El campo ${field.placeholder} debe estar entre 0 y 5.`;
        }
      }
    }

    return {
      isValid: errorMessage === "",
      message: errorMessage,
    };
  };

  const handleSubmit = () => {
    if (isFormValid().isValid) {
      setError("");
      onSubmit();
    } else {
      setError(isFormValid().message);
    }
  };
  return (
    <div className={styles.modalForm}>
      <h3>{title}</h3>
      <div className={styles.modalGrid}>
        {fields
          .filter((field) => field.name !== "rating" || mediaItem.isSeen)
          .map((field) =>
            field.type === "select" ? (
              <select
                key={field.name}
                name={field.name}
                value={mediaItem[field.name] || ""}
                onChange={handleChange}
                className={styles.modalInput}
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={mediaItem[field.name] || ""}
                min={field.min}
                max={field.max}
                onChange={handleChange}
                className={styles.modalInput}
              />
            )
          )}
      </div>
      {mediaItem.isSeen || modalType === "addMovie" ? (
        <>
          <label className={styles.modalCheckbox}>
            ¿Vista?
            <input
              type="checkbox"
              name="isSeen"
              checked={mediaItem.isSeen || false}
              onChange={handleChange}
            />
          </label>
          {mediaItem.isSeen && (
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              min={0}
              max={10}
              value={mediaItem.rating || null}
              onChange={handleChange}
              className={styles.modalInput}
            />
          )}
        </>
      ) : <div>Para colocar rating, ¡primero debe verla!</div>}
      {error && <p className={styles.error}>{error}</p>}
      <Button name={buttonText} onclick={handleSubmit}> {buttonText} </Button>
    </div>
  );
};

export default ModalAddMovie;