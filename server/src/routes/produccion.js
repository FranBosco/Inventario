const { Router } = require("express");
const { Insumos, Productos } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  try {
    let { id } = req.params;
    let edit = req.body;
    let prod = await Productos.findByPk(id);

    await prod.update({
      ...prod,
      stock: Number(prod.stock) + Number(edit.stock),
    });

    prod.defaultInput.forEach(async (element) => {
      let aux = await Insumos.findAll({
        name: element.insumos,
      });

      await aux.update({
        ...aux,
        stock: Number(aux.stock) - Number(element.cantidad) * Number(edit),
      });
    });
  } catch (error) {
    console.log("ERROR EN RUTA PUT PRODUCCION", error);
  }
});

module.exports = router;
