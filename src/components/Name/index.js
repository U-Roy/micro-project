import React, { useState } from "react";
import "./style.css";

const Name = () => {
  const [name, setname] = useState(" ");

  const namechange = (e) => {
    if (e.target.value.length === 0) {
      document.getElementById("show-on-click").style.visibility = "hidden";
    }
    setname(e.target.value);
  };
  const showAlert = () => {
    // alert(name);
    document.getElementById("show-on-click").style.visibility = "visible";
  };

  return (
    <div className="main">
      <input
        type="text"
        id="name"
        className="count-value"
        onChange={namechange}
      />
      <button type="submit" onClick={showAlert}>
        Submit
      </button>
      <div className="show-name">
        <h3>Hello {name}</h3>
      </div>
      <div className="show-name" id="show-on-click">
        <h3>Hello {name}</h3>
      </div>
    </div>
  );
};

export default Name;
