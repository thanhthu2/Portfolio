import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const Contact: React.FC = () => (
  <>
    <Title>h1. Contact</Title>
    <Title level={2}>h2. Contact</Title>
    <Title level={3}>h3. Contact</Title>
    <Title level={4}>h4. Contact</Title>
    <Title level={5}>h5. Contact</Title>
  </>
);

export default Contact;
