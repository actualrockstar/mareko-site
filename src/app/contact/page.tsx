import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/Home.module.css";

export default function Contact() {
  return (
    <div className='text-center'>
      <h1 className='text-6xl'>Contact</h1>
      <Image className='relative m-auto' src='/alien-cat.gif' width={500} height={500} alt={'alien cat'}></Image>
        <a className='text-3xl' href="mailto:marekomgmt@gmail.com">marekomgmt@gmail.com</a>

    <Link href="/"><p className='animate-bounce-slow pt-6'>$$ Back to Home $$</p></Link>
    <div className={styles.footer}>
        <div>  
              <Link href='./contact'> <img className="animate-bounce relative right-1 top-0 w-[50%]" src="nokia.gif"></img> 
              <p>Contact</p></Link>
        </div>
          <div>
              <Link href="/social"><img className="relative float-l w-[50%] animate-bounce-slow pb-6" src="./money.gif"></img>
              <p>Social Media</p></Link>
          </div>  
          <div>
            <Link href='/world'><img className= 'animate-bounce-slow w-[50%]' src="/cute-gun.gif"></img>
            <p>World</p></Link>
          </div>
      </div>
      <div className='absolute left-3'><p>malachite media 2024</p></div>          
    </div>
  );
}
