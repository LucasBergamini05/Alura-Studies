import Itarefa from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface props {
  tarefas: Itarefa[];
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa}: props){
  return(
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item item={item} selecionaTarefa={selecionaTarefa} key={item.id}/>
        ))}
      </ul>
    </aside>
  )
}
