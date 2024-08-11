import "./style.css"
export const SettingsRoot = () => {
  return (
    <div className="profile_box">
      <div style={{fontSize: "1.5rem"}}>Настройки</div>
      <div className="form_box" style={{gridTemplateRows: "4rem 4rem 4rem"}}>
        <div className="input_box">
          <span>Система измерений</span><br />
          <input defaultValue={"Метрическая"} list="measurement_system" />
          <datalist id="measurement_system">
            {/* <option value="Метрическая: кг, ц, л, га, м/c, мм, °C, ..." />
            <option value="Английская: Фунт, бушель, галлон, миля, ..." />
            <option value="Канада: Фунт, бушель, акр, км, ..." /> */}
            <option value="Метрическая" />
            <option value="Английская" />
            <option value="Канада" />
          </datalist>
        </div>
        <div className="input_box">
          <span>Язык</span><br />
          <input defaultValue={"Русский"} list="language" />
          <datalist id="language">
            <option value="Русский" />
            <option value="Английский" />
            <option value="Татарский" />
          </datalist>
        </div>
        <div className="input_box">
          <span>Часовой пояс</span><br />
          <input defaultValue={"UTC+3 (MSK)"} list="timezone" />
          <datalist id="timezone">
            <option value="UTC+2 (MSK-1)" />
            <option value="UTC+3 (MSK)" />
            <option value="UTC+4 (SAMT)" />
            <option value="UTC+5 (YEKT)" />
            <option value="UTC+6 (OMST)" />
            <option value="UTC+7 (KRAT)" />
          </datalist>
        </div>
        <div className="input_box">
          <span>Очистить кеш</span><br />
          <input type="text" />
        </div>
        <div className="input_box">
          <span>PUSH Уведомления</span><br />
          <input defaultValue={"Телеграмм"} list="notifications" />
          <datalist id="notifications">
            <option value="Телеграмм" />
            <option value="Почта" />
          </datalist>
        </div>
        <div className="input_box">
          <span>Обратная связь</span><br />
          <span onClick={() => {alert("В разработке")}}>mail tg vk viber</span>
        </div>
        <div className="input_box">
          <span>Изменить пароль</span><br />
          <input placeholder="Введите новый пароль" type="password" />
          <div><span></span></div>
          <input placeholder="Повторите новый пароль" type="password" />
          <div onClick={() => alert("В разработке")}><a className="edit_password">Изменить</a></div>
        </div>
      </div>
      <div onClick={() => {alert("В разработке")}} className="edit_profile_link" style={{right: "17%"}}><a>Удалить аккаунт</a></div>
      <div onClick={() => {alert("В разработке")}} className="edit_profile_link"><a>Выйти из аккаунта</a></div>
    </div>
  );
}