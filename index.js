const { connectDB, db } = require("./DB");

const express = require("express");
const { supplierRouter, productRouter, saleRouter } = require("./routes");

const app = express();
connectDB();
app.use(express.json());

app.use("/suppliers", supplierRouter);
app.use("/products", productRouter);
app.use("/sales", saleRouter);

app.listen(3000, () => console.log("Server running on port 3000"));

/**
 * APIS COLLECTION
 * https://www.postman.com/maintenance-cosmologist-62137566-8814271/workspace/retail-sore/collection/47170472-28db96c3-200e-48bf-a1f5-90a3526a97bb?action=share&source=copy-link&creator=47170472
 */
