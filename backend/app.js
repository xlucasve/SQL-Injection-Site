const controller = require("./controllers/controller");

var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();
var sql = require("mssql");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use("/api", router);

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

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Api funcionando en el puerto " + port);

router.use((request, response, next) => {
  console.log("Middleware");
  next();
});

router.post("/injection", async (req, res) => {
  const { email } = req.body;
  const query = `SELECT * FROM USERS where email = '${email}'`;
  let pool = await sql.connect(sqlConfig);
  try {
    const rows = await pool.request().query(query);
    res.json(rows.recordsets);
  } catch (error) {
    console.log(error);
  }
});

router.route("/usuarios").get((request, response) => {
  const { email } = request.body;
  controller.getUsuarios(email).then((result) => {
    response.json(result);
  });
});
