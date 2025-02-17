'use client'
import react, { useEffect, useState } from "react";
import Bot from "../Bot/Bot";
import styles from '../../styles/global.module.scss'
import Form from "../Components/organisms/Form/Form";
import AboutCard from "@/app/Components/organisms/InfoCard/InfoCard";
import Consult from "../Components/pages/Consult/Consult";
import Main from '../Components/pages/Main/Main'
import About from '../About/About'
import Info from '../Components/pages/Info/Info'



const Starcode = () => {

    

      

  
  return (
  <div className={styles.starcode}>


           <Main/>
           <Bot/>
           <About/>
           <Info/>
           <Consult/>
           





  </div>)

}

export default Starcode;