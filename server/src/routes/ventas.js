const { Router } = require("express");
const { Productos, Insumos } = require("../db");

const router = Router();

//.........................................................................................//
// PUT /ventas
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let edit = req.body;
    let prod = await Productos.findByPk(id);

    await prod.update({
      ...prod,
      stock: Number(prod.stock) - Number(edit.stock),
    });

    return res.status(200).send("Venta realizada con exito");
  } catch (error) {
    console.log("ERROR EN RUTA PUT VENTAS");
  }
});

module.exports = router;
