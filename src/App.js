import "./styles.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Route, Switch, useHistory } from "react-router-dom";
import { Products } from "./Products";
import { Home } from "./Home";

export default function App() {
  const [count, SetCount] = useState(0);
  const history = useHistory();

  return (
    <div>
      <div className="Full">
        <AppBar position="sticky">
          <Toolbar>
            <Button onClick={() => history.push("/")} color="inherit">
              HOME
            </Button>
            <Button onClick={() => history.push("/products")} color="inherit">
              Products
            </Button>
            <Button color="inherit">Mycart🛒{count}</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products count={count} SetCount={SetCount} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
