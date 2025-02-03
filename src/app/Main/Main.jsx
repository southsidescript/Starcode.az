import styles from "@/styles/global.module.scss";
import Bot from "@/app/Bot/Bot";
import Link from "next/link";
import Image from "next/image";
import HeaderTitle from "../Components/header-title/HeaderTitle";
const  Main = () => {
    

 

    return (
        <div className={styles.starcode_main}>

            <div>
               <HeaderTitle/>
            </div>

            <div className={styles.starcode_title}>
                Texnologiyalar dünyasını kəşf et — gələcəyini təmin et
            </div>

 <Link href={'#info'}>
 <button className={styles.starcode_start}>Ilk addimini et</button>
 </Link>
            

          
        </div>
    )
}

export default Main;