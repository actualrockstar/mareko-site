interface DisplayTrackProps {
    currentTrack: any;
    audioRef: any;
}

export default function DisplayTrack({currentTrack, audioRef}: DisplayTrackProps) {
    return (
      <div>
        <audio src={currentTrack.src} ref={audioRef}/>
        <div className="audio info">
            <h1>Now Playing</h1>
            {currentTrack.title} {currentTrack.artist}
        </div>
      </div>
    );
  }
