import React, { useState } from "react";
import styles from "./Comentarios.module.css";

const Comentarios = () => {
  const [comentario, setComentario] = useState("");

  const handleChange = (event) => {
    setComentario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Comentario enviado: " + comentario);
    setComentario("");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Deja tu comentario</h2>
      <label>
        Comentario:
        <textarea
          value={comentario}
          onChange={handleChange}
          className={styles.textarea}
        />
      </label>
      <button type="submit" className={styles.boton}>
        Enviar
      </button>
    </form>
  );
};

export default Comentarios;