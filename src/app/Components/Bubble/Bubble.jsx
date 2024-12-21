'use client'

import React, { useState,useEffect } from 'react';
import style from '../../../styles/global.module.scss';

const Bubble = (props) => {
   
    const { side } = props;
    
    console.log(side)

    const [bubble,setBubbles] = React.useState([]);
      
     useEffect(() => {
        
        
        let interval = setInterval(() => {
              
            const radius = Math.random() * 10;

            const newBubble = {
                id:Date.now(),
                style:{
                    width: radius,
                    height:radius,
                    backgroundColor:side=='eduside-right'?'red':'purple',
                }
                
              }

             setBubbles( prev=>[...prev,newBubble]);
             
             let timeout = setTimeout(() => { 
                setBubbles(prev=>prev.filter(b=>b.id!==newBubble.id))
               },4000)
              console.log(bubble)
         
             
        },500);

      
        return () => clearInterval(interval);
     }, [setBubbles,bubble]);
    


   

    return (
        <div>
            {bubble.map(b=> <div key={b.id} style={b.style}  className={style.bubble}></div> )}
        </div>
    )


   
      



}



export default Bubble;