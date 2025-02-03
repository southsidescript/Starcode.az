import styles from "@/styles/global.module.scss";
import {technologies} from "@/app/Modules/module";
import InfoCard from "../Components/InfoCard/InfoCard";

const Info = () => {


     return (
         <section id="info" className={styles.starcode_info}>



             <div className={styles.starcode_info_head}>
                 Hansi biliklərə yiyələnəcəm ?
             </div>


             <div className={styles.starcode_info_cardcontainer}>

                 {technologies.map((tech,index) => <InfoCard key={index} {...tech}/>)}
 
             </div>


         </section>
     )

}

export default Info;