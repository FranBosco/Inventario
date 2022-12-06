const { Router } = require("express");
const insumos = require("./insumos");

const router = Router();


router.use("/insumos", insumos);

const productos = require("./productos");

router.use("/productos", productos);


module.exports = router;
