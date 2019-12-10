import React from "react";
import { ContentProps } from "search-page";
import { Table, Button, Icon } from "antd";
import OperaterBtns from "@/component/OperaterBtns";
import { ButtonGroupStyle } from "@/component/GlobalStyle/GlobalStyle";
import history from "@/utils/history";

const { Column } = Table;

const Content = ({ data, forceUpdate, loading, filters }: ContentProps) => {
  const onAdd = () => {
    history.push("/plan/add");
  };
  const onEdit = record => {
    history.push(`/plan/edit?id=${record.id}`);
  };
  const onDelete = record => {
    console.log(record);
  };

  return (
    <>
      <ButtonGroupStyle marginTop={-50}>
        <Button onClick={onAdd} type="primary">
          <Icon type="plus" />
          新建计划
        </Button>
        <Button type="primary">
          <Icon type="import" />
          批量导入
        </Button>
        <Button>
          <Icon type="download" />
          模板下载
        </Button>
        <Button type="danger">
          <Icon type="snippets" />
          月度盘存
        </Button>
      </ButtonGroupStyle>
      <Table
        dataSource={[
          {
            id: "123",
            nickName:
              "324撒框架鼎龙案件零担撒领讲定三安领奖空间俺领导领撒讲课撒领令洒家看"
          }
        ]}
        rowKey="id"
        bordered
        pagination={false}
        size="small"
      >
        <Column
          width="10%"
          key="userName"
          title="物料编码"
          dataIndex="username"
        />
        <Column
          width="15%"
          key="nickName"
          title="物料名称"
          dataIndex="nickName"
        />
        <Column
          width="10%"
          key="nickName"
          title="ERP计划员"
          dataIndex="nickName"
        />
        <Column
          width="10%"
          key="nickName"
          title="装配需求"
          dataIndex="nickName"
          align="right"
        />
        <Column
          width="10%"
          key="nickName"
          title="库存"
          dataIndex="nickName"
          align="right"
        />
        <Column
          width="10%"
          key="nickName"
          title="差值"
          dataIndex="nickName"
          align="right"
        />
        <Column
          width="10%"
          key="nickName"
          title="计生需求"
          dataIndex="nickName"
          align="right"
        />
        <Column
          width="10%"
          key="nickName"
          title="总需求"
          dataIndex="nickName"
          align="right"
        />
        <Column
          width="15%"
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
};

export default Content;
