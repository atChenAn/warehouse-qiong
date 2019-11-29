import React, { useCallback } from "react";
import { ContentProps } from "search-page";
import { Table, Button, Icon } from "antd";
import OperaterBtns from "@/component/OperaterBtns";
import { UserItem } from "@/type/UserItem";
import renderUtils from "./renderStatus.conf";
import { PopNotification } from "@/utils/popup";
import { ButtonGroupStyle } from "@/component/GlobalStyle/GlobalStyle";

const { Column } = Table;
const { renderStatus } = renderUtils;

const Content = ({ data, forceUpdate, loading, filters }: ContentProps) => {
  const onImport = useCallback(() => {
    PopNotification.success("导入成功!");
  }, []);

  const onDownload = useCallback(() => {
    window.open("https://www.baidu.com");
  }, []);

  return (
    <>
      <ButtonGroupStyle>
        <Button type="primary" onClick={onImport}>
          <Icon type="import" />
          批量导入
        </Button>
        <Button onClick={onDownload}>
          <Icon type="download" />
          模板下载
        </Button>
      </ButtonGroupStyle>
      <Table<UserItem>
        dataSource={data}
        rowKey="id"
        bordered
        pagination={false}
      >
        <Column
          width="25%"
          key="userName"
          title="用户名"
          dataIndex="username"
        />
        <Column width="20%" key="nickName" title="姓名" dataIndex="nickName" />
        <Column
          width="20%"
          key="userGroup"
          title="用户组"
          dataIndex="groupName"
        />
        <Column<UserItem>
          width="15%"
          key="userState"
          title="账户状态"
          render={(_, record) => renderStatus(record)}
        />
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
    </>
  );
};

export default Content;
