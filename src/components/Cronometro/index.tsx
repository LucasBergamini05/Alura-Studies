import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss'
import Itarefa from '../../types/tarefa';
import { useEffect, useState } from 'react';
import { TimeToSeconds } from '../../common/util/data';
import useInterval from '../../common/util/useInterval';

interface Props {
  selecionado: Itarefa | undefined
  finalizaTarefa: ()=>void
}

export default function Cronometro({selecionado, finalizaTarefa}: Props) {
  const [tempo, setTempo] = useState(0);
  const [contando, setContando] = useState(false);
  
  useEffect(()=>{
    if(selecionado?.tempo) 
      return setTempo(TimeToSeconds(selecionado?.tempo));
    setTempo(0);
  }, [selecionado]);

  useInterval({callback: regressiva, delay: contando? 1000 : null});
  
  function controlaRegressiva(controle: boolean, pausar: boolean = false){
    if(selecionado){
      setContando(controle);
      if( !controle && !pausar )
        setTempo(TimeToSeconds(selecionado?.tempo));
    }
  }

  function regressiva(){
    if(tempo > 0)
      return setTempo(tempo-1); 

    setContando(false);
    finalizaTarefa();
  }
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <div className={style.container}>
        <Botao onClick= 
        {
          contando ? 
          ()=> {
            controlaRegressiva(false);
          } : ()=> {
            controlaRegressiva(true);
          }
        }>
          {contando ? 'Parar' : 'Começar'}
        </Botao>

        <Botao 
        className={contando ? '' : style.invisivel}
        onClick= 
        {
          contando ? 
          ()=> {
            controlaRegressiva(false, true);
          } : ()=> {
            controlaRegressiva(true);
          }
        }>
          Pausar
        </Botao>
      </div>
    </div>
  )
}
