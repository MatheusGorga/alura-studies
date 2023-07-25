import React from 'react';
import style from './style.module.scss';


interface IBotao{
  type?: "button" | "submit" | "reset" | undefined,
  children: React.ReactNode,
  onClick?: () => void 
}

function Botao({type, children, onClick}: IBotao) {

  return ( 
    <button type={type} onClick={onClick} className={style.botao}>
      {children}
    </button>
   );
}

export default Botao;