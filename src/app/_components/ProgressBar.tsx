import './audio-styles.css';

interface ProgressBarProps {
    progressBarRef: any;
    audioRef: any;
    timeProgress: any;
    duration: any;
}

export default function ProgressBar({progressBarRef, audioRef, timeProgress, duration}: ProgressBarProps) {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
        //console.log(progressBarRef.current.value);
    };

    //convert time from seconds to min:sec
    const formatTime = (time: number) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };

    return (
        <div className='progress flex justify-center p-2'>
        <span className="time current">{formatTime(timeProgress)}</span>
        <input 
            type="range" 
            ref={progressBarRef}
            defaultValue="0"
            onChange={handleProgressChange}
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
    );
  }
