import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {
  const [inputText, getInput] = useState("");
  const [listText, setList] = useState([]);

  function clickInput(event) {
    getInput(event.target.value);
  }

  function listDisplay() {
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
      <InputArea
        inputClick={clickInput}
        inputList={inputText}
        displayList={listDisplay}
      />
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
