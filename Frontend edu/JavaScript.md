# JavaScript

- [JavaScript](#javascript)
  - [JS (JavaSript)](#js-javasript)
    - [EVENT LOOP](#event-loop)
    - [PROTOTYPE CHAINING](#prototype-chaining)
    - [this](#this)
    - [TYPES (primitive/reference)](#types-primitivereference)
      - [PRIMITIVE - IMMUTABLE](#primitive---immutable)
      - [REFERENCE - MUTABLE](#reference---mutable)
    - [IMMUTABLE (BY VALUE)/MUTABLE (BY REFERENCE)](#immutable-by-valuemutable-by-reference)
      - [IMMUTABLE](#immutable)
      - [MUTABLE](#mutable)
    - [SCOPE](#scope)
    - [HOISTING](#hoisting)
    - [CLOSURE](#closure)
    - [FUNCTIONS](#functions)
      - [FIRST-CLASS OBJECTS](#first-class-objects)
      - [HIGHER-ORDER FUNCTIONS](#higher-order-functions)
      - [IIFE - Immediately Invoked Function Expression](#iife---immediately-invoked-function-expression)
    - [ES6](#es6)
      - [LET/CONST](#letconst)
      - [PROMISE](#promise)
      - [FIND/MAP/FILTER/REDUCE…](#findmapfilterreduce)
    - [ALGORITHMS](#algorithms)
    - [LIBRARIES](#libraries)
      - [REACT](#react)
        - [VIRTUAL DOM](#virtual-dom)
        - [JSX](#jsx)
        - [ROUTER](#router)
        - [COMPONENTS](#components)
        - [REDUX](#redux)
        - [REDUX-THUNK/REDUX-SAGA](#redux-thunkredux-saga)
        - [.env](#env)
        - [LOCAL STORAGE](#local-storage)
        - [HTTP/AXIOS](#httpaxios)
    - [FRAMEWORKS](#frameworks)
      - [VUE.JS](#vuejs)
      - [ANGULAR](#angular)

## JS (JavaSript)
JavaScript is a single threaded language and that is why asynchronous logic is implemented.

### EVENT LOOP
Visual explanation of event loop: [go to link](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### PROTOTYPE CHAINING
Ref - [go to link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

Last object in prototype chain is NULL.

### this
Ref - [go to link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

### TYPES (primitive/reference)
#### PRIMITIVE - IMMUTABLE
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol. There also is null, which is seemingly primitive, but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.

1. string
2. number
3. bigint
4. boolean
5. undefined
6. symbol

#### REFERENCE - MUTABLE
1. object
2. array

### IMMUTABLE (BY VALUE)/MUTABLE (BY REFERENCE)
#### IMMUTABLE
An immutable object is one whose content cannot be changed.
An object can be immutable for various reasons, for example:

* To improve performance (no planning for the object's future changes)
* To reduce memory use (make object references instead of cloning the whole object)
* Thread-safety (multiple threads can reference the same object without interfering with one other)

#### MUTABLE
Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.

### SCOPE
Ref - [go to link](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use.

Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

### HOISTING
Ref - [go to link](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

Hoisting is a term you will not find used in any normative specification prose prior to ECMAScript® 2015 Language Specification. Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first.

Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

### CLOSURE
A closure is how functions in Javascript can remember and access its surrounding state (or lexical environment). Closures are created whenever a function accesses a variable defined outside of its own scope.

```javascript
function sum(a){
  return function(b){
    return a + b;
  }
}

const sumByTwo = sum(2);
/*
In this exapmle when we pass number 2 to the function sum,
"a" variable is in closure for sum function.
*/

// ES6 CODE EXAMPLE
const sum = (a) => (b) => a + b;
const sumByTwo = sum(2);
```

### FUNCTIONS
#### FIRST-CLASS OBJECTS
Functions in JavaScript are first-class objects, which means you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.

#### HIGHER-ORDER FUNCTIONS
Simply put, a higher-order function is just a first-class function that can accept another function as an argument and/or returns a function. A common example of a higher-order function is when a function accepts a second function (either named or anonymous) as an argument. The function passed in as an argument is also known as a callback function. Remember, when a callback function is invoked within your enclosing function and needs access to an outer variable, closures are created.

Example is closure function sum. sum is higher-order function becouse returns a function as a result.

#### IIFE - Immediately Invoked Function Expression
Ref - [go to link](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

### ES6
#### LET/CONST

#### PROMISE

#### FIND/MAP/FILTER/REDUCE…

### ALGORITHMS

### LIBRARIES 
#### REACT
##### VIRTUAL DOM
##### JSX
##### ROUTER
##### COMPONENTS
##### REDUX
##### REDUX-THUNK/REDUX-SAGA
##### .env
##### LOCAL STORAGE
##### HTTP/AXIOS

### FRAMEWORKS
#### VUE.JS

#### ANGULAR
