const { supplierRouter } = require("./supplierRoutes");
const { productRouter } = require("./productsRoutes");
const { saleRouter } = require("./salesRoutes");
const { migrationRouter } = require("./migrationRoutes");
module.exports = { supplierRouter, productRouter, saleRouter, migrationRouter };
