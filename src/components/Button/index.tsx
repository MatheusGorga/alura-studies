import React from 'react';
import style from './style.module.scss';

class Botao extends React.Component <{
  type?: "button" | "submit" | "reset" | undefined,
  children: any,
  onClick?: () => void 
  }>{
  render() {
    const {type = "button"} = this.props
    return (
      <button type={type} className={style.botao} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;