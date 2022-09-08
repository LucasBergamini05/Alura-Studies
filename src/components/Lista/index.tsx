import { useState } from 'react';
import Item from './Item';
import style from './Lista.module.scss';

export default function Lista(){
  const [tarefas, setTarefa] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'JavaScript',
      tempo: '01:00:00'
    },
    {
      tarefa: 'TypeScript',
      tempo: '03:00:00'
    }
  ])

  return(
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefa([...tarefas, {tarefa: 'Estudar estados', tempo: '05:00:00'}])
        }}>Estudo do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
