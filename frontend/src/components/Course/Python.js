import React, { useState } from 'react';
import './Python.css'
const Python = () => {
  // State to hold Python concepts
  const [concepts] = useState([
    {
      name: 'Variables',
      description: 'Variables are used to store data values. In Python, you can create a variable and assign a value to it using the assignment operator (=).',
      codeSnippet: 'x = 10\ny = "Hello"',
    },
    {
      name: 'Data Types',
      description: 'Python supports various data types including integers, floats, strings, lists, tuples, dictionaries, and more.',
      codeSnippet: 'x = 10\ny = 3.14\nz = "Hello"\nmy_list = [1, 2, 3]\nmy_dict = {"name": "John", "age": 30}',
    },
    {
      name: 'Functions',
      description: 'Functions in Python are defined using the def keyword. They allow you to encapsulate a block of code that can be reused and called with different arguments.',
      codeSnippet: 'def greet(name):\n    print("Hello, " + name)\n\ngreet("John")',
    },
    {
      name: 'Control Flow',
      description: 'Python provides if, elif, and else statements for conditional execution. It also supports the use of logical operators like and, or, and not.',
      codeSnippet: 'x = 10\nif x > 0:\n    print("Positive")\nelif x == 0:\n    print("Zero")\nelse:\n    print("Negative")',
    },
    {
      name: 'Loops',
      description: 'Python supports for loops and while loops for iterating over sequences like lists, strings, and dictionaries.',
      codeSnippet: 'for i in range(5):\n    print(i)\n\nx = 0\nwhile x < 5:\n    print(x)\n    x += 1',
    },
    {
      name: 'Lists',
      description: 'Lists are ordered, mutable collections of items. You can create a list by placing comma-separated items inside square brackets ([]).',
      codeSnippet: 'my_list = [1, 2, 3, 4, 5]\nprint(my_list)',
    },
    {
      name: 'Tuples',
      description: 'Tuples are ordered, immutable collections of items. You can create a tuple by placing comma-separated items inside parentheses (()).',
      codeSnippet: 'my_tuple = (1, 2, 3, 4, 5)\nprint(my_tuple)',
    },
    {
      name: 'Dictionaries',
      description: 'Dictionaries are unordered, mutable collections of key-value pairs. You can create a dictionary by placing key-value pairs inside curly braces ({}).',
      codeSnippet: 'my_dict = {"name": "John", "age": 30}\nprint(my_dict)',
    },
    {
      name: 'Classes and Objects',
      description: 'Classes are blueprints for creating objects in Python. They encapsulate data for the object and define methods for interacting with that data.',
      codeSnippet: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nperson = Person("John", 30)\nprint(person.name, person.age)',
    },
    {
      name: 'File Handling',
      description: 'Python provides various functions for reading from and writing to files. You can open a file using the open() function and perform operations such as read(), write(), etc.',
      codeSnippet: 'with open("example.txt", "r") as file:\n    data = file.read()\n    print(data)',
    },
    {
      name: 'Exceptions Handling',
      description: 'Exceptions are errors that occur during the execution of a program. Python provides try, except, else, and finally blocks to handle exceptions gracefully.',
      codeSnippet: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError as e:\n    print("Error:", e)',
    },
    {
      name: 'Regular Expressions',
      description: 'Regular expressions allow you to search for patterns within strings. Python provides the re module for working with regular expressions.',
      codeSnippet: 'import re\n\npattern = r"[A-Za-z]+"  # Match one or more letters\nmatches = re.findall(pattern, "Hello World")\nprint(matches)',
    },
    {
      name: 'Concurrency',
      description: 'Concurrency allows multiple tasks to run concurrently. Python supports concurrency with threading and multiprocessing.',
      codeSnippet: 'import threading\n\ndef print_numbers():\n    for i in range(5):\n        print(i)\n\nthread = threading.Thread(target=print_numbers)\nthread.start()',
    },
    {
      name: 'Database Interaction',
      description: 'Python provides various libraries for interacting with databases such as SQLite, MySQL, PostgreSQL, and more. You can use libraries like sqlite3 or SQLAlchemy for database operations.',
      codeSnippet: '# Example using sqlite3\nimport sqlite3\n\n# Connect to database\nconn = sqlite3.connect("example.db")\ncursor = conn.cursor()\n\n# Create table\ncursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)")\n\n# Insert data\ncursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("John", 30))\n\n# Commit changes\nconn.commit()\n\n# Close connection\nconn.close()',
    },
    {
      name: 'Web Scraping',
      description: 'Web scraping is the process of extracting data from websites. Python provides libraries like BeautifulSoup and Scrapy for web scraping.',
      codeSnippet: '# Example using BeautifulSoup\nfrom bs4 import BeautifulSoup\nimport requests\n\n# Make a request to the website\nresponse = requests.get("https://example.com")\n\n# Create BeautifulSoup object\nsoup = BeautifulSoup(response.text, "html.parser")\n\n# Find elements\ntitle = soup.find("title").text\nprint(title)',
    },
    {
      name: 'GUI Programming',
      description: 'Python offers several libraries for creating graphical user interfaces (GUIs). Popular options include Tkinter, PyQt, and wxPython.',
      codeSnippet: '# Example using Tkinter\nimport tkinter as tk\n\n# Create main window\nroot = tk.Tk()\nroot.title("Hello GUI")\n\n# Create label\nlabel = tk.Label(root, text="Hello, GUI!")\nlabel.pack()\n\n# Run main loop\nroot.mainloop()',
    },
    {
      name: 'Machine Learning',
      description: 'Machine learning is a subset of artificial intelligence that focuses on building algorithms that can learn from and make predictions on data. Python has several libraries for machine learning such as scikit-learn, TensorFlow, and PyTorch.',
      codeSnippet: '# Example using scikit-learn\nfrom sklearn import datasets\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.neighbors import KNeighborsClassifier\n\n# Load dataset\niris = datasets.load_iris()\nX_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2)\n\n# Train model\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X_train, y_train)\n\n# Make predictions\npredictions = model.predict(X_test)\nprint(predictions)',
    },
    {
      name: 'Data Analysis',
      description: 'Python is widely used for data analysis and manipulation. Libraries like Pandas, NumPy, and Matplotlib are commonly used for working with data.',
      codeSnippet: '# Example using Pandas\nimport pandas as pd\n\n# Create DataFrame\ndata = {\n    "Name": ["John", "Anna", "Peter"],\n    "Age": [30, 25, 35]\n}\ndf = pd.DataFrame(data)\n\n# Display DataFrame\nprint(df)',
    },
    {
      name: 'Web Development (Flask/Django)',
      description: 'Python is commonly used for web development. Flask and Django are popular web frameworks for building web applications.',
      codeSnippet: '# Example using Flask\nfrom flask import Flask\n\n# Create Flask app\napp = Flask(__name__)\n\n# Define route\n@app.route("/")\ndef hello():\n    return "Hello, Flask!"\n\n# Run app\nif __name__ == "__main__":\n    app.run(debug=True)',
    },
    // Add more concepts with descriptions and code snippets here
  ]);

  return (
    <div  className="container">
      <h1   className="title">Learning Python Concepts</h1>
    
       <div className="links">
        <h2>If you have any doubts refer to these links</h2>
      <a href="https://youtu.be/_uQrJ0TkZlc?si=ynEDcFW8nSpRpSXh"   className="link">course 1</a>
      <a href="https://youtu.be/m67-bOpOoPU?si=kyJf20KFQMde2c-a"  className="link">course 2</a>
      <a href="https://youtu.be/xErUnOKQbFw?si=gsmWnjp6urCSTd-o"  className="link">course 3</a>
      </div>
      {concepts.map((concept, index) => (
        <div key={index}>
          <h2  className="concept-title">{concept.name}</h2>
          <p  className="description">{concept.description}</p>
          <pre  className="code-snippet">{concept.codeSnippet}</pre>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Python;
