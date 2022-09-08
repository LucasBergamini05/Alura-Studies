import { Component, ReactNode } from "react";
import tarefa from '../../types/tarefa';
import Botao from "../Botao";
import style from './Formulario.module.scss';

export default class Formulario extends Component<{setTarefas: React.Dispatch<React.SetStateAction<tarefa[]>>}>{
  state = {
    tarefa: "",
    tempo: "00:00:00"
  }

  private adicionaTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
    this.setState({
      tarefa: "",
      tempo: "00:00:00"
    })
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
