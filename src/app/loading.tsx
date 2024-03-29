import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className="relative flex justify-center items-center content-center top-20">
        <Image className='relative m-auto' width={500} height={500} src='/dialing.gif' alt='Loading'></Image>
    </div>
  )}