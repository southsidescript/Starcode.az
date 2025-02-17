'use client'

import Image from "next/image"
import  styles from '@/styles/global.module.scss'
import { useEffect, useState } from "react"
const HeaderTitle = () => {
 
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return(
        <h1 className={styles.starcode_heading}>
            STARC<span>  
                <Image 
                    src={'/react.png'}
                    width={isMobile?50:100}
                    height={isMobile?50:100}
                    priority={true}    
                    alt="Logo"
                    className={styles.starcode_heading_design}/>
            </span>
            DE
        </h1>
    )
}
export default HeaderTitle;