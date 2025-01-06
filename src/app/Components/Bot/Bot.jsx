'use client'

import { useState } from 'react';
import './Bot.scss'

const Bot = () => {
     
    const [bot,setBot] = useState({
        name:'sparky',
        token:'8158782146:AAFAbhVHbQ_Ot3n-zgOd_jgcJ_vlliEZ_FY',
        users:{
            serkhan:688804750,
            bahadir:535716676
        },
        request_url:'https://api.telegram.org/bot',
        commands:{
            msg:'sendMessage?chat_id=<chat_id>&text=<text>'
        }
    })
    const [clientInfo,setClientInfo] = useState('');


    const sendRequest = () => {
        
        const url = bot.request_url + bot.token + '/'+ bot.commands.msg;
        const chat_id = bot.users.serkhan;
        const text = 'Клиент начал заполнение формы!';
        const request_url = url.replace('<chat_id>',chat_id).replace('<text>',text);
        
        fetch(request_url)
        .then(res  => res.json())
        .then(data =>{ console.log(data)
            setClientInfo(data)
        })
         


    }

    return (


        
        <div className='bot'  onClick={sendRequest}>
           <img src="./bot/bot-v1.png" alt="" />
        </div>
    )

}


export default Bot;