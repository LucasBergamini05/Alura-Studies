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
  const [tempo, setTempo] = useState<number>();

  useEffect(()=>{
    if(selecionado?.tempo) 
      setTempo(TimeToSeconds(selecionado?.tempo));
  }, [selecionado]);

  function regressiva(tempo: number = 0){
    setTimeout(() => {
      if(tempo > 0) {
        setTempo(--tempo);
        regressiva(tempo)
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={()=>{regressiva(tempo)}}>
        Começar
      </Botao>
    </div>
  )
}
