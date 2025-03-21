import styles from '@/styles/global.module.scss'
import Link from 'next/link';
const AboutCard = (props) => {


return (
    <div id={props.id} className={styles.starcode_about_modules_card}>
        <h3>{props.title}</h3>
        <p className={styles.starcode_about_modules_card_about}> {props.desc} </p>
        <p className={styles.starcode_about_modules_card_price}> {props.price} ₼</p>
        <Link href={'/starcode/order'}>
         <button className={styles.starcode_about_modules_card_btn}>Başla </button> 
         </Link>
         
    
   </div>
)


}

export default AboutCard;