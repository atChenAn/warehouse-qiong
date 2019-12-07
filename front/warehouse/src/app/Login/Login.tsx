import React, { useCallback } from "react";
import { Button, Form, Input, Icon } from "antd";
import stateContainer from "@/utils/stateContainer";
import userModel from "@/model/user";
import { UserDispatcher } from "@/model/user/user.actions";
import bindActions from "@/utils/bindActions";
import history from "@/utils/history";
import { connect } from "react-redux";
import {
  LoginWrapper,
  LoginContent,
  SystemTitle,
  FormWrapper,
  Placeholder
} from "./Style";
import { FormComponentProps } from "antd/lib/form/Form";
import { RouterProps } from "react-router";

stateContainer.injectModel(userModel.model);

export interface Props extends FormComponentProps<any> {
  userModel: UserDispatcher;
}

function Login(props: Props) {
  const {
    form: { getFieldDecorator, validateFields, getFieldsValue },
    userModel
  } = props;

  const onLogin = useCallback(() => {
    validateFields(error => {
      if (!error) {
        const data = getFieldsValue();
        console.log(data);
        userModel.login({
          data,
          callback: () => {
            history.push("/home");
          }
        });
      }
    });
  }, []);

  return (
    <LoginWrapper>
      <LoginContent>
        <SystemTitle>库存计划管理系统</SystemTitle>
        <FormWrapper>
          <Form>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请输入您的用户名" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入您的密码" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="请输入密码"
                />
              )}
            </Form.Item>
            <Button onClick={onLogin} type="primary" block>
              登陆
            </Button>
          </Form>
        </FormWrapper>
        <Placeholder />
      </LoginContent>
    </LoginWrapper>
  );
}

const mapStateToProps = ({ user }) => ({
  user
});
const mapDispatcherToProps = bindActions(userModel.actions);

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(Form.create()(Login));
