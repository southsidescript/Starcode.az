import styles from "@/styles/global.module.scss";
import Bot from "@/app/Bot/Bot";
import Link from "next/link";
import Image from "next/image";
import HeaderTitle from "../../molecules/header-title/HeaderTitle";
import ClassicButton from "../../atoms/classicButton/classicButton";

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
   <ClassicButton>Ilk addimini et</ClassicButton>
 </Link>
            

          
        </div>
    )
}

export default Main;