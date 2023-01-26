const { Router } = require("express");
const { Insumos, Productos } = require("../db");

const router = Router();

router.put("/", async (req, res) => {
  try {
    let edit = req.body;
    let prod = await Productos.findByPk(id);

    edit.map(async (element) => {
      if (element !== null) {
        await prod.update({
          ...prod,
          stock: Number(prod.stock) + Number(element.stock),
        });

        await prod.defaultInput.forEach(async (el) => {
          let aux = await Insumos.findAll({
            where: { name: el.insumos },
          });
          let aux2 = aux[0];

          await aux2.update({
            ...aux2,
            stock: Number(aux2.stock) - Number(el.cantidad) * element.stock,
          });
        });
      }
    });

    return res.status(200).send("Produccion agregada con exito");
  } catch (error) {
    console.log("ERROR EN RUTA PUT PRODUCCION", error);
  }
});

module.exports = router;
