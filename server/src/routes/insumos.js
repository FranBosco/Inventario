const { Router } = require("express");
const { create_mp, materiaPrima_load } = require("../utils/utilsMp");
const { Insumos, Productos } = require("../db");

const router = Router();

//.........................................................................................//
// POST /insumos
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const data_insumos = await Insumos.findAll();

    if (!data) {
      return res.status(400).send("Faltan campos");
    } else {
      create_mp(data);
      return res.status(200).send(data);
    }
  } catch (error) {
    console.log("ROMPO RUTA POST INSUMOS", error);
  }
});

//.........................................................................................//
// GET /insumos
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
    }

    if (req.query.property === "difference" && req.query.order === "DESC") {
      let data = await Insumos.findAll();

      let dataSort = data.sort((a, b) => {
        if (a.difference > b.difference) return 1;
        if (b.difference > a.difference) return -1;
        return 0;
      });

      return res.status(200).send(dataSort);
    }

    if (req.query.property === "difference" && req.query.order === "ASC") {
      let data = await Insumos.findAll();

      let dataSort = data.sort((a, b) => {
        if (a.difference > b.difference) return -1;
        if (b.difference > a.difference) return 1;
        return 0;
      });
      return res.status(200).send(dataSort);
    } else {
      let data_total = await Insumos.findAll({
        order: [[req.query.property, req.query.order]],
      });

      return res.status(200).send(data_total);
    }
  } catch (error) {
    console.log("Rompo en rutaGet MP", error);
  }
});

//.........................................................................................//
// GET /insumos/:id
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    if (id) {
      let data = await Insumos.findByPk(id);

      data
        ? res.status(200).send(data)
        : res.status(404).send("No esta el detalle");
    }
  } catch (error) {
    console.log("ERROR EN RUTA GET INSUMOS ID");
  }
});

//..............................................................................................//

//put /insumos/add/id
router.put("/add/:id", async (req, res) => {
  try {
    let edit = req.body;

    edit.map(async (element) => {
      if (element !== null) {
        let prod = await Productos.findByPk(element.id);

        await prod.update({
          ...prod,
          stock: Number(prod.stock) + Number(element.stock),
        });
      }
    });

    return res.status(200).send("Insumo editado con exito");
  } catch (error) {
    console.log("ERROR EN RUTA PUT INSUMO");
  }
});
//..............................................................................................//
//put /insumos/add/id
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let edit = req.body;

    if (id) {
      let data = await Insumos.update(edit, { where: { id } });

      return res.status(200).send("Insumo editado con exito");
    } else {
      return res.status(200).send("No se pudo editar el Insumo");
    }
  } catch (error) {
    console.log("ERROR EN RUTA PUT INSUMO");
  }
});

//.........................................................................................//
// DELETE /insumos
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
