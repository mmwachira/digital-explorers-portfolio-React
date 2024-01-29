# digital-explorers-portfolio-React
A portfolio page design for the digital-explorers-2 program enhanced using React.
 Find the page at https://mmwachira.github.io/digital-explorers-portfolio-React/
 # What is NPM? 
It stands for Node Package Manager. It is a package manager for the Node.js JavaScript runtime environment . It is used to install, share, and distribute code, manage dependencies in projects, and automate tasks.
# What is SPA?
A Single-page application is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown.
# What is the event loop?
The event loop is responsible for executing code, collecting and processing events, and executing queued sub-tasks1. Here’s a simplified explanation of how it works:

Stack: JavaScript uses a call stack to handle function calls. When a function is called, a new frame is created and pushed onto the stack. When a function finishes execution, its frame is popped from the stack.

Heap: Objects are allocated in a heap, which is a large region of memory.

Queue: JavaScript uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.

Event Loop: The event loop constantly monitors the call stack and the message queue. If the call stack is empty, it takes the first message from the queue and pushes it onto the stack, which starts its execution.

# What is the difference between export x and export default x? How do you import them differently?
The difference between export x and export default x is that the former exports a named variable x, while the latter exports a default variable. When importing, you need to use curly braces {} for named exports, but not for default exports.

# Why do you use className as a property in React and not class?
Class is a reserved keyword in JavaScript, and React uses JSX, which is a JavaScript extension. Using class as an attribute name would cause syntax errors and conflicts with JavaScript classes. Therefore, React follows the DOM API and uses className to specify the CSS class of an element.

# Why should you not write the following? What will happen? <button onClick={setCounter(counter + 1)}> +1 </button>
Directly updating state based on its current value like setCounter(counter + 1) can lead to unexpected behavior due to the asynchronous nature of state updates in React. 

When you have multiple state updates queued up in quick succession, React may batch them together for performance reasons. This means that when you call setCounter(counter + 1), React might not immediately update the counter state to the incremented value. Instead, it might schedule the update to happen later, potentially leading to unexpected behavior if you rely on the current state value.

# What is object deconstruction and how is it connected to React components (example)?
Object deconstruction is a feature of ES6 that allows you to extract properties from an object or items from an array and assign them to variables in a concise way. It is useful for React components because it can improve readability, reduce code length, and make it easier to access props.
An example is: suppose you have a component that receives an object as a prop, like this:

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="Alice" />;

You can use object deconstruction to extract the name property from props and assign it to a variable, like this:

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

<Greeting name="Alice" />;

This way, you don’t have to write props.name every time you want to use it. You can also destructure multiple properties at once, or use default values if the prop is undefined.


# How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
HTML defines the structure and content of the page, while JavaScript adds interactivity and functionality. To use HTML and JavaScript in the same function, you need a way to embed HTML code inside JavaScript code, or vice versa. One way to use HTML and JavaScript in the same function is to use a library or framework that provides a syntax for writing HTML-like code in JavaScript. React is one such framework that uses a syntax called JSX, which looks like HTML but is actually JavaScript. 

# What is async/await? Bring an example
Async/await is a syntax that allows you to write asynchronous code in a more readable and elegant way. It lets you use the await keyword to pause the execution of a function until a promise is resolved or rejected, and then resume it with the promise result. Async/await also enables you to use try/catch blocks to handle errors in asynchronous code.

Here is an example: 
// Define an async function that fetches data from a given URL
async function fetchData(url) {
  // Use try/catch to handle errors
  try {
    // Use await to wait for the fetch promise to resolve
    let response = await fetch(url);
    // Use await to wait for the response to be parsed as JSON
    let data = await response.json();
    // Return the data
    return data;
  } catch (error) {
    // If an error occurs, log it and return null
    console.error(error);
    return null;
  }
}

// Call the async function with a URL and use then to handle the result
fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
  // If the data is not null, display it on the page
  if (data) {
    document.getElementById("output").innerHTML = JSON.stringify(data);
  } else {
    // Otherwise, display an error message
    document.getElementById("output").innerHTML = "Something went wrong";
  }
});

# What is a Promise? Bring an example
A promise is an object that represents an asynchronous operation that may or may not be completed in the future. A promise can have one of three states: pending, fulfilled, or rejected. You can use the then () method to attach callback functions that will be executed when the promise is either fulfilled or rejected.

Here is an example of using a promise to fetch a JSON file from a server using the fetch () API:
// Create a promise by calling the fetch() function
let fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// Use the then() method to handle the promise's state changes
fetchPromise.then(
  // The first callback function is executed when the promise is fulfilled
  function(response) {
    // Log the response status
    console.log(`Received response: ${response.status}`);
    // Return another promise by calling the json() method on the response object
    return response.json();
  },
  // The second callback function is executed when the promise is rejected
  function(error) {
    // Log the error object
    console.log(`An error occurred: ${error}`);
  }
).then(
  // The third callback function is executed when the previous promise is fulfilled
  function(data) {
    // Log the JSON data
    console.log(`Received data: ${JSON.stringify(data)}`);
  }
);

// Log a message indicating the request has started
console.log("Started request...");



