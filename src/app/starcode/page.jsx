'use client'
import react, { useEffect, useState } from "react";
import Bot from "../Components/Bot/Bot";
import styles from '../../styles/global.module.scss'
import Form from "../Components/Form/Form";
import AboutCard from "@/app/Components/AboutCard/AboutCard";

import Main from '../Components/Main/Main'
import About from '../Components/About/About'
import Info from '../Components/Info/Info'

const Starcode = () => {

    

      

  
  return (
  <div className={styles.starcode}>


           <Main/>
           <About/>
           <Info/>





  </div>)

}

export default Starcode;