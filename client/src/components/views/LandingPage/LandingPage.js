import React from "react";
import { Typography, Row } from "antd";

const { Title } = Typography;

const LandingPage = () => {
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> Recommended </Title>
      <hr />

      <Row gutter={16}>hello world</Row>
    </div>
  );
};

export default LandingPage;
