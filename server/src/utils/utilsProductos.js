const { Insumos, Productos } = require("../db");

//.........................................................................................//
// CREAR PRODUCTO
const crear_producto = async (data) => {
  try {
    const { nombre, stock, detalle, insumos } = data;

    const nuevo_producto = await Productos.create({
      nombre,
      stock,
      detalle,
    });

    const producto_insumos = await Insumos.findAll({
      where: {
        nombre: insumos,
      },
    });

    await nuevo_producto.addInsumos(producto_insumos);

    return nuevo_producto;
  } catch (error) {
    console.log("ERROR en crear_producto", error);
  }
};

//.........................................................................................//
// OBTENER PRODUCTO
const obtener_producto = async () => {
  try {
    return await Insumos.findAll({
      include: [{ model: Insumos }],
    });
  } catch (error) {
    console.log("ERROR en obtener_producto", error);
  }
};

//.........................................................................................//
// BORRAR PRODUCTO

module.exports = {
  crear_producto,
  obtener_producto,
};
