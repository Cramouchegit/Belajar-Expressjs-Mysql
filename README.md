## Belajar Basic ExpressJS dan Crud MySQL

This is an open-source project that combines the power of NodeJS and ExpressJS to create, update, post and delete

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)

![image](https://avatars.githubusercontent.com/u/124861834?v=4)

## Dipastikan sudah menginstall NODE JS dan LARAGON + PhpMyAdmin
<p>https://nodejs.org/en</p>
<p>https://laragon.org/download/index.html</p>
<p>https://www.phpmyadmin.net/downloads/</p>
Jika sudah maka lanjutkan.

- Basic ExpressJS.
- Installation.
- Routes.
- Mengenal Crud di MySQL
- Mengambil data di database menggunakan get http request
- Mengubah data di database menggunakan post
- Mengedit atau Mengupdate data didatabase menggunakan put
- Menghapus data di database menggunakan delete
- Penyelesaian

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


## Installation

1. Basic Expressjs dan route:
   ```bash
    app.get('/', (req, res) => {
    res.send('Hello World!')
	  })
    ```

2. Clone the repository:

    ```bash
    https://github.com/Cramouchegit/Belajar-Expressjs-Mysql.git
    ```

3. Navigate to the project directory:

    ```bash
    cd your-project
    ```

4. Install NodeJS ExpressJS dependencies:

    ```bash
    npm install
    ```

5. Buat Database Seperti [id] int + AutoIncrement, PRIMARY KEY, [nama] varchar(255) NOT NULL, Default No, stok int	No	None, kategori	varchar(255) Yes	NULL, deskripsi	text	Yes	NULL:
6. Buat Database Seperti [id] int + AutoIncrement, PRIMARY KEY, [username] varchar(255) Yes NULL, Default Null, email Index	varchar(255) Yes	NULL	, age Primary	int	No	None, city Index varchar(255) Yes	NULL, address	varchar(50)	Yes	NULL:

    ```bash
    Buat data Dummy products & users di Fitur Insert PhpMyAdmin
    ```

7. Lalu Ubah sedikit untuk get data users & products:

    ```bash
	  app.get("/api/users", (req, res) => {
	  const idUsers = req.params.id;
	  console.log("idUsers =>", idUsers);
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

	Untuk Mengambil atau menghit endpoint Per id nya menggunakan route seperti ini =>
	
	  app.get("/api/users/:id", (req, res) => {
	  const idUsers = req.params.id;
	  console.log("idUsers =>", idUsers); //Untuk Mengecek datanya ada atau tidak
	  const sqlQuery = `SELECT * FROM users WHERE id = ${idUsers}`;
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
    ```
    ```bash
	Kalau tidak ada datanya di database maka =>
	kita akan cek seperti ini
	
	app.get("/users/:id", (req, res) => {
	  const idUsers = req.params.id;
	  console.log("idUsers =>", idUsers);
	  const sqlQuery = `SELECT * FROM users WHERE id = ${idUsers}`;
	  db.query(sqlQuery, (err, result) => {
		console.log("result=>", result)
	    if (result !==  0) {
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
	
	Output=>
	status: 400,
	payload: result,
	message: "gagal ambil detail data users",
    ```
    
## Untuk yang products pun tinggal diganti url routenya saja 
    
8. Menggunakan post method:

    ```bash
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
    ```

## Untuk Yang Products Pun tinggal diganti ganti saja :)

9. Menggunakan put / update:

    ```bash
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
    ```

10. Menggunakan delete:

    ```bash
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
    ```

### Usage

Visit `http://localhost:tentukan port mu` in your browser to access the json data dummy in database mysql.

## Terimakasih Semoga Bermanfaat
