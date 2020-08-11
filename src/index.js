import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));

/*
NOTE: To do the above in vanilla Javascript, it would look like this:

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);

It's a lot of code!
*/
