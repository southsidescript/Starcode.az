'use client'
import Image from "next/image";
import styles from "./page.module.scss";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

 useEffect(() => {
  
  
  const timeout = setTimeout(() => {
    router.push('/edumode')
 clearTimeout(timeout);
},8000)

 },[])

  
   


  return (
    <div className={styles.page}>
        <main className={styles.main}>

          <button className={styles.push}>Starcode</button>
          <div className={styles.gradient_ball}></div>

      </main>   
    </div>
    
  );
}
