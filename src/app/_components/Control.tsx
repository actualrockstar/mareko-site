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
      <div className="grid grid-cols-1 grid-rows-[50px_200px_10px] justify-center bg-neutral-200 border-2 border-black">
        <div className="flex justify-center">
            
            <Button onClick={handlePrevious}><IoPlaySkipBackSharp /></Button>
            <Button onClick={togglePlayPause}>{isPlaying ? <IoPauseSharp />:<IoPlaySharp />}</Button>
            <Button onClick={handleNext}><IoPlaySkipForwardSharp /></Button>
            
            <Button onClick={() => setMuteVolume((prev) => !prev)}>
                {muteVolume || volume < 5 ?(
                    <IoMdVolumeOff />
                    ) : volume < 40 ? (
                      <IoMdVolumeLow />
                    ) : (
                      <IoMdVolumeHigh />
                    )}
            </Button></div>
        <div className="row-start-2">
          volume
          <div className="volume">
            <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                style={{
                    background: `linear-gradient(to right, #33EFFF ${volume}%, #ccc ${volume}%)`,
                }}
                />
                <input
                type="range"
                min={0}
                max={100}
                value={volume}
                style={{
                    background: `linear-gradient(to right, #33EFFF ${volume}%, #ccc ${volume}%)`,
                }}
                />
                
                
            </div>
            
        </div>
      </div>
    );
  }
