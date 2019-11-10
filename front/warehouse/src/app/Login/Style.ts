import styled from "styled-components";
import bgImg from "@/img/bg.jpg";

export const LoginWrapper = styled.div`
  height: 100%;
  min-height: 550px;
  background-image: url(${bgImg});
  background-position: center center;
  background-repeat: no-repeat no-repeat;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 1150px;
  height: 100%;
`;
export const SystemTitle = styled.div`
  margin: 25px;
  text-align: center;
  font-size: 22px;
  color: white;
  text-shadow: 0 0 5px black;
  font-weight: bold;
`;
export const FormWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  width: 350px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 5px #333;
`;
export const Placeholder = styled.div`
  height: 100px;
`;
