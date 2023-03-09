import { Col, Row } from "antd";
import React from "react";

type Props = {
    children?: JSX.Element;
};

const Navbar = ({ children }: Props) => (
    <>
        <Row>
            <Col span={24}>header</Col>
            <Col span={24}> {children} </Col>
            <Col span={24}>footer</Col>
        </Row>
    </>
);

export default Navbar;
