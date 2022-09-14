import style from './Relogio.module.scss'

interface Props{
  tempo: number | undefined,
}

export default function Relogio({tempo = 0}: Props) {
  const horas = Math.floor(tempo / 3600)
  const minutos = Math.floor((tempo % 3600) / 60);
  const segundos = (tempo % 3600) % 60;

  const [dezenaHora, unidadeHora] = horas.toString().padStart(2,'0')
  const [dezenaMinuto, unidadeMinuto] = minutos.toString().padStart(2,'0')
  const [dezenaSegundo, unidadeSegundo] = segundos.toString().padStart(2,'0')


  return (
    <>
      <span className={style.relogioNumero}>{dezenaHora}</span>
      <span className={style.relogioNumero}>{unidadeHora}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{dezenaMinuto}</span>
      <span className={style.relogioNumero}>{unidadeMinuto}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{dezenaSegundo}</span>
      <span className={style.relogioNumero}>{unidadeSegundo}</span>
    </>
  )
}
