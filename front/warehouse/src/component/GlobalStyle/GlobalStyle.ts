import styled from "styled-components";

export const ButtonGroupStyle = styled.div<any>`
  margin: ${props => (props.marginTop ? props.marginTop : 0)}px 0 10px;
  button {
    margin-right: 5px;
  }
`;

export const GroupTitle = styled.div`
  padding: 5px 0;
  margin: 10px 0;
  border-bottom: 1px solid #d9d9d9;
  font-size: 18px;
  color: #333;
`;

export const BtnGroup = styled.div`
  padding: 30px 0;
  margin: 20px 0;
  text-align: center;
  border-top: 1px solid #d9d9d9;
  button {
    width: 150px;
    margin: 0 5px;
  }
`;
