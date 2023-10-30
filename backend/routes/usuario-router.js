const express = require("express");

const router = express.Router();

const usuarioController = require("../controllers/controller");

router.get("/login", usuarioController.getUsuarios);

module.exports = router;
