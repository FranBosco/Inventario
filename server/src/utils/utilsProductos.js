const { Insumos, Productos } = require("../db");

//.........................................................................................//
// CREAR PRODUCTO
const create_product = async (data) => {
  try {
    const { name, stock, detalle, min, img, insumos } = data;

    const new_product = await Productos.create({
      name,
      stock,
      detalle,
      min,
      img,
    });

    const product_insumos = await Insumos.findAll({
      where: {
        name: insumos,
      },
    });

    await new_product.addInsumos(product_insumos);

    return new_product;
  } catch (error) {
    console.log("ERROR en create_product", error);
  }
};

//.........................................................................................//
// OBTENER PRODUCTO
const get_product = async () => {
  try {
    return await Productos.findAll({
      include: [{ model: Insumos }],
    });
  } catch (error) {
    console.log("ERROR en get_product", error);
  }
};

//.........................................................................................//
// BORRAR PRODUCTO

module.exports = {
  create_product,
  get_product,
};
