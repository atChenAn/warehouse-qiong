import React from "react";
import { Table, Button, Icon } from "antd";
import OperaterBtns from "@/component/OperaterBtns";

export interface Props {
  onChange?: Function;
  value?: any;
}

const { Column } = Table;

function Plans(props: Props) {
  const { onChange, value } = props;

  const onEdit = record => {
    console.log(record);
  };
  const onDelete = record => {
    console.log(record);
  };
  return (
    <>
      <Table
        dataSource={[]}
        rowKey="id"
        bordered
        pagination={false}
        size="small"
      >
        <Column
          width="40%"
          key="nickName"
          title="装配目标"
          dataIndex="nickName"
        />
        <Column
          width="20%"
          key="nickName"
          title="装配数量"
          dataIndex="nickName"
          align="right"
        />
        <Column width="20%" key="nickName" title="日期" dataIndex="nickName" />
        <Column
          width="20%"
          key="operate"
          title="操作"
          render={(_, record) => (
            <OperaterBtns>
              <Button onClick={() => onEdit(record)} type="link">
                修改
              </Button>
              <Button onClick={() => onDelete(record)} type="link">
                删除
              </Button>
            </OperaterBtns>
          )}
        />
      </Table>
    </>
  );
}

export default Plans;
