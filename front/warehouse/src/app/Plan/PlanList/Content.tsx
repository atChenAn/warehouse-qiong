import React from "react";
import { ContentProps } from "search-page";
import { Table, Button } from "antd";
import OperaterBtns from "@/component/OperaterBtns";

const { Column } = Table;

const Content = ({ data, forceUpdate, loading, filters }: ContentProps) => {
  return (
    <Table dataSource={data} rowKey="id" bordered pagination={false}>
      <Column width="20%" key="userName" title="用户名" dataIndex="username" />
      <Column width="20%" key="nickName" title="姓名" dataIndex="nickName" />
      <Column
        width="20%"
        key="userGroup"
        title="用户组"
        dataIndex="groupName"
      />
      <Column width="20%" key="userState" title="账户状态" dataIndex="status" />
      <Column
        width="20%"
        key="operate"
        title="操作"
        render={(_, record) => (
          <OperaterBtns>
            <Button type="link">修改</Button>
            <Button type="link">禁用</Button>
            <Button type="link">删除</Button>
          </OperaterBtns>
        )}
      />
    </Table>
  );
};

export default Content;
