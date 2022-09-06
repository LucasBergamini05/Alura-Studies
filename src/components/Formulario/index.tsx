import { Component, ReactNode } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

export default class Formulario extends Component{
  render(): ReactNode {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label 
            htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            id="tarefa"
            name="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
        <label 
            htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            id="tempo"
            name="tempo"
            step="1"
            min="00:00:00"
            max="02:00:00"
            required
          />
        </div>
        <Botao>Adicionar</Botao>
      </form>
    )
  }
}
