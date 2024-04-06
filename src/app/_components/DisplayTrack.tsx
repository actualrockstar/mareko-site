interface DisplayTrackProps {
    currentTrack: any;
    audioRef: any;
    setDuration: any;
    progressBarRef: any;
    handleNext: any;
}

export default function DisplayTrack({currentTrack, audioRef, setDuration, progressBarRef, handleNext}: DisplayTrackProps) {
    const onLoadedMetadata = () => {
        //console.log(audioRef.current.duration);
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };
    console.log(audioRef);
    return (
      <div className="flex justify-center">
        <audio 
            src={currentTrack.src} 
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={handleNext}/>
        <div className="marquee">
            <div> <span className="">{currentTrack.title} - {currentTrack.artist}</span> <span className="">{currentTrack.title} - {currentTrack.artist}</span></div> 
        </div>
      </div>
    );
  }
