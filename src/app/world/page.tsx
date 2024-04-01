import Link from "next/link";
import AudioPlayer from "../_components/AudioPlayer";
import { Button } from "@mui/material";

export default function Page3() {
  return (
    <div>
        <h1>This page is a work in progress, you honestly shouldn't even be here rn.</h1>
        <div className="pb-10"> 
        <p>imma have to ask you to leave so just click this button real quick</p>
        <Button><Link href="/"><p className='animate-bounce-slow'>$$ Back to Home $$</p></Link>
        </Button>
        </div>
        
        
        <AudioPlayer></AudioPlayer>

        </div>
  );
}