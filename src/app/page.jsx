import style from '@/styles/global.module.scss'
import Eduside from './Components/pages/EduSide/Eduside'

export default function Home() {
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
