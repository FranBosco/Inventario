const { Router } = require("express");
const { Productos, Insumos } = require("../db");
const { get_product_home } = require("../utils/utilsProductosHome");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let data_total = await get_product_home();

    return res.status(200).send(data_total);
  } catch (error) {
    console.log("ERROR EN RUTA GET PRODUCTOSHOME", error);
  }
});

module.exports = router;
