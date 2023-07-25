import { ITarefas } from "../../../types/tarefa";
import style from "../style.module.scss";

interface Props extends ITarefas {
  selectionaTarefa: (tarefaSalecionada: ITarefas) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selectionaTarefa,
}: Props) {
  return (
    <li
      key={id}
      className={style.item}
      onClick={() =>
        selectionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
}
