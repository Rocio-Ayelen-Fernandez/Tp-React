import Button from "../Button/Button";
import styles from "./Modal.module.css";
import { useState } from "react";

const ModalAddMovie = ({ mediaItem, setMediaItem, onSubmit, title, buttonText }) => {
  const [error, setError] = useState("");
  const fields = [
    { name: "title", placeholder: "Título", type: "text" },
    { name: "director", placeholder: "Director", type: "text" },
    { name: "year", placeholder: "Año", type: "number" },
    {
      name: "genre",
      type: "select",
      options: ["Drama", "Acción", "Comedia", "Ciencia Ficción"],
      placeholder: "Seleccionar género",
    },
    {
      name: "rating",
      placeholder: "Rating (0-10)",
      type: "number",
      min: 0,
      max: 10,
    },
    {
      name: "type",
      type: "select",
      options: ["Película", "Serie"],
      placeholder: "Seleccionar tipo",
    },
    {name: "url", placeholder: "URL de la imagen", type: "text"},
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMediaItem((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const isFormValid = () => {
    let isValid= true
    for (const field of fields) {
      const value = mediaItem[field.name];
      if (!value || (field.type === "number" && isNaN(value))) {
        isValid =false
      }
      if (field.name === "rating" && (value < 0 || value > 10)) {
        isValid = false
      }
    }
    return isValid;
  };
  const handleSubmit = () => {
    if (isFormValid()) {
      setError("");
      onSubmit();
    } else {
      setError("Por favor, completá todos los campos correctamente.");
    }
  };
  return (
    <div className={styles.modalForm}>
      <h3>{title}</h3>
      <div className={styles.modalGrid}>
        {fields.map((field) =>
          field.type === "select" ? (
            <select
              key={field.name}
              name={field.name}
              value={mediaItem[field.name] || ""}
              onChange={handleChange}
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
            />
          )
        )}
      </div>

      <label className={styles.modalCheckbox}>
        ¿Vista?
        <input
          type="checkbox"
          name="isSeen"
          checked={mediaItem.isSeen || false}
          onChange={handleChange}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
      <Button name={buttonText} onclick={handleSubmit} />
    </div>
  );
};

export default ModalAddMovie;