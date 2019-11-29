import React, { useCallback } from "react";
import { ContentProps } from "search-page";
import { Table, Button, Icon } from "antd";
import { unix2Time } from "@/utils/commonUtils";
import { LogItem } from "@/type/LogItem";
import { AutoText } from "@/component/AutoText";
import styled from "styled-components";
import renderUtils from "./renderStatus.conf";
import { PopNotification } from "@/utils/popup";

const { Column } = Table;
const { renderOperateType, renderOperateStatus } = renderUtils;
const ButtonGroup = styled.div`
  margin-bottom: 10px;
`;

const Content = ({ data, forceUpdate, loading, filters }: ContentProps) => {
  const onClear = useCallback(() => {
    PopNotification.success("日志清除成功");
  }, []);

  return (
    <>
      <ButtonGroup>
        <Button type="primary" onClick={onClear}>
          <Icon type="delete" />
          清除日志
        </Button>
      </ButtonGroup>
      <Table dataSource={data} rowKey="id" bordered pagination={false}>
        <Column
          width="15%"
          key="userName"
          title="用户名"
          dataIndex="username"
        />
        <Column width="15%" key="nickName" title="姓名" dataIndex="nickName" />
        <Column
          width="20%"
          key="userState"
          title="操作时间"
          // TODO record.createtime
          render={(_, record: LogItem) => unix2Time(1)}
        />
        <Column
          width="10%"
          key="userState"
          title="操作类型"
          render={(_, record) => renderOperateType(record)}
        />
        <Column
          width="10%"
          key="userState"
          title="操作状态"
          render={(_, record) => renderOperateStatus(record)}
        />
        <Column
          width="30%"
          key="description"
          title="详细信息"
          dataIndex="description"
          render={(_, record: LogItem) => (
            <AutoText>{record.description}</AutoText>
          )}
        />
      </Table>
    </>
  );
};

export default Content;
