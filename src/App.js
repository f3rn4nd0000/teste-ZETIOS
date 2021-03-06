import React from "react";
import {Link } from "react-router-dom";
import Global from "./styles/global";
import Home from "./pages/Home/Home";

const data = [
  {
    id: Math.random(),
    title: "ZETIOS",
    text: "Bem Vindo, faça seu login ou saiba mais!",
    bgColor: "#D5CAFA",
    button: <Link to="/about">Sobre o projeto</Link>,
    button2: <Link to="/authpage">Login</Link>,
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

function App() {
  return (
    <>
      <Global />
      <Home boxData={data}/>
    </>
  );
}

export default App;
