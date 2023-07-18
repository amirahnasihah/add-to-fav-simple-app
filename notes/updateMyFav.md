- [React Docs](#react-docs)
  - [what does PAGINATION functions means and how it works](#what-does-pagination-functions-means-and-how-it-works)
  - [other methods for localstorage in react initial state](#other-methods-for-localstorage-in-react-initial-state)
  - [Nullish coalescing operator (??)](#nullish-coalescing-operator-)
  - [updateMyFavorites() - for add to my favorites function](#updatemyfavorites---for-add-to-my-favorites-function)
  - [updateMyFavourites - id is null in the localStorage database](#updatemyfavourites---id-is-null-in-the-localstorage-database)

# React Docs

> [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)

> [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)

## what does PAGINATION functions means and how it works

```javascript
const [page, setPage] = useState(3);

const onLoadMore = () => {
  setPage((prevPage) => prevPage + 4);
  // The `setPage` function takes a new value or a function that calculates the new value based on the previous state.

  // In this case, it uses a function `(prevPage) => prevPage + 4` to calculate the new value.

  // The current value of `page` (referred to as `prevPage` inside the function) is incremented by 4, and the result becomes the new value of page.
};
```

Let's break it down step by step:

1. `const [page, setPage] = useState(3);`
   - This line declares a state variable called `page` and initializes it with a value of 3.
   - The `useState` hook is a built-in hook in React that allows you to add state to functional components.
   - `page` is the variable that holds the state value, and `setPage` is a function that can be used to update the state.

2. `const onLoadMore = () => { ... }`
   - This line declares a function called `onLoadMore`.
   - The function body contains the logic that will be executed when the function is called.

3. `setPage((prevPage) => prevPage + 4);` 📌
   - This line updates the state variable `page` using the `setPage` function.
   - The `setPage` function takes a new value or a function that calculates the new value based on the previous state.
   - In this case, it uses a function `(prevPage) => prevPage + 4` to calculate the new value.
   - The current value of `page` (referred to as `prevPage` inside the function) is incremented by 4, and the result becomes the new value of `page`.

In summary, the code initializes a state variable `page` with a value of 3. The `onLoadMore` function is responsible for updating the `page` state by incrementing it by 4 when called. This code is typically used in a React component to manage and update state in response to user interactions or other events.

**is it means that the current value of page which is 4 of default state is referred as the prevpage?**

Yes, that's correct. In the statement `setPage((prevPage) => prevPage + 4)`, the current value of `page` (which is initially set to 4) is referred to as `prevPage` inside the function. The name `prevPage` is just a parameter name used in the function to represent the previous state value of `page`. The function then increments `prevPage` by 4 and the resulting value becomes the new value of `page`.

## other methods for localstorage in react initial state

Yes, there are alternative approaches to initializing state with default values. Here are a few options:

1. Ternary Operator:
```javascript
const storedFavorites = JSON.parse(localStorage.getItem(LOCALS_STORAGE_KEY));
const initialFavorites = storedFavorites ? storedFavorites : [];

const [myFavorites, setMyFavorites] = useState(initialFavorites);
```

In this approach, you first retrieve the stored favorites from localStorage and assign them to `storedFavorites`. Then, you use a ternary operator to check if `storedFavorites` has a value. If it does, `initialFavorites` is set to `storedFavorites`, otherwise, it is set to an empty array. Finally, you initialize the state with `initialFavorites`.

2. Logical OR Operator:
```javascript
const storedFavorites = JSON.parse(localStorage.getItem(LOCALS_STORAGE_KEY));
const initialFavorites = storedFavorites || [];

const [myFavorites, setMyFavorites] = useState(initialFavorites);
```

Similar to the previous approach, you retrieve the stored favorites and assign them to `storedFavorites`. Then, you use the logical OR operator to check if `storedFavorites` is truthy. If it is, `initialFavorites` is set to `storedFavorites`, otherwise, it is set to an empty array. Finally, you initialize the state with `initialFavorites`.

3. Function Approach:
```javascript
const getInitialFavorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem(LOCALS_STORAGE_KEY));
  return storedFavorites || [];
};

const [myFavorites, setMyFavorites] = useState(getInitialFavorites());
```

In this approach, you define a function `getInitialFavorites` that retrieves the stored favorites and returns them if they exist, otherwise, it returns an empty array. Then, you initialize the state with the result of `getInitialFavorites()`.

These alternatives achieve the same result as the original code by checking if there are stored favorites in localStorage and using them as the initial state value, or falling back to an empty array if no stored favorites are found.

## Nullish coalescing operator (??)

```javascript
  // FAVOURITE PANEL - localstorage
  const LOCALS_STORAGE_KEY = "myFavorites";
  const [myFavorites, setMyFavorites] = useState(
    JSON.parse(localStorage.getItem(LOCALS_STORAGE_KEY)) ?? []
  );
```

It uses the nullish coalescing operator (`??`) to check if the parsed value from `localStorage.getItem(LOCALS_STORAGE_KEY)` is `null` or `undefined`. If it is, an empty array (`[]`) is used as the default value for the state.

This approach is concise and effective in handling the case where the stored favorites are not available or invalid. It retrieves the stored favorites from localStorage, parses them using `JSON.parse()`, and assigns them as the initial value for `myFavorites`. If the stored favorites are not found or cannot be parsed, an empty array is used as the default value.

**JavaScript Demo: Expressions - Nullish coalescing operator**

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

Syntax: `leftExpr ?? rightExpr`

```javascript
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

**syntax error**

```javascript
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
```

**correct syntax**

```javascript
(null || undefined) ?? "foo"; // returns "foo"
```

##  updateMyFavorites() - for add to my favorites function

> `find()` method returns the **first element** in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

**JavaScript Demo: Array.find()**

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12
```

```javascript
const updateMyFavorites = (news) => {
    const existingFavorite = myFavorites.find(
      (favorite) => favorite.name === news.name
    );
    if (!existingFavorite) {
  
      const newFavorite = { name: news.name, ...news };
      setMyFavorites([...myFavorites, newFavorite]);
    
      localStorage.setItem(
        LOCALS_STORAGE_KEY,
        JSON.stringify([...myFavorites, newFavorite])
      );
    } else {
      toast.success("Already added to favourites");
    }
  };
```

The code you provided defines an `updateMyFavorites` function that is responsible for updating the `myFavorites` state based on the `news` parameter. Here's a breakdown of the code:

1. It starts by searching for an existing favorite in the `myFavorites` array using the `Array.find()` method. It checks if there is already a favorite with the same name as the provided `news` object.

2. If `existingFavorite` is falsy (not found), it means the news item is not already a favorite. In this case, a new favorite object is created by spreading the properties of `news` and adding an additional `name` property. The new favorite is added to the `myFavorites` array using the spread operator `[...myFavorites, newFavorite]`. This creates a new array with all the existing favorites and the new favorite.

3. The `setMyFavorites` function is called with the updated array of favorites, which causes the component to re-render with the new state.

4. The updated `myFavorites` array is then stored in `localStorage` using `JSON.stringify()` to convert it to a string representation, and `localStorage.setItem()` is used to store the string in the specified `LOCALS_STORAGE_KEY`.

5. If `existingFavorite` is truthy, it means the news item is already a favorite, and a success message is shown using a toast notification (assuming `toast.success` is a function provided by a toast library).

Overall, this code updates the `myFavorites` state based on the provided `news` object, adds the new favorite to the array if it doesn't already exist, and stores the updated array in `localStorage`. If the news item is already a favorite, it displays a success message using a toast notification.

## updateMyFavourites - id is null in the localStorage database

**ORIGINAL - incorrect code**

```javascript
const updateMyFavourites = (news) => {
    console.log("updateMyFavourites:", news);
    const existingFavourites = myFavourites.find(
      (fav) => fav.name === news.name
    );

    if (!existingFavourites) {
      const newFavourite = setMyFavourites([
        ...myFavourites,
        { name: news.name, ...news },
      ]);

      localStorage.setItem(
        LOCALS_STORAGE_KEY,
        JSON.stringify([...myFavourites, newFavourite])
      );
    } else {
      alert("Already added!");
    }
  };
```

**/// -- Observe below code changes -- ///**

```javascript
// OTHER ALT //
setMyFavourites([...myFavourites, { name: news.name, ...news }]);

localStorage.setItem(LOCALS_STORAGE_KEY, JSON.stringify([...myFavourites, { name: news.name, ...news }]));


// BEFORE - incorrect code //
const newFavourite = setMyFavourites([...myFavourites, {name: news.name, ...news}]);

localStorage.setItem(LOCALS_STORAGE_KEY, JSON.stringify([...myFavourites, newFavourite])); // incorrect code at this point `newFavourite` append method


// AFTER //
const newFavourite = { name: news.name, ...news };
const updatedFavourites = [...myFavourites, newFavourite];
setMyFavourites(updatedFavourites);

localStorage.setItem(LOCALS_STORAGE_KEY, JSON.stringify(updatedFavourites));
```

**AFTER - correct code**

```javascript
const updateMyFavourites = (news) => {
  console.log("updateMyFavourites:", news);
  const existingFavourites = myFavourites.find((fav) => fav.name === news.name);

  if (!existingFavourites) {
    const newFavourite = { name: news.name, ...news };
    const updatedFavourites = [...myFavourites, newFavourite];
    setMyFavourites(updatedFavourites);

    localStorage.setItem(LOCALS_STORAGE_KEY, JSON.stringify(updatedFavourites));
  } else {
    alert("Already added!");
  }
};
```