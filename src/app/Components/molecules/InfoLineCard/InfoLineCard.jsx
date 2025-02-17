import Image from "next/image";
import styles from '@/styles/global.module.scss'
const InfoLineCard = (props) => {

   return(
    <article className={styles.infoline_card}>
        <Image
        src={props.src}
        width={32}
        height={32}
        alt="info-line-card"
        />
         <h4>{props.count}</h4>
        <p>{props.title}</p>
      

    </article>
   )

}


export default InfoLineCard;