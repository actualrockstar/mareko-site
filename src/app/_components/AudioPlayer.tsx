'use client'
//Components
import DisplayTrack from "./DisplayTrack";
import Control from "./Control";
import ProgressBar from "./ProgressBar";

import { useState, useRef, useEffect } from 'react';
import { render } from "react-dom";

//import myTrack from '../../../public/backseat.mp3';
//import ReactAudioPlayer from "react-audio-player";
import bgImage from '../../../public/custom-player.png';
import { BiSolidAdjust } from "react-icons/bi";

const tracks = [
    {
        title:'backseat',
        src: '/backseat.mp3',
        artist: 'Mareko'
    },
    {
        title: 'Emmanuelle',
        src:'/Emmanuelle.mp3',
        artist: 'Ron Miller and his Orchestra'
    },
    {
        title: 'La Decadanse',
        src:'/La Decadanse.mp3',
        artist: 'Ron Miller and his whores'
    },
    {
        title: 'Noelles Theme',
        src:'/Noelles Theme.mp3',
        artist: 'Ron Miller and his Orchestra'
    },
    {
        title: 'Same song but',
        src:'/Noelles Theme.mp3',
        artist: 'Ron Miller is a slut'
    },
    {
        title: 'For testing purposes',
        src:'/Noelles Theme.mp3',
        artist: 'Ron schmiller'
    },
]


export default function AudioPlayer() {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);


    const audioRef = useRef();
    const progressBarRef = useRef();

    useEffect(() => {
        const element = audioRef.current;
        console.log(element);
    })

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
          } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
          }
    };

    const selectSong = () => {
       console.log('song-selected');
    }

    const bgStyle = {
        backgroundImage: `url(${bgImage.src})`,
        backgroundColor: 'lightblue',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
    }

    return (
      <div 
        style={bgStyle} 
        className="audio-player relative w-[390px] sm:w-[500px] h-[550px] text-sm sm:text-base">
        <div className="inner absolute w-[100%] p-5">
            <div className="pt-[12%] sm:pt-20 lg:pt-12">
            <DisplayTrack 
                currentTrack={currentTrack} 
                audioRef={audioRef} 
                setDuration={setDuration} 
                progressBarRef={progressBarRef}
                handleNext={handleNext}/></div>
            <div>
            <ProgressBar 
                progressBarRef={progressBarRef} 
                audioRef={audioRef} 
                timeProgress={timeProgress} 
                duration={duration}/>
            </div>
            <Control 
                audioRef={audioRef} 
                progressBarRef={progressBarRef} 
                duration={duration} 
                setTimeProgress={setTimeProgress}
                setCurrentTrack={setCurrentTrack}
                tracks={tracks}
                handleNext={handleNext}
                />
            <div className="absolute mt-[1vh] ml-1 sm:mt-12 lg:mt-1 overflow-y-scroll overflow-x-hidden w-[90%] h-1/4 sm:h-1/3 lg:h-[30%]">
            <div className="sm:h-35">
                {tracks.map((song, i) => (
                    <div onClick={selectSong} className="cursor-pointer hover:bg-sky-700">
                    <span className="overflow-hidden truncate">{song.artist} - {song.title}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
      </div>
    );
  }
