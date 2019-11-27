import React, { useMemo, useEffect } from "react";
import { isEmpty } from "lodash";
import { Route, Router, Redirect, Switch } from "react-router";
import { connect } from "react-redux";
import { Spin, Menu, Icon } from "antd";
import stateContainer from "@/utils/stateContainer";
import { UserDispatcher } from "@/model/user/user.actions";
import bindActions from "@/utils/bindActions";
import userModel from "@/model/user";
import Center from "../Center/Center";
import { HomeRoot, MenuWrapper, GlobalStyle, Content, TopTitle } from "./style";

stateContainer.injectModel(userModel.model);
const { SubMenu } = Menu;

export interface Props {
  userModel: UserDispatcher;
  user: any;
}

function Home(props: Props) {
  const { userModel, user } = props;
  const hasLogin = !isEmpty(user);

  console.log(props);

  useEffect(() => {
    userModel.getMe();
  }, []);

  return (
    <HomeRoot>
      <GlobalStyle />
      <MenuWrapper>
        <TopTitle>PM管理</TopTitle>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </MenuWrapper>
      <Content>
        {hasLogin ? (
          <Switch>
            <Route path="/home" component={Center} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Spin tip="加载中..." />
        )}
      </Content>
    </HomeRoot>
  );
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatcherToProps = bindActions(userModel.actions);

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatcherToProps
)(Home);
