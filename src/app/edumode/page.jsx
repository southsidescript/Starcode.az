import Eduside from "../Components/EduSide/Eduside";
import style from "../../styles/global.module.scss";


const Edumode = () => {


  const data = [
    {
    name: 'EYECODE',
    styles: 'eduside-left',
    desc:'Онлайн обучение'
    },
    {
       name: 'STARCODE',
       styles: 'eduside-right',
       desc:'Офлайн обучение'
      }
  ]


return(
  <div className={style.edumode}>
    <Eduside {...data[0]} />
      <div className={style.beam}></div>
    <Eduside {...data[1]}/>
  </div>

)
}

export default Edumode;