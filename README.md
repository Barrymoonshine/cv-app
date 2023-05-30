# CV generator

[Live demo](TBC)

## Summary

The CV-generator allows users to create and edit their own CV using the provided format, this app was built using HTML, CSS and React Class based components.

## Key learning points

**React**

- Using class based components to create and render JSX elements on the page
- Understanding the implications of immutability when updating state, this was particularly challenging when updating an array of objects as first a copy of the array must be made, second the object or property updated and third the updated array used to replace the original array saved in sate
- Using props to pass callback functions to a child component which in turn are used to update the state in a parent component
- The need for nested arrow functions when passing additional parameters to callback functions between components
- Conditional rendering, and using the && logical operator to help condense code

## Future features

- Display buttons on mouse over of parent element
- Download option
