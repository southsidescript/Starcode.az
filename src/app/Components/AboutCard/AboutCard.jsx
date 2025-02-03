import styles from '@/styles/global.module.scss'

const AboutCard = (props) => {


return (
    <div id={props.id} className={styles.starcode_about_modules_card}>
        <h3>{props.title}</h3>
        <p className={styles.starcode_about_modules_card_about}> {props.desc} </p>
        <p className={styles.starcode_about_modules_card_price}> {props.price} ₼</p>
        <button className={styles.starcode_about_modules_card_btn}> Başla</button>
   </div>
)


}

export default AboutCard;