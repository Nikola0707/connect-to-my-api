import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import AddItem from "./AddItem";
import '../Styles/Navbar.css'

const NavBar = () => {
  return (
    <Router>
      <div>
        <ul className="d-flex">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/add-item">Add Item</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add-item">
            <AddItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
