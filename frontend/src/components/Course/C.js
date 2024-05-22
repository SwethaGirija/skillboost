import React, { useState } from 'react';
import './C.css';

const C = () => {
  // State to hold C concepts
  const [concepts] = useState([
    {
      name: 'Variables',
      description: 'Variables are used to store data values. In C, you need to declare the type of variable before using it.',
      codeSnippet: 'int x = 10;\nfloat y = 3.14;\nchar ch = \'A\';',
    },
    {
      name: 'Data Types',
      description: 'C supports basic data types such as int, float, char, and more. You can also create custom data types using structs.',
      codeSnippet: 'int age = 30;\nfloat price = 19.99;\nchar grade = \'A\';\nstruct Person {\n    char name[20];\n    int age;\n};',
    },
    {
      name: 'Functions',
      description: 'Functions in C are blocks of code that perform a specific task. They are defined using the return type, name, parameters, and body.',
      codeSnippet: 'int add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    printf("%d", result);\n    return 0;\n}',
    },
    {
      name: 'Control Flow',
      description: 'C provides if, else if, else, switch-case statements for conditional execution. It also supports loops like for, while, and do-while.',
      codeSnippet: 'int x = 10;\nif (x > 0) {\n    printf("Positive");\n} else if (x == 0) {\n    printf("Zero");\n} else {\n    printf("Negative");\n}',
    },
    {
      name: 'Arrays',
      description: 'Arrays in C are collections of elements of the same data type. They can be one-dimensional or multi-dimensional.',
      codeSnippet: 'int numbers[5] = {1, 2, 3, 4, 5};\nchar vowels[] = {\'a\', \'e\', \'i\', \'o\', \'u\'};',
    },
    {
      name: 'Pointers',
      description: 'Pointers in C are variables that store the memory address of another variable. They are used for dynamic memory allocation and accessing array elements.',
      codeSnippet: 'int x = 10;\nint *ptr = &x;\nprintf("%d", *ptr); // Output: 10',
    },
    {
      name: 'Structures',
      description: 'Structures in C allow you to group together variables of different data types under a single name. They are used for creating complex data structures.',
      codeSnippet: 'struct Person {\n    char name[20];\n    int age;\n};\n\nstruct Person p1;\np1.age = 30;\nstrcpy(p1.name, "John");',
    },
    {
      name: 'File Handling',
      description: 'C provides functions for reading from and writing to files. You can open a file using fopen(), read from it using fread(), write to it using fwrite(), and close it using fclose().',
      codeSnippet: 'FILE *fp;\nchar buffer[255];\nfp = fopen("example.txt", "r");\nfgets(buffer, 255, fp);\nprintf("%s", buffer);\nfclose(fp);',
    },

    {
      name: 'Preprocessor Directives',
      description: 'Preprocessor directives in C are commands to the compiler that begin with a # symbol. They are used for including header files, defining macros, and conditional compilation.',
      codeSnippet: '#include <stdio.h>\n#define PI 3.14159\n#ifdef DEBUG\n    printf("Debugging mode");\n#endif',
    },
    // Add more concepts here
  ]);

  return (
    <div className="container">
      <h1 className="title">Learning C Concepts</h1>
    
      <div className="links">
        <h2>If you have any doubts refer to these links</h2>
        <a href="https://youtu.be/fmSnLiAv-zc?si=9ciFz3Ru_jlJib7Y" className="link">Course 1</a>
        <a href="https://youtu.be/p0QUmC2WJwM?si=-r5mPO__zkhP2Lrr" className="link">Course 2</a>
        <a href="https://youtu.be/JAy56OH58Y4?si=CnSc60sznjvfDJLB" className="link">Course 3</a>
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

export default C;
