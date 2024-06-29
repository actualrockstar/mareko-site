import React, {useEffect} from "react";
import { Button } from "@mui/material";

interface PopUpProps {
  setState: boolean;
  triggerState: (state: boolean) => void;
}

export default function PopUp({setState, triggerState}: PopUpProps) {
    
    return (
    <div className="bg-sky-400 text-center border-double border-4 w-[50vw] absolute inset-x-0 border-slate-300 z-4">
        <div className="absolute top-0 right-0"><Button variant="outlined" onClick={() => triggerState(!setState)}>X</Button></div>
        <div className="pt-9">
          <p>Hey cutie! Welcome to Mareko's cyber crib! Quick tutorial: so the floating squares are links so quick them
            to explore the music, shop, videos, etc. The floating icons take you to other pages like contact info
            and social media links or whatever. Just click around, have fun, explore and be freeeeeeee!
          🌟 This is a Gojo stan account so Gojo slander will not be tolerated... ok see ya &#60;3</p>
            <p>Oh yeah just click that big X in the corner to just close this window, ok? cool.</p>
            <p>🚀🖱️🎶</p> 
            <img className="relative w-full" src="fishy-cropped.gif"></img>
        </div>
    </div>
  );
}