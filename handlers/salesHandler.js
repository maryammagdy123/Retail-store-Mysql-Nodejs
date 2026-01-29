const { db } = require("../DB");

const addSaleHandler = (req, res) => {
  const { ProductID, QuantitySold, SaleDate } = req.body;

  const sql = `
    INSERT INTO sales (ProductID,QuantitySold,SaleDate)
    VALUES (?, ?, ?)
  `;

  db.execute(sql, [ProductID, QuantitySold, SaleDate], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Sale recorded" });
  });
};

const quantitySoldHandler = (req, res, next) => {
  const sql = `
    SELECT 
      p.ProductName,
      COALESCE(SUM(s.QuantitySold), 0) AS total_sold
    FROM products p
    LEFT JOIN sales s ON p.ProductID = s.ProductID
    GROUP BY p.ProductName
  `;

  db.execute(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

const salesDetailsHandler = (req, res) => {
  const sql = `
    SELECT 
      p.ProductName,
      s.QuantitySold,
      s.SaleDate
    FROM sales s
    JOIN products p ON s.ProductID = p.ProductID
  `;

  db.execute(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
module.exports = { addSaleHandler, quantitySoldHandler, salesDetailsHandler };
