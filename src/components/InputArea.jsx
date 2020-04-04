import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.inputClick} value={props.inputList} type="text" />
      <button onClick={props.displayList}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
