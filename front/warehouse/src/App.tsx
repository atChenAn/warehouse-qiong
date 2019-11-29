import React from "react";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { Route, Router, Redirect, Switch } from "react-router";
import moment from 'moment';
import stateContainer from "@/utils/stateContainer";
import history from "@/utils/history";
import Home from "./app/Home/Home";
import Login from "./app/Login/Login";

import 'moment/locale/zh-cn';

moment.locale('en');

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={stateContainer._store}>
        {/* {hasLogin ? renderRouter() : <Login />} */}
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <Home />
          </Switch>
        </Router>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
