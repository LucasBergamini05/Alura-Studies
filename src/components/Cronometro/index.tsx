import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss'
import Itarefa from '../../types/tarefa';
import { useEffect, useState } from 'react';
import { TimeToSeconds } from '../../common/util/data';

interface Props {
  selecionado: Itarefa | undefined
}

export default function Cronometro({selecionado}: Props) {
  const [tempo, setTempo] = useState<number>()

  useEffect(()=>{
    if(selecionado?.tempo) 
      setTempo(TimeToSeconds(selecionado?.tempo))
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p>{Number(tempo)/60} minutos</p>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio/>
      </div>
      <Botao>
        Começar
      </Botao>
    </div>
  )
}
