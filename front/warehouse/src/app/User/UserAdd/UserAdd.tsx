import React, { useCallback, useState, useEffect } from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import { RowProps } from "antd/lib/row";
import { ColProps } from "antd/lib/col";
import { FormComponentProps } from "antd/lib/form";
import { warehouse as API_WAREHOUSE } from "@/api";
import history from "@/utils/history";
import { RootLayout, OperateLayout } from "./styled";
import { PopNotification } from "@/utils/popup";

export interface Props extends FormComponentProps {}

const { Option } = Select;
const RowConf: RowProps = {
  gutter: 15
};
const ColConf: ColProps = {
  span: 24
};

async function submit(vals: any) {
  try {
    const { data } = await API_WAREHOUSE.user_add_post({
      data: { ...vals, userGroup: vals.userGroup.join(",") }
    });
    PopNotification.success("用户添加成功");
    history.push("/user/list");
  } catch (error) {
    PopNotification.error(`用户添加失败：${error.message}`);
  }
}

async function getUserGroupData(setFn) {
  try {
    const { data } = await API_WAREHOUSE.user_group_list_get();
    setFn(data);
  } catch (error) {
    PopNotification.error(`用户组信息获取失败：${error.message}`);
  }
}

function UserAdd(props: Props) {
  const {
    form: { getFieldDecorator, getFieldsValue, validateFields }
  } = props;

  const [userGroup, setUserGroup] = useState<Array<any>>([]);

  const onAdd = useCallback(() => {
    validateFields((err, values) => {
      if (!err) {
        submit(values);
      }
    });
  }, []);

  useEffect(() => {
    getUserGroupData(setUserGroup);
  }, []);

  return (
    <RootLayout>
      <Form>
        <Row {...RowConf}>
          <Col {...ColConf}>
            <Form.Item label="姓名">
              {getFieldDecorator("nickName", {
                rules: [
                  {
                    required: true,
                    message: "请输入姓名"
                  }
                ]
              })(<Input placeholder="请输入姓名" />)}
            </Form.Item>
          </Col>
          <Col {...ColConf}>
            <Form.Item label="用户名">
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "请输入用户名"
                  }
                ]
              })(<Input placeholder="请输入用户名" />)}
            </Form.Item>
          </Col>
          <Col {...ColConf}>
            <Form.Item label="密码">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "请输入密码"
                  }
                ]
              })(<Input placeholder="请输入密码" />)}
            </Form.Item>
          </Col>
          <Col {...ColConf}>
            <Form.Item label="用户组">
              {getFieldDecorator("userGroup", {
                rules: [
                  {
                    required: true,
                    message: "请选择用户组"
                  }
                ]
              })(
                <Select placeholder="请选择用户组" mode="multiple">
                  {userGroup.map(group => (
                    <Option
                      key={group.id}
                      disabled={+group.id === 1}
                      value={group.id}
                    >
                      {group.groupName}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col {...ColConf}>
            <Form.Item label="用户状态">
              {getFieldDecorator("status", {
                rules: [
                  {
                    required: true,
                    message: "请选择用户状态"
                  }
                ]
              })(
                <Select placeholder="请选择用户状态">
                  <Option value={0}>正常</Option>
                  {/* <Option value={1}>受限</Option> */}
                  <Option value={2}>冻结</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <OperateLayout>
          <Button onClick={onAdd} type="primary" block>
            确认添加
          </Button>
        </OperateLayout>
      </Form>
    </RootLayout>
  );
}

export default Form.create<Props>()(UserAdd);
