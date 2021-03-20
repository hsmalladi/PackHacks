import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./App.sass";
import "./css/HomePage.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
