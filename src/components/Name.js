import React from "react";

const Name = ({ name, dispatch }) => {
  const onDelClick = () => {
    dispatch({ type: "delete-name", payload: { id: name.id } });
  };

  return (
    <div>
      <span>{name.name}</span>
      <button
        onClick={() => {
          onDelClick();
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Name;
