import { useNavigate } from "react-router-dom";
import "./style.css"
export const RootHeader = () => {
  const myNavigator = useNavigate();
  return (
    <header className="top_panel">
      <button onClick={() => {alert("В разработке")}} className="visibility_button">.</button>
      <div onClick={() => {myNavigator("/profile")}}>Профиль</div>
      <div onClick={() => {alert("В разработке")}}>Поля и теплицы</div>
      <div onClick={() => {alert("В разработке")}}>Орошение</div>
      <div onClick={() => {alert("В разработке")}}>Севооборот</div>
      <div onClick={() => {alert("В разработке")}}>Датчики</div>
      <div onClick={() => {myNavigator("/settings")}}>Настройки</div>
      <span></span>
      <div onClick={() => {alert("В разработке")}}>ru/en</div>
    </header>
  );
}