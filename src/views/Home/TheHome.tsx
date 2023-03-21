import { Typography, Row, Col } from "antd";
import React from "react";

import "./home.scss";
import { HomeData, LinksData } from "./const";

const welcomeText = `I am, ${HomeData.firstName} ${HomeData.lastName}`;

import profilePic from "../../assets/profile.png";
const { Title } = Typography;

const Home: React.FC = () => (
  <>
    <div className="home flex flex-col justify-center items-center">
      <img src={profilePic} alt="Profile" className="img" />
      <Title level={2}>{welcomeText}</Title>
      <Title level={3} style={{ margin: 0 }}>{HomeData.about1}</Title>
      <Title level={3} >{HomeData.about2}</Title>
      <div className="links">
        {LinksData.map((item) => (
          <a href={item.link} target="_blank" rel="noreferrer" key={item.title}>
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  </>
);

export default Home;
