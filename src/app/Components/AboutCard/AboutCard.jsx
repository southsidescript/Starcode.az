import React from 'react';
import style from '../../../styles/global.module.scss';
import Image from 'next/image';
const AboutCard = (props) => {


    return (
        <div className={style.starcode_info_card}>

            <div className={style.starcode_info_card_icon}>
                {props.name}
                <Image
                 width={25}
                 height={25}
                 alt='ico'
                 src={props.ico}
                /> 
                  
                <div className={style.starcode_info_card_desc}>
                    {props.description}
                </div>
            </div>

           
        </div>
    )




}
export default AboutCard;