'use client'
//Components
import DisplayTrack from "./DisplayTrack";
import Control from "./Control";
import ProgressBar from "./ProgressBar";

import { useState, useRef } from 'react';

//import myTrack from '../../../public/backseat.mp3';
import ReactAudioPlayer from "react-audio-player";

const tracks = [
    {
        title:'backseat',
        src: '/backseat.mp3',
        artist: 'Mareko'
    }
]


export default function AudioPlayer() {
    const [currentTrack, setCurrentTrack] = useState(tracks[0])
    const audioRef = useRef();
    console.log(audioRef);

    return (
      <div className="audio-player">
        <div className="inner">
            <DisplayTrack currentTrack={currentTrack} audioRef={audioRef}/>
            <Control audioRef={audioRef}/>
            <ProgressBar />
        </div>
        <div>
            TESTS
 
            <ReactAudioPlayer
                src="backseat.mp3"
                
                />
        </div>
      </div>
    );
  }
