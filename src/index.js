import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login/Login.js";
import Regis from "./Regis/Regis.js";
import Todolist from "./Todolist/Todolist.js"
import 'semantic-ui-css/semantic.min.css'


class Path extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={Regis} />
          <Route exact path="/todolist" component={Todolist} />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<Path />, document.getElementById("container"));
