import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Itarefa from '../types/tarefa';
import style from './App.module.scss';

export default function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa | undefined){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefas => tarefas.map(tarefa => ({...tarefa, selecionado: tarefa.id === tarefaSelecionada?.id ? true : false})));
  }

  function finalizaTarefa(){
    if(selecionado){
      setTarefas(tarefasAnteiores => 
        tarefasAnteiores.map(tarefa=>{
          if(selecionado.id == tarefa.id){
            return {...tarefa,  completo: true, selecionado: false}
          }
          return tarefa
        })
      );
      setSelecionado(undefined);
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}/>
      <Cronometro 
        finalizaTarefa={finalizaTarefa}
        selecionado={selecionado}/>
    </div>
  );
}
