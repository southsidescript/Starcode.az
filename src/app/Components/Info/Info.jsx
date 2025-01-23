import styles from "@/styles/global.module.scss";
import {technologies} from "@/app/Modules/module";
import AboutCard from "@/app/Components/AboutCard/AboutCard";


const Info = () => {


     return (
         <section className={styles.starcode_info}>

             <div className={styles.starcode_info_head}>
                 Hansi biliklərə yiyələnəcəm ?
             </div>


             <div className={styles.starcode_info_cardcontainer}>

                 {technologies.map(tech => <AboutCard key={tech.id} {...tech}/>)}

             </div>


         </section>
     )

}

export default Info;