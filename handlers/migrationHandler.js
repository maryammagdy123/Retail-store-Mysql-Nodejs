const { db } = require("../DB");

const migrationHandlers = {
  createSuppliersTable: (req, res) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS suppliers (
        SupplierID INT AUTO_INCREMENT PRIMARY KEY,
        SupplierName VARCHAR(100) NOT NULL,
        ContactNumber VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    db.query(sql, (err) => {
      if (err) return res.status(500).json({ message: "table already exists" });
      res.json({ message: "Suppliers table created" });
    });
  },

  createProductsTable: (req, res) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS products (
        ProductID INT AUTO_INCREMENT PRIMARY KEY,
        ProductName VARCHAR(100) NOT NULL,
        Price DECIMAL(10,2) NOT NULL,
        StockQuantity INT NOT NULL,
        SupplierID INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (SupplierID)
          REFERENCES suppliers(SupplierID)
          ON DELETE CASCADE ON UPDATE CASCADE
      )
    `;

    db.query(sql, (err) => {
      if (err) return res.status(500).json({ message: "table already exists" });
      res.json({ message: "Products table created" });
    });
  },

  createSalesTable: (req, res) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS sales (
        SalesID INT AUTO_INCREMENT PRIMARY KEY,
        ProductID INT,
        QuantitySold INT NOT NULL,
        SaleDate DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (ProductID)
          REFERENCES products(ProductID)
          ON DELETE CASCADE ON UPDATE CASCADE
      )
    `;

    db.query(sql, (err) => {
      if (err) return res.status(500).json({ message: "table already exists" });
      res.json({ message: "Sales table created" });
    });
  },
};

module.exports = migrationHandlers;
