"use client"

import Image from 'next/image';

interface MemeData {
  id: number;
  url: string;
}

const memeData: MemeData[] = [
  { id: 1, url: "https://i.nostr.build/zRG3.jpg" },
  { id: 2, url: "https://i.nostr.build/KvAv.jpg" },
  { id: 3, url: "https://i.nostr.build/BDE0.png" },
  { id: 4, url: "https://i.nostr.build/Xe0d.jpg" },
  { id: 5, url: "https://i.nostr.build/nb12038.jpg" },
  { id: 6, url: "https://i.nostr.build/nb10837.jpg" },
  { id: 7, url: "https://i.nostr.build/nb11173.jpg" },
  { id: 8, url: "https://i.nostr.build/nb10874.jpg" },
  { id: 9, url: "https://i.nostr.build/nb10398.jpg" },
  // Add more meme data objects as needed
];

interface MemeProps {
  meme: MemeData;
}

const Meme: React.FC<MemeProps> = ({ meme }) => (
  <div className="mb-4 border border-black border-3">
    <Image
      src={meme.url}
      alt={`Meme ${meme.id}`}
      width={400} 
      height={300} 
    />
  </div>
);
const MemePage = () => {

    return (
      <>
        <h1 className="text-center text-green-900 text-clamp-md">
          Enjoy the memes Anon
        </h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  
          {memeData.map(meme => (
            <div key={meme.id}>
              <Image 
                src={meme.url}
                alt={`Meme ${meme.id}`}
                width={400}
                height={300}
                sizes="(max-width: 500px) 100vw, 500px"
                objectFit="cover"
              />
            </div>
          ))}
  
        </div>
      </>
    )
  
  }
  
  export default MemePage
