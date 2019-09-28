# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is an open-source javascript library that is primarily used for building single page applications and user interfaces. React's use of a shadow DOM allows developers to build fast, scalable and dynamic pages, while React's JSX syntax, gives developers a way of writing Javascript, HTML and CSS all inline in the same files, giving us more control and reusability of our code. The library was developed to give the facebook team a way to render nearly infinite layers of data to the browser in a more efficient method than simply accessing the traditional DOM in the browser.

1. What does it mean to think in react?

Thinking in React has everything to do with planning the structure of your App before coding, so that you can map out all of the components you will need to build your program. Once the structure is in place, you can build your components and add them to your App.js file to render everything to the page. React uses a declarative style of programming in which the developer can control flow and state by declaring what something should look like, as opposed to an imperative style, which would control flow and state by providing step by step directions of how it should look. It's sort of like delegating or abstracting away how the state of an object will be implemented. While you have less control over how things will occur, it's much easier to debug when using a declarative style of programming.

1. Describe state.

State is an object that determines how a component will render on the page. The state of a component can be updated, therefore making components dynamic and interactive. One of most important concepts to thinking in React is determining the state of your components and how that state will need to change depending on user interaction or condition changes.

1. Describe props.

Props are shorthand for properties and allow components to talk to each other and share data. Props pass from parent to child and are immutable. The main idea behind using props is that components can be used in many different places throughout your page.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is when an operation or function modifies the state of a variable outside of it's local scope. A side effect is basically something that unintentionally changes something somewhere else. React has a built in hook called useEffect that allows developers to sync effects to state and prop changes. This would usually be done by adding an empty array at the end of useEffect to make sure the effect only happens once at the initial rendering of the page, or by syncing it directly with a prop or state by adding variables inside the empty array. Then the effect would only happen once, then again every time the state of the variables change.
