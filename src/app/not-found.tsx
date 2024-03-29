import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='relative text-center top-20'>
        <p>Not found – 404!</p>
        <Image className='relative m-auto' src='/construction.gif' width={500}  height={500} alt={'404 does not exist'}></Image>
    <div>
        <Link href="/"><p className='animate-bounce-slow'>Go back to Home</p></Link>
    </div>
  </div>)
}