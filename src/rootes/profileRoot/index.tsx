import { useNavigate } from "react-router-dom";
import "./style.css"
export const ProfileRoot = () => {
  const myNavigator = useNavigate();
  return (
    <div className="profile_box">
      <div style={{fontSize: "1.5rem"}}>Профиль</div>
      <div className="form_box">
        <div className="input_box">
          <span>Имя</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Страна</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Фамилия</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Город</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Отчество</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Наименование организации</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Почта</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>ИНН</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Личный телефон</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Должность</span><br />
          <input type="text" disabled={true}/>
        </div>
        <div className="input_box">
          <span>Рабочий телефон</span><br />
          <input type="text" disabled={true}/>
        </div>
      </div>
      <div onClick={() => {myNavigator("/profileEdit")}} className="edit_profile_link"><a>Редактировать профиль</a></div>
    </div>
  )
}