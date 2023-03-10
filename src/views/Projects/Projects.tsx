import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const Projects: React.FC = () => (
  <>
    <Title>h1. Projects</Title>
    <Title level={2}>h2. Projects</Title>
    <Title level={3}>h3. Projects</Title>
    <Title level={4}>h4. Projects</Title>
    <Title level={5}>h5. Projects</Title>
  </>
);

export default Projects;
