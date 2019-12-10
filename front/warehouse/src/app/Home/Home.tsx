import React, { useMemo, useEffect } from "react";
import { isEmpty } from "lodash";
import { Route, Router, Redirect, Switch } from "react-router";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import stateContainer from "@/utils/stateContainer";
import { UserDispatcher } from "@/model/user/user.actions";
import bindActions from "@/utils/bindActions";
import userModel from "@/model/user";
import {
  HomeRoot,
  MenuWrapper,
  GlobalStyle,
  Content,
  TopTitle,
  Spin,
  ContentInner
} from "./style";
import { renderMenu, renderRouter } from "./menu.conf";

stateContainer.injectModel(userModel.model);

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
        {renderMenu()}
      </MenuWrapper>
      <React.Suspense fallback={<Spin tip="加载中..." />}>
        <Content>
          <ContentInner>
            {hasLogin ? (
              <Switch>
                {renderRouter()}
                <Redirect to="/plan/list" />
              </Switch>
            ) : (
              <Spin tip="加载中..." />
            )}
          </ContentInner>
        </Content>
      </React.Suspense>
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
