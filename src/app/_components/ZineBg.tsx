
import Button from '@mui/material/Button';

export default function ZineBg() {
  return (
    <div className='absolute -z-10'>
        <img src="/stars.gif"></img>
        <img className='mt-6' src="/kon.png"></img> 
        <img className='mt-6' src="/ppg.png"></img>              
        <img className='mt-6' src="/gun-girl.png"></img>
        <div className='flex'>
         <img className='w-[40%] mt-6' src="/dp-spin.gif"></img> 
        <img className='w-[40%] mt-6' src="/rof-spin.gif"></img>
        </div>   
        <div className='block sm:hidden'>
        <img className='mt-6' src="/glitch-dance.gif"></img>
        <img className='mt-6' src="/tv-room.jpg"></img>
        <img className='mt-6' src="/riku.gif"></img>        
                        
            </div>              
    </div>
  );
}