import Eduside from "../Components/EduSide/Eduside";
import style from "../../styles/global.module.scss";


const Edumode = () => {
return(
  <div className={style.edumode}>
    <Eduside name={'EYECODE'} styles='eduside-left' />
      <div className={style.beam}></div>
    <Eduside name={'STARCODE'} styles='eduside-right' />
  </div>

)
}

export default Edumode;