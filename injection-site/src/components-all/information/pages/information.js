import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div>
      <h1>Ataques de SQL</h1>
      <p>
        Un ataque de SQL es causa de malas prácticas de programación, enviando
        solicitudes a la base de datos con variables, que son escritras por los
        usuarios del sistema, enviadas en formato String.
      </p>
      <Link to="/">Realiza ataques SQL aquí</Link>
    </div>
  );
};

export default Information;
