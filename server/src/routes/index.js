const { Router } = require("express");

const router = Router();

const insumos = require("./insumos");
const insumosHome = require("./insumosHome");
const productos = require("./productos");
const productosHome = require("./productosHome");
const ventas = require("./ventas");
const produccion = require("./produccion");

router.use("/insumos", insumos);
router.use("/insumosHome", insumosHome);
router.use("/productos", productos);
router.use("/productosHome", productosHome);
router.use("/ventas", ventas);
router.use("/produccion", produccion);

module.exports = router;
