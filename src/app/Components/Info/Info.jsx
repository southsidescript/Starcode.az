import styles from "@/styles/global.module.scss";
import {technologies} from "@/app/Modules/module";
import AboutCard from "@/app/Components/AboutCard/AboutCard";
import Waves from "@/app/Anim/block/Backgrounds/Waves/Waves";
import Squares from "@/app/Anim/block/Backgrounds/Squares/Squares";
const Info = () => {


     return (
         <section id="info" className={styles.starcode_info}>

<div className={styles.back}>
                    
                    <Squares 
                         speed={0.5} 
               squareSize={40}
               direction='diagonal' // up, down, left, right, diagonal
               borderColor='#222'
               hoverFillColor='#222'
                   />   
       
                    </div>


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