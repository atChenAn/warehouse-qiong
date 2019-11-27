import React from "react";
import { Provider } from "react-redux";
import { Route, Router, Redirect, Switch } from "react-router";
import stateContainer from "@/utils/stateContainer";
import history from "@/utils/history";
import Home from "./app/Home/Home";
import Login from "./app/Login/Login";
const App: React.FC = () => {
  return (
    <Provider store={stateContainer._store}>
      {/* {hasLogin ? renderRouter() : <Login />} */}
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Home />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
