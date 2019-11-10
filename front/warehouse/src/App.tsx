import React, { useMemo } from "react";
import { Route, Router, Redirect, Switch } from "react-router";
import { createBrowserHistory, History } from "history";
import Login from "./app/Login/Login";
import "./App.css";
import Home from "./app/Home/Home";

function renderRouter(history: History<any>) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

const App: React.FC = () => {
  const history = useMemo(() => createBrowserHistory(), []);
  const hasLogin = true;
  return hasLogin ? renderRouter(history) : <Login />;
};

export default App;
