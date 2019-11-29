import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

export interface Props {
  data: any;
}

function UserAdd(props: Props) {
  const { data } = props;
  return <>UserAdd</>;
}

export default UserAdd;
