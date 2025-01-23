import React from 'react';
import style from '../../../styles/global.module.scss';
const AboutCard = (props) => {


    return (
        <div className={style.starcode_info_card}>

            <div className={style.starcode_info_card_icon}>
                {props.name}
            </div>

            <div className={style.starcode_info_card_desc}>
                {/*{props.description}*/}
            </div>
        </div>
    )




}
export default AboutCard;