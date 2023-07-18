# Feedback

1. If the user is already logged in, and they try to go to the login link then they should be redirected to the homepage, not stay on the login page. Also, if a user is logged out, then navigating to home should not be allowed, but in your case it is, so you should fix that.

> ref: [Learn how to redirect a user from a restricted page to the login page and again redirect to the original page after logging in](https://www.makeuseof.com/redirect-user-after-login-re)

explaine below code in simple plain english for beginner:

```javascript
useEffect(() => {
const checkLoginStatus = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
    navigate("/home", { replace: true });
    }
};

checkLoginStatus();
}, [navigate]);
```

Certainly! Let's break down the code step by step in simple terms:

1. We have an `useEffect` block, which is a special function in React that is used to perform side effects in functional components.

2. Inside the `useEffect`, there is a function called `checkLoginStatus`. This function checks the login status of the user.

3. In the `checkLoginStatus` function, we retrieve the value of the "isLoggedIn" key from the browser's local storage using `localStorage.getItem("isLoggedIn")`.

4. We then check if the `isLoggedIn` value is truthy, meaning the user is already logged in.

5. If the user is logged in (`isLoggedIn` is truthy), we navigate the user to the "/home" page using `navigate("/home", { replace: true })`. The `{ replace: true }` part indicates that we want to replace the current page in the browser history with the "/home" page, rather than adding a new entry to the history.

6. Finally, outside the `checkLoginStatus` function, we immediately invoke `checkLoginStatus()` to run the login status check when the component is rendered.

7. The `useEffect` hook also takes an array of dependencies, `[navigate]`, as the second parameter. This means that the effect will be triggered whenever the value of `navigate` changes. In this case, the effect is triggered if the `navigate` function is redefined or if a new `navigate` function is provided.

To summarize, this code is an `useEffect` block that checks the login status of the user when the component is rendered. If the user is already logged in, it navigates them to the "/home" page. The effect is triggered whenever the `navigate` function changes.


2. The logout functionality does not seem to work properly as well, when logging out no data is signifying that the user is logged in is removed or signified that the user is logged out.

3. The search functionality does not work as expected, also after searching the load more functionality does not work anymore, so you should look into that and try to fix it.🤔