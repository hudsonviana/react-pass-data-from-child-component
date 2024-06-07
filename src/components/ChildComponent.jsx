import React, { useState } from "react";

function ChildComponent({ sendDataToParent }) {
  const [childData, setChildData] = useState("");

  const sendDataToParentHandler = () => {
    // Call the callback function provided by the parent
    sendDataToParent(childData);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={childData}
        onChange={(e) => setChildData(e.target.value)}
      />
      <button onClick={sendDataToParentHandler}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
