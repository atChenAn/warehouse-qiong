import React from "react";
import { Menu, Dropdown, Icon, Divider } from "antd";
import styled from "styled-components";
import { gernerateId, Model } from "@/utils/commonUtils";

const MoreLink = styled.span`
  margin-right: 4px;
`;
const LinkBtn = styled.div`
  display: inline-block;
`;

interface Props {
  children?: React.ReactNode;
}

function getMoreMenu(moreChild: React.ReactNode[]) {
  return (
    <Menu>
      {moreChild.map((item, index) => (
        <Menu.Item key={Math.random() * 1000000}>{item}</Menu.Item>
      ))}
    </Menu>
  );
}

export default function OperaterBtns(props: Props) {
  const { children } = props;
  const allChilds = React.Children.map(children, (child, index) => child);

  // 如果菜单项数量低于三个（含）则直接渲染

  // 如果菜单项数量超过三个，则渲染前两个，其余部分放入dropMenu中渲染

  let prevChild: Array<React.ReactNode> = [];
  let moreChild: Array<React.ReactNode> = [];
  if (allChilds.length <= 3) {
    // 菜单项小于等于三个，直接渲染
    prevChild = allChilds.slice(0, 3);
  } else {
    // 多于三个，渲染前面两个，剩余的child加入更多选项豪华套餐，由menu接管
    prevChild = allChilds.slice(0, 2);
    moreChild = allChilds.slice(2);
  }

  return (
    <div>
      {prevChild.map((child, index, arr) => (
        <React.Fragment key={gernerateId(Model.MIXTURE)}>
          <LinkBtn>{child}</LinkBtn>
          {index < arr.length - 1 || moreChild.length > 0 ? (
            <Divider type="vertical" />
          ) : null}
        </React.Fragment>
      ))}
      {moreChild.length > 1 ? (
        <Dropdown overlay={getMoreMenu(moreChild)}>
          {/* eslint-disable */}
          <LinkBtn>
            <a className="ant-dropdown-link">
              <MoreLink>更多</MoreLink>
              <Icon type="down" />
            </a>
          </LinkBtn>
          {/* eslint-enable */}
        </Dropdown>
      ) : null}
    </div>
  );
}
