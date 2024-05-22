import React, { useState } from 'react';
import './React.css';

const Reactconcept = () => {
  // State to hold React concepts
  const [concepts] = useState([
    {
      name: 'JSX',
      description: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML elements and components in a React application.',
      codeSnippet: 'const element = <h1>Hello, world!</h1>;',
    },
    {
      name: 'Components',
      description: 'Components are the building blocks of a React application. They are reusable and can contain both logic and presentation.',
      codeSnippet: 'function Welcome(props) {\n    return <h1>Hello, {props.name}</h1>;\n}',
    },
    {
      name: 'Props',
      description: 'Props (short for properties) are used to pass data from parent to child components in React. They are read-only and immutable.',
      codeSnippet: '<Welcome name="John" />',
    },
    {
      name: 'State',
      description: 'State is an object that represents the data of a component. It is mutable and can be changed over time. State is managed internally by React.',
      codeSnippet: 'class Counter extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = { count: 0 };\n    }\n    render() {\n        return <h1>{this.state.count}</h1>;\n    }\n}',
    },
    {
      name: 'Event Handling',
      description: 'React allows you to handle events like onClick, onChange, etc., using event handlers. Event handlers are functions that are invoked when an event occurs.',
      codeSnippet: '<button onClick={this.handleClick}>Click Me</button>',
    },
    {
      name: 'Lifecycle Methods',
      description: 'Lifecycle methods are special methods that are invoked at different stages of a component’s lifecycle. They allow you to perform tasks like initialization, rendering, and cleanup.',
      codeSnippet: 'componentDidMount() {\n    // Perform initialization tasks\n}\n\ncomponentWillUnmount() {\n    // Perform cleanup tasks\n}',
    },
    {
      name: 'Conditional Rendering',
      description: 'Conditional rendering allows you to render different components or elements based on certain conditions. It is often used to create dynamic UIs.',
      codeSnippet: 'render() {\n    return (\n        <div>\n            {this.state.isLoggedIn ? <LogoutButton /> : <LoginButton />}\n        </div>\n    );\n}',
    },
    {
      name: 'Lists and Keys',
      description: 'In React, you can render lists of elements using the map() function. Keys are used to give each list item a unique identity and improve performance.',
      codeSnippet: 'render() {\n    return (\n        <ul>\n            {this.state.items.map((item) => (\n                <li key={item.id}>{item.name}</li>\n            ))}\n        </ul>\n    );\n}',
    },
    {
      name: 'Forms',
      description: 'React allows you to create controlled and uncontrolled forms. Controlled components keep their state in the parent component, while uncontrolled components rely on refs.',
      codeSnippet: '<input type="text" value={this.state.value} onChange={this.handleChange} />',
    },
   {
  name: 'React Hooks',
  description: 'Hooks are functions that allow you to use state and other React features in functional components. useState and useEffect are examples of built-in hooks.',
  codeSnippet: `import React, { useState, useEffect } from "react";
  
function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = "You clicked " + count + " times";
    }, [count]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}`,
},

    {
      name: 'Context',
      description: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level. It\'s useful for sharing data that is needed by many components.',
      codeSnippet: 'const ThemeContext = React.createContext("light");\n\n<ThemeContext.Provider value="dark">\n    <Toolbar />\n</ThemeContext.Provider>',
    },
    
    {
      name: 'Error Boundaries',
      description: 'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.',
      codeSnippet: 'class ErrorBoundary extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = { hasError: false };\n    }\n    componentDidCatch(error, info) {\n        this.setState({ hasError: true });\n        logErrorToMyService(error, info);\n    }\n    render() {\n        if (this.state.hasError) {\n            return <h1>Something went wrong.</h1>;\n        }\n        return this.props.children;\n    }\n}',
    },
    {
      name: 'Higher-Order Components (HOC)',
      description: 'Higher-order components are a pattern where a function takes a component and returns a new component. They are used for code reuse, logic abstraction, and prop manipulation.',
      codeSnippet: 'const EnhancedComponent = higherOrderComponent(WrappedComponent);',
    },
    // Add more concepts here
  ]);

  return (
    <div className="container">
      <h1 className="title">Learning React Basics</h1>
    
      <div className="links">
        <h2>If you have any doubts refer to these links</h2>
        <a href="https://reactjs.org/docs/getting-started.html" className="link">React Documentation</a>
        <a href="https://reactrouter.com/web/guides/quick-start" className="link">React Router Documentation</a>
        <a href="https://redux.js.org/introduction/getting-started" className="link">Redux Documentation</a>
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

export default Reactconcept;
