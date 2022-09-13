import Itarefa from '../../../types/tarefa'
import style from './Item.module.scss'

interface props {
  item: Itarefa,
  selecionaTarefa: (tarefaSelecionada: Itarefa | undefined) => void
}

export default function Item({item, selecionaTarefa}: props){
  return (
    <li 
    className={`${style.item} ${item.selecionado ? style.itemSelecionado : ''}`}
    onClick={() => item.selecionado ? selecionaTarefa(undefined) : selecionaTarefa(item)}
    >
      <h3> {item.tarefa} </h3>
      <span> {item.tempo} </span>
    </li>
  )
}
