import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const Home: React.FC = () => (
  <>
    <Title>h1. Home</Title>
    <Title level={2}>h2. Home</Title>
    <Title level={3}>h3. Home</Title>
    <Title level={4}>h4. Home</Title>
    <Title level={5}>h5. Home</Title>
  </>
);

export default Home;
