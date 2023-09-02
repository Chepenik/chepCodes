import Image from 'next/image';
import chepcodes from 'public/chepcode.png';
import VideoSection from './components/VideoSection'; // Import the VideoSection component
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">chepCodes</h1>
      </header>

      <main className="max-w-4xl mx-auto p-4 flex flex-col items-center">
        <div className="mb-6">
          <Image 
            src={chepcodes} 
            alt="Channel Logo"
            width={400} 
            height={400}
            className="rounded-full" 
          />
        </div>

        <h2 className="text-2xl text-pink-400 font-bold mt-4 mb-2">
          Greetings, I&apos;m Chep! Welcome to the World of Code and Memes.
        </h2>

        <p className="text-gray-700 leading-relaxed">
          As a passionate full stack developer and educator, my YouTube channel bridges the worlds of web development and programming with humor and expertise. Join me on an exciting journey where memes meet software engineering, and unlock the secrets to becoming both an epic coder and a meme connoisseur.
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6 hover:bg-blue-600">
          <a href="https://www.youtube.com/@conorchepenik" target='_blank'>Subscribe for Weekly Epic Content</a>
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

