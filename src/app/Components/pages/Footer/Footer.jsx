import style from '@/styles/global.module.scss'
import GoogleMap from '../../organisms/GoogleMaps/GoogleMap';
import Image from 'next/image';

const Footer =  () => {
 
   
    return (
        <footer className={style.starcode_footer}>
           
         <div className={style.starcode_footer_map}>
           <div className={style.starcode_footer_map_address}>

             <address>
                <p className={style.starcode_footer_map_address_title}>Mərkəzin ünvanı</p> 
                <p>Bakı şəhər, Fikrət əmirov, 1</p>
              </address>

              <address>
                <p className={style.starcode_footer_map_address_title}>iş saatları</p> 
                <p>13:00 - 21:30</p>
              </address>
          
           </div>
      
       
           <GoogleMap/>

         </div>
         <div className={style.starcode_footer_info}>

          <div className={style.starcode_footer_info_title} >
            <Image src={'/icons/starcode.jpg'} alt={'starcode'} width={40} height={40}/>
             <div>
             <h2>Starcode</h2>
        
             </div>
     
          </div>
         

         </div>
      

        </footer>
    )




}


export default Footer;