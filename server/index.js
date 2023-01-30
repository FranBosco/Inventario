const server = require("./src/app.js");
const express = require("express");
const { conn } = require("./src/db.js");
const morgan = require("morgan");
const { preload_insumos } = require("../server/src/utils/utilsMp");
const { preload_products } = require("../server/src/utils/utilsProductos");

const app = express();

app.use(morgan("dev"));
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    preload_insumos();
    preload_products();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
