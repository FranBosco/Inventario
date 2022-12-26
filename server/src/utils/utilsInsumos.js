const { Insumos, Productos } = require("../db");

//.........................................................................................//
// OBTENER PRODUCTO
const get_insumos_home = async () => {
  try {
    let data = await Insumos.findAll();

    let dataSort = data.sort((a, b) => {
      if (a.difference > b.difference) return 1;
      if (b.difference > a.difference) return -1;
      return 0;
    });

    let dataSlice = dataSort.slice(0, 7);

    return dataSlice;
  } catch (error) {
    console.log("ERROR en get_insumos_home", error);
  }
};

module.exports = { get_insumos_home };
