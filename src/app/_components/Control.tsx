import { Button } from "@mui/material";
import { useState, useEffect, useRef, useCallback } from "react";
import {
    IoMdVolumeHigh,
    IoMdVolumeOff,
    IoMdVolumeLow,
  } from 'react-icons/io';
import {
    IoPlaySharp,
    IoPauseSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp
  } from 'react-icons/io5';

interface ControlProps {
    audioRef: any;
    progressBarRef: any;
    duration: number;
    setTimeProgress: any;
    setCurrentTrack: any;
    tracks: any;
    handleNext: any;
}

export default function Control({audioRef, progressBarRef, duration, setTimeProgress, setCurrentTrack, tracks, handleNext}: ControlProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    }

    //handling animation during playback
    const playAnimationRef = useRef(0);
    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
        );

        playAnimationRef.current= requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
          playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
          audioRef.current.pause();
          //cancelAnimationFrame(playAnimationRef.current);
        }
      }, [isPlaying, audioRef, repeat]);

    //navigating through track list
    const [trackIndex, setTrackIndex] = useState(0);
    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = tracks.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(tracks[lastTrackIndex]);
          } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
          }
    };
    /*
    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
          } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
          }
    };
    */

    //volume
    const [volume, setVolume] = useState(60);
    useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volume / 100;
          console.log(audioRef);
        }
      }, [volume, audioRef]);
      const [muteVolume, setMuteVolume] = useState(false);
      useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volume / 100;
          audioRef.current.muted = muteVolume;
        }
      }, [volume, audioRef, muteVolume]);

      // 10 Band EQ


      return (
      <div className="grid grid-cols-1 grid-rows-[70px_145px_10px] sm:grid-rows-[60px_130px_10px] lg:grid-rows-[70px_160px_10px] justify-center">
        <div className="flex justify-center">
            
            <Button onClick={handlePrevious}><IoPlaySkipBackSharp color="white"/></Button>
            <Button onClick={togglePlayPause}>{isPlaying ? <IoPauseSharp color="white"/>:<IoPlaySharp color="white"/>}</Button>
            <Button onClick={handleNext}><IoPlaySkipForwardSharp color="white"/></Button>
            
            <Button onClick={() => setMuteVolume((prev) => !prev)}>
                {muteVolume || volume < 5 ?(
                    <IoMdVolumeOff color="white"/>
                    ) : volume < 40 ? (
                      <IoMdVolumeLow color="white"/>
                    ) : (
                      <IoMdVolumeHigh color="white"/>
                    )}
            </Button></div>
        <div className="row-start-2 pt-5 sm:pt-5 lg:pt-5">
          Volume
          <div className="volume top-1/3 sm:top-14 lg:top-12">
            <input
                className="w-[90px] sm:w-[100px] lg:w-[90px] -left-[5%] -top-2"
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                style={{
                    background: `linear-gradient(to right, #da86be ${volume}%, #7f7b5e ${volume}%)`,
                }}
                />
                <input
                className="w-[90px] sm:w-[100px] lg:w-[90px] -top-2"
                type="range"
                min={0}
                max={100}
                value={volume}
                style={{
                    background: `linear-gradient(to right, #da86be ${volume}%, #7f7b5e ${volume}%)`,
                }}
                />
                
                
            </div>
            
        </div>
      </div>
    );
  }
