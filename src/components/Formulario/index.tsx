import { Component, ReactNode } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

export default class Formulario extends Component{
  state = {
    tarefa: "",
    tempo: "00:00:00"
  }

  private adicionaTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(this.state);
  }

  render(): ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionaTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label 
            htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            id="tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={event => this.setState({...this.state, tarefa: event.target.value})}
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
            value={this.state.tempo}
            onChange={event => this.setState({...this.state, tempo: event.target.value})}
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
