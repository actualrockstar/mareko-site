import { Button } from "@mui/material";
import { useState, useEffect } from "react";

interface ControlProps {
    audioRef: any;
}

export default function Control({audioRef}: ControlProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    }

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [isPlaying, audioRef]);

    return (
      <div>
        <div>
            <Button>BACK</Button>
            <Button onClick={togglePlayPause}>{isPlaying ? 'PAUSE':'PLAY'}</Button>
            <Button>NEXT</Button>
        </div>
      </div>
    );
  }
