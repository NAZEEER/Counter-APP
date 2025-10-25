import React, { useState } from "react";

const Header = () => {
  let result = document.querySelector("#result");

  const [count, SetCount] = useState(0);

  function increase() {
    result = SetCount(count + 1);
  }
  function decrease() {
    SetCount(count - 1);
  }

  return (
    <div id="container">
      <div>
        <h1>Counter app</h1>
        <h1 className="result">{count}</h1>
        <div class="button">
          <button id="button1" className="increase" onClick={increase}>
            +
          </button>
          <button id="button1" className="decrease" onClick={decrease}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
