import React, { useState } from "react";
import Formulario from "../components/Form";
import Lista from "../components/List";
import style from "./style.module.scss";
import Cronometro from "../components/Cronometro";
import { ITarefas } from "../types/tarefa";

function App() {

  const  [tarefas, setTarefas]  = useState<ITarefas[] | []>([]);
  
  return (
    
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas}  />
        <Cronometro/>
      </div>
  );
}

export default App;
