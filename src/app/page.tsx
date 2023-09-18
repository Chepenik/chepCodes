import Image from 'next/image';
import boating from 'public/boating.jpeg'
import VideoSection from './components/VideoSection'; 
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-4xl mx-auto p-4 flex flex-col items-center">

        <h2 className="text-2xl text-blue-900 font-bold mt-4 mb-2">
          Greetings, I&apos;m Chep! I help people learn to Code by using Memes.
        </h2>

        <div className="flex justify-center">
          <Image 
            src={boating}
            alt="nextImage"
            className="rounded"
            width={100}
            height={100} 
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          As a passionate full stack developer and educator, my YouTube channel bridges the worlds of web development and programming with humor and expertise. Join me on an exciting journey where memes meet software engineering, and unlock the secrets to becoming both an epic coder and a meme connoisseur.
        </p>
        

        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6 hover:bg-blue-600">
          <a href="https://www.youtube.com/@chepCodes" target='_blank'>Subscribe for Weekly Content</a>
        </button>

        <br />
        <br />
        <br />

        <VideoSection /> {/* Use the VideoSection component here */}
      </main>

      <Footer />
    </div>
  );
}

