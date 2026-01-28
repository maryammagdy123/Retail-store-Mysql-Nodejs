const { Router } = require("express");
const {
  addColumnHandler,
  addConstraintToColumnHandler,
  removeColumnHandler,
  addProductHandler,
  updatePriceHandler,
  removeProductHandler,
  highestStockHandler,
  neverSoldProductsHandler,
} = require("../handlers");

const router = Router();

// products/add-column
//column=>category
//adding to products table the column category
router.post("/", addProductHandler);
router.delete("/", removeProductHandler);
router.get("/highest-stock", highestStockHandler);
router.put("/add-column", addColumnHandler);
router.put("/add-column-constraints", addConstraintToColumnHandler);
router.delete("/remove-column", removeColumnHandler);
router.put("/update-price", updatePriceHandler);
router.get("/never-sold", neverSoldProductsHandler);
module.exports = { productRouter: router };
