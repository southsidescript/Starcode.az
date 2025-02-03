import styles from "@/styles/global.module.scss";
import Chart from "../Components/Chart/Chart";
import AboutCard from "../Components/AboutCard/AboutCard";
import InfoLineCard from "../Components/InfoLineCard/InfoLineCard";
import Image from "next/image";
const About = () => {
    return (

        <section className={styles.starcode_about}>
            
            <div className={styles.starcode_about_head_heading}> Proqramlaşdırma modulları</div>
          
            <div className={styles.starcode_about_modules}>
                <AboutCard title='Pulsuz'  desc='Tanışlıq üçün ilk sınaq dərsi' price='0' />
                <AboutCard id="popular" title='Beginner'  desc='12-16 yaşlı uşaqlar üçün.Təlim müddəti:12ay.' price='150' />
                <AboutCard id="hot" title='Intermediate'  desc=' 17 - 35 yaşlı şəxslər üçün. Təlim müddəti18 aydır.' price='180' />
                <AboutCard id="hot" title='Personal modul'  desc=' Bütün yaşlar üçün fərdi təlim.  Dərslər 1-ə 1 rejimində keçirilir.Təlimin müddəti: 12 aydır' price='600' /> 
            </div>


            <section className={styles.chart}>
                
                 <h3>Bizi niyə  seçirlər ?</h3>

                <div className={styles.chart_title}>
                2024-cü il sentyabrın 1-dən 2025-ci il yanvarın 1-dək Starcode və digər kursların tәdris metodunun aktuallığı və effektivliyi ilə bağlı aparılan təhlilin nəticələri.
                </div>

                <div className={styles.chart_stats}>
                    <div className={styles.chart_stats_purple}></div> <div className={styles.chart_stats_cyan}></div>
                </div>

                <div>
                <Chart/>
                </div>
            
                </section>
      
                <section className={styles.infoline}>
               
                     <div className={styles.infoline_container}>
                              <InfoLineCard src='/icons/user-fill.png' count={118} title={'Tələbə'}/>
                              <InfoLineCard src='/icons/student-edu.png' count={32} title={'Məzun'}/>
                              <InfoLineCard src='/icons/award.png'  title={'Lisenziya'}/>
                              <InfoLineCard src='/icons/global.png' count={3} title={'ölkə'}/>
                              
                    </div>   
                       

                </section>  
                
    </section>


    )
}

export default About;