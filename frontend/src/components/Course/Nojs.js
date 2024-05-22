import React, { useState } from 'react';
import './Nodejs.css';

const  Nojs= () => {
  // State to hold Node.js concepts
  const [concepts] = useState([
    {
      name: 'Node.js Introduction',
      description: 'In Node.js, JavaScript code is executed outside of the browser environment, allowing developers to use JavaScript for server-side programming.',
      codeSnippet: 'console.log("Hello, Node.js!");',
    },
    {
      name: 'NPM (Node Package Manager)',
      description: 'NPM is the default package manager for Node.js. It allows you to install, manage, and publish Node.js packages and dependencies.',
      codeSnippet: 'npm install <package-name>',
    },
    {
      name: 'Modules',
      description: 'Node.js uses a module system to organize code into reusable units. CommonJS is the module system used in Node.js, and modules can be imported and exported using the require() and module.exports syntax.',
      codeSnippet: 'const fs = require("fs");',
    },
    {
      name: 'Streams',
      description: 'Streams are objects in Node.js that allow you to read or write data continuously. They are especially useful for handling large amounts of data without consuming a lot of memory.',
      codeSnippet: 'const fs = require("fs");\nconst readStream = fs.createReadStream("input.txt");\nconst writeStream = fs.createWriteStream("output.txt");\n\nreadStream.pipe(writeStream);',
    },
    {
      name: 'Child Processes',
      description: 'Node.js allows you to create child processes to run external commands or scripts. This is useful for tasks such as executing shell commands or running CPU-intensive tasks in separate processes.',
      codeSnippet: 'const { spawn } = require("child_process");\nconst ls = spawn("ls", ["-lh", "/usr"]);',
    },
    {
      name: 'Debugging',
      description: 'Node.js provides built-in debugging support through the Node.js Inspector. You can debug Node.js applications using Chrome DevTools or command-line interfaces.',
      codeSnippet: 'node --inspect app.js',
    },
    {
      name: 'Error Handling',
      description: 'Error handling in Node.js is typically done using try...catch blocks for synchronous code and callback functions for asynchronous code. You can also use the built-in error events and error objects for handling errors in streams and other asynchronous operations.',
      codeSnippet: 'try {\n    // Code that may throw an error\n} catch (error) {\n    // Handle the error\n}',
    },
    {
      name: 'Event Loop',
      description: 'Node.js is single-threaded and uses an event-driven architecture. The event loop is responsible for handling I/O operations and executing callbacks in an asynchronous manner.',
      codeSnippet: '// Code snippet related to event loop',
    },
    {
      name: 'Package.json',
      description: 'The package.json file is a metadata file for your Node.js project. It contains information about the project, such as dependencies, scripts, and metadata.',
      codeSnippet: '// Code snippet related to package.json',
    },
    {
      name: 'Middleware',
      description: 'In web development with Node.js, middleware functions are functions that have access to the request and response objects. They can modify the request or response objects, execute any code, and end the request-response cycle.',
      codeSnippet: '// Code snippet related to middleware',
    },
    {
      name: 'Promises',
      description: 'Promises in Node.js are objects that represent the eventual completion or failure of an asynchronous operation. They provide a cleaner and more structured way of handling asynchronous code compared to callbacks.',
      codeSnippet: 'const fetchData = () => {\n    return new Promise((resolve, reject) => {\n        // Asynchronous operation\n        if (/* operation successful */) {\n            resolve(data);\n        } else {\n            reject(error);\n        }\n    });\n};',
    },
    {
      name: 'Async/Await',
      description: 'Async/await is a modern JavaScript feature that allows you to write asynchronous code in a synchronous manner. It makes asynchronous code easier to read and write by using the async and await keywords.',
      codeSnippet: 'const fetchData = async () => {\n    try {\n        const data = await fetchDataFromAPI();\n        console.log(data);\n    } catch (error) {\n        console.error(error);\n    }\n};',
    },
    // Add more concepts here
  ]);

  return (
    <div className="container">
      <h1 className="title">Learning Node.js Basics</h1>
    
      <div className="links">
        <h2>If you have any doubts refer to these links</h2>
        <a href="https://nodejs.org/en/docs/" className="link">Node.js Documentation</a>
        <a href="https://www.npmjs.com/" className="link">NPM</a>
        <a href="https://expressjs.com/" className="link">Express.js Documentation</a>
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

export default Nojs;
