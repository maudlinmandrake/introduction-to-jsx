import React from "react";
import ReactDOM from "react-dom";

//Note: render will only take ONE HTML element, unless you nest everything inside a DIV
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <p>How are you today?</p>
  </div>,
  document.getElementById("root")
);

/*
NOTE: To do the above in vanilla Javascript, it would look like this:

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);

It's a lot of code!
*/
