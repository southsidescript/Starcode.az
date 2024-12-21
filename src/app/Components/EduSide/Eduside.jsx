'use client'

import Image from 'next/image';
import style from '../../../styles/global.module.scss';
import { useRef } from 'react';
import Bubble from '../Bubble/Bubble';

const Eduside= (props) => {



      
   




return(
    <div  className={style.eduside}>
        <span id={props.styles}>{props.name}</span>  
         <Bubble side={props.styles}/>
    </div>
)


}


export default Eduside;