import React from "react";
import { Input, Select } from "antd";
import { FormWrapper, FiltersFormType } from "search-page";
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
      <FormItem label="ERP计划员">
        {getFieldDecorator("plannerName")(
          <Input placeholder="请输入计划员名称" />
        )}
      </FormItem>
      <FormItem label="物料名称">
        {getFieldDecorator("bomName")(<Input placeholder="请输入物料名称" />)}
      </FormItem>
      <FormItem label="物料编码">
        {getFieldDecorator("bomCode")(<Input placeholder="请输入物料编码" />)}
      </FormItem>
      {/* <FormItem label="用户状态">
        {getFieldDecorator("userName")(
          <Select placeholder="请选择用户状态">
            <Option value="0">正常</Option>
            <Option value="1">受限</Option>
            <Option value="2">冻结</Option>
          </Select>
        )}
      </FormItem> */}
    </FormWrapper>
  );
};
export default FiltersForm;
