const { Router } = require("express");
const { Insumos, Productos } = require("../db");

const router = Router();

router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let edit = req.body;
    let prod = await Productos.findByPk(id);

    await prod.update({
      ...prod,
      stock: Number(prod.stock) + Number(edit.stock),
    });

    await prod.defaultInput.forEach(async (element) => {
      let aux = await Insumos.findAll({
        where: { name: element.insumos },
      });
      let aux2 = aux[0];

      await aux2.update({
        ...aux2,
        stock: Number(aux2.stock) - Number(element.cantidad) * edit.stock,
      });
    });
    return res.status(200).send("Produccion agregada con exito");
  } catch (error) {
    console.log("ERROR EN RUTA PUT PRODUCCION", error);
  }
});

module.exports = router;
