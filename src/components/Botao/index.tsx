import style from './Botao.module.scss'

interface IProps {
  type?: 'submit' | 'reset' | 'button' | undefined,
  onClick?: ()=>void,
  children:  React.ReactNode,
}

export default function Botao ({ type = 'button', onClick, children }: IProps) {  
  return (
    <button type={type} onClick={onClick} className={style.botao}>
      {children}
    </button>
  );
}
