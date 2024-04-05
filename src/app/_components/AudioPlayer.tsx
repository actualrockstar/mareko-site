'use client'
//Components
import DisplayTrack from "./DisplayTrack";
import Control from "./Control";
import ProgressBar from "./ProgressBar";

import { useState, useRef, useEffect } from 'react';
import { render } from "react-dom";

//import myTrack from '../../../public/backseat.mp3';
//import ReactAudioPlayer from "react-audio-player";
import bgImage from '../../../public/ps2-reko.png';

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
        artist: 'Ron Miller and his Orchestra'
    },
    {
        title: 'Noelles Theme',
        src:'/Noelles Theme.mp3',
        artist: 'Ron Miller and his Orchestra'
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

    return (
      <div style={{backgroundImage: `url(${bgImage.src})`}} className="audio-player">
        <div className="inner">
            <DisplayTrack 
                currentTrack={currentTrack} 
                audioRef={audioRef} 
                setDuration={setDuration} 
                progressBarRef={progressBarRef}
                handleNext={handleNext}/>
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
            
        </div>
        <div className="overflow-y-scroll overflow-x-hidden">
            <div className="h-20">
                {tracks.map((song, i) => (
                    <div onClick={selectSong} className="cursor-pointer">
                    <span>{song.artist} - {song.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }
