import styles from "@/styles/global.module.scss";
import Link from "next/link";
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
   <ClassicButton>İlk addımı atın</ClassicButton>
 </Link>
            

          
        </div>
    )
}

export default Main;