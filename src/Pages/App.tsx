import React from "react";
import Formulario from "../components/Form";
import Lista from "../components/List";
import style from "./style.module.scss";
import Cronometro from "../components/Cronometro";

function App() {
  return (
    
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
        <Cronometro/>
      </div>
  );
}

export default App;
