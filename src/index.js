import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import PrivateRoutes from "./privateRoutes/privateRoutes.js";
import ReactDOM from "react-dom";
import LocalStorageServices from "./services/LocalStorageServices";

function App() {
  const [role, setRole] = useState(LocalStorageServices.getRole());

  return (
    <div>
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
export default App;
