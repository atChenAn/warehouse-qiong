import React from "react";
import { Form, Input, Row, Col, Button, Icon } from "antd";
import { GroupTitle, BtnGroup } from "@/component/GlobalStyle/GlobalStyle";
import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router";
import Plans from "./Plans";

export interface Props extends RouteComponentProps, FormComponentProps<any> {
  data: any;
}

const { Item: FormItem } = Form;
const RowConf = {
  gutter: 15
};
const ColConf = {
  span: 8
};

function PlanAdd(props: Props) {
  const { data, form, history } = props;
  const { getFieldDecorator, getFieldsValue, validateFieldsAndScroll } = form;

  console.log(props);

  const onBack = () => {
    history.goBack();
  };

  return (
    <Form>
      <GroupTitle>基本信息</GroupTitle>
      <Row {...RowConf}>
        <Col {...ColConf}>
          <FormItem label="物料编码">
            {getFieldDecorator("bomCode", {
              rules: [
                {
                  required: true,
                  message: "物料编码不能为空"
                }
              ]
            })(<Input placeholder="请输入物料编码" />)}
          </FormItem>
        </Col>
        <Col {...ColConf}>
          <FormItem label="ERP物料名称">
            {getFieldDecorator("bomName", {
              rules: [
                {
                  required: true,
                  message: "ERP物料名称不能为空"
                }
              ]
            })(<Input placeholder="请输入ERP物料名称" />)}
          </FormItem>
        </Col>
        <Col {...ColConf}>
          <FormItem label="ERP计划员">
            {getFieldDecorator("plannerName", {
              rules: [
                {
                  required: true,
                  message: "请输入ERP计划员名称不能为空"
                }
              ]
            })(<Input placeholder="请输入ERP计划员名称" />)}
          </FormItem>
        </Col>
      </Row>
      <GroupTitle>
        装配信息
        <Button type="primary" size="small" style={{ marginLeft: 10 }}>
          添加
          <Icon type="plus" />
        </Button>
      </GroupTitle>
      {getFieldDecorator("plans", {
        rules: [
          {
            required: true,
            message: "请输入ERP计划员名称不能为空"
          }
        ]
      })(<Plans />)}

      <GroupTitle>库存与需求</GroupTitle>
      <Row {...RowConf}>
        <Col {...ColConf}>
          <FormItem label="装配需求">
            <Input placeholder="请输入装配需求" disabled />
          </FormItem>
        </Col>
        <Col {...ColConf}>
          <FormItem label="库存">
            {getFieldDecorator("repertory", {
              initialValue: 0
            })(<Input placeholder="请输入库存" />)}
          </FormItem>
        </Col>
        <Col {...ColConf}>
          <FormItem label="差值">
            <Input placeholder="请输入差值" disabled />
          </FormItem>
        </Col>
        <Col {...ColConf}>
          <FormItem label="计生需求">
            {getFieldDecorator("repertory", {
              initialValue: 0
            })(<Input placeholder="请输入计生需求" />)}
          </FormItem>
        </Col>
      </Row>
      <BtnGroup>
        <Button type="primary" size="large">
          <Icon type="check" />
          提交
        </Button>
        <Button onClick={onBack} type="dashed" size="large">
          <Icon type="rollback" />
          返回
        </Button>
      </BtnGroup>
    </Form>
  );
}

export default Form.create()(PlanAdd);
