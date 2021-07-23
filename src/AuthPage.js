import React from "react";
import Global from "./styles/global";
import Auth from "./pages/Home/Auth";

const data = [
  {
    id: Math.random(),
    title: "ZETIOS",
    text: "Insira o cód. de autenticação de 2 fatores",
    bgColor: "#D5CAFA",
    button: "validar",
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

function AuthPage() {
  return (
    <>
      <Global />
      <Auth boxData={data}/>
    </>
  );
}

export default AuthPage;
