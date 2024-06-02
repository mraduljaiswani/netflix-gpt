import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[45%] absolute md:pt-[15%] px-12 text-white bg-gradient-to-l from-slate-800 w-screen aspect-video">
      <h1 className="text-2xl font-bold md:text-5xl ">{title}</h1>
      <p className="hidden md:inline-block py-8 m-2 w-1/4">{overview}</p>
      <div>
        <button className="px-3 py-1 bg-white text-black md:px-10 md:py-3 m-2 text-lg bg-opacity-80 rounded-xl">
          Play
        </button>
        <button className="px-3 py-1 bg-white text-black md:px-10 md:py-3 m-2 text-lg  bg-opacity-80 rounded-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
