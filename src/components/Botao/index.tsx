import { Component, ReactNode } from 'react';
import style from './Botao.module.scss'

class Botao extends Component {
  render(): ReactNode {
    return (
      <button className={style.botao}>
          Botão
      </button>
    );
  }
}

export default Botao;