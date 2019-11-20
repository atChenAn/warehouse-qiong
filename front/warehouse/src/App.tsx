import React from "react";
import { Route, Router, Redirect, Switch } from "react-router";
import { Provider } from "react-redux";
import stateContainer from "@/utils/stateContainer";

import userModel from "@/model/user/user.model";
import Login from "./app/Login/Login";
import Home from "./app/Home/Home";

stateContainer.injectModel(userModel);

function renderRouter() {
  return (
    <Router history={stateContainer._history}>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

const App: React.FC = () => {
  const hasLogin = false;
  return (
    <Provider store={stateContainer._store}>
      {hasLogin ? renderRouter() : <Login />}
    </Provider>
  );
};

export default App;
