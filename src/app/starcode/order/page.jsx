import style from '@/styles/global.module.scss';
import ClassicButton from '@/app/Components/atoms/classicButton/classicButton';

import FuturisticCard from '@/app/Components/organisms/OrderCard/OrderCard';
import NeoFuturisticForm from '@/app/Components/organisms/OrderForm/OrderForm';
const Order = () => {
  
return(
    <div className={style.order}>
    <h1>Qeydiyyat və Məlumat</h1>          
  
       <div className={style.order_info}>
      
 
           <div className={style.order_about}>
           <FuturisticCard/>
        
      
           </div>

           
           <div className={style.order_form}>
                
               
                  <NeoFuturisticForm/>
                
             

           </div>
       </div>

    </div>
)

}

export default Order;