import Image from 'next/image';
import { NextResponse } from 'next/server';
import dynamic from 'next/dynamic';

//reference:
//file: require('../../public/kuromi-sparkle.gif')

export default function Icon() {

    const imageArray = [
        {name: 'choso', text: "i hate the rain", file: '/choso.jpg'},
        {name: 'pink planet', text: "the garden", file: '/cute-planet.gif'},
        {name: 'crash', text: "better off", file: '/crash.gif'},
        {name: 'maomao', text: "VDTD", file:'/maomao.gif'},
        {name: 'gojo is bae', text: "mrs. misc", file: '/gojo-gojo-satoru.gif'},
        {name: 'gary come home', text: "tell me every thing", file: '/gary.gif'},
        {name: 'gir', text: "roofie", file: '/gir-dance.gif'},
        {name: 'kuromi', text: "back seat", file: '/kuromi-sparkle.gif'},
        {name: 'gojo and yuji <3', text: "blow it", file: '/gojo-yuji-whisper-transparent-gojo.gif'}
    ]

    
    return (
    <div className='flex flex-wrap pt-[8vh] pl-[4vw] pr-[4vw] z-10 text-clip justify-normal'>
        {imageArray.map((item, i) => (
           <div className='w-[15vw] max-w-[100px] h-auto text-center text-[2vw]' key={i}> 
                <Image 
                    className='aspect-square'
                    src={item.file} 
                    sizes="10vw"
                    style={{
                        width: '100%',
                        height: 'auto',  
                    }}
                    width={100}
                    height={100}
                    alt={item.name}></Image>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
  );
}
