import React from 'react';
import './Css.css'; // Import CSS file for styling

const Css = () => {
  return (
    <div className="container">
      <h2   className="title">CSS Basics</h2>

      <div className="links">
        <h2>If you have any doubts refer to these links</h2>
      <a href="https://youtu.be/GlEY28YLffs?si=XzCcfDGe2yp6Cnt_"   className="link">course 1</a>
      <a href="https://youtu.be/8xpEuu0s1A4?si=-8D60PD18PsIUKpT"  className="link">course 2</a>
      <a href="https://youtu.be/OXGznpKZ_sA?si=7-NspA78lc9YQz43"  className="link">course 3</a>
      </div>
      <br></br>
      <br></br>

      <p  className="description">CSS (Cascading Style Sheets) is a stylesheet language that is used to describe the presentation of a document written in HTML. It defines how elements should be displayed on the screen, on paper, or in other media.</p>
      <h3   className="concept-title">Selectors</h3>
      <p  className="description">In CSS, selectors are patterns used to select the elements you want to style. Here are some common types of selectors:</p>
      <pre  className="code-snippet">
        <li>Element selectors</li>
        <li>Class selectors</li>
        <li>ID selectors</li>
        <li>Attribute selectors</li>
      </pre>
      <br></br>
      <br></br>
      <h3  className="concept-title">Properties</h3>
      <p  className="description">CSS properties are used to style HTML elements. Each property has a name and a value. For example:</p>
      <pre  className="code-snippet">
        <code>
          {`
            color: blue;
            font-size: 16px;
            border: 1px solid black;
            background-color: #ffffff;
          `}
        </code>
      </pre>
      <br></br>
      <br></br>
      <h3  className="concept-title">Box Model</h3>
      <p  className="description">The CSS box model is a box that wraps around every HTML element. It consists of:</p>
      <pre className="code-snippet">
        <li>Content - The actual content of the box, where text and images appear</li>
        <li>Padding - Space between the content and the border</li>
        <li>Border - A border surrounding the padding (if any) and content</li>
        <li>Margin - Space outside the border, clearing an area around the box</li>
      </pre>
      <br></br>
      <br></br>
      <h3  className="concept-title">Display Property</h3>
      <p  className="description">The <code>display</code> property specifies the type of box an element generates. Some common values include:</p>
      <pre className="code-snippet">
        <li><code>block</code>: Generates a block-level element</li>
        <li><code>inline</code>: Generates an inline-level element</li>
        <li><code>inline-block</code>: Generates an inline-level block container</li>
      </pre>
      <br></br>
      <br></br>
      <h3  className="concept-title">Positioning</h3>
      <p  className="description">CSS positioning allows you to precisely control the placement of elements on a webpage. Common values for the <code>position</code> property include:</p>
      <pre className="code-snippet">
        <li><code>static</code>:Default positioning places elements in the document's normal flow.</li>
        <li><code>relative</code>: Positioned relative to its normal position</li>
        <li><code>absolute</code>: Positioned relative to the nearest positioned ancestor</li>
        <li><code>fixed</code>: Positioned relative to the viewport, does not move when the page is scrolled</li>
      </pre>
      <br></br>
      <br></br>
      <h3  className="concept-title">Floats</h3>
      <p  className="description">The <code>float</code> property is used to push an element to the left or right, allowing other elements to wrap around it. Common values include:</p>
      <pre className="code-snippet">
        <li><code>left</code>: Floats the element to the left</li>
        <li><code>right</code>: Floats the element to the right</li>
        <li><code>none</code>: Default value, no floating</li>
        <li><code>clear</code>: Specify which sides of an element disallow floating elements.</li>
      </pre>
      <br></br>
      <br></br>
      <h3  className="concept-title">Flexbox</h3>
      <p  className="description">Flexbox is a layout model in CSS designed to provide a more efficient way to layout, align, and distribute space among items in a container, even when their size is unknown or dynamic.</p>
      <p  className="description">With flexbox, you can achieve complex layouts with less code compared to traditional CSS layout techniques.</p>
      <div className="code-snippet">
  <div className="flex-item">1</div>
  <div className="flex-item">2</div>
  <div className="flex-item">3</div>
</div>
<br></br>
      <br></br>
      <h3  className="concept-title">Grid</h3>
      <p  className="description">CSS Grid Layout is a two-dimensional layout system for the web. It lets you define layout areas on a grid, and then place elements into those areas. Grid layout is ideal for creating complex web layouts with rows and columns.</p>
      <p  className="description"> Grid layout is ideal for creating complex web layouts with rows and columns.</p>
      <p  className="description">It offers a lot of flexibility and control over the placement and sizing of grid items.</p>
      {/* Add more content here */}
    </div>
  );
}

export default Css;
