const { Router } = require("express");
const { create_mp, materiaPrima_load } = require("../utils/utilsMp");
const { Insumos, Productos } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let { name } = req.query;
    let data = await materiaPrima_load();

    if (name) {
      let data_insumos = data.filter((mp) =>
        mp.name.toLowerCase().includes(name.toLocaleLowerCase())
      );
      data_insumos.length > 0
        ? res.status(200).send(data_insumos)
        : res.status(404).send("No hay materia prima");
    } else {
      return res.status(200).send(data);
    }
  } catch (error) {
    console.log("Rompo en rutaGet MP", error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const data_insumos = await Insumos.findAll();

    if (!data) {
      res.status(400).send("Faltan campos");
    } else {
      create_mp(data);
      return res.status(200).send(data);
    }
  } catch (error) {
    console.log("ROMPO RUTA POST INSUMOS", error);
  }
});

router.put("/add/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let insumos = await Insumos.findByPk(id);

    await insumos.update({
      ...insumos,
      stock: insumos.stock + 1,
    });
    return res.status(200).send("Unidad Agregada con exito");
  } catch (error) {
    console.log("ROMPO EN RUTA PUT INSUMOS", error);
  }
});
router.put("/remove/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let insumos = await Insumos.findByPk(id);
    if (insumos.stock === 0) {
      return res.status(404).send("El producto no tiene insumos.");
    }

    await insumos.update({
      ...insumos,
      stock: insumos.stock - 1,
    });
    return res.status(200).send("Insumo quitado");
  } catch (error) {
    console.log("ERROR EN LA RUTA PUT/REMOVE", error);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Insumos.destroy({
      where: { id },
    });
    res.send("Borrado");
  } catch (error) {
    console.log("Rompo en delete de insumos.");
  }
});

module.exports = router;
