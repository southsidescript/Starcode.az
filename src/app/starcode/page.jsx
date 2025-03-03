import Bot from "../Bot/Bot";
import styles from '../../styles/global.module.scss'
import Consult from "../Components/pages/Consult/Consult";
import Main from '../Components/pages/Main/Main'
import About from '../About/About'
import Info from '../Components/pages/Info/Info'
import Footer from "../Components/pages/Footer/Footer";


const Starcode = () => {

    

      

  
  return (
  <div className={styles.starcode}>


           <Main/>
           <Bot/>
           <About/>
           <Info/>
           <Consult/>
           <Footer/>




  </div>)

}

export default Starcode;