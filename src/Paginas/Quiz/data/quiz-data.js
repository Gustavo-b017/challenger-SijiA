
export let questoesGeral =  [
  {
    id: 1,
    question: " Which of the following is TRUE about reflows and repaints?",
    answers: [
      " They're the same thing.",
      " Repaints (or redraws) occur when elements change their visual styles but not layout.",
      " Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc.",
      " The previous two answers are correct.",
    ],
    correct: 3
  },
  {
    
    id: 2,
    question: " What are the three types of JavaScript errors?",
    answers: [
      " Parse Errors, Syntax Errors and Runtime Errors.",
      " Loading Errors, Runtime Errors and Logic Errors.",
      " Syntax Errors, Logic Errors and Loading Errors.",
      " Bad Errors, Very Bad Errors, and Fatal Errors.",
    ],
    correct: 1
  },
  {
    id: 3 ,
    question: " What's a closure?",
    answers: [
      " An inner function that has access to an outer function's variables, even after the outer function has executed.",
      " A stateful function; a function that preserves state.",
      " The combination of a function and the lexical environment within which that function was declared.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 4 ,
    question: " Where might you find, or how might you use a closure in JavaScript?",
    answers: [
      " When currying or implementing partial application.",
      " To emulate private methods.",
      " In event handlers, timers, and asynchronous callbacks.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 5 ,
    question: " Which of these is a use case for the bind, call, or apply methods?",
    answers: [
      " You can use call or apply to borrow methods from other objects.",
      " You can use bind for partial function application.",
      " If you're using the map method to run a function on an array and you need to preserve the this context, you can use bind.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 6 ,
    question: " What does the bind method do?",
    answers: [
      " Returns a function that, when executed, will call the original function with a this context that you pass in.",
      " Prevents the value of this from being overridden by call or apply.",
      " Allows you to implement partial application of a function.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 7 ,
    question: " How do objects inherit methods in JavaScript?",
    answers: [
      " With Object.create or Object.setPrototypeOf.",
      " With class Sub extends Super in ES2015.",
      " Using Parent.prototype.method.call inside Child.prototype.method.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 8 ,
    question: " What is a promise?",
    answers: [
      " An object that represents a possible future value.",
      " An object that's used for deferred and asynchronous computations.",
      " A proxy for a value that will eventually become available.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 9 ,
    question: " What is CORS?",
    answers: [
      " Cross-Origin Resource Sharing",
      " Allows restricted resources (e.g. fonts) on a web page to be requested from an outside domain.",
      " Allows scripts to interact more openly with content outside of the original domain, leading to better integration between web services.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 11 ,
    question: " What is an Angular expression?",
    answers: [
      " A JavaScript-like code snippet that is evaluated by Angular.",
      " A code snippet that is evaluated in the context of the current model scope, rather than within the scope of the global context (window).",
      " A binding in double curly brackets that gets evaluated and the results appear in the DOM in place of it.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 12 ,
    question: " In Angular, what is a directive?",
    answers: [
      " An Angular feature that takes an element and gives it new functionality.",
      " A reusable component.",
      " A combination of HTML and JavaScript that will execute together.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 13 ,
    question: " What does strict mode do?",
    answers: [
      " Makes code more optimizable.",
      " Adds restrictions to prevent errors.",
      " Prevents the use of global variables and the use of dangerous code like with and eval.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 14 ,
    question: " What is event bubbling?",
    answers: [
      " When the browser engine searches down the DOM tree for event handlers.",
      " When the browser engine searches up the DOM tree for event handlers.",
      " When the browser engine searches sideways on sibling elements for event handlers.",
      " None of the above.",
    ],
    correct: 1
  },
  {
    id: 15 ,
    question: " What is event delegation?",
    answers: [
      " Attaching event handlers to child elements rather than parent elements.",
      " Creating custom event handlers.",
      " Attaching event handlers to a parent element rather than multiple child elements.",
      " None of the above.",
    ],
    correct: 2
  },
  {
    id: 16 ,
    question: " What is dependency injection?",
    answers: [
      " There's no such thing.",
      " A type of data structure.",
      " A coding pattern in which a class receives the instances of objects it needs from an external source rather than creating them itself.",
      " A new drug the kids are doing nowadays.",
    ],
    correct: 2
  },
  {
    id: 17 ,
    question: " What are the six primitive data types in JavaScript?",
    answers: [
      " Function, String, Undefined, Digit, Nil, and Double.",
      " Boolean, Null, Undefined, Number, String, and Symbol in ES6.",
      " Number, Class, Object, Hash, String, and Function.",
      " None of the above.",
    ],
    correct: 1
  },
  {
    id: 18 ,
    question: " Which of the following is FALSE about the this keyword?",
    answers: [
      " Its value is established at the invocation of a function.",
      " When a function is invoked with the new keyword, this is bound to the new object.",
      " Its value is set at the declaration of a function.",
      " None of the above.",
    ],
    correct: 2
  },
  {
    id: 19 ,
    question: " In Angular 2, which of the following are considered Structural Directives (directives that change DOM layout)?",
    answers: [
      " NgFor and NgIf",
      " NgStyle and NgClass",
      " NgModel and NgForm",
      " None of the above.",
    ],
    correct: 0
  },
  {
    id: 20 ,
    question: " Which is TRUE about the events load and DOMContentLoaded?",
    answers: [
      " The DOMContentLoaded event comes after the load event.",
      " DOMContentLoaded is fired when the document has been loaded and parsed; load fires when all files have finished loading, including images.",
      " The load event is fired when only the DOM is loaded and parsed. DOMContentLoaded is fired when the document is fully loaded, including images.",
      " They're the same thing.",
    ],
    correct: 1
  },
  {
    id: 21 ,
    question: " Which of the following is NOT an example of a data structure in JavaScript?",
    answers: [
      " Object",
      " Array",
      " Set in ES2015",
      " Trie",
    ],
    correct: 3
  },
  {
    id: 22 ,
    question: " Which of the following values is truthy?",
    answers: [
      " 0",
      " '' (empty string)",
      " 1",
      " undefined",
    ],
    correct: 2
  },
  {
    id: 23 ,
    question: " What is an IIFE?",
    answers: [
      " Immediately Iterable Function Evaluation",
      " Immediately Invoked Function Expression",
      " Initially Integrated Functional Element",
      " Internally Indexed File Extension",
    ],
    correct: 1
  },
  {
    id: 24 ,
    question: " In React, what method is used to change state?",
    answers: [
      " changeState()",
      " onChange()",
      " setState()",
      " stateSet()",
    ],
    correct: 2
  },
  {
    id: 25 ,
    question: " Which of the following is an aspect of a pure function?",
    answers: [
      " Doesn't have unintended side effects.",
      " Doesn't rely on, or affect, external state.",
      " Given the same input, it'll always return the same output.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 26 ,
    question: " Where is JavaScript used besides the browser?",
    answers: [
      " Servers, databases, operating systems",
      " Desktop apps, mobile web apps, mobile hybrid apps, mobile native apps",
      " Robots, drones, Internet of Things devices",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 27 ,
    question: " What are higher order components in React?",
    answers: [
      " They're basically wrappers for other components.",
      " They take in another component as an argument.",
      " They're used to extend or modify the behavior of a wrapped component.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 28 ,
    question: " What does the new keyword do?",
    answers: [
      " Creates a new empty object.",
      " Sets the prototype of the new object to the constructor's prototype and calls the constructor.",
      " Sets the this variable to the new object and returns the new object.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 29 ,
    question: " How is let different from var?",
    answers: [
      " let is block scoped.",
      " let isn't hoisted.",
      " let can't be redeclared.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 30 ,
    question: " Which of the following is TRUE about the this keyword?",
    answers: [
      " If a method is called, this refers to the object that the method is a property of. If the new keyword is used, this is the new object instance.",
      " If call, apply or bind are used, this is the object that's passed in as the argument.",
      " If none of the above conditions are met, this refers to the global object (window in the browser in non-strict mode; global in Node).",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 31 ,
    question: " Which of the following is something to look out for when using arrow functions?",
    answers: [
      " An arrow function receives the this value of its surrounding lexical scope at the time it was created; it behaves as if it had been created using fn.bind(this).",
      " If used in an event handler attached to a DOM element, the this variable will refer to the parent (usually the window) object rather than the element you're targeting.",
      " An arrow function can't be used as a constructor.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 32 ,
    question: " Which of the following methods can be used to organize/encapsulate code?",
    answers: [
      " The module pattern in ES5 or Module Import Export in ES6.",
      " An Immediately Invoked Function Expression.",
      " OO or Objects Linked to Other Objects",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 33 ,
    question: " What's an example of a practical use case for recursion?",
    answers: [
      " Traversing a tree (e.g., Walking the DOM).",
      " Flattening a deeply nested array.",
      " Deep freezing a deeply nested object.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 34 ,
    question: " What's the difference between =, ==, and ===?",
    answers: [
      " = is the basic assignment operator. It assigns the value of its right operand to its left operand.",
      " == compares two values for equality AFTER converting both values to a common type.",
      " === is used for strict equality. It checks for equality of both value AND type.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 37 ,
    question: " Which of the following is true about passing by value vs reference?",
    answers: [
      " Objects, arrays, and functions are passed by reference.",
      " string, number, boolean, symbol, null and undefined are passed by value.",
      " Primitive types are passed by value and non-primitive types are passed by reference.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 38 ,
    question: " What is a static method?",
    answers: [
      " A function that exists on an instance, not a class.",
      " A method that only takes one argument.",
      " A function that exists on a class, not an instance.",
      " None of the above.",
    ],
    correct: 2
  },
  {
    id: 39 ,
    question: " Which of the following is TRUE about the difference between undefined and null.",
    answers: [
      " A variable is undefined when it's been declared but hasn't been assigned a value.",
      " null is purposely assigned as a representation of 'no value.'",
      " undefined is returned when trying to access a non-existant property of an object.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 40 ,
    question: " In React, which of the following is TRUE about the difference between an element and a component?",
    answers: [
      " A React element is an object representation of a DOM node., ",
      " A component is a class or a function.",
      " A component accepts props and returns a React element.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 41 ,
    question: " In React, which is TRUE about the difference between controlled components and uncontrolled components?",
    answers: [
      " With controlled components, form data is handled by React., ",
      " A controlled input accepts its current value as a prop, and a callback to change that value.",
      " With uncontrolled components, form data is handled by the DOM, and input values can be accessed using refs.",
      " All of the above.",
    ],
    correct: 3
  },
  {
    id: 42 ,
    question: " In React, what's the execution order for methods and lifecycle hooks on initial render?",
    answers: [
      " componentDidMount() → render() → getDerivedStateFromProps() → constructor(), ",
      " render() → componentDidMount() → constructor() → getDerivedStateFromProps()",
      " constructor() → getDerivedStateFromProps() → render() → componentDidMount()",
      " None of the above.",
    ],
    correct: 2
  },
  {
    id: 43 ,
    question: " In React, which is TRUE about the difference between a class component, a PureComponent, and a functional component?",
    answers: [
      " Standard class components have state, lifecycle hooks, and refs., ",
      " A PureComponent is just like a class component, but handles shouldComponentUpdate for you, with a shallow check for changes in props or state. This allows for a performance boost by preventing unnecessary rerenders.",
      " Functional components are presentational; they don't have access to state or lifecycle hooks, and can't use refs.",
      " All of the above.",
    ],
    correct: 3
  }
];
