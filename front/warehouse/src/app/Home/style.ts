import styled, { createGlobalStyle } from "styled-components";

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

const menuWidth = 350;

export const MenuWrapper = styled.div`
  position: absolute;
  width: ${menuWidth}px;
  left: 0;
  top: 0;
  height: 100%;
  ul {
    height: 100%;
  }
`;

export const Content = styled.div`
  margin-left: ${menuWidth}px;
`;

export const TopTitle = styled.div`
  padding: 20px;
  background-color: #001529;
  font-size: 18px;
  color: #f4f4f4;
  text-align: center;
  border-bottom: 1px solid #f4f4f4;
`;
