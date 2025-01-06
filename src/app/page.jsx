'use client'
import Image from "next/image";
import styles from "./page.module.scss";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

 useEffect(() => {
    router.push('/edumode')
 },[])

  
   


  return (
    <div className={styles.page}>
    </div>
    
  );
}
