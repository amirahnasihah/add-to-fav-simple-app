## Cannot read properties of undefined (reading `toLowerCase`)

> error at: DisplayResults.js

The difference between the two code snippets lies in the handling of potential undefined values in the properties being searched.

1. In the first code snippet:

```javascript
return propertiesToSearch.some((property) =>
  property.toLowerCase().includes(keywordLowerCase)
);
```

This code directly calls the `toLowerCase` method on `property` without checking if it is defined or not. If `property` is undefined, it will result in a "Cannot read properties of undefined" error.

2. In the second code snippet:

```javascript
return propertiesToSearch.some(
  (property) =>
    property && property.toLowerCase().includes(keywordLowerCase)
);
```

This code includes an additional check `property &&` before calling `toLowerCase`. This check ensures that `property` is not undefined before applying the `toLowerCase` method. If `property` is undefined, the condition `property &&` will evaluate to false, and the `includes` method will not be called, preventing any potential error.

The second code snippet provides a safeguard against undefined properties, ensuring that the `toLowerCase` method is only called when the property is defined. It helps prevent the "Cannot read properties of undefined" error from occurring.