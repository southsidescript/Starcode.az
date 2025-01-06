import style from '../../../styles/global.module.scss';



const Form = () => {



return(
    <div   className={style.form}>
           
          <input type="text" placeholder='Ваше имя' />
          <input type="text" placeholder='+994 0xx - xxx - xx - xx' />
          <input type="text"  placeholder='Электронная почта'/>
          <p>Возраст студента</p>
          <div className={style.form_age}><input type="text" placeholder='Г'/> <input type="text" placeholder='М'/> <input type="text" placeholder='Д'/>  </div> 
          <div className={style.form_design}>
             <div className={style.form_design_prog}></div>
          </div>
          <p>Сообщение</p>
           <input type="text"  />
          <button className={style.form_send}>Отправить</button>
    </div>
)

}

export default Form;