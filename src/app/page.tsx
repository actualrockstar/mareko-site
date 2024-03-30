'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ExitButton from "./exitButton";
import React, {useState} from "react";
import PopUp from "./popUp";
import Icon from "./api/route";
import dynamic from "next/dynamic";

export default function Home() {
  const clickIntro = () => {
    setShowPopUp(!showPopUp)
    console.log('show pop up:' + showPopUp);
  }
  const [showPopUp, setShowPopUp] = useState(true);

  const Icons = dynamic(() => import('./api/route'), {
    ssr: false,
  })

  return (
    <div className={styles.main}>
      
      <div className={styles.background}>
        <h1 className="static z-0 right-0 top-[10%] text-[9vh]">mareko</h1>
        <Icons />
        <Image className='relative -z-10' 
          src='/phone-trans.png' 
          fill={true} 
          alt={"background img"}></Image>
      </div>

<div className={styles.body}>
    {showPopUp ? <PopUp setState={showPopUp} triggerState={clickIntro}/> : ""}
      <div>
        <div className={styles.window} onClick={clickIntro}>
          HELLO FROM MAREKO
          <div className={styles.content}>
            <img src="/62703a60a6894eac9342100b2d33ee72.gif" alt="fairy girl" />
            </div>
        </div>
      </div>

      <div>
        <div className={styles.window}>
          <Link href="https://symphony.to/mareko-1/the-garden">MUSIC</Link>
          <a href="https://symphony.to/mareko-1/the-garden">
          <div className={styles.content}>
          <img src="8a3c9e45af49fe253cf781d22174b68f.gif"></img><img src="/8b77e29ce4f29ab1fb4e6970a3608d13.gif"></img> <img src="8a3c9e45af49fe253cf781d22174b68f.gif"></img>
          </div></a>
        </div>
      </div>

      <div>
        <div className={styles.window}>
          <Link href="https://www.youtube.com/@mareko5921">VIDEO</Link>
          <div className={styles.content}>
            <iframe className="w-[60vw] aspect-video" src="https://www.youtube.com/embed/GnwDx29OBP4?si=bxEktGWsEizmvHyp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  
          </div>
        </div>
      </div>
      <div>
        <div className={styles.window}>
          <Link href="/shop">SHOP</Link>
          <div className={styles.content} >
            <a href="/shop">
            <img src='/infinite-void.gif' alt='infinite void'/>
            </a>
          </div>
        </div>
      </div>
      
      <footer className={styles.footer}>
      <div>  
            <Link href='./contact'> <img className="animate-bounce relative right-1 top-0 w-[50%]" src="nokia.gif"></img></Link>
       </div>
        <div>
            <Link href="/world"><img className="relative float-l w-[25%] animate-bounce-slow" src="./star-silver.png"></img></Link>
        </div>  

       
      </footer>
      <div className='absolute left-3'><p>malachite media 2024</p></div>
</div>
    </div>
  );
}

