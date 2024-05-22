const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());


// Load environment variables

const db = mysql2.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password:'12345',
  database: 'auth'
});

// MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/signup', (req, res) => {
  const {
    username,
   email,
   password
  } = req.body;

  const sql = `INSERT INTO authentication (username,email,password)
               VALUES (?, ?,?)`;

  db.query(
    sql,
    [username,email,password],
    (err, results) => {
      if (err) {
        console.error('Error inserting into database:', err);
        res.status(500).json({ message: 'Interncityal Server Error', error: err.message });
      } else {
        console.log('student added successfully!');
        res.json({ message: 'Employee added successfully!' });
      }
    }
  );
});
app.listen(port, () => {
  console.log(`Main server is running on port ${port}`);
});
//services                   //pakkalam

