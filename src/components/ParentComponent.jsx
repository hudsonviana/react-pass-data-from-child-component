import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState(null);

  // Callback function to receive data from child
  const receiveDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child component: {dataFromChild}</p>
      <ChildComponent sendDataToParent={receiveDataFromChild} />
    </div>
  );
}

export default ParentComponent;
