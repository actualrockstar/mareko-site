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
        id: 1,
        title:'backseat',
        src: '/backseat.mp3',
        artist: 'Mareko'
    },
    {
        id:2,        
        title: 'Better Off',
        src:'/Better Off Mixdown.mp3',
        artist: 'Mareko'
    },
    {
        id: 3,        
        title: 'I Hate The Rain',
        src:'/I Hate The Rain Mixdown.mp3',
        artist: 'Mareko'
    },
    {
        id: 4,        
        title: 'Blow It',
        src:'/Blow It Mixdown.mp3',
        artist: 'Mareko'
    },
    {
        id: 5,        
        title: 'I Want To Swallow You Whole',
        src:'/I Want To Swallow You Whole Mixdown.mp3',
        artist: 'Mareko'
    }
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
        //console.log(element);
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

    const selectSong = (i: number) => {
       //console.log('song-selected'+ i);
       setTrackIndex(i);
       setCurrentTrack(tracks[i]);
    }

    const bgStyle = {
        backgroundImage: ``,
        backgroundColor: 'rgba(51, 170, 51, .6)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        
    }

    return (
      <div 
        style={bgStyle} 
        className="audio-player relative ml-5 w-[390px] sm:w-[500px] h-[400px] lg:h-[500px] text-sm sm:text-base">
        <div className="inner absolute w-[100%] p-5">
            <div className="pt-12">
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
            <div className="absolute mt-6 ml-1 sm:mt-12 lg:mt-1 overflow-y-scroll overflow-x-hidden w-[90%] h-1/3 sm:h-1/3 lg:h-[30%]">
            <div className="sm:h-35" >
                {tracks.map((song, i) => (
                    <div key={song.id} onClick={() => selectSong(i)} className="cursor-pointer hover:bg-sky-700">
                    <span className="overflow-hidden truncate">{song.artist} - {song.title}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
      </div>
    );
  }
