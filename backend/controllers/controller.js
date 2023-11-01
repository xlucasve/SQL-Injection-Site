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
      .input("email", sql.VarChar, email)
      .query("SELECT * from USERS WHERE email = @email");
    return resultado.recordsets;
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  getUsuarios: getUsuarios,
};
