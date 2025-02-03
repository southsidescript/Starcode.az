'use client'
import react, { useEffect, useState } from "react";
import Bot from "../Bot/Bot";
import styles from '../../styles/global.module.scss'
import Form from "../Components/Form/Form";
import AboutCard from "@/app/Components/InfoCard/InfoCard";

import Main from '../Main/Main'
import About from '../About/About'
import Info from '../Info/Info'



const Starcode = () => {

    

      

  
  return (
  <div className={styles.starcode}>


           <Main/>
           <Bot/>
           <About/>
           <Info/>
           





  </div>)

}

export default Starcode;