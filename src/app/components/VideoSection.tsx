import React from 'react';

const VideoSection = () => {

  return (
    <section className="w-full bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-500">Featured Videos</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        <iframe 
          width="100%" 
          height="315"
          src="https://www.youtube.com/embed/Njmn1c9KBdA?si=XYsbGpPkeEVnBB-3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <iframe 
          width="100%" 
          height="315"
          src="https://www.youtube.com/embed/ooK-kdJZQoE?si=8Hlo3rIxMhpwqnM2" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <iframe 
          width="100%" 
          height="315"
          src="https://www.youtube.com/embed/oHUf66_NKGc?si=O6P5DYUwHtIeg42g" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

      </div>

    </section>
  );
}

export default VideoSection;