import VideoSection from './components/VideoSection'; 
import Footer from './components/Footer';
import Header from './components/Header';
import HomeContent from './components/HomeContent';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto p-4 flex flex-col items-center">
      <HomeContent />
      <br />
      <br />
      <br />
      <VideoSection /> 
      </main>
      <Footer />
    </div>
  );
}

