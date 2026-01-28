const {
  addSupplierHandler,
  updateSupplierColumnLengthHandler,
  filterSuppliersNameHandler,
} = require("./suppliersHandler");

const {
  addConstraintToColumnHandler,
  addColumnHandler,
  removeColumnHandler,
  addProductHandler,
  updatePriceHandler,
  removeProductHandler,
  highestStockHandler,
  neverSoldProductsHandler,
} = require("./productsHandler");

const {
  addSaleHandler,
  quantitySoldHandler,
  salesDetailsHandler,
} = require("./salesHandler");
module.exports = {
  addSupplierHandler,
  updateSupplierColumnLengthHandler,
  addConstraintToColumnHandler,
  addColumnHandler,
  removeColumnHandler,
  addProductHandler,
  addSaleHandler,
  updatePriceHandler,
  removeProductHandler,
  quantitySoldHandler,
  highestStockHandler,
  filterSuppliersNameHandler,
  neverSoldProductsHandler,
  salesDetailsHandler,
};
