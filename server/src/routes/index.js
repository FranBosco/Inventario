const { Router } = require("express");

const router = Router();

const insumos = require("./insumos");
const productos = require("./productos");
const productosHome = require("./productosHome");

router.use("/insumos", insumos);
router.use("/productos", productos);
router.use("/productosHome", productosHome);

module.exports = router;
