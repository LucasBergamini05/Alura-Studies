import tarefa from '../../../types/tarefa'
import style from '../Lista.module.scss'

export default function Item({tarefa, tempo, complete, selected, id}: tarefa){
  return (
    <li className={style.item}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  )
}
