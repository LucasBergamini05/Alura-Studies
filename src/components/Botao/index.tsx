import { Component, ReactNode } from 'react';
import style from './Botao.module.scss'

interface IProps {
  children:  React.ReactNode;
}

export default class Botao extends Component<IProps> {
  render(): ReactNode {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}