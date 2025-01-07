'use client'

import { useState } from 'react';
import './Bot.scss'
import Form from '../Form/Form';
const Bot = () => {
     
    const [bot,setBot] = useState({
        name:'sparky',
        token:'8158782146:AAFAbhVHbQ_Ot3n-zgOd_jgcJ_vlliEZ_FY',
        users:[
            {
                name:'bahadir',
                id:535716676
            },
            {
                name:'serkhan',
                id:688804750
            }
            
        ],
        request_url:'https://api.telegram.org/bot',
        commands:{
            msg:'sendMessage?chat_id=<chat_id>&text=<text>'
        }
    })
    const [clientInfo,setClientInfo] = useState('');
    
    const [form,setForm] = useState(false)
     
    const sendRequest = () => {
        
        const url = bot.request_url + bot.token + '/'+ bot.commands.msg;
   
        const text = 'Клиент начал заполнение формы!';
       
        sendMessage(bot.users,text,url)
        

   


    }

    const sendMessage = (users,msg,url) => {
          

            users.forEach((user) => {
            const request_url = url.replace('<chat_id>',user.id).replace('<text>',msg);  
         
            fetch(request_url)
            .then(res  => res.json())
            .then(data =>{ console.log(data)
                setClientInfo(data)
            })
             
            
           })

    }

    

    return ( <>
    <div className='bot' onClick={()=>{
        setForm(!form)
    }}  /*onClick={sendRequest}*/>
       
           <img src="./bot/bot-v1.png" alt="" />
        </div>
     
     {form?  <Form setForm={setForm} users={bot.users} url={bot.request_url + bot.token + '/'+ bot.commands.msg} sendMessage={sendMessage}/>:''}
      

    </>


        
        


    )

}


export default Bot;