'use client'

import style from '@/styles/global.module.scss'
import { useEffect, useState } from 'react';
import './Bot.scss'
import Form from '../Components/organisms/Form/Form';
import Image from 'next/image';
import ServerImage from '../Components/molecules/ServerImage/ServerImage';


const Bot = () => {
    
    const [sent,setSent] = useState(false);

    const [form,setForm] = useState(false);
   
    async function sendMessageToTelegram(msg) {
      console.log('Сообщение отправлено')
        const res = await fetch("/API/telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatId: "688804750", // ID пользователя, которому отправляем сообщение
            message: msg,
          }),
        });
      
        const data = await res.json();
        console.log(data);
      }

  
    

    return ( <>
    <div className={'bot'} onClick={()=>{
        setForm(!form)
    }} >
       
       <ServerImage
       src={'/bot/bot-v1.png'}
       width={100}
       height={100}
       alt='bot'
       />
       
        </div>
     
     {form?  <Form
                 setSent={setSent}
                 setForm={setForm}
                 sendMessageToTelegram={sendMessageToTelegram}
                 />:''}

    {sent?   <div className={'bot_sent'}>
        
         
           <p>Скоро с Вами свяжется наш менеджер!</p>    
           
           
    </div>:''}

    

    </>


        
        


    )

}


export default Bot;