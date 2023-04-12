import React, { useReducer } from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";

/* Because the reducer function takes state (count) as an argument, you can declare
 it outside of your component. This decreases the indentation level and can make
 your code easier to read. The reducer function should return the next state,
 which can be an object, a single value, an array... */
const counterReducer = (count, action) => {
  switch (action.type) {
    case "ADDED_1":
      return count + 1;
    case "ADDED_10":
      return count + 10;
    case "SUBTRACTED_1":
      if (count > 0) return count - 1;
      return count;
    case "SUBTRACTED_10":
      if (count >= 10) return count - 10;
      return count;
    case "RESET":
      return (count = 0);
    default:
      return 0;
  }
};

const App = () => {
  // Call the reducer to manage the component's state
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="counter">
      <Header className="counter__heading" count={count} />
      <div className="counter__container">
        {/* Paste tense here because you should dispatch what the user just did.
         Note that you must pass an object to dispatch. */}
        <Button className="counter__btn" onClick={() => dispatch({ type: "ADDED_1" })}>
          Add 1
        </Button>
        <Button className="counter__btn" onClick={() => dispatch({ type: "SUBTRACTED_1" })}>
          Decrease 1
        </Button>
        <Button className="counter__btn" onClick={() => dispatch({ type: "ADDED_10" })}>
          Add 10
        </Button>
        <Button className="counter__btn" onClick={() => dispatch({ type: "SUBTRACTED_10" })}>
          Decrease 10
        </Button>
        <Button className="counter__btn" onClick={() => dispatch({ type: "RESET" })}>
          Reset count
        </Button>
      </div>
    </div>
  );
};

export default App;
