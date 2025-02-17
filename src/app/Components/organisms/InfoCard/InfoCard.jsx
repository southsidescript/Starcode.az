import React from 'react';
import style from '@/styles/global.module.scss';
import Image from 'next/image';
const InfoCard = (props) => {


    return (
        <div style={{height:props.height}} className={style.starcode_info_card}>

             <div className={style.starcode_info_card_head}>
                 <div className={style.starcode_info_card_head_mark}>{props.mark}</div>
             </div>

             <div className={style.starcode_info_card_heading}>
                {props.heading}
             </div>

             <div className={style.starcode_info_card_body}>
                {props.body.map((value, index) => {
                  return  <div key={index} >
                            <Image 
                             src={value.ico}
                             width={13}
                             height={13}
                             alt='item'
                            />
                            <span>{value.name}</span>
                         </div>
                })}
             </div>
             <div className={style.starcode_info_card_footer}>
                {props.footer}
             </div>
        </div>
    )




}
export default InfoCard;