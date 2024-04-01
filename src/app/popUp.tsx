import React, {useEffect} from "react";
import { Button } from "@mui/material";

interface PopUpProps {
  setState: boolean;
  triggerState: (state: boolean) => void;
}

export default function PopUp({setState, triggerState}: PopUpProps) {
    
    return (
    <div className="bg-sky-400 text-center border-double border-4 w-[50vw] absolute inset-x-0 border-slate-300">
        <div className="absolute top-0 right-0"><Button variant="outlined" onClick={() => triggerState(!setState)}>X</Button></div>
        <div className="pt-9">
          <p>Hey cutie! Welcome to Mareko's cyber crib! Kick back, click around, and vibe with the stuff. 
          🌟 This is a Gojo stan account so Gojo slander will not be tolerated... ok see ya &#60;3
            </p>
            <p>🚀🖱️🎶</p> 
            <img className="relative w-full" src="fishy-cropped.gif"></img>
        </div>
    </div>
  );
}