import React, { useState } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import PrivateRoutes from "./privateRoutes/privateRoutes.js";

function App() {
  const [role, setRole] = useState("guest");

  return (
    <div>
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
