const { Router } = require("express");
const insumos = require("./insumos");

const router = Router();

router.use("/insumos", insumos);

module.exports = router;
