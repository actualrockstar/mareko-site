import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/Home.module.css";

export default function Shop() {
  return (
    <div className={styles.background}>
        <Image  className='relative -z-10' src='/arcade.jpg' fill={true} alt={'background'}></Image>
   
   
    
    <div className='text-center p-10'>
    
      <h1>Welcome to Mareko's Shop</h1>
      <Image className='relative m-auto' src='/sponge-dance.gif' width={500} height={500} alt={'alien cat'}></Image>
        <p>Nothing to see here 👀... We're currently restocking so our shelves are pretty empty right now 😭 
            Come back soon and we'll have lots of cute goodies for you to check out!
            ✨🙈🍜✨</p>
    <div className='animate-bounce-slow pt-4'><Link href="/">$$ Back to Home $$</Link></div>
    </div>
    </div>
  );
}
