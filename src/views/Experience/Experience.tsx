import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const Experience: React.FC = () => (
  <>
    <Title>h1. Experience</Title>
    <Title level={2}>h2. Experience</Title>
    <Title level={3}>h3. Experience</Title>
    <Title level={4}>h4. Experience</Title>
    <Title level={5}>h5. Experience</Title>
  </>
);

export default Experience;
