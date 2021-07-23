import React from "react";
import Global from "./styles/global";
import AboutPage from "./pages/Home/AboutPage";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const data = [
    {
    id: Math.random(),
    title: "ZETIOS",
    text: lorem,
    bgColor: "#D5CAFA",
  },
  // {
  //   id: Math.random(),
  //   title: "Box titulo 2",
  //   text: lorem,
  //   bgColor: "#EDA9A9"
  // },
  // {
  //   id: Math.random(),
  //   title: "Box titulo 3",
  //   text: lorem,
  //   bgColor: "#F2EE8D"
  // },
  // {
  //   id: Math.random(),
  //   title: "Box titulo 4",
  //   text: lorem,
  //   bgColor: "#9FEACD"
  // }
];

function About() {
  return (
    <>
      <Global />
      <AboutPage boxData={data}/>
    </>
  );
}

export default About;
