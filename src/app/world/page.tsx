'use client'

import Link from "next/link";
import AudioPlayer from "../_components/AudioPlayer";
import { Button } from "@mui/material";
import { useEffect } from "react";
//import WidgetBot from '@widgetbot/react-embed';
import styles from "../../styles/Home.module.css";
import ZineBg from "../_components/ZineBg";
import dynamic from "next/dynamic";
// Dynamically import WidgetBot with no SSR
const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), { ssr: false });



export default function Page3() {

  return (
    <>     
    <div>
        <ZineBg></ZineBg>
        <h1 className="text-6xl drop-shadow-lg">Malachite Musings</h1>
        <div className="mt-7"> 
        <p className="bg-green-500/50">hey there! consider this to be my digital zine. if you've ever come to a Mareko show
          you have more than likely gotten a copy of the zine before. I like to write song lyrics
          and put random musings in there so you can walk out with a little bit of art or something lol
          this page is like the digital version of that. you'll find news, cool links, downloadables, inspiration,
          and really whatever i got that doesn't have another place to be here. Enjoy!
        </p>
          <Link href="/"><p className='animate-bounce-slow text-center pb-3 mt-6'>$$ Back to Home $$</p></Link>
          
          <div className="flex justify-end mr-4">
            <p className="text-4xl bg-sky-500/50 h-[50%]">join us on discord!</p>
          <WidgetBot height="500" width="500" server="1207438507564474459" channel="1207438509590188092"/>          
          </div>
        </div>
        <p className="mt-6 pt-3 drop-shadow-lg text-center bg-sky-500/50">did you know i programmed this whole website myself? i spent way too much
            time on this audio player here lol mostly as an experiment for another project
            that idk if i'm ever going to actually finish but ain't this pretty cool?
          </p>
        <div className='flex  p-3'>
          
        <AudioPlayer></AudioPlayer>
        </div>
        <p className="mt-6 mb-2 drop-shadow-lg text-center bg-sky-500/50">that time i was interviewed on Marooned Radio</p>
        <div className="flex justify-center">
          
        <iframe width="400" height="315" src="https://www.youtube.com/embed/l2ZGvPBaRZU?si=Q-2KyVAyl_kkE3aF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          
        </div>

        <p className="mt-6 mb-2 drop-shadow-lg text-center bg-sky-500/50">im terrible at making playlists. i prefer to just spam a single album for weeks on end, 
        but i wanted to include a playlist here so here's one i made for someone one time. </p>
        <div className="flex justify-center">
         <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/08GrV0mkHBaiUmY4hOpoWm?utm_source=generator" width="80%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>         
        </div>
        <div></div>

        <div className={styles.footer}>
        <div>  
              <Link href='./contact'> <img className="animate-bounce relative right-1 top-0 w-[50%]" src="nokia.gif"></img> 
              <p>Contact</p></Link>
        </div>
          <div>
              <Link href="/social"><img className="relative float-l w-[50%] animate-bounce-slow pb-6" src="./money.gif"></img>
              <p>Social Media</p></Link>
          </div>  
          <div>
            <Link href='/'><img className= 'animate-bounce-slow w-[50%]' src="/cute-gun.gif"></img>
            <p>Home</p></Link>
          </div>
      </div>
      <div className='absolute left-3'><p>malachite media 2024</p></div>          
    </div>
    </>
  );
}     