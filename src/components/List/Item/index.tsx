import style from "../style.module.scss";

interface ItemProps {
  tarefa: string;
  tempo: string;
  key: number;
}

export default function Item({ tarefa, tempo, key }: ItemProps) {
  return (
    <li key={key} className={style.item}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
}
