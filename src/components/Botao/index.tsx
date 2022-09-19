import style from './Botao.module.scss'

interface IProps {
  type?: 'submit' | 'reset' | 'button' | undefined,
  onClick?: ()=>void,
  children:  React.ReactNode,
  className?: string
}

export default function Botao ({ type = 'button', onClick, children, className }: IProps) {  
  return (
    <button type={type} onClick={onClick} className={`${style.botao} ${className}`}>
      {children}
    </button>
  );
}
