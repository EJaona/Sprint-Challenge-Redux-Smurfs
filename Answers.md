Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do?
   1a) The store is where the data that is shared throughout the whole application lives. It's put into a single location, making it easier to pass to specific component needing it, without passing down props through multiple components.

   1b) A reducer is the brains of the brains of the operation, it is the function that makes the changes to the single shared state.

   1c) An action is a type of 'change' that gets sent to the reducer. The reducer looks at the type of change and makes changes to the state according to the action.

2. Why is the store known as a 'single source of truth' in a redux application?

   2. Because it is set up to me the only location that we store the data that is needed throughout the application

3. What is the difference between Application state and Component state?
   3a) Application state is state that is needed by multiple components

   3b) Component state is state that is use only by the component that stores it.

4. When would be a good time to use one over the other?

   4a) You would use application state if multiple components are reliant on the state, and component state if only the housing component is relying on the state

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

   5. It is a middleware that lets you call action creators that return a function instead of an single action object.
      It allows us to conditionally choose an action object to call based on the outcome of our request.
