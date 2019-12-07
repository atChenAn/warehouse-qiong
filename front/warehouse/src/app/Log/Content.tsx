import React, { useCallback } from "react";
import { ContentProps } from "search-page";
import { Table, Button, Icon } from "antd";
import { unix2Time } from "@/utils/commonUtils";
import { LogItem } from "@/type/LogItem";
import { AutoText } from "@/component/AutoText";
import { PopNotification } from "@/utils/popup";
import { ButtonGroupStyle } from "@/component/GlobalStyle/GlobalStyle";
import renderUtils from "./renderStatus.conf";

const { Column } = Table;
const { renderOperateType, renderOperateStatus } = renderUtils;

const Content = ({ data, forceUpdate, loading, filters }: ContentProps) => {
  const onClear = useCallback(() => {
    PopNotification.success("日志清除成功");
  }, []);

  return (
    <>
      <ButtonGroupStyle>
        <Button type="primary" onClick={onClear}>
          <Icon type="delete" />
          清除日志
        </Button>
      </ButtonGroupStyle>
      <Table dataSource={data} rowKey="id" bordered pagination={false}>
        <Column
          width="15%"
          key="userName"
          title="用户名"
          dataIndex="username"
        />
        <Column width="15%" key="nickName" title="姓名" dataIndex="nickName" />
        <Column
          width="35%"
          key="description"
          title="详细信息"
          dataIndex="description"
          render={(_, record: LogItem) => (
            <AutoText>{record.description}</AutoText>
          )}
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
          width="15%"
          key="userState"
          title="操作时间"
          // TODO record.createtime
          render={(_, record: LogItem) => unix2Time(1)}
        />
      </Table>
    </>
  );
};

export default Content;
