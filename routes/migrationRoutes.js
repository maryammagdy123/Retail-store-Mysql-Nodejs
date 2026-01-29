const { Router } = require("express");
const { migrationHandlers } = require("../handlers");

const router = Router();
router.post("/create-suppliers-table", migrationHandlers.createSuppliersTable);
router.post("/create-products-table", migrationHandlers.createProductsTable);
router.post("/create-sales-table", migrationHandlers.createSalesTable);

module.exports = { migrationRouter: router };
