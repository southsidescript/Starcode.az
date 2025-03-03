import style from '@/styles/global.module.scss'
import GoogleMap from '../../organisms/GoogleMaps/GoogleMap';

const Footer =  () => {
 
   
    return (
        <footer className={style.starcode_footer}>
           
         <div className={style.starcode_footer_map}>
           <div className={style.starcode_footer_map_address}>

             <address>
                <p>Mərkəzin ünvanı</p> 
                <p>Bakı şəhər, Fikrət əmirov, 1</p>
              </address>

              <address>
                <p>iş saatları</p> 
                <p>13:00 - 21:30</p>
              </address>
          
           </div>
      
       
           <GoogleMap/>

         </div>
      

        </footer>
    )




}


export default Footer;