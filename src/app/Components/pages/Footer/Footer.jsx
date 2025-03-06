import style from '@/styles/global.module.scss'
import GoogleMap from '../../organisms/GoogleMaps/GoogleMap';
import Image from 'next/image';
import Link from 'next/link';

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
            <Image src={'/icons/starcode.png'} alt={'starcode'} width={40} height={40}/>
              <div>
              <h2>Starcode</h2>
             </div>
     
          </div>

          <div className={style.starcode_footer_info_links}>
                   <Link href={''}>  <p>Modullar</p> </Link>
                   <Link href={''}>  <p>ətraflı</p> </Link>
                   <Link href={''}>  <p>texnologiyalar</p> </Link>
                   <Link href={''}>  <p>əlaqə saxla</p> </Link>
          </div>

          <div className={style.starcode_footer_info_contacts}>
            <Link href={'mailto:info@starcode.az'}> <p>info@starcode.az</p> </Link>
            <p>+994 50 832 22 44</p>
          </div>

          <div className={style.starcode_footer_info_medias}>
             <Link href={'https://www.instagram.com/starcode.az/'}> <Image src={'/icons/in.png'} alt={'instagram'} width={25} height={25}/> </Link>
             <Link target='_blank' href={'https://wa.me/+994508322244'}> <Image src={'/icons/wa.png'} alt={'whatsapp'} width={25} height={25}/> </Link>
          </div>
         

         </div>
      

        </footer>
    )




}


export default Footer;