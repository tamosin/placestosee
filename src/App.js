import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocationPage from "./components/LocationPage";

function App() {
  return (
    <main>
      <Router basename="/locstosee">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/loc/:id">
            <LocationPage />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
