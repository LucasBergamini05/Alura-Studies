import { Component, ReactNode } from 'react';
import './style.scss'

class Botao extends Component {
  render(): ReactNode {
    return (
      <button className='botao'>
          Botão
      </button>
    );
  }
}

export default Botao;