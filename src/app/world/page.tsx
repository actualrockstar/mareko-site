'use client'

import Link from 'next/link'
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { TwitchEmbed, TwitchEmbedInstance } from 'react-twitch-embed';
import { useRef } from 'react';
import Icon from "../components/icon";



export default function Page2() {


  return (
    <div className={styles.main}>

    <div className={styles.background}>
        <h1 className="static z-0 right-0 top-[10%] text-[9vh]">mareko</h1>
        <Icon></Icon>
        <Image className='relative -z-10' 
          src='/phone-trans.png' 
          fill={true}
          alt={"background"}></Image>
      </div>



<div className={styles.body}>
      <div className='flex'>
        <div className={styles.window}>
          <Link href='https://twitter.com/bbymalachite'>Twitter</Link>
          <div className={styles.content}>
            <a href="https://twitter.com/bbymalachite"><img src="/88274b41eb15abc16e26f5fd4a24f8b4.gif" alt="goth girl" /></a>
            </div>
        </div>
        <div className={styles.window}>
          <Link href='https://www.instagram.com/mareko.xyz/'>INSTAGRAM</Link>
          <div className={styles.content}>
            <Link href='https://www.instagram.com/mareko.xyz/'><img src="/cd.gif" alt="alien cat" /></Link>
            </div>
        </div>
      </div>

      <div>
        <div className={styles.window}>
          <Link href="https://www.tiktok.com/@bbymalachite?is_from_webapp=1&sender_device=pc">TikTok</Link>
          <a href="https://www.tiktok.com/@bbymalachite?is_from_webapp=1&sender_device=pc">
          <div className={styles.content}>
          <img src="guitar-cat.gif"></img><img src="guitar-cat.gif"></img>
          </div></a>
        </div>
      </div>

      <div>
        <div className={styles.window}>
          <Link href="https://www.twitch.tv/bbymalachite">MALACHITE TV</Link>
          <div className={styles.content}>
          <TwitchEmbed width={"90vw"} channel="bbymalachite" autoplay muted withChat darkMode={false} hideControls  />
          </div>
        </div>
      </div>
      
      <footer className='relative flex mt-[25%]'>
        
            <Link href="/"><img className="w-[25%] animate-bounce-slow" src="./star-silver.png"></img></Link>
        
            <Link href='./contact'> <img className="top-0 w-[50%]" src="nokia.gif"></img></Link>
      
       
      </footer>
      <div className='absolute left-3'><p>malachite media 2024</p></div>
</div>
    </div>
  );
}

