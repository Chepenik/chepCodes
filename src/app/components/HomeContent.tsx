import Image from 'next/image';
import boating from 'public/boating.jpeg';
import chepcodes from 'public/chepcodesdali.jpg'

const HomeContent = () => {

  return (
    <>
      <h2 className="text-2xl text-blue-900 font-bold m-4">
        Greetings, I&apos;m Chep! I help people learn to Code by using Memes.  
      </h2>

      <div className="flex justify-center">
        <Image src={chepcodes} alt="nextImage" className="rounded" width={400} height={300} />
      </div>

      <p className="text-gray-700 leading-relaxed m-4 ">
        Join me on my fun-filled journey to become a better developer! My YouTube channel combines programming tutorials with memes and humor so learning feels less like work and more like play. So if you&apos;re looking to level up your dev skills or finally make the leap into web development, subscribe now. You&apos;ll be a 10x developer before you know it, and we&apos;ll have lots of laughs along the way!
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6 hover:bg-blue-900">
        <a href="https://www.youtube.com/@chepCodes" target='_blank'>Subscribe for Weekly Content</a>
      </button>
    </>
  );
}

export default HomeContent;