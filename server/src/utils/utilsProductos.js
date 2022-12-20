const { Insumos, Productos } = require("../db");
// const preProductos = require("../json/preProducto.json");

// //.........................................................................................//
// // Carga Json.

// const preload_products = async () => {
//   try {
//     let data = preProductos.map((product) => {
//       return {
//         name: product.name,
//         stock: product.stock,
//         details: product.details,
//       };
//     });

//     for (const product of data) {
//       create_product(product);
//     }
//     return data;
//   } catch (error) {
//     console.log("ROMPO EN PRELOAD PRODUCT", error);
//   }
// };

//.........................................................................................//
// CREAR PRODUCTO

const create_product = async (data) => {
  try {
    const { name, stock, detail, min, img, insumos } = data;

    const new_product = await Productos.create({
      name,
      stock,
      detail,
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
  preload_products,
};
