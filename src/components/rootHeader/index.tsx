import { useNavigate } from "react-router-dom";
import "./style.css"
export const RootHeader = () => {
  const myNavigator = useNavigate();
  return (
    <header className="top_panel">
      <button className="visibility_button">.</button>
      <div onClick={() => {myNavigator("/profile")}}>Профиль</div>
      <div onClick={() => {alert("В разработке")}}>Поля и теплицы</div>
      <div onClick={() => {alert("В разработке")}}>Орошение</div>
      <div onClick={() => {alert("В разработке")}}>Севооборот</div>
      <div onClick={() => {alert("В разработке")}}>Датчики</div>
      <div onClick={() => {alert("В разработке")}}>Настройки</div>
      <span></span>
      <div>ru/en</div>
    </header>
  );
}