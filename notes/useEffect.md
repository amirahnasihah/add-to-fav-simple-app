# React JS Docs (Important Parts)

- [React JS Docs (Important Parts)](#react-js-docs-important-parts)
  - [Updating Arrays in State](#updating-arrays-in-state)
  - [rm](#rm)
  - [useEffect](#useeffect)

## Updating Arrays in State

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state.

**When you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.**


## rm

**Header.js**

```javascript
// existing code here

export default function Header({ keyword, handleSetKeyword }) {
  // existing code

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    console.log("userName:", userName);
  }, [isLoggedIn, userName]);

  return (
    // existing code
  );
}
```

output:

```shell
isLoggedIn: false
userName: 
isLoggedIn: false
userName: 
isLoggedIn: true
userName: John
```

**DisplayResults.js**

```javascript
console.log("This is api_keyword:", API_KEYWORD);
```

## useEffect

The code you provided is an example of the `useEffect` hook in React. 

The `useEffect` hook is used to perform side effects in functional components. It allows you to run code in response to certain dependencies changing. In this case, the code is logging the values of `isLoggedIn` and `userName` to the console whenever either of them changes.

The `useEffect` hook takes two parameters: a callback function and an array of dependencies. The callback function is the code that will be executed when the dependencies change. The array of dependencies specifies which variables the effect depends on. If any of the dependencies change, the effect will be triggered.

In your example, the callback function logs the values of `isLoggedIn` and `userName` to the console. The dependencies specified in the array are `isLoggedIn` and `userName`, so the effect will be triggered whenever either of these values changes.

This can be useful, for example, when you want to perform some action or update the UI in response to changes in certain variables.

**simple explaination**

Certainly! In simple terms, the code you provided is a piece of JavaScript code written using React, a JavaScript library for building user interfaces.

In this code, there is a special function called `useEffect` that is used to do something when certain things change. Inside the `useEffect` function, there is some code that logs (prints) the values of two variables, `isLoggedIn` and `userName`, to the console.

The `useEffect` function takes two things: a function that contains the code you want to run, and an array of variables. The function inside `useEffect` runs when any of the variables in the array change. So, if either `isLoggedIn` or `userName` changes, the code inside the `useEffect` function will run.

The purpose of this code is to keep track of changes in the `isLoggedIn` and `userName` variables and log their values to the console whenever they change. It can be helpful for debugging or understanding how the values of these variables are being updated in your application.