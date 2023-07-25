import { ITarefas } from "../../../types/tarefa";
import style from "../style.module.scss";



export default function Item({ tarefa, tempo,  selecionado, completado, id }: ITarefas) {
  return (
    <li key={id} className={style.item}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
}
