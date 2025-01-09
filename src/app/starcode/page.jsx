'use client'
import react, { useEffect, useState } from "react";
import Bot from "../Components/Bot/Bot";
import styles from '../../styles/global.module.scss'
import Form from "../Components/Form/Form";




const Starcode = () => {

    
      const sentence = ['S','T','A','R','C',<span><img className={styles.starcode_heading_design} src="./react.png" alt="" /></span>,'D','E']; 
      

  
  return (
  <div className={styles.starcode}>

        <header>
            <nav>
                 
            </nav>
        </header>
        
        <div className={styles.starcode_main}>

        <div>
            <h1 className={styles.starcode_heading}>
                  {sentence.map((w,s) => <span key={s} >{w}</span>  ) } 
            </h1>
         </div>

            <div className={styles.starcode_title}>
                  Texnologiyalar dünyasını kəşf et — gələcəyini təmin et
            </div>

           

            <button className={styles.starcode_start}>Ilk addimini et</button>
                 
                  <Bot/>
        </div>

        <section className={styles.starcode_about}>

             <h2> Proqramlaşdırma modulları</h2> 

              <div className={styles.starcode_about_box}>
                       <span style={{'--i': 1}}><img src="./icons/html.png" alt="" />   </span>
                       <span style={{'--i': 2}}><img src="./icons/css.png" alt="" />   </span>
                       <span style={{'--i': 3}}><img src="./icons/javascript.png" alt="" />   </span>
                       <span style={{'--i': 4}}><img src="./icons/github.png" alt="" />   </span>
                       <span style={{'--i': 5}}><img src="./react.png" alt="" />   </span>
                       <span style={{'--i': 6}}><img src="./icons/sass.png" alt="" />   </span>
                       <span style={{'--i': 7}}><img src="./icons/html.png" alt="" />   </span>
                       <span style={{'--i': 8}}><img src="./icons/html.png" alt="" />   </span>
                  
                  
                  </div> 




        </section>
       
   


      
  </div>)
    
}

export default Starcode;