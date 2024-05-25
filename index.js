const express = require("express");
const app = express();
const port = 3000;
const db = require("./connection");
app.use(express.json());

app.get("/products", (req, res) => {
  const sqlQuery = "SELECT * FROM products";
  db.query(sqlQuery, (err, result) => {
    if (result.length > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "bad",
      });
    }
  });
});

app.get("/products/:id", (req, res) => {
  const idProducts = req.params.id;
  const sqlQuery = `SELECT * FROM products WHERE id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if (result.length > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success ambil data products",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal ambil data products",
      });
    }
  });
});

app.post("/products/:id", (req, res) => {
  const body = req.body;
  const sqlQuery = `INSERT INTO products set nama = "${body.nama}",stok = ${body.stok},kategori = "${body.kategori}",deskripsi = "${body.deskripsi}"`;
  db.query(sqlQuery, (err, result) => {
    if (result.length > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success post products",
      });
    } else {
      res.json({
        status: 400,
        payload: results,
        message: "gagal post products",
      });
    }
  });
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const sqlQuery = `UPDATE products set nama = "${body.nama}",stok=${body.stok}, kategori = "${body.kategori}", deskripsi = "${body.deskripsi}" where id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if (result.length > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success update products",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal update products",
      });
    }
  });
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `DELETE FROM products where id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if (result.affectedRows > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success delete products",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal delete products",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`service - api jalan diport : ${port}`);
});
