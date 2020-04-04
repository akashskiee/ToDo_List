import React, { useState } from "react";
import List from "./List";
function App() {
  const [inputText, getInput] = useState("");
  const [listText, setList] = useState([]);

  function inputClick(event) {
    getInput(event.target.value);
  }

  function displayList() {
    if (inputText !== "") {
      setList(prevValue => {
        return [...prevValue, inputText];
      });
      getInput("");
    }
  }
  function deleteItem(id) {
    setList(prevValue => {
      return prevValue.filter((text, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputClick} value={inputText} type="text" />
        <button onClick={displayList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listText.map((todo, index) => {
            return (
              <List text={todo} key={index} id={index} onChecked={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
