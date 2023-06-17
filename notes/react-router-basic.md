# Basic setup for React Router DOM V6

## install `npm install react-router-dom`

important to install `npm install react-router-dom` before running

## My Quick Simple Setup for React Router DOM

### Adding a Router in `index.js` + `App.js`

1️⃣ **index.js**

```javascript
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add BrowserRouter

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    // Wrap App.js within BrowserRouter
	<BrowserRouter> 
		<App />
	</BrowserRouter>
);
```

2️⃣ **App.js**

```javascript
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

export default function App(props) {
	return (
		<div>
			<h1>Hello</h1>
            
            {/* Wrap Routes with Route + attributes path, element + props */}
			<Routes>
				<Route path="/" {...props} exact element={<LoginPage />} />
				<Route path="/home" {...props} element={<Home />} />
			</Routes>

		</div>
	);
}
```

## React Router DOM V6 Way of Setup

All you need in the src folder are `contacts.js`, `main.jsx`, and `index.css`. You can delete anything else (like `App.js` and `assets`, etc.).

src
├── contacts.js
├── index.css
└── main.jsx

### Adding a Router

First, create a `Browser Router` and configure our first route. This will enable client side routing for our web app.

The `index.js` file is the entry point. Open it up and we'll put React Router on the page.

👉 Create and render a browser router in `index.js`

**index.js**

```javascript
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // add createBrowserRouter, RouterProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

This first route is what we often call the "root route" since the rest of our routes will render inside of it. It will serve as the root layout of the UI, we'll have nested layouts as we get farther along.

### The Root Route

Let's add the global layout for this app.

👉 Create `src/routes` and `src/routes/root.jsx` | `App.js`

```javascript
export default function App() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>

        {/* Other code logic here... */}
      </div>
    </>
  );
}
```

👉 Set `<App>` as the root route's `element` in `index.js`

**index.js**

```javascript
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // add createBrowserRouter, RouterProvider
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // add App component as root element
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

### Handling Not Found Errors (404 Not Found)

👉 Create an error page component (`error-page.js`)

```javascript
import { useRouteError } from "react-router-dom"; // add useRouteError

export default function ErrorPage() {
    const error = useRouteError();

    console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```

👉 Set the `<ErrorPage>` as the `errorElement` on the root route

**index.js**

```javascript
/* previous imports */
import ErrorPage from "./error-page"; // import the error page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // add ErrorPage as error element
  },
])

/* existing code */
```

### The Item Route UI (different components/page)

👉 Create the item route module

**Item.js**

👉 Add the Item.js component UI

```javascript
export default function Contact() {
  /* all codes here... */
};
```

Now that we've got a component, let's hook it up to a new route.

👉 Import the contact component and create a new route

**index.js**

```javascript
/* previous imports */
import Item from "./routes/item"; // import the Item function component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "items/:itemId",
    element: <Item />, // add the Item as a element of a new path route
  },
]);

/* existing code */
```

Now if we click one of the links or visit `/items/1` we get our new component!

However, it's not inside of our root @ App.js layout 😠

### Nested Routes

We want the `item` component to render inside of the `<App>` layout like this.

