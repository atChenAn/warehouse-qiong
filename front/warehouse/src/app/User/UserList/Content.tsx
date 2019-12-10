import React, { useCallback } from "react";
import { ContentProps } from "search-page";
import { Table, Button, Icon, Popconfirm } from "antd";
import OperaterBtns from "@/component/OperaterBtns";
import { UserItem } from "@/type/UserItem";
import renderUtils from "./renderStatus.conf";
import { PopNotification } from "@/utils/popup";
import { ButtonGroupStyle } from "@/component/GlobalStyle/GlobalStyle";
import { warehouse } from "@/api";

const { Column } = Table;
const { renderStatus } = renderUtils;

const Content = ({ data, forceUpdate, loading, filters }: ContentProps) => {
  const onImport = useCallback(() => {
    PopNotification.success("导入成功!");
  }, []);

  const onDownload = useCallback(() => {
    window.open("https://www.baidu.com");
  }, []);

  const onEdit = (id: string) => {
    console.log(id);
  };
  const onSwitch = (record: UserItem) => {
    warehouse
      .user_update_id_patch({
        path: { id: record.id },
        data: { status: +record.status === 0 ? 2 : 0 }
      })
      .then(data => {
        forceUpdate();
      });
  };
  const onDelete = (id: string) => {
    try {
      warehouse
        .user_delete_id_delete({
          path: { id }
        })
        .then(data => {
          PopNotification.success("操作成功");
          forceUpdate();
        });
    } catch (error) {
      PopNotification.error(`操作失败：${error.message}`);
    }
  };

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
        <Column<UserItem>
          width="20%"
          key="operate"
          title="操作"
          render={(_, record) => (
            <OperaterBtns>
              {/* <Button onClick={() => onEdit(record.id)} type="link">
                修改
              </Button> */}
              <Button onClick={() => onSwitch(record)} type="link">
                {record.status === 0 ? "禁用" : "启用"}
              </Button>
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() => onDelete(record.id)}
                okText="确定"
                cancelText="取消"
              >
                <Button type="link">删除</Button>
              </Popconfirm>
            </OperaterBtns>
          )}
        />
      </Table>
    </>
  );
};

export default Content;
