import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import AboutUs from "./pages/AboutUs";
import Classes from "./pages/Classes";
import Clubs from "./pages/Clubs";
import Interests from "./pages/Interests";
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
        <Route exact path="/classes" component={Classes} />
        <Route exact path="/clubs" component={Clubs} />
        <Route exact path="/interests" component={Interests} />
      </Switch>
    </Router>
  );
}

export default App;
