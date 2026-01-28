const { Router } = require("express");
const {
  addSaleHandler,
  quantitySoldHandler,
  salesDetailsHandler,
} = require("../handlers");

const router = Router();

// sales/add-column
//column=>category
//adding to sales table the column category
router.post("/add-sale", addSaleHandler);
//get total quantity sold for each product
router.get("/total-sold", quantitySoldHandler);
router.get("/details", salesDetailsHandler);

module.exports = { saleRouter: router };
