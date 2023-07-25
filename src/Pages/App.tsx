import React, { useState } from "react";
import Formulario from "../components/Form";
import Lista from "../components/List";
import style from "./style.module.scss";
import Cronometro from "../components/Cronometro";
import { ITarefas } from "../types/tarefa";

function App() {

  const  [tarefas, setTarefas]  = useState<ITarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selectionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  
  return (
    
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista selectionaTarefa={selectionaTarefa}  tarefas={tarefas}  />
        <Cronometro/>
      </div>
  );
}

export default App;
