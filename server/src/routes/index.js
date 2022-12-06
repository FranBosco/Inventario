const { Router } = require("express");

const router = Router();

const insumos = require("./insumos");
const productos = require("./productos");

router.use("/insumos", insumos);
router.use("/productos", productos);

module.exports = router;
