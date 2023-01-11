const { Router } = require("express");
const { Productos, Insumos } = require("../db");
const { create_product, get_product } = require("../utils/utilsProductos");

const router = Router();

//.........................................................................................//
// POST /productos
router.post("/", async (req, res) => {
  try {
    let data = req.body;

    if (!data.name) {
      return res.status(404).send("Faltan campos obliatorios");
    }
    if (data.name) {
      let product = Productos.findAll({
        where: {
          name: data.name,
        },
      });

      if (product.length) {
        return res.status(404).send("El producto ya existe");
      } else {
        create_product(data);
        return res.status(200).send("Producto creado con exito");
      }
    }
  } catch (error) {
    console.log("ERROR EN RUTA POST/", error);
  }
});

//.........................................................................................//
// GET /productos
router.get("/", async (req, res) => {
  try {
    let { name } = req.query;
    let data = await get_product();

    if (name) {
      let data_product = data.filter((prod) =>
        prod.name.toLowerCase().includes(name.toLowerCase())
      );

      data_product.length > 0
        ? res.status(200).send(data_product)
        : res.status(404).send("No se encontro el producto");
    }

    if (req.query.property === "difference" && req.query.order === "DESC") {
      let data = await Productos.findAll();

      let dataSort = data.sort((a, b) => {
        if (a.difference > b.difference) return 1;
        if (b.difference > a.difference) return -1;
        return 0;
      });

      return res.status(200).send(dataSort);
    }

    if (req.query.property === "difference" && req.query.order === "ASC") {
      let data = await Productos.findAll();

      let dataSort = data.sort((a, b) => {
        if (a.difference > b.difference) return -1;
        if (b.difference > a.difference) return 1;
        return 0;
      });
      return res.status(200).send(dataSort);
    } else {
      let data_total = await Productos.findAll({
        order: [[req.query.property, req.query.order]],
        include: {
          model: Insumos,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      return res.status(200).send(data_total);
    }
  } catch (error) {
    console.log("ERROR EN RUTA GET PRODUCTOS", error);
  }
});

//.........................................................................................//
// GET /productos/:id
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    if (id) {
      let data = await Productos.findByPk(id, {
        include: {
          model: Insumos,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      data
        ? res.status(200).send(data)
        : res.status(404).send("No esta el detalle del producto");
    }
  } catch (error) {
    console.log("ERROR EN RUTA GET PRODUCTOS ID");
  }
});

//.........................................................................................//
// PUT /productos
router.put("/add/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let edit = req.body;
    let prod = await Productos.findByPk(id);

    await prod.update({
      ...prod,
      stock: Number(prod.stock) + Number(edit.stock),
    });

    return res.status(200).send("Stock agregado con exito");
  } catch (error) {
    console.log("ERROR EN RUTA PUT ADD PRODUCTO");
  }
});

//.........................................................................................//
// PUT /productos
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let edit = req.body;

    if (id) {
      let data = await Productos.update(edit, { where: { id } });

      return res.status(200).send("Producto editado con exito");
    } else {
      return res.status(200).send("No se pudo editar el producto");
    }
  } catch (error) {
    console.log("ERROR EN RUTA PUT PRODUCTOS");
  }
});

//.........................................................................................//
// DELETE /productos
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;

    if (id) {
      await Productos.destroy({
        where: {
          id,
        },
      });

      return res.status(200).send("Producto eliminado con exito");
    } else {
      return res.status(404).send("No se pudo eliminar el producto");
    }
  } catch (error) {
    console.log("ERROR EN RUTA DELETE PRODUCTOS", error);
  }
});

module.exports = router;
