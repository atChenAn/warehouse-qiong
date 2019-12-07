import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

export interface Props {
  data: any;
}

function PlanAdd(props: Props) {
  const { data } = props;
  return <>PlanAdd</>;
}

export default PlanAdd;
