const { Insumos, Productos } = require("../db");
const preProducto = require("../json/preProducto.json");

//.........................................................................................//
// CARGA JSON

const preload_products = async () => {
  try {
    let data = preProducto.map((product) => {
      return {
        name: product.name,
        stock: product.stock,
        details: product.details,
        min: product.min,
        insumos: product.insumos,
      };
    });

    for (const product of data) {
      create_product(product);
    }
    return data;
  } catch (error) {
    console.log("Error en preload_products", error);
  }
};

//.........................................................................................//
// CREAR PRODUCTO
const create_product = async (data) => {
  try {
    const { name, stock, details, min, img, insumos } = data;

    const new_product = await Productos.create({
      name,
      stock,
      details,
      min,
      img,
    });

    const product_insumos = await Insumos.findAll({
      where: { name: insumos },
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
// OBTENER PRODUCTOS PARA EL HOME

module.exports = {
  create_product,
  get_product,
  preload_products,
};
