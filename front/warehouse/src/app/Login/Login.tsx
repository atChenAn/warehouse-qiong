import React, { useCallback } from "react";
import { Button, Form, Input, Icon } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  LoginWrapper,
  LoginContent,
  SystemTitle,
  FormWrapper,
  Placeholder
} from "./Style";
import { FormComponentProps } from "antd/lib/form/Form";

export interface Props extends FormComponentProps<any> {}

function Login(props: Props) {
  const {
    form: { getFieldDecorator, validateFields, getFieldsValue }
  } = props;

  const onLogin = useCallback(() => {
    validateFields(error => {
      if (!error) {
        console.log(getFieldsValue());
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

export default Form.create()(Login);
