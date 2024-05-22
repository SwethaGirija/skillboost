import React, { useState } from 'react';
import './Mysql.css';

const Mysql = () => {
  // State to hold MySQL concepts
  const [concepts] = useState([
    {
      name: 'Database Creation',
      description: 'In MySQL, you can create a new database using the CREATE DATABASE statement.',
      codeSnippet: 'CREATE DATABASE my_database;',
    },
    {
      name: 'Table Creation',
      description: 'You can create a new table in a database using the CREATE TABLE statement.',
      codeSnippet: 'CREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255),\n    age INT\n);',
    },
    {
      name: 'Insertion',
      description: 'To insert data into a table, you can use the INSERT INTO statement.',
      codeSnippet: 'INSERT INTO users (name, age) VALUES ("John", 30);',
    },
    {
      name: 'Selection',
      description: 'You can retrieve data from a table using the SELECT statement.',
      codeSnippet: 'SELECT * FROM users;',
    },
    {
      name: 'Update',
      description: 'To update existing data in a table, you can use the UPDATE statement.',
      codeSnippet: 'UPDATE users SET age = 31 WHERE name = "John";',
    },
    {
      name: 'Deletion',
      description: 'To delete data from a table, you can use the DELETE statement.',
      codeSnippet: 'DELETE FROM users WHERE name = "John";',
    },
    {
      name: 'Joins',
      description: 'Joins are used to combine rows from two or more tables based on a related column between them.',
      codeSnippet: 'SELECT users.name, orders.product\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;',
    },
    {
      name: 'Indexes',
      description: 'Indexes are used to improve the speed of data retrieval operations on a table.',
      codeSnippet: 'CREATE INDEX idx_name ON users (name);',
    },
    {
      name: 'Constraints',
      description: 'Constraints are rules enforced on data columns to maintain the integrity and accuracy of data within the database.',
      codeSnippet: 'CREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    age INT CHECK (age >= 18)\n);',
    },
    {
      name: 'Transactions',
      description: 'Transactions ensure data integrity by allowing a group of SQL queries to be treated as a single unit of work. They support the ACID properties (Atomicity, Consistency, Isolation, Durability).',
      codeSnippet: 'START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
    },
    {
      name: 'Stored Procedures',
      description: 'Stored procedures are reusable SQL code blocks stored in the database. They allow you to encapsulate business logic and improve performance.',
      codeSnippet: 'CREATE PROCEDURE GetCustomerOrders(IN customerId INT)\nBEGIN\n    SELECT * FROM orders WHERE customer_id = customerId;\nEND;',
    },
    // Add more concepts here
  ]);

  return (
    <div className="container">
      <h1 className="title">Learning MySQL Basics</h1>
    
      <div className="links">
        <h2>If you have any doubts refer to these links</h2>
        <a href="https://dev.mysql.com/doc/" className="link">MySQL Documentation</a>
        <a href="https://www.mysqltutorial.org/" className="link">MySQL Tutorial</a>
        <a href="https://www.w3schools.com/sql/" className="link">SQL W3Schools</a>
      </div>

      {concepts.map((concept, index) => (
        <div key={index}>
          <h2 className="concept-title">{concept.name}</h2>
          <p className="description">{concept.description}</p>
          <pre className="code-snippet">{concept.codeSnippet}</pre>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Mysql;
