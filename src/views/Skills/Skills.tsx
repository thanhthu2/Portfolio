import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const Skills: React.FC = () => (
  <>
    <Title>h1. Skills</Title>
    <Title level={2}>h2. Skills</Title>
    <Title level={3}>h3. Skills</Title>
    <Title level={4}>h4. Skills</Title>
    <Title level={5}>h5. Skills</Title>
  </>
);

export default Skills;
