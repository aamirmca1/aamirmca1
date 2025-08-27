import React, { useState } from "react";

function AddItem() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleButtonClick} style={{ padding: "5px 10px" }}>
        Submit
      </button>
    </div>
  );
}

export default AddItem;
