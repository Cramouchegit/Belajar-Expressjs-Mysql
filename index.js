const express = require("express");
const app = express();
const port = 3002;
const db = require("./connection");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

app.get("/api/users", (req, res) => {
  const idUsers = req.params.id;
  const sqlQuery = `SELECT * FROM users`;
  db.query(sqlQuery, (err, result) => {
    if (result.length > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success ambil data users",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal ambil data users",
      });
    }
  });
});
app.get("/api/users/:id", (req, res) => {
  const idUsers = req.params.id;
  // console.log("idUsers =>", idUsers);
  const sqlQuery = `SELECT * FROM users WHERE id = ${idUsers}`;
  db.query(sqlQuery, (err, result) => {
    if (result.length > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success ambil detail data users",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal ambil detail data users",
      });
    }
  });
});

app.get("/api/products", (req, res) => {
  const idProducts = req.params.id;
  const sqlQuery = `SELECT * FROM products`;
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
app.get("/api/products/:id", (req, res) => {
  const idProducts = req.params.id;
  const sqlQuery = `SELECT * FROM products WHERE id = ${idProducts}`;
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

app.post("/api/users", (req, res) => {
  const bodyUsers = req.body;
  // console.log("bodyUsers =>", bodyUsers);
  const sqlQuery = `insert into users set username = "${bodyUsers.username}",email = "${bodyUsers.email}",age = ${bodyUsers.age},city = "${bodyUsers.city}",address = "${bodyUsers.address}"`;
  db.query(sqlQuery, (err, result) => {
    if (result) {
      res.json({
        status: 201,
        payload: result,
        message: "success post users",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal post users",
      });
    }
  });
});
app.post("/api/products", (req, res) => {
  const body = req.body;
  // console.log("body =>", body);
  const sqlQuery = `insert into products set nama = "${body.nama}",stok = ${body.stok},kategori = "${body.kategori}",deskripsi = "${body.deskripsi}"`;
  db.query(sqlQuery, (err, result) => {
    if (result) {
      res.json({
        status: 201,
        payload: result,
        message: "success post/tambah products",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal post/tambah products",
      });
    }
  });
});

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const bodyUsers = req.body;
  // console.log("bodyUsers =>", bodyUsers);
  const sqlQuery = `update users set username ="${bodyUsers.username}",email= "${bodyUsers.email}", age = ${bodyUsers.age}, city= "${bodyUsers.city}", address= "${bodyUsers.address}" where id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if (result) {
      res.json({
        status: 200,
        payload: result,
        message: "success update users",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal update users",
      });
    }
  });
});
app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  // console.log("body =>", body);
  const sqlQuery = `update products set nama = "${body.nama}",stok=${body.stok}, kategori = "${body.kategori}", deskripsi = "${body.deskripsi}" where id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if (result) {
      res.json({
        status: 200,
        payload: result,
        message: "success update & edit products",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal update & edit products",
      });
    }
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `delete from users where id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if (result.affectedRows > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success delete/hapus users",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal delete/hapus users",
      });
    }
  });
});
app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `delete from products where id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if (result.affectedRows > 0) {
      res.json({
        status: 200,
        payload: result,
        message: "success delete/hapus products",
      });
    } else {
      res.json({
        status: 400,
        payload: result,
        message: "gagal delete/hapus products",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`service - api jalan diport : ${port}`);
});
