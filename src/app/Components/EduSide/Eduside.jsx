'use client'

import Image from 'next/image';
import style from '../../../styles/global.module.scss';
import { useRef, useState } from 'react';
import Bubble from '../Bubble/Bubble';

const Eduside= (props) => {
  
const [selected,setSelected] = useState(false);

 function choiseMode(){
   setSelected(!selected)
 }

      
   




return(
    <div  className={!selected? style.eduside:style.eduside_active }      onClick={choiseMode}>
         <div className={style.eduside_desc}>{props.desc}</div>
         <span id={props.styles}>{props.name}</span>  
         <Bubble side={props.styles}/>
    </div>
) 


}


export default Eduside;