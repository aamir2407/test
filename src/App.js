import React, { useReducer, useState } from "react";
import Name from "./components/Name";

const App = () => {
  const [inputText, setInputText] = useState("");

  const reducer = (names, action) => {
    switch (action.type) {
      case "add-name":
        return [...names, newName(action.payload.name)];
      case "delete-name":
        return names.filter((name) => {
          return name.id !== action.payload.id;
        });
      default:
        return names;
    }
  };

  const newName = (name) => {
    return { id: Date.now(), name: name, complete: false };
  };

  const [name, dispatch] = useReducer(reducer, []);

  //console.log(inputText

  const onButtonClick = () => {
    dispatch({ type: "add-name", payload: { name: inputText } });
    setInputText("");
  };

  console.log(name);

  let displayName = name.map((nm) => {
    return <Name key={nm.id} name={nm} dispatch={dispatch} />;
  });

  return (
    <div className="text-center">
      <h1>MY first netlify deployment</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onButtonClick();
        }}
      >
        Add name
      </button>

      <div>{displayName}</div>
    </div>
  );
};

export default App;
