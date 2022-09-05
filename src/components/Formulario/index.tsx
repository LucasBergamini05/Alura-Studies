import { Component, ReactNode } from "react";
import Botao from "../Botao";
import './style.scss';

class Formulario extends Component{
  render(): ReactNode {
    return (
      <form className='novaTarefa'>
        <div className='inputContainer'>
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
        <div className='inputContainer'>
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
        <Botao></Botao>
      </form>
    )
  }
}

export default Formulario