import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Col, Menu, Row, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import './navbar.scss'

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
    // icon: <MailOutlined />,
  },
  {
    label: "Skills",
    key: "skills",
  },
  {
    label: "Experience",
    key: "experience",
  },
  {
    label: "Projects",
    key: "projects",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

const { Title } = Typography;

type Props = {
  children?: JSX.Element;
};

const Navbar = ({ children }: Props) => {
  let navigate = useNavigate();
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState("mail");

  const routeChange: MenuProps["onClick"] = (e) => {
    const path = e.key;
    setCurrentPath(path)
    navigate(path);
  };

  return (
    <>
      <Row className="navbar" align="middle">
        <Col className="logo" span={12}>
          <Title className="title" level={2}> Portfolio </Title>
        </Col>
        <Col className="menuLinks" span={12}>
          <Menu
            onClick={routeChange}
            selectedKeys={[currentPath]}
            mode="horizontal"
            items={items}
          />
        </Col>
      </Row>
      <Col span={24}> {children} </Col>
    </>
  );
};

export default Navbar;
