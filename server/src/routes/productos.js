const { Router } = require("express");
const { Productos, Insumos } = require("../db");
const { crear_producto, obtener_producto } = require("../utils/utilsProductos");

const router = Router();

//.........................................................................................//
// POST /productos
router.post("/", async (req, res) => {
  try {
    let data = req.body;

    if (!data.nombre) {
      return res.status(404).send("Faltan campos obliatorios");
    }
    if (data.nombre) {
      let producto = Productos.findAll({
        where: {
          nombre: data.nombre,
        },
      });

      if (producto) {
        return res.status(404).send("El producto ya existe");
      } else {
        crear_producto(data);
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
    let data = await obtener_producto();

    if (name) {
      let data_producto = data.filter((prod) =>
        prod.name.toLoweCase().includes(name.toLowerCase())
      );

      data_producto.length > 0
        ? res.status(200).send(data_producto)
        : res.status(404).send("No se encontro el producto");
    } else {
      return res.status(200).send(data);
    }
  } catch (error) {
    console.log("ERROR EN RUTA GET PRODUCTOS", error);
  }
});

//.........................................................................................//
// GET /productos

module.exports = router;
