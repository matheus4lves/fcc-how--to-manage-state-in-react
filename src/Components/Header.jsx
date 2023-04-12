import React from "react";

const Header = ({ className, count }) => {
  return (
    <>
      <h1 className={className}>Count is: {count}</h1>
    </>
  );
};

export default Header;
