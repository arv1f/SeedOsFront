import { useNavigate } from "react-router-dom";
import "./style.css"
export const RootHeader = () => {
  const myNavigator = useNavigate();
  return (
    <header className="top_panel">
      <span>Главная</span>
      <div onClick={() => {alert("В разработке")}}>Датчики</div>
      <div onClick={() => {alert("В разработке")}}>Управление</div>
      <div onClick={() => {alert("В разработке")}}>Орошение</div>
      <div onClick={() => {alert("В разработке")}}>Статистика</div>
      <div onClick={() => {alert("В разработке")}}>Заметки</div>
      <button onClick={() => myNavigator("/registration")}>Войти</button>
    </header>
  );
}