import './audio-styles.css';

export default function ProgressBar() {
    return (
        <div>
        <span className="time current">00:00</span>
        <input type="range" />
        <span className="time">03:34</span>
      </div>
    );
  }
