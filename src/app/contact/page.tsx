import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='text-center'>
      <h1>Contact</h1>
      <Image className='relative m-auto' src='/alien-cat.gif' width={500} height={500} alt={'alien cat'}></Image>
        <p>marekomgmt@gmail.com</p>
    <Link href="/"><p className='animate-bounce-slow'>$$ Back to Home $$</p></Link>
    </div>
  );
}
