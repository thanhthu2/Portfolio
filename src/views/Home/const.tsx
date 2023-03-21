import { ImGithub, ImLinkedin } from "react-icons/im";
// import { FaTwitter } from "react-icons/fa";
// import { SiInstagram } from "react-icons/si";

interface IHome {
  firstName: string;
  lastName: string;
  about1: string;
  about2: string;
}

export const HomeData: IHome = {
  firstName: "Thanh",
  lastName: "Bui Huy",
  about1: "<A Developer who loves to build cool things />",
  about2: "<Frontend Developer And Web Designer />",
};

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color="#000000dc" />,
    link: "https://github.com/thanhthu2",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color="#000000dc" />,
    link: "https://www.linkedin.com/in/thanh-bh/",
  },
//   {
//     title: "Twitter",
//     icon: <FaTwitter color="#000000dc" />,
//     link: "https://twitter.com/erfan_grr",
//   },
//   {
//     title: "Instagram",
//     icon: <SiInstagram color="#000000dc" />,
//     link: "https://www.instagram.com/erfan_grr",
//   },
];
