import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
