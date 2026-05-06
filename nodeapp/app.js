const mysql = require('mysql2');
const express = require('express')
const app = express()
const port = 3000
const host= process.env.DB_HOST
const user= process.env.DB_USER
const password= process.env.DB_PASSWORD
const database= process.env.DB_NAME;

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

 