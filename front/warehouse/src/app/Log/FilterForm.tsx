import React from "react";
import { Input, Select } from "antd";
import { FormWrapper, FiltersFormType } from "search-page";
import { RangePicker } from "@/component/DatePicker";
const { Option } = Select;
// 包装容器，自定义栅格的时候使用
const { FormItem } = FormWrapper;

const FiltersForm: FiltersFormType = props => {
  const {
    form: { getFieldDecorator, getFieldValue }
  } = props;
  return (
    <FormWrapper {...props} simpleMode={{ rows: 1 }} storeKey="FormWrapperDemo">
      {/* 需要自定义栅格时请使用包装容器 */}
      <FormItem label="姓名">
        {getFieldDecorator("nickName")(<Input placeholder="请输入姓名" />)}
      </FormItem>
      {/* <FormItem label="用户名">
        {getFieldDecorator("userName")(<Input placeholder="请输入用户名" />)}
      </FormItem> */}
      <FormItem label="用户状态">
        {getFieldDecorator("userName")(
          <Select placeholder="请选择用户状态">
            <Option value="0">正常</Option>
            <Option value="1">受限</Option>
            <Option value="2">冻结</Option>
          </Select>
        )}
      </FormItem>
      <FormItem label="操作时间">
        {getFieldDecorator("createTime")(<RangePicker />)}
      </FormItem>
      {/* TODO 过滤的类型有待解决 */}
      {/* <FormItem label="用户组">
        {getFieldDecorator("groupId")(
          <Select
            placeholder="请选择用户组"
            mode="multiple"
            filterOption={(input, option) => {
              return option.props.children.indexOf(input) >= 0;
            }}
          >
            <Option value="1">系统管理员</Option>
            <Option value="2">PM</Option>
            <Option value="3">仓储管理员</Option>
            <Option value="4">其他人员</Option>
          </Select>
        )}
      </FormItem> */}
    </FormWrapper>
  );
};
export default FiltersForm;
