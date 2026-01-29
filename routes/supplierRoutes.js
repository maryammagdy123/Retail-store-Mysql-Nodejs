const { Router } = require("express");
const {
  addSupplierHandler,
  updateSupplierColumnLengthHandler,
  filterSuppliersNameHandler,
} = require("../handlers");
const router = Router();

// get(path,controller)
//create supplier table
// router.post(/"create-table",createSupplierTable);

router.post("/", addSupplierHandler);
router.put("/update-column-length", updateSupplierColumnLengthHandler);
router.get("/starts-with-f", filterSuppliersNameHandler);

module.exports = { supplierRouter: router };
