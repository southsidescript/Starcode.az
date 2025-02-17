import style from '@/styles/global.module.scss';
import { useState } from 'react';


const Form = (props) => {

const [user,setUser] = useState({});
    
const {setSent,setForm,sendMessageToTelegram,users,url} = props;




return(<>
   <div   className={style.form}>
           <div className={style.form_close} onClick={()=>{
            setForm(false);
           }}>
            <img src="./close.png" alt="" />
           </div>
          <input type="text" placeholder='Ваше имя'  onBlur={(event)=>{
            setUser({...user,name:event.target.value});
          }}/>
          <input type="text" placeholder='+994 0xx - xxx - xx - xx' onBlur={(event)=>{
            setUser({...user,phone:event.target.value})
         
          }} />
          <input type="text"  placeholder='Электронная почта' onBlur={(event)=>{setUser({...user,email:event.target.value})}}/>
          <p>Возраст студента</p>
          <div className={style.form_age}>
            <input type="text" placeholder='Г' onBlur={ (event)=>{setUser({...user,age:event.target.value }) } } />
            <input type="text" placeholder='М' onBlur={ (event)=>{setUser({...user,month:event.target.value }) } } />
            <input type="text" placeholder='Д' onBlur={(event)=>{setUser({...user,day:event.target.value} ) }}/>  </div> 
          
          <div className={style.form_design}>
             <div className={style.form_design_prog}></div>
          </div>

          <p>Сообщение</p>
           <input type="text" onBlur={(event)=>{setUser({...user,message:event.target.value})}}  />
            <button className={style.form_send} onClick={()=>{
                 
               setForm(false);

                 const msg = `У вас новый лид! \n
                   ${user.name}\n
                   ${user.phone}\n
                  //  ${user.email}\n
                   ${user.age}.${user.month}.${user.day}
                   ${user.message}
                 `
                 sendMessageToTelegram(msg);

                 setSent(true);
                 
                 let timeout = setTimeout(()=>{
                    setSent(false);
                      clearTimeout(timeout);

                  },5000)
            
            }} >Отправить</button>
    </div>

   
</>
  
)

}

export default Form;