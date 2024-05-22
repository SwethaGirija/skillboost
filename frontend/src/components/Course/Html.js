import React from 'react';
import './Html.css'

const Html = () => {
  return (
    <div className='container'>
      <h1 className='title'>HTML Basics</h1>
      <p>In this lesson, we'll cover the basics of HTML.</p>

      <div className="links">
        <h2>If you have any doubts refer to these links</h2>
      <a href="https://youtu.be/tfN9gPFmUfA?si=HAuXIXjt-y4sdsDD"   className="link">course 1</a>
      <a href="https://youtu.be/kUMe1FH4CHE?si=bp36LnCi8mcraaA9"  className="link">course 2</a>
      <a href="https://youtu.be/qz0aGYrrlhU?si=G71X0CGrAcYOcGmi"  className="link">course 3</a>
      </div>    

      <h2  className="concept-title">HTML Structure</h2>
      <p className="description">HTML documents are structured using elements. Here's a basic structure:</p>
      <pre className="code-snippet">
        <code>
          {`<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2  className="concept-title">HTML Elements</h2>
      <p   className="description">HTML elements are represented by tags. Here's an example of some common HTML elements:</p>
      <pre className="code-snippet">
        <code>
          {`<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">This is a link</a>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Attributes</h2>
      <p className="description">HTML elements can have attributes that provide additional information. Here's an example:</p>
      <pre className="code-snippet">
        <code>
          {`<img src="image.jpg" alt="Image">`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Comments</h2>
      <p className="description">Comments in HTML are written like this:</p>
      <pre className="code-snippet">
        <code>
          {`<!-- This is a comment -->`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Forms</h2>
      <p className="description">HTML allows you to create forms to collect user input. Here's an example:</p>
      <pre className="code-snippet">
        <code>
          {`<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <br>
  <input type="submit" value="Submit">
</form>`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Tables</h2>
      <p className="description">HTML allows you to create tables to display tabular data. Here's an example:</p>
      <pre className="code-snippet">
        <code>
          {`<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
    <td>25</td>
  </tr>
</table>`}
        </code>
      </pre >
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Semantic Elements</h2>
      <p className="description">HTML5 introduced semantic elements to provide more meaning to the content. Here are some examples:</p>
      <pre className="code-snippet">
        <code>
          {`<header>
  <h1>Header</h1>
</header>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here.</p>
  </article>
</main>
<footer>
  <p>Footer content goes here.</p>
</footer>`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Multimedia</h2>
      <p className="description">HTML supports embedding multimedia content such as images, audio, and video:</p>
      <pre className="code-snippet">
        <code>
          {`<img src="image.jpg" alt="Image">
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<video controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Links and Navigation</h2>
      <p className="description">Hyperlinks and navigation are fundamental features of HTML:</p>
      <pre className="code-snippet">
        <code>
          {`<a href="https://example.com">This is a link</a>
<a href="#section">Link to a section within the page</a>
<a href="page.html">Link to another HTML page</a>`}
        </code>
      </pre>
      <br></br>
      <br></br>
      <h2 className="concept-title">HTML Metadata</h2>
      <p className="description">HTML metadata provides additional information about the document:</p>
      <pre className="code-snippet">
        <code>
          {`<meta charset="UTF-8">
<meta name="description" content="Description of the document">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Author Name">`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Entities</h2>
      <p className="description">HTML entities are used to display reserved characters in HTML:</p>
      <pre className="code-snippet">
        <code>
          {`&lt; represents <br>
&gt; represents >
&amp; represents &`}
        </code>
      </pre>
      <br></br>
      <br></br>

      <h2 className="concept-title">HTML Layouts</h2>
      <p className="description">HTML provides various techniques for creating layouts:</p>
      <pre className="code-snippet">
        <code>
          {`<div> and <span> elements for basic layout
<table> for tabular layout
CSS for advanced layout`}
        </code>
      </pre>
    </div>
  );
};

export default Html;
