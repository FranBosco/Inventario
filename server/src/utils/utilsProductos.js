const { Insumos, Productos, Insumosproductos } = require("../db");
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
        defaultInput: product.defaultInput,
      };
    });

    console.log("entrnadoooo", data);

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
    let { name, stock, details, min, img, defaultInput } = data;

    let new_product = await Productos.create({
      name,
      stock,
      details,
      min,
      img,
      defaultInput,
    });

    let aux = await Insumos.findAll({
      where: {
        name: defaultInput.map((e) => {
          return e.insumos;
        }),
      },
    });

    console.log("puto", aux);

    let aux2 = aux.map((e) => {
      return { id: e.id };
    });

    console.log("taiere", aux2);

    let new_cantidad = defaultInput.map(async (el) => {
      return await Insumosproductos.create({
        productoId: new_product.id,
        insumoId: aux2.id,
        cantidad: el.cantidad,
      });
    });
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

// defaultInput = [{insumo=[], cantidad=[]}]
