import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.module.scss';

export default function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}