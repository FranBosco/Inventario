const { Router } = require("express");
const { Productos, Insumos } = require("../db");
const { get_insumos_home } = require("../utils/utilsInsumosHome");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let data_total = await get_insumos_home();

    return res.status(200).send(data_total);
  } catch (error) {
    console.log("ERROR EN RUTA GET INSUMOSHOME", error);
  }
});

module.exports = router;
