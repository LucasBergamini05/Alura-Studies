import { Component, ReactNode } from 'react';
import style from './Botao.module.scss'

interface IProps {
  children:  React.ReactNode,
  type?: 'submit' | 'reset' | 'button' | undefined,
  onClick?: ()=>void,
}

export default class Botao extends Component<IProps> {
  render(){
    const {type = 'button', onClick} = this.props
    return (
      <button type={type} onClick={onClick} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}
