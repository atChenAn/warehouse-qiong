import styled, { createGlobalStyle } from "styled-components";
import { Spin as _Spin } from "antd";

export const GlobalStyle = createGlobalStyle`
  html,body{
    height:100%;
  }
`;

export const HomeRoot = styled.div`
  min-width: 1150px;
  min-height: 500px;
  height: 100%;
`;

const menuWidth = 300;

export const MenuWrapper = styled.div`
  position: fixed;
  width: ${menuWidth}px;
  left: 0;
  top: 0;
  height: 100%;
  background: #001529;
  overflow-y: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.div`
  margin-left: ${menuWidth}px;
  padding: 10px;
  background-color: #f4f4f4;
`;
export const ContentInner = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

export const TopTitle = styled.div`
  padding: 20px;
  background-color: #001529;
  font-size: 18px;
  color: #f4f4f4;
  text-align: center;
  border-bottom: 1px solid #f4f4f4;
`;

export const Spin = styled(_Spin)`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  width: calc(100%);
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  &&&&&& .ant-spin-dot {
    margin: 0 auto;
  }
`;
