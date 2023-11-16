import React from "react";
import { Link } from "react-router-dom";
import Foto from "../../../images/xckdMeme.png";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDarkReasonable,
  docco,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./information.css";

const Information = () => {
  const nodeJsInjectionFunction = `
  router.post("/injection", async (req, res) => {
  const { email } = req.body;
  const query = "SELECT * FROM USERS where email = '{email}'";
  let pool = await sql.connect(sqlConfig);
  try {
    const rows = await pool.request().query(query);
    res.json(rows.recordsets);
  } catch (error) {
    console.log(error);
  }
});
`;

  const nodeJsNotInjection = `
  async function getUsuarios(email) {
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
  }
  `;

  const javaJDBC = `
  public void agregarFactura(){

    PreparedStatement statementFactura = connectionSQL.prepareStatement("insert into facturas values (?,?,?)");
    statementFactura.setInt(1, operadorResponsable.getIdOperador());
    statementFactura.setInt(2, cliente.getUsuarioIdSQL());
    statementFactura.setInt(3, idPago);
    statementFactura.executeUpdate();
  }
  `;

  const javaSpring = `
  public interface UserRepository extends JpaRepository<User, Integer> {

  @Query(value = "SELECT u FROM User u WHERE  u.email = ?1 AND u.password = ?2")
  Optional<User> findByEmailAndPassword(String userEmail, String userPassword);

  }
  `;

  const csharp = `
  using System;
  using System.Data.SqlClient;
  
  class Program
  {
      static void Main()
      {
          string userInput = “correo@gmail.com”;
          
          string connectionString = "Tu cadena de conexión";
          string queryString = "SELECT * FROM TuTabla WHERE Columna = @UserInput";
  
          using (SqlConnection connection = new SqlConnection(connectionString))
          {
              SqlCommand command = new SqlCommand(queryString, connection);
              command.Parameters.AddWithValue("@UserInput", userInput);
          }
      }
  }
  `;

  const aspnet = `
  String query = "SELECT account_balance FROM user_data WHERE user_name = ?";
  try {
  OleDbCommand command = new OleDbCommand(query, connection);
  command.Parameters.Add(new OleDbParameter("customerName",CustomerName Name.Text));
     OleDbDataReader reader = command.ExecuteReader();
  }
  `;

  const python = `
  connection = mysql.connector.connect(host='localhost',
  database='python_db',
  user='root')

  cursor = connection.cursor(prepared=True)

  sql_insert_query = """ INSERT INTO Employee
  (id, Name, Joining_date, salary) VALUES (%s,%s,%s,%s)"""
  tuple1 = (1, "Json", "2019-03-23", 9000)
  tuple2 = (2, "Emma", "2019-05-19", 9500)

  cursor.execute(sql_insert_query, tuple1)
  cursor.execute(sql_insert_query, tuple2)
  connection.commit()
  `;

  const php = `
  $stmt = mysqli_prepare($dbc, "SELECT * FROM users WHERE username = ? AND password = ?"); mysqli_stmt_bind_param($stmt, "s", $userName);
  mysqli_stmt_bind_param($stmt, "s", $userPass); mysqli_stmt_execute($stmt);
  $row = mysqli_stmt_fetch($stmt);
  `;
  return (
    <div className="background-body">
      <div className="main-body">
        <p className="section-title">Ataques de SQL</p>
        <img src={Foto} alt="xkcd Exploits of a Mom" className="imagen"></img>
        <p>
          Un ataque de SQL es causa de malas prácticas de programación, enviando
          solicitudes a la base de datos con variables, que son escritras por
          los usuarios del sistema, enviadas en formato String sin control sobre
          su contenido.
        </p>
        <p>
          A continuación le damos un ejemplo como se ve un endpoint que puede
          ser atacado, hecho en NodeJS:
        </p>
        <div>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDarkReasonable}
          >
            {nodeJsInjectionFunction}
          </SyntaxHighlighter>
          <p></p>
          <p>
            Como se puede ver, el parámetro de "email" a buscar se envia como un
            string literal. Esto lo hace susceptible a ataques SQL. Un ejemplo
            de ataque se podría enviar sería:
          </p>
          <SyntaxHighlighter language="sql" style={atomOneDarkReasonable}>
            SELECT * FROM USERS WHERE email = ''; DROP TABLE USERS -- AND
            password =
          </SyntaxHighlighter>
          <p>
            Esto se puede evitar fácilmente utilizando las herramientas
            adecuadas:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDarkReasonable}
          >
            {nodeJsNotInjection}
          </SyntaxHighlighter>
          <p>
            Utilizando métodos para enviar Queries Parametrizadas, evitamos que
            la base de datos ejecute la linea de código en forma corriente,
            separando el valor que envía el usuario de la query, la cual tomo el
            valor de manera literal.
          </p>
          <p>
            De esta manera evitamos que los usuarios puedan enviar valores que
            ejecuten texto no deseado. A continuación damos una lista de
            ejemplos de como realizar una query parametrizada en los lenguajes
            más comunes:
          </p>
          <p className="section-title">NodeJS</p>
          <p>Realizado utilizando la librería de "mssql"</p>
          <p>Encontrada aquí: https://www.npmjs.com/package/mssql</p>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDarkReasonable}
          >
            {nodeJsNotInjection}
          </SyntaxHighlighter>
          <p className="section-title">Java JDBC</p>
          <SyntaxHighlighter language="java" style={atomOneDarkReasonable}>
            {javaJDBC}
          </SyntaxHighlighter>
          <p className="section-title">Java Spring Framework</p>
          <p>
            Utilizando repositorios con JPA Data, las queries ya se encuentran
            parametrizadas
          </p>
          <SyntaxHighlighter language="java" style={atomOneDarkReasonable}>
            {javaSpring}
          </SyntaxHighlighter>
          <p className="section-title">C#</p>
          <SyntaxHighlighter language="csharp" style={atomOneDarkReasonable}>
            {csharp}
          </SyntaxHighlighter>
          <p className="section-title">ASP .Net</p>
          <SyntaxHighlighter language="csharp" style={atomOneDarkReasonable}>
            {aspnet}
          </SyntaxHighlighter>
          <p className="section-title">Python</p>
          <SyntaxHighlighter language="python" style={atomOneDarkReasonable}>
            {python}
          </SyntaxHighlighter>
          <p className="section-title">PHP</p>
          <SyntaxHighlighter language="php" style={atomOneDarkReasonable}>
            {php}
          </SyntaxHighlighter>
          <p className="section-title">RUBY</p>
          <p className="section-title">Go lang</p>
        </div>
        <Link to="/">Realiza ataques SQL aquí</Link>
      </div>
    </div>
  );
};

export default Information;
