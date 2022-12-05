const { Insumos, Productos } = require("../db");

// const mateiaPrima = async () => {
//   try {
//     let formateoMp = Insumos.map((insumos) => {
//       return {
//         nombre: insumos.nombre,
//         stock: insumos.stock,
//         details: insumos.details,
//         unidadDeMedida: insumos.unidadDeMedida,
//         minimo: insumos.minimo,
//         img: insumos.img,
//       };
//     });
//     return formateoMp;
//   } catch (error) {
//     console.log("ROMPO EN UTILS MATERIA", error);
//   }
// };

const create_mp = async (data) => {
  const { name, stock, details, unidadDeMedida, minimo, img } = data;
  try {
    let new_load = await Insumos.create({
      name,
      stock,
      details,
      unidadDeMedida,
      minimo,
      img,
    });
  } catch (error) {
    console.log("ROMPO EN UTILS, CREATE MP", error);
  }
};

const materiaPrima_load = async () => {
  try {
    return await Insumos.findAll();
  } catch (error) {
    console.log("ERROR EN UTILS MP_LOAD", error);
  }
};

module.exports = {
  create_mp,
  materiaPrima_load,
};
