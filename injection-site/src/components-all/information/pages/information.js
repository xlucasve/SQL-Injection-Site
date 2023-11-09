import React from "react";
import { Link } from "react-router-dom";
import Foto from "../../../images/xckdMeme.png";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./information.css";

const Information = () => {
  const nodeJsInjectionFunction = `router.post("/injection", async (req, res) => {
  const { email } = req.body;
  const query = "SELECT * FROM USERS where email = '{email}'";
  let pool = await sql.connect(sqlConfig);
  try {
    const rows = await pool.request().query(query);
    res.json(rows.recordsets);
  } catch (error) {
    console.log(error);
  }
});`;

  const nodeJsNotInjection = `async function getUsuarios(email) {
    try {
      let pool = await sql.connect(sqlConfig);
      let resultado = await pool
        .request()
        .input("email", sql.VarChar, email)
        .query("SELECT * from USERS WHERE email = @email");
      return resultado.recordsets;
    } catch (e) {
      console.log(e);
    }
  }`;
  return (
    <div>
      <p className="section-title">Ataques de SQL</p>
      <img src={Foto} alt="xkcd Exploits of a Mom" className="imagen"></img>
      <p>
        Un ataque de SQL es causa de malas prácticas de programación, enviando
        solicitudes a la base de datos con variables, que son escritras por los
        usuarios del sistema, enviadas en formato String sin control sobre su
        contenido.
      </p>
      <div>
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {nodeJsInjectionFunction}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {nodeJsNotInjection}
        </SyntaxHighlighter>
      </div>

      <Link to="/">Realiza ataques SQL aquí</Link>
    </div>
  );
};

export default Information;
