const controller = require("./controllers/controller");

var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use("/api", router);

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Api funcionando en el puerto " + port);
router.use((request, response, next) => {
  next();
});

router.route("/injection").post((request, response) => {
  const { email } = request.body;
  controller.getUsuariosInjectable(email).then((result) => {
    response.json(result);
  });
});

router.route("/usuarios").get((request, response) => {
  const { email } = request.body;
  controller.getUsuarios(email).then((result) => {
    response.json(result);
  });
});
