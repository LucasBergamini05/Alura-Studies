import {  useState } from "react";
import Itarefa from '../../types/tarefa';
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { v4 as generateId } from 'uuid';

interface IProps{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
};

export default function Formulario ({ setTarefas }: IProps){
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00:00');

  function adicionaTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setTarefas
    (
      tarefasAntigas => 
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          completo: false,
          selecionado: false,
          id: generateId()
        }
      ]
    );
    setTarefa("");
    setTempo("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionaTarefa}>
      <div className={style.inputContainer}>
        <label 
          htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          value={tarefa}
          onChange={event => { setTarefa(event.target.value) }}
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
          value={tempo}
          onChange={event => { setTempo(event.target.value) }}
          step="1"
          min="00:00:00"
          max="02:00:00"
          required
        />
      </div>
      <Botao type='submit'>Adicionar</Botao>
    </form>
  );
}
