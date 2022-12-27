const { Insumos, Productos } = require("../db");
const preInsumos = require("../json/preInsumos.json");

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
//.........................................................................................//
// CARGA JSON
const preload_insumos = async () => {
  try {
    let data = preInsumos.map((insumos) => {
      return {
        name: insumos.name,
        stock: insumos.stock,
        details: insumos.details,
        unidadDeMedida: insumos.unidadDeMedida,
        min: insumos.min,
        img: insumos.img,
      };
    });

    for (const insumos of data) {
      create_mp(insumos);
    }
    return data;
  } catch (error) {
    console.log("ROMPO EN PRELOAD INSUMOS", error);
  }
};

//.........................................................................................//
// CREAR INSUMO
const create_mp = async (data) => {
  const { name, stock, details, unidadDeMedida, min, img } = data;
  try {
    let new_load = await Insumos.create({
      name,
      stock,
      details,
      unidadDeMedida,
      min,
      img,
    });

    return new_load;
  } catch (error) {
    console.log("ROMPO EN UTILS, CREATE MP", error);
  }
};

//.........................................................................................//
// OBTENER INSUMO
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
  preload_insumos,
};
