import React, { useMemo } from "react";
import { Route, Router, Redirect, Switch } from "react-router";
import { createBrowserHistory, History } from "history";
import dva from "dva";
import userModel from "@/model/user/user.model";
import Login from "./app/Login/Login";
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
  const hasLogin = false;
  return hasLogin ? renderRouter(history) : <Login />;
};

export default App;
