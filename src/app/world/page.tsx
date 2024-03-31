import Link from "next/link";
import AudioPlayer from "../_components/AudioPlayer";

export default function Page3() {
  return (
    <div>
        <h1>Work In Progress</h1>
        <img src='/construction.gif'></img>

        <AudioPlayer></AudioPlayer>

        <Link href="/"><p className='animate-bounce-slow'>$$ Back to Home $$</p></Link>
    </div>
  );
}