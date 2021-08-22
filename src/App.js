import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CocktailDetails from "./CocktailDetails";
import FavoriteCocktails from "./FavoriteCocktails";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cocktails/:id">
              <CocktailDetails />
            </Route>
            <Route exact path="/favorites">
              <FavoriteCocktails />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
