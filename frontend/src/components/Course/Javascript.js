import React, { useState } from 'react';
import './Javascript.css';

const Javascript = () => {
  // State to hold JavaScript concepts
  const [concepts] = useState([
    {
      name: 'Variables',
      description: 'Variables are used to store data values. In JavaScript, you can create a variable using the var, let, or const keywords.',
      codeSnippet: 'var x = 10;\nlet y = "Hello";\nconst z = true;',
    },
    {
      name: 'Data Types',
      description: 'JavaScript supports various data types including numbers, strings, booleans, arrays, objects, and more.',
      codeSnippet: 'let x = 10;\nlet y = "Hello";\nlet z = true;\nlet myArray = [1, 2, 3];\nlet myObject = { name: "John", age: 30 };',
    },
    {
      name: 'Functions',
      description: 'Functions in JavaScript are blocks of code that can be defined and invoked to perform a particular task.',
      codeSnippet: 'function greet(name) {\n    console.log("Hello, " + name + "!");\n}\n\ngreet("John");',
    },
    {
      name: 'Control Flow',
      description: 'JavaScript provides if, else if, and else statements for conditional execution. It also supports switch-case statements.',
      codeSnippet: 'let x = 10;\nif (x > 0) {\n    console.log("Positive");\n} else if (x === 0) {\n    console.log("Zero");\n} else {\n    console.log("Negative");\n}',
    },
    {
      name: 'Loops',
      description: 'JavaScript supports various types of loops including for loop, while loop, and do-while loop for iterative execution of code.',
      codeSnippet: 'for (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\nlet x = 0;\nwhile (x < 5) {\n    console.log(x);\n    x++;\n}',
    },
    {
      name: 'Arrays',
      description: 'Arrays are ordered collections of data elements. JavaScript arrays can contain elements of different data types.',
      codeSnippet: 'let myArray = [1, "Hello", true];\nconsole.log(myArray[0]); // Output: 1',
    },
    {
      name: 'Objects',
      description: 'Objects are collections of key-value pairs where keys are strings and values can be of any data type.',
      codeSnippet: 'let myObject = { name: "John", age: 30 };\nconsole.log(myObject.name); // Output: John',
    },
    {
      name: 'Classes',
      description: 'JavaScript supports class-based object-oriented programming. Classes are templates for creating objects with similar properties and methods.',
      codeSnippet: 'class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nlet person = new Person("John", 30);',
    },
    {
      name: 'Promises',
      description: 'Promises represent the eventual completion or failure of an asynchronous operation and its resulting value.',
      codeSnippet: 'const fetchData = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve("Data fetched");\n        }, 2000);\n    });\n};\n\nfetchData()\n    .then(data => console.log(data))\n    .catch(error => console.error(error));',
    },
    {
      name: 'Async/Await',
      description: 'Async/Await is a syntactic sugar built on top of promises, making asynchronous code easier to read and write.',
      codeSnippet: 'const fetchData = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve("Data fetched");\n        }, 2000);\n    });\n};\n\nconst getData = async () => {\n    try {\n        const data = await fetchData();\n        console.log(data);\n    } catch (error) {\n        console.error(error);\n    }\n};\n\ngetData();',
    },
    {
      name: 'Arrow Functions',
      description: 'Arrow functions provide a concise syntax for writing function expressions. They are particularly useful for callbacks and anonymous functions.',
      codeSnippet: 'const add = (a, b) => a + b;\nconsole.log(add(2, 3)); // Output: 5',
    },
   
    {
      name: 'Destructuring Assignment',
      description: 'Destructuring assignment allows you to extract data from arrays or objects into distinct variables. It provides a concise syntax for accessing and unpacking values.',
      codeSnippet: 'let person = { name: "John", age: 30 };\nlet { name, age } = person;\nconsole.log(name, age); // Output: John 30',
    },
    // Add more concepts here
  ]);

  return (
    <div className="container">
      <h1 className="title">Learning JavaScript Concepts</h1>
    
      <div className="links">
        <h2>If you have any doubts refer to these links</h2>
        <a href="https://youtu.be/toymwoKBtbM?si=vYMZMYngiDgUGkoq" className="link">Course 1</a>
        <a href="https://youtu.be/EerdGm-ehJQ?si=0GRxDHkWe18SMhDI" className="link">Course 2</a>
        <a href="https://youtu.be/W6NZfCO5SIk?si=7FtfwTkCq584ntuj" className="link">Course 3</a>
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

export default Javascript;
