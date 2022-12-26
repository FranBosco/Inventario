const { Insumos, Productos } = require("../db");

//.........................................................................................//
// OBTENER PRODUCTO
const get_product_home = async () => {
  try {
    let data = await Productos.findAll();

    let dataSort = data.sort((a, b) => {
      if (a.difference > b.difference) return 1;
      if (b.difference > a.difference) return -1;
      return 0;
    });

    let dataSlice = dataSort.slice(0, 7);

    return dataSlice;
  } catch (error) {
    console.log("ERROR en get_product_home", error);
  }
};

module.exports = { get_product_home };
