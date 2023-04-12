import React, { useState } from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  // Increase handlers
  const handleIncreaseByOne = () => setCount(prevCount => prevCount + 1);

  const handleIncreaseByTen = () => setCount(prevCount => prevCount + 10);

  // Decrease handlers
  const handleDecreaseByOne = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleDecreaseByTen = () => {
    if (count >= 10) {
      setCount(prevCount => prevCount - 10);
    }
  };

  // Reset handler
  const handleReset = () => setCount(0);

  return (
    <div className="counter">
      <Header className="counter__heading" count={count} />
      <div className="counter__container">
        <Button className="counter__btn" onClick={handleIncreaseByOne}>
          Add 1
        </Button>
        <Button className="counter__btn" onClick={handleDecreaseByOne}>
          Decrease 1
        </Button>
        <Button className="counter__btn" onClick={handleIncreaseByTen}>
          Add 10
        </Button>
        <Button className="counter__btn" onClick={handleDecreaseByTen}>
          Decrease 10
        </Button>
        <Button className="counter__btn" onClick={handleReset}>
          Reset count
        </Button>
      </div>
    </div>
  );
};

export default App;
