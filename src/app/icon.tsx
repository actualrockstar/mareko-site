import Link from 'next/link'
import { ImageList } from '@mui/material';
import Image from 'next/image';
import image1 from '../../public/choso.jpg';


export default function Icon() {
  const hello = () => {
    console.log(imageArray);

    };

    const imageArray = [
        {name: 'choso', text: "i hate the rain", file: image1},
        {name: 'pink planet', text: "the garden", file: require('../../public/cute-planet.gif')},
        {name: 'crash', text: "better off", file: require('../../public/crash.gif')},
        {name: 'maomao', text: "VDTD", file: require('../../public/maomao.gif')},
        {name: 'gojo is bae', text: "mrs. misc", file: require('../../public/gojo-gojo-satoru.gif')},
        {name: 'gary come home', text: "tell me every thing", file: require('../../public/gary.gif')},
        {name: 'gir', text: "roofie", file: require('../../public/gir-dance.gif')},
        {name: 'kuromi', text: "back seat", file: require('../../public/kuromi-sparkle.gif')},
        {name: 'gojo and yuji <3', text: "blow it", file: require('../../public/gojo-yuji-whisper-transparent-gojo.gif')}

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
                    alt={item.name}></Image>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
  );
}
