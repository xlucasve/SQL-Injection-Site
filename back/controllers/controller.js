const sql = require("mssql");

const sqlConfig = {
  user: "sa",
  password: "SuperAdmin#",
  database: "Injection",
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

async function getUsuarios(email) {
  try {
    let pool = await sql.connect(sqlConfig);
    let resultado = await pool
      .request()
      .input("email", sql.VarChar, email) //Envía en un parámetro el dato
      .query("SELECT * from USERS WHERE email = @email");
    return resultado.recordsets;
  } catch (e) {
    console.log(e);
  }
}

async function getUsuariosInjectable(email) {
  //Envía el string literal a la consulta SQL
  const query = `SELECT * FROM USERS where email = '${email}'`;
  try {
    let pool = await sql.connect(sqlConfig);
    const rows = await pool.request().query(query);
    return rows.recordsets;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getUsuarios: getUsuarios,
  getUsuariosInjectable: getUsuariosInjectable,
};
