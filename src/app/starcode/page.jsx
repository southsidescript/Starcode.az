import Bot from "../Bot/Bot";
import styles from '../../styles/global.module.scss'
import Consult from "../Components/pages/Consult/Consult";
import Main from '../Components/pages/Main/Main'
import About from "../Components/pages/About/About";
import Info from '../Components/pages/Info/Info'
import Footer from "../Components/pages/Footer/Footer";
import Copyright from "../Components/organisms/Copyright/Copyright";

const Starcode = () => {
  return (
  <div className={styles.starcode}>


           <Main/>
           <Bot/>
           <About/>
           <Info/>
           <Consult/>
           <Footer/>
           <Copyright/>
  </div>)

}

export default Starcode;