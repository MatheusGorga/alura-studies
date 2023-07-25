import React from "react";
import style from "./style.module.scss";
import Item from "./Item";
import { ITarefas } from "../../types/tarefa";

interface ILista {
  tarefas: ITarefas[]
  selectionaTarefa: (tarefaSalecionada: ITarefas) => void,
}

function Lista({tarefas, selectionaTarefa }: ILista) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} selectionaTarefa={selectionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
