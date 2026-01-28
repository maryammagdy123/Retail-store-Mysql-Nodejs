const { db } = require("../DB");
//ADD SUPPLIER
const addSupplierHandler = (req, res, next) => {
  const { SupplierName, ContactNumber } = req.body;

  const sql = `
      INSERT INTO suppliers (SupplierName, ContactNumber)
      VALUES (?, ?)
    `;

  db.query(sql, [SupplierName, ContactNumber], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Supplier added", id: result.insertId });
  });
};
//UPDATE COLUMN LENGTH
const updateSupplierColumnLengthHandler = (req, res, next) => {
  const { columnName, data_type, newLength } = req.body;

  const sql = `
      ALTER TABLE suppliers
      MODIFY COLUMN ${columnName} ${data_type}(${newLength})
    `;

  db.query(sql, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: `${columnName} column updated` });
  });
};
const filterSuppliersNameHandler = (req, res, next) => {
  const sql = `
    SELECT * FROM suppliers
    WHERE SupplierName LIKE 'F%'
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

module.exports = {
  addSupplierHandler,
  updateSupplierColumnLengthHandler,
  filterSuppliersNameHandler,
};
