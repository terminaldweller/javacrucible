import React from "react";

const page = (
  <div>
    <h1>Hello, everyone!</h1>
    <p>A paragraph</p>
  </div>
);

const navbar = (
  <nav>
    <h1>terminaldweller.com</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)
React.ReactDOM.render(navbar, document.getElementById("root"));
