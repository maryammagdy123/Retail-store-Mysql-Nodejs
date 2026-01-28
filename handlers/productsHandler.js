const { db } = require("../DB");
//ADD PRODUCTS INTO PRODUCTS TABLE SERVED BY SPECIFIC SUPPLIER
const addProductHandler = (req, res, next) => {
  const { SupplierID, ProductName, Price, StockQuantity } = req.body;
  const sql = `
      INSERT INTO products (SupplierID, ProductName, Price, StockQuantity)  
      VALUES (?, ?, ?, ?)
    `;
  db.query(sql, [SupplierID, ProductName, Price, StockQuantity], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product added successfully" });
  });
};
//ADD COLUMN TO PRODUCTS TABLE
const addColumnHandler = (req, res, next) => {
  //logic to add column category to products table
  const { columnName, data_type } = req.body;
  const sql = `
    ALTER TABLE products
    ADD COLUMN ${columnName} ${data_type}(50)
  `;

  db.query(sql, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Category column added to products table" });
  });
};
//REMOVE COLUMN FROM PRODUCTS TABLE
const removeColumnHandler = (req, res, next) => {
  //logic to add column category to products table
  const { columnName } = req.body;
  const sql = `
    ALTER TABLE products
    DROP COLUMN ${columnName} 
  `;

  db.query(sql, [columnName], (err) => {
    if (err) return res.status(500).json({ error: "no such column found" });
    res.json({ message: `${columnName} column removed from products table` });
  });
};
//ADD CONSTRAINTS TO COLUMN
const addConstraintToColumnHandler = (req, res, next) => {
  const { columnName, columnType, constraints } = req.body;
  const sql = `
      ALTER TABLE products
      MODIFY COLUMN ${columnName} ${columnType} ${constraints}
    `;
  db.query(sql, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: `${columnName} column updated with constraints` });
  });
};
//UPDATE PRODUCT PRICE
const updatePriceHandler = (req, res, next) => {
  const { ProductName, Price } = req.body;
  const sql = `
    UPDATE products
    SET Price = ?
    WHERE ProductName = ?
  `;

  db.query(sql, [Price, ProductName], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: `Price of ${ProductName} updated to ${Price}` });
  });
};

//delete product handler
const removeProductHandler = (req, res, next) => {
  const { ProductName } = req.body;
  const sql = `
    DELETE FROM products
    WHERE ProductName = ?
  `;
  db.query(sql, [ProductName], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: `${ProductName} removed from products table` });
  });
};

const highestStockHandler = (req, res, next) => {
  const sql = `
    SELECT ProductName, StockQuantity
    FROM products
    ORDER BY StockQuantity DESC
    LIMIT 1
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

const neverSoldProductsHandler = (req, res, next) => {
  const sql = `
    SELECT p.ProductName
    FROM products p
    LEFT JOIN sales s ON p.ProductID = s.ProductID
    WHERE s.ProductID IS NULL
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
module.exports = {
  addColumnHandler,
  addConstraintToColumnHandler,
  removeColumnHandler,
  addProductHandler,
  updatePriceHandler,
  removeProductHandler,
  highestStockHandler,
  neverSoldProductsHandler,
};
