import Button from "../Button/Button";
import styles from "./Modal.module.css";
// traes el objeto
const ModalAddMovie = ({ mediaItem, setMediaItem, isSeen, setIsSeen, onSubmit }) => {
  
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setMediaItem({
  //     ...mediaItem,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };
  
  
  const fields = [
    { name: "title", placeholder: "Título", type: "text" },
    { name: "director", placeholder: "Director", type: "text" },
    { name: "year", placeholder: "Año", type: "number" },
    {
      name: "genre", type: "select", options: ["Drama", "Acción", "Comedia", "Ciencia Ficción"], placeholder: "Seleccionar género",
    },
    {
      name: "rating", placeholder: "Rating (0-10)", type: "number", min: 0, max: 10,},
    {
      name: "type", type: "select", options: ["Película", "Serie"], placeholder: "Seleccionar tipo",
    },
  ];


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMediaItem((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
// /**
//  * array =[
//  *  {
//  * tittle: 'Origen',
//  * director: '....',
//  * img: 'url',
//  * year: 23,
//  * genre: '...',
//  * rating: 2.5,
//  * 
//  * }
//  * ]
//  */
  
/**
 * obj{
 * tittl
 * }
    const [inputs, setInptus] = useState('')
 */
    return (
      <div className={styles.modalForm}>
        <h3>Agregar Película o Serie</h3>
        <div className={styles.modalGrid}>
          {fields.map((field) =>
            field.type === "select" ? (
              <select
                key={field.name}
                name={field.name}
                value={mediaItem[field.name]}
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
                value={mediaItem[field.name]}
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
            checked={mediaItem.isSeen}
            onChange={handleChange}
          />
        </label>
  
        <Button name="Agregar" onclick={onSubmit} />
      </div>
    );
  };
  
  export default ModalAddMovie;
  

// VERSION CON FIELDS

/* <div className={styles.modalForm}>
<h3>Agregar Película o Serie</h3>
<div className={styles.modalGrid}>
  {fields.map((field) =>
    field.type === "select" ? (
      <select
        key={field.name}
        name={field.name}
        value={mediaItem[field.name]}
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
        value={mediaItem[field.name]}
        min={field.min}
        max={field.max}
        onChange={handleChange}
      />
    )
  )}
</div> */


// VERSION ORIGINAL

// const ModalAddMovie = ({ mediaItem, setMediaItem, isSeen, setIsSeen, onSubmit }) => {
//   return (
//     <div>
//       <h3>Agregar Película</h3>
//       <input
//         type="text"
//         value={mediaItem}
//         onChange={(e) => setMediaItem(e.target.value)}
//       />
//       <label>
//         ¿Vista?
//         <input
//           type="checkbox"
//           checked={isSeen}
//           onChange={() => setIsSeen(!isSeen)}
//         />
//       </label>
//       <Button name="Agregar" onclick={onSubmit} />
//     </div>
//   );
// };

// export default ModalAddMovie;
