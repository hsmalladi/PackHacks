import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import AboutUs from "./pages/AboutUs";
import "./App.sass";
import "./css/HomePage.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Navbar.css';
import NavBar from "./pages/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
