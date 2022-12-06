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

      if (product) {
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
        prod.name.toLoweCase().includes(name.toLowerCase())
      );

      data_product.length > 0
        ? res.status(200).send(data_product)
        : res.status(404).send("No se encontro el producto");
    } else {
      return res.status(200).send(data);
    }
  } catch (error) {
    console.log("ERROR EN RUTA GET PRODUCTOS", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await get_product();

    if (id) {
      let data_product = data.find((product) => product.id == id);

      data_product
        ? res.status(200).send(data_product)
        : res.status(404).send("No esta el detalle del producto");
    }
  } catch (error) {
    console.log("ERROR EN RUTA GET PRODUCTOS ID");
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
      let data = await Productos.destroy({
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
